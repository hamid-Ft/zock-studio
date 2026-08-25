import { NextResponse } from "next/server";

import { intakeCopy } from "@/content/intake-content";

type AttributionPayload = {
	landingPath?: unknown;
	referrer?: unknown;
	utmSource?: unknown;
	utmMedium?: unknown;
	utmCampaign?: unknown;
	utmContent?: unknown;
	utmTerm?: unknown;
};

type LeadPayload = {
	version?: unknown;
	locale?: unknown;
	requestedService?: unknown;
	company?: unknown;
	role?: unknown;
	website?: unknown;
	industry?: unknown;
	system?: unknown;
	problem?: unknown;
	outcome?: unknown;
	stage?: unknown;
	urgency?: unknown;
	stack?: unknown;
	deadline?: unknown;
	budget?: unknown;
	preferredContact?: unknown;
	name?: unknown;
	email?: unknown;
	consent?: unknown;
	startedAt?: unknown;
	honeypot?: unknown;
	turnstileToken?: unknown;
	attribution?: AttributionPayload;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const minimumCompletionTime = 2500;

const optionSets = {
	industry: new Set([
		...intakeCopy.en.options.industries,
		...intakeCopy.fa.options.industries,
	]),
	system: new Set([
		...intakeCopy.en.options.systems,
		...intakeCopy.fa.options.systems,
	]),
	stage: new Set([
		...intakeCopy.en.options.stages,
		...intakeCopy.fa.options.stages,
	]),
	urgency: new Set([
		...intakeCopy.en.options.urgencies,
		...intakeCopy.fa.options.urgencies,
	]),
	budget: new Set([
		...intakeCopy.en.options.budgets,
		...intakeCopy.fa.options.budgets,
	]),
	preferredContact: new Set([
		...intakeCopy.en.options.contacts,
		...intakeCopy.fa.options.contacts,
	]),
};

function json(code: string, status: number, extra?: Record<string, string>) {
	return NextResponse.json(
		{ ok: status < 400, code, ...extra },
		{ status, headers: { "Cache-Control": "no-store" } },
	);
}

function cleanRequired(value: unknown, max: number, min = 1) {
	if (typeof value !== "string") return null;
	const clean = value.trim();
	return clean.length >= min && clean.length <= max ? clean : null;
}

function cleanOptional(value: unknown, max: number) {
	if (value === undefined || value === null || value === "") return "";
	return cleanRequired(value, max);
}

function cleanOption(value: unknown, allowed: Set<string>) {
	return typeof value === "string" && allowed.has(value) ? value : null;
}

function cleanUrl(value: unknown) {
	const clean = cleanOptional(value, 300);
	if (clean === null || clean === "") return clean;
	try {
		const url = new URL(clean);
		return url.protocol === "http:" || url.protocol === "https:" ? clean : null;
	} catch {
		return null;
	}
}

function cleanAttribution(payload: AttributionPayload | undefined) {
	return {
		landingPath: cleanOptional(payload?.landingPath, 500) ?? "",
		referrer: cleanOptional(payload?.referrer, 500) ?? "",
		utmSource: cleanOptional(payload?.utmSource, 120) ?? "",
		utmMedium: cleanOptional(payload?.utmMedium, 120) ?? "",
		utmCampaign: cleanOptional(payload?.utmCampaign, 120) ?? "",
		utmContent: cleanOptional(payload?.utmContent, 120) ?? "",
		utmTerm: cleanOptional(payload?.utmTerm, 120) ?? "",
	};
}

async function verifyTurnstile(token: string) {
	const secret =
		process.env.TURNSTILE_SECRET_KEY ||
		(process.env.NODE_ENV === "development"
			? "1x0000000000000000000000000000000AA"
			: "");
	if (!secret) return { configured: false, success: false };

	try {
		const body = new URLSearchParams({ secret, response: token });
		const response = await fetch(
			"https://challenges.cloudflare.com/turnstile/v0/siteverify",
			{
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body,
				signal: AbortSignal.timeout(6000),
			},
		);
		if (!response.ok) return { configured: true, success: false };
		const result = (await response.json()) as {
			success?: boolean;
			action?: string;
		};
		return {
			configured: true,
			success:
				result.success === true &&
				(!result.action || result.action === "project-intake"),
		};
	} catch {
		return { configured: true, success: false };
	}
}

export async function POST(request: Request) {
	let payload: LeadPayload;
	try {
		payload = (await request.json()) as LeadPayload;
	} catch {
		return json("INVALID_JSON", 400);
	}

	if (typeof payload.honeypot === "string" && payload.honeypot.trim()) {
		return json("ACCEPTED", 201);
	}
	if (
		typeof payload.startedAt !== "number" ||
		!Number.isFinite(payload.startedAt) ||
		Date.now() - payload.startedAt < minimumCompletionTime ||
		payload.startedAt > Date.now()
	) {
		return json("INVALID_TIMING", 400);
	}

	const locale =
		payload.locale === "en" || payload.locale === "fa" ? payload.locale : null;
	const lead = {
		company: cleanRequired(payload.company, 160),
		role: cleanRequired(payload.role, 160),
		website: cleanUrl(payload.website),
		industry: cleanOption(payload.industry, optionSets.industry),
		system: cleanOption(payload.system, optionSets.system),
		problem: cleanRequired(payload.problem, 1800, 20),
		outcome: cleanRequired(payload.outcome, 1000, 10),
		stage: cleanOption(payload.stage, optionSets.stage),
		urgency: cleanOption(payload.urgency, optionSets.urgency),
		stack: cleanOptional(payload.stack, 1000),
		deadline: cleanOptional(payload.deadline, 160),
		budget: cleanOption(payload.budget, optionSets.budget),
		preferredContact: cleanOption(
			payload.preferredContact,
			optionSets.preferredContact,
		),
		name: cleanRequired(payload.name, 160),
		email: cleanRequired(payload.email, 254),
	};

	if (
		payload.version !== "2026-08-03" ||
		!locale ||
		Object.values(lead).some((value) => value === null) ||
		!lead.email ||
		!emailPattern.test(lead.email) ||
		payload.consent !== true
	) {
		return json("INVALID_LEAD", 400);
	}

	const turnstileToken = cleanRequired(payload.turnstileToken, 2400);
	if (!turnstileToken) return json("VERIFICATION_FAILED", 400);
	const verification = await verifyTurnstile(turnstileToken);
	if (!verification.configured) return json("VERIFICATION_NOT_CONFIGURED", 503);
	if (!verification.success) return json("VERIFICATION_FAILED", 400);

	const ownerUrl = process.env.MOONLANCER_LEADS_WEBHOOK_URL;
	if (!ownerUrl) return json("OWNER_NOT_CONFIGURED", 503);

	const submissionId = crypto.randomUUID();
	const receivedAt = new Date().toISOString();
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
		"X-Moonlancer-Submission-Id": submissionId,
	};
	if (process.env.MOONLANCER_LEADS_WEBHOOK_TOKEN) {
		headers.Authorization = `Bearer ${process.env.MOONLANCER_LEADS_WEBHOOK_TOKEN}`;
	}

	try {
		const response = await fetch(ownerUrl, {
			method: "POST",
			headers,
			body: JSON.stringify({
				schemaVersion: "2026-08-03",
				source: "moonlancer-public-intake",
				submissionId,
				receivedAt,
				locale,
				requestedService: cleanOptional(payload.requestedService, 80) ?? "",
				company: {
					name: lead.company,
					website: lead.website,
					industry: lead.industry,
				},
				contact: {
					name: lead.name,
					email: lead.email,
					role: lead.role,
					preferredMethod: lead.preferredContact,
				},
				qualification: {
					system: lead.system,
					problem: lead.problem,
					outcome: lead.outcome,
					stage: lead.stage,
					urgency: lead.urgency,
					stack: lead.stack,
					deadline: lead.deadline,
					budget: lead.budget,
				},
				consent: {
					accepted: true,
					acceptedAt: receivedAt,
					noticeVersion: "2026-08-03",
				},
				attribution: cleanAttribution(payload.attribution),
			}),
			signal: AbortSignal.timeout(8000),
		});

		if (!response.ok) return json("OWNER_REJECTED", 502);
		return json("CREATED", 201, { submissionId });
	} catch {
		return json("OWNER_UNREACHABLE", 502);
	}
}
