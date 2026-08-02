import { NextResponse } from "next/server";

type LeadPayload = {
	locale?: unknown;
	systemType?: unknown;
	stage?: unknown;
	brief?: unknown;
	name?: unknown;
	email?: unknown;
	consent?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isShortText(value: unknown, max: number): value is string {
	return (
		typeof value === "string" && value.trim().length > 0 && value.length <= max
	);
}

export async function POST(request: Request) {
	let payload: LeadPayload;

	try {
		payload = (await request.json()) as LeadPayload;
	} catch {
		return NextResponse.json(
			{ ok: false, code: "INVALID_JSON" },
			{ status: 400 },
		);
	}

	if (
		!isShortText(payload.systemType, 120) ||
		!isShortText(payload.stage, 120) ||
		!isShortText(payload.brief, 1200) ||
		!isShortText(payload.name, 120) ||
		!isShortText(payload.email, 200) ||
		!emailPattern.test(payload.email) ||
		payload.consent !== true ||
		(payload.locale !== "en" && payload.locale !== "fa")
	) {
		return NextResponse.json(
			{ ok: false, code: "INVALID_LEAD" },
			{ status: 400 },
		);
	}

	const ownerUrl = process.env.MOONLANCER_LEADS_WEBHOOK_URL;
	if (!ownerUrl) {
		return NextResponse.json(
			{ ok: false, code: "OWNER_NOT_CONFIGURED" },
			{ status: 503 },
		);
	}

	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};
	if (process.env.MOONLANCER_LEADS_WEBHOOK_TOKEN) {
		headers.Authorization = `Bearer ${process.env.MOONLANCER_LEADS_WEBHOOK_TOKEN}`;
	}

	try {
		const response = await fetch(ownerUrl, {
			method: "POST",
			headers,
			body: JSON.stringify({
				source: "moon-studio-public-intake",
				receivedAt: new Date().toISOString(),
				locale: payload.locale,
				systemType: payload.systemType.trim(),
				stage: payload.stage.trim(),
				brief: payload.brief.trim(),
				contact: { name: payload.name.trim(), email: payload.email.trim() },
				consent: true,
			}),
			signal: AbortSignal.timeout(8000),
		});

		if (!response.ok) {
			return NextResponse.json(
				{ ok: false, code: "OWNER_REJECTED" },
				{ status: 502 },
			);
		}

		return NextResponse.json({ ok: true }, { status: 201 });
	} catch {
		return NextResponse.json(
			{ ok: false, code: "OWNER_UNREACHABLE" },
			{ status: 502 },
		);
	}
}
