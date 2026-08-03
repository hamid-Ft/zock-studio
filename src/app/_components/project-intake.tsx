"use client";

import { ArrowLeft, ArrowRight, Check, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Turnstile } from "@/components/forms/turnstile";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { getIntakeCopy } from "@/content/intake-content";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

type Draft = {
	step: number;
	company: string;
	role: string;
	website: string;
	industry: string;
	system: string;
	problem: string;
	outcome: string;
	stage: string;
	urgency: string;
	stack: string;
	deadline: string;
	budget: string;
	preferredContact: string;
	name: string;
	email: string;
	consent: boolean;
	startedAt: number;
};

type Attribution = {
	landingPath: string;
	referrer: string;
	utmSource: string;
	utmMedium: string;
	utmCampaign: string;
	utmContent: string;
	utmTerm: string;
};

type DeliveryStatus = "idle" | "pending" | "success" | "error" | "verification";
type DraftField = Exclude<keyof Draft, "step" | "startedAt">;
type Errors = Partial<Record<DraftField | "turnstile", string>>;

const draftKey = "moonlancer-intake-v2";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const productionSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const turnstileSiteKey =
	productionSiteKey ||
	(process.env.NODE_ENV === "development" ? "1x00000000000000000000AA" : "");

function newDraft(): Draft {
	return {
		step: 0,
		company: "",
		role: "",
		website: "",
		industry: "",
		system: "",
		problem: "",
		outcome: "",
		stage: "",
		urgency: "",
		stack: "",
		deadline: "",
		budget: "",
		preferredContact: "",
		name: "",
		email: "",
		consent: false,
		startedAt: Date.now(),
	};
}

function SelectField({
	id,
	label,
	value,
	options,
	placeholder,
	error,
	onChange,
}: {
	id: DraftField;
	label: string;
	value: string;
	options: readonly string[];
	placeholder: string;
	error?: string;
	onChange: (value: string) => void;
}) {
	return (
		<Field>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>
			<NativeSelect
				id={id}
				required
				value={value}
				onChange={(event) => onChange(event.target.value)}
				aria-invalid={Boolean(error)}
				aria-describedby={error ? `${id}-error` : undefined}
			>
				<option value="">{placeholder}</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</NativeSelect>
			<FieldError id={`${id}-error`}>{error}</FieldError>
		</Field>
	);
}

export function ProjectIntake({
	locale,
	requestedService = "",
}: {
	locale: Locale;
	requestedService?: string;
}) {
	const copy = getIntakeCopy(locale);
	const [draft, setDraft] = useState<Draft>(newDraft);
	const [hydrated, setHydrated] = useState(false);
	const [errors, setErrors] = useState<Errors>({});
	const [deliveryStatus, setDeliveryStatus] = useState<DeliveryStatus>("idle");
	const [turnstileToken, setTurnstileToken] = useState("");
	const [honeypot, setHoneypot] = useState("");
	const [attribution, setAttribution] = useState<Attribution>({
		landingPath: "",
		referrer: "",
		utmSource: "",
		utmMedium: "",
		utmCampaign: "",
		utmContent: "",
		utmTerm: "",
	});
	const headingRef = useRef<HTMLHeadingElement>(null);
	const summaryRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		try {
			const stored = window.localStorage.getItem(draftKey);
			if (stored) {
				const parsed = JSON.parse(stored) as Partial<Draft>;
				setDraft({
					...newDraft(),
					...parsed,
					step: Math.min(3, Math.max(0, Number(parsed.step) || 0)),
				});
			}
		} catch {
			// Storage can be unavailable; the in-memory form remains usable.
		} finally {
			const params = new URLSearchParams(window.location.search);
			setAttribution({
				landingPath:
					`${window.location.pathname}${window.location.search}`.slice(0, 500),
				referrer: document.referrer.slice(0, 500),
				utmSource: (params.get("utm_source") || "").slice(0, 120),
				utmMedium: (params.get("utm_medium") || "").slice(0, 120),
				utmCampaign: (params.get("utm_campaign") || "").slice(0, 120),
				utmContent: (params.get("utm_content") || "").slice(0, 120),
				utmTerm: (params.get("utm_term") || "").slice(0, 120),
			});
			setHydrated(true);
		}
	}, []);

	useEffect(() => {
		if (!hydrated || deliveryStatus === "success") return;
		try {
			window.localStorage.setItem(draftKey, JSON.stringify(draft));
		} catch {
			// Persistence is a convenience, never a requirement.
		}
	}, [deliveryStatus, draft, hydrated]);

	const update = <K extends DraftField>(field: K, value: Draft[K]) => {
		setDraft((current) => ({ ...current, [field]: value }));
		setErrors((current) => ({ ...current, [field]: undefined }));
		setDeliveryStatus("idle");
	};

	const validationMessage = (kind: "required" | "email" | "detail" | "url") => {
		if (kind === "email") {
			return locale === "fa"
				? "یک ایمیل کاری معتبر وارد کنید."
				: "Enter a valid work email.";
		}
		if (kind === "detail") {
			return locale === "fa"
				? "برای ارزیابی، کمی جزئیات بیشتر بنویسید."
				: "Add enough detail for a responsible assessment.";
		}
		if (kind === "url") {
			return locale === "fa"
				? "نشانی کامل را با http یا https وارد کنید."
				: "Enter a complete URL beginning with http or https.";
		}
		return copy.required;
	};

	const validateStep = (step: number) => {
		const next: Errors = {};
		if (step === 0) {
			if (!draft.company.trim()) next.company = validationMessage("required");
			if (!draft.role.trim()) next.role = validationMessage("required");
			if (!draft.industry) next.industry = validationMessage("required");
			if (draft.website) {
				try {
					const website = new URL(draft.website);
					if (website.protocol !== "http:" && website.protocol !== "https:") {
						next.website = validationMessage("url");
					}
				} catch {
					next.website = validationMessage("url");
				}
			}
		}
		if (step === 1) {
			if (!draft.system) next.system = validationMessage("required");
			if (draft.problem.trim().length < 20)
				next.problem = validationMessage("detail");
			if (draft.outcome.trim().length < 10)
				next.outcome = validationMessage("detail");
			if (!draft.stage) next.stage = validationMessage("required");
		}
		if (step === 2) {
			if (!draft.urgency) next.urgency = validationMessage("required");
			if (!draft.budget) next.budget = validationMessage("required");
		}
		if (step === 3) {
			if (!draft.name.trim()) next.name = validationMessage("required");
			if (!emailPattern.test(draft.email.trim()))
				next.email = validationMessage("email");
			if (!draft.preferredContact)
				next.preferredContact = validationMessage("required");
			if (!draft.consent) next.consent = validationMessage("required");
			if (!turnstileToken && turnstileSiteKey)
				next.turnstile = copy.verificationError;
		}
		setErrors(next);
		if (Object.keys(next).length > 0) {
			window.requestAnimationFrame(() => {
				const first = Object.keys(next)[0];
				document.getElementById(first)?.focus();
			});
			return false;
		}
		return true;
	};

	const changeStep = (step: number) => {
		setErrors({});
		setDraft((current) => ({ ...current, step }));
		trackEvent("intake_step", { step: step + 1, locale });
		window.requestAnimationFrame(() => headingRef.current?.focus());
	};

	const continueFlow = () => {
		if (validateStep(draft.step)) changeStep(Math.min(3, draft.step + 1));
	};

	const submit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!validateStep(3)) return;
		setDeliveryStatus("pending");

		try {
			const response = await fetch("/api/leads", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					version: "2026-08-03",
					locale,
					requestedService,
					...draft,
					honeypot,
					turnstileToken,
					attribution,
				}),
			});
			const result = (await response.json()) as { code?: string };
			if (!response.ok) {
				setDeliveryStatus(
					result.code === "VERIFICATION_FAILED" ? "verification" : "error",
				);
				return;
			}

			setDeliveryStatus("success");
			window.localStorage.removeItem(draftKey);
			trackEvent("lead_submitted", { locale });
		} catch {
			setDeliveryStatus("error");
		}
	};

	const BackIcon = locale === "fa" ? ArrowRight : ArrowLeft;
	const NextIcon = locale === "fa" ? ArrowLeft : ArrowRight;
	const stepTitles = [
		copy.sections.company,
		copy.sections.problem,
		copy.sections.timing,
		copy.sections.contact,
	];
	const stepDescriptions = [
		copy.sections.companyDescription,
		copy.sections.problemDescription,
		copy.sections.timingDescription,
		copy.sections.contactDescription,
	];

	if (deliveryStatus === "success") {
		return (
			<section className="intake-success" role="status" aria-live="polite">
				<span>
					<Check aria-hidden="true" />
				</span>
				<h2>{copy.successTitle}</h2>
				<p>{copy.successBody}</p>
				<Button asChild variant="outline">
					<Link href={`/${locale}`}>
						{locale === "fa" ? "بازگشت به صفحه اصلی" : "Return home"}
					</Link>
				</Button>
			</section>
		);
	}

	return (
		<form className="intake" onSubmit={submit} noValidate>
			<div className="intake__progress-block">
				<div>
					<span>{copy.stepOf(draft.step + 1, copy.steps.length)}</span>
					<strong>{copy.steps[draft.step]}</strong>
				</div>
				<Progress value={((draft.step + 1) / copy.steps.length) * 100} />
				<ol aria-label={locale === "fa" ? "مراحل فرم" : "Form steps"}>
					{copy.steps.map((step, index) => (
						<li
							key={step}
							data-active={index <= draft.step}
							aria-current={index === draft.step ? "step" : undefined}
						>
							<span>{index + 1}</span>
							{step}
						</li>
					))}
				</ol>
			</div>

			<div className="intake__panel">
				<header className="intake__heading">
					<h2 ref={headingRef} tabIndex={-1}>
						{stepTitles[draft.step]}
					</h2>
					<p>{stepDescriptions[draft.step]}</p>
				</header>

				{Object.keys(errors).length > 0 ? (
					<div
						ref={summaryRef}
						className="intake__error-summary"
						role="alert"
						tabIndex={-1}
					>
						{copy.validationSummary}
					</div>
				) : null}

				{draft.step === 0 ? (
					<FieldGroup className="intake__field-grid">
						<Field>
							<FieldLabel htmlFor="company">{copy.fields.company}</FieldLabel>
							<Input
								id="company"
								required
								autoComplete="organization"
								value={draft.company}
								placeholder={copy.placeholders.company}
								onChange={(event) => update("company", event.target.value)}
								aria-invalid={Boolean(errors.company)}
								aria-describedby={errors.company ? "company-error" : undefined}
							/>
							<FieldError id="company-error">{errors.company}</FieldError>
						</Field>
						<Field>
							<FieldLabel htmlFor="role">{copy.fields.role}</FieldLabel>
							<Input
								id="role"
								required
								autoComplete="organization-title"
								value={draft.role}
								placeholder={copy.placeholders.role}
								onChange={(event) => update("role", event.target.value)}
								aria-invalid={Boolean(errors.role)}
								aria-describedby={errors.role ? "role-error" : undefined}
							/>
							<FieldError id="role-error">{errors.role}</FieldError>
						</Field>
						<Field>
							<FieldLabel htmlFor="website">
								{copy.fields.website} <small>{copy.optional}</small>
							</FieldLabel>
							<Input
								id="website"
								type="url"
								inputMode="url"
								autoComplete="url"
								value={draft.website}
								placeholder={copy.placeholders.website}
								onChange={(event) => update("website", event.target.value)}
								aria-invalid={Boolean(errors.website)}
								aria-describedby={errors.website ? "website-error" : undefined}
							/>
							<FieldError id="website-error">{errors.website}</FieldError>
						</Field>
						<SelectField
							id="industry"
							label={copy.fields.industry}
							value={draft.industry}
							options={copy.options.industries}
							placeholder={copy.select}
							error={errors.industry}
							onChange={(value) => update("industry", value)}
						/>
					</FieldGroup>
				) : null}

				{draft.step === 1 ? (
					<FieldGroup>
						<SelectField
							id="system"
							label={copy.fields.system}
							value={draft.system}
							options={copy.options.systems}
							placeholder={copy.select}
							error={errors.system}
							onChange={(value) => update("system", value)}
						/>
						<Field>
							<FieldLabel htmlFor="problem">{copy.fields.problem}</FieldLabel>
							<Textarea
								id="problem"
								required
								value={draft.problem}
								placeholder={copy.placeholders.problem}
								maxLength={1800}
								onChange={(event) => update("problem", event.target.value)}
								aria-invalid={Boolean(errors.problem)}
								aria-describedby={errors.problem ? "problem-error" : undefined}
							/>
							<FieldDescription>{draft.problem.length} / 1800</FieldDescription>
							<FieldError id="problem-error">{errors.problem}</FieldError>
						</Field>
						<Field>
							<FieldLabel htmlFor="outcome">{copy.fields.outcome}</FieldLabel>
							<Textarea
								id="outcome"
								required
								value={draft.outcome}
								placeholder={copy.placeholders.outcome}
								maxLength={1000}
								onChange={(event) => update("outcome", event.target.value)}
								aria-invalid={Boolean(errors.outcome)}
								aria-describedby={errors.outcome ? "outcome-error" : undefined}
							/>
							<FieldError id="outcome-error">{errors.outcome}</FieldError>
						</Field>
						<SelectField
							id="stage"
							label={copy.fields.stage}
							value={draft.stage}
							options={copy.options.stages}
							placeholder={copy.select}
							error={errors.stage}
							onChange={(value) => update("stage", value)}
						/>
					</FieldGroup>
				) : null}

				{draft.step === 2 ? (
					<FieldGroup className="intake__field-grid">
						<SelectField
							id="urgency"
							label={copy.fields.urgency}
							value={draft.urgency}
							options={copy.options.urgencies}
							placeholder={copy.select}
							error={errors.urgency}
							onChange={(value) => update("urgency", value)}
						/>
						<SelectField
							id="budget"
							label={copy.fields.budget}
							value={draft.budget}
							options={copy.options.budgets}
							placeholder={copy.select}
							error={errors.budget}
							onChange={(value) => update("budget", value)}
						/>
						<Field>
							<FieldLabel htmlFor="stack">
								{copy.fields.stack} <small>{copy.optional}</small>
							</FieldLabel>
							<Textarea
								id="stack"
								value={draft.stack}
								placeholder={copy.placeholders.stack}
								maxLength={1000}
								onChange={(event) => update("stack", event.target.value)}
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="deadline">
								{copy.fields.deadline} <small>{copy.optional}</small>
							</FieldLabel>
							<Input
								id="deadline"
								value={draft.deadline}
								placeholder={copy.placeholders.deadline}
								maxLength={160}
								onChange={(event) => update("deadline", event.target.value)}
							/>
						</Field>
					</FieldGroup>
				) : null}

				{draft.step === 3 ? (
					<FieldGroup className="intake__field-grid">
						<Field>
							<FieldLabel htmlFor="name">{copy.fields.name}</FieldLabel>
							<Input
								id="name"
								required
								autoComplete="name"
								value={draft.name}
								placeholder={copy.placeholders.name}
								onChange={(event) => update("name", event.target.value)}
								aria-invalid={Boolean(errors.name)}
								aria-describedby={errors.name ? "name-error" : undefined}
							/>
							<FieldError id="name-error">{errors.name}</FieldError>
						</Field>
						<Field>
							<FieldLabel htmlFor="email">{copy.fields.email}</FieldLabel>
							<Input
								id="email"
								type="email"
								required
								inputMode="email"
								autoComplete="email"
								value={draft.email}
								placeholder={copy.placeholders.email}
								onChange={(event) => update("email", event.target.value)}
								aria-invalid={Boolean(errors.email)}
								aria-describedby={errors.email ? "email-error" : undefined}
							/>
							<FieldError id="email-error">{errors.email}</FieldError>
						</Field>
						<SelectField
							id="preferredContact"
							label={copy.fields.preferredContact}
							value={draft.preferredContact}
							options={copy.options.contacts}
							placeholder={copy.select}
							error={errors.preferredContact}
							onChange={(value) => update("preferredContact", value)}
						/>
						<div className="intake__review">
							<strong>
								{locale === "fa" ? "خلاصه درخواست" : "Inquiry summary"}
							</strong>
							<p>
								{draft.company} · {draft.system}
							</p>
							<p>
								{draft.urgency} · {draft.budget}
							</p>
						</div>
						<Field orientation="horizontal" className="intake__consent">
							<Checkbox
								id="consent"
								checked={draft.consent}
								onCheckedChange={(checked) =>
									update("consent", checked === true)
								}
								aria-invalid={Boolean(errors.consent)}
								aria-required="true"
								aria-describedby={errors.consent ? "consent-error" : undefined}
							/>
							<FieldLabel htmlFor="consent">{copy.consent}</FieldLabel>
							<FieldError id="consent-error">{errors.consent}</FieldError>
						</Field>
						<p className="intake__privacy">
							{copy.privacyPrefix}{" "}
							<Link href={`/${locale}/privacy`}>{copy.privacyLink}</Link>.
						</p>
						<div className="intake__honeypot" aria-hidden="true">
							<label htmlFor="office-address">Office address</label>
							<input
								id="office-address"
								name="office-address"
								tabIndex={-1}
								autoComplete="off"
								value={honeypot}
								onChange={(event) => setHoneypot(event.target.value)}
							/>
						</div>
						{turnstileSiteKey ? (
							<div id="turnstile" tabIndex={-1}>
								<Turnstile
									siteKey={turnstileSiteKey}
									language={locale}
									onToken={setTurnstileToken}
								/>
							</div>
						) : (
							<p className="intake__configuration">
								{locale === "fa"
									? "اعتبارسنجی فرم هنوز تنظیم نشده است."
									: "Form verification is not configured yet."}
							</p>
						)}
						<FieldError id="turnstile-error">{errors.turnstile}</FieldError>
					</FieldGroup>
				) : null}

				<div className="intake__feedback" aria-live="polite">
					{deliveryStatus === "error" ? <p>{copy.error}</p> : null}
					{deliveryStatus === "verification" ? (
						<p>{copy.verificationError}</p>
					) : null}
				</div>
				<p className="intake__draft-note">{copy.draftNote}</p>
				<div className="intake__actions">
					{draft.step > 0 ? (
						<Button
							type="button"
							variant="outline"
							size="lg"
							onClick={() => changeStep(draft.step - 1)}
						>
							<BackIcon aria-hidden="true" />
							{copy.back}
						</Button>
					) : (
						<span />
					)}
					{draft.step < 3 ? (
						<Button type="button" size="lg" onClick={continueFlow}>
							{draft.step === 2 ? copy.review : copy.next}
							<NextIcon aria-hidden="true" />
						</Button>
					) : (
						<Button
							type="submit"
							size="lg"
							disabled={deliveryStatus === "pending" || !turnstileSiteKey}
						>
							{deliveryStatus === "pending" ? (
								<LoaderCircle className="animate-spin" aria-hidden="true" />
							) : null}
							{deliveryStatus === "pending" ? copy.pending : copy.submit}
						</Button>
					)}
				</div>
				<p className="intake__fallback">{copy.fallback}</p>
			</div>
		</form>
	);
}
