"use client";

import {
	ArrowLeft,
	ArrowRight,
	Check,
	Copy,
	LoaderCircle,
	Send,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { studioCopy } from "@/content/studio-content";
import { localizeDigits, type Locale } from "@/lib/i18n";

type Draft = {
	step: number;
	system: string;
	stage: string;
	name: string;
	email: string;
	consent: boolean;
};

type DeliveryStatus = "idle" | "pending" | "success" | "error";

const emptyDraft: Draft = {
	step: 0,
	system: "",
	stage: "",
	name: "",
	email: "",
	consent: false,
};

const draftKey = "moonlancer-intake-v1";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ProjectIntake({ locale }: { locale: Locale }) {
	const copy = studioCopy[locale].intake;
	const [draft, setDraft] = useState<Draft>(emptyDraft);
	const [hydrated, setHydrated] = useState(false);
	const [validation, setValidation] = useState("");
	const [deliveryStatus, setDeliveryStatus] = useState<DeliveryStatus>("idle");
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		try {
			const stored = window.localStorage.getItem(draftKey);
			if (stored) {
				const parsed = JSON.parse(stored) as Partial<Draft>;
				setDraft({
					...emptyDraft,
					...parsed,
					step: Math.min(2, Math.max(0, Number(parsed.step) || 0)),
				});
			}
		} catch {
			// A blocked storage API should never block the intake itself.
		} finally {
			setHydrated(true);
		}
	}, []);

	useEffect(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(draftKey, JSON.stringify(draft));
		} catch {
			// The in-memory draft still preserves answers for this session.
		}
	}, [draft, hydrated]);

	const brief = useMemo(() => {
		if (!draft.system || !draft.stage) return "";
		return copy.briefTemplate(draft.system, draft.stage);
	}, [copy, draft.stage, draft.system]);

	const updateDraft = (next: Partial<Draft>) => {
		setDraft((current) => ({ ...current, ...next }));
		setValidation("");
		setDeliveryStatus("idle");
	};

	const continueFlow = () => {
		if (draft.step === 0 && !draft.system) {
			setValidation(copy.required);
			return;
		}
		if (draft.step === 1 && !draft.stage) {
			setValidation(copy.required);
			return;
		}
		updateDraft({ step: Math.min(2, draft.step + 1) });
	};

	const copyBrief = async () => {
		if (!brief) return;
		try {
			await navigator.clipboard.writeText(brief);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2400);
		} catch {
			setDeliveryStatus("error");
		}
	};

	const submitBrief = async () => {
		if (
			!draft.name.trim() ||
			!emailPattern.test(draft.email) ||
			!draft.consent
		) {
			setValidation(copy.contactRequired);
			return;
		}

		setValidation("");
		setDeliveryStatus("pending");

		try {
			const response = await fetch("/api/leads", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					locale,
					systemType: draft.system,
					stage: draft.stage,
					brief,
					name: draft.name.trim(),
					email: draft.email.trim(),
					consent: draft.consent,
				}),
			});

			if (!response.ok) throw new Error("Lead delivery failed");

			setDeliveryStatus("success");
			window.localStorage.removeItem(draftKey);
		} catch {
			setDeliveryStatus("error");
		}
	};

	const DirectionalIcon = locale === "fa" ? ArrowLeft : ArrowRight;
	const BackIcon = locale === "fa" ? ArrowRight : ArrowLeft;

	return (
		<div className="intake" data-step={draft.step}>
			<ol
				className="intake__progress"
				aria-label={
					locale === "fa" ? "مراحل شروع پروژه" : "Project intake progress"
				}
			>
				{copy.steps.map((label, index) => (
					<li
						key={label}
						className="intake__progress-item"
						data-active={index <= draft.step}
						aria-current={index === draft.step ? "step" : undefined}
					>
						<span>
							{localizeDigits(String(index + 1).padStart(2, "0"), locale)}
						</span>
						{label}
					</li>
				))}
			</ol>

			<div className="intake__panel">
				{draft.step === 0 ? (
					<fieldset className="intake__fieldset">
						<legend>{copy.systemLegend}</legend>
						<div className="intake__options">
							{copy.systems.map((option, index) => (
								<label key={option} className="intake-option">
									<input
										type="radio"
										name="system-type"
										value={option}
										checked={draft.system === option}
										onChange={() => updateDraft({ system: option })}
									/>
									<span className="intake-option__number">
										{localizeDigits(String(index + 1).padStart(2, "0"), locale)}
									</span>
									<span>{option}</span>
									<Check aria-hidden="true" />
								</label>
							))}
						</div>
					</fieldset>
				) : null}

				{draft.step === 1 ? (
					<fieldset className="intake__fieldset">
						<legend>{copy.stageLegend}</legend>
						<div className="intake__options intake__options--stage">
							{copy.stages.map((option, index) => (
								<label key={option} className="intake-option">
									<input
										type="radio"
										name="product-stage"
										value={option}
										checked={draft.stage === option}
										onChange={() => updateDraft({ stage: option })}
									/>
									<span className="intake-option__number">
										{localizeDigits(String(index + 1).padStart(2, "0"), locale)}
									</span>
									<span>{option}</span>
									<Check aria-hidden="true" />
								</label>
							))}
						</div>
					</fieldset>
				) : null}

				{draft.step === 2 ? (
					<div className="intake__qualification">
						<div className="intake__brief-block">
							<div className="intake__brief-heading">
								<h3>{copy.briefLabel}</h3>
								<Button type="button" variant="outline" onClick={copyBrief}>
									{copied ? (
										<Check data-icon="inline-start" aria-hidden="true" />
									) : (
										<Copy data-icon="inline-start" aria-hidden="true" />
									)}
									{copied ? copy.copied : copy.copy}
								</Button>
							</div>
							<pre>{brief}</pre>
						</div>

						<section
							className="intake__contact"
							aria-labelledby="contact-heading"
						>
							<h3 id="contact-heading">
								{locale === "fa" ? "راه ارتباطی" : "Response route"}
							</h3>
							<div className="intake__fields">
								<label>
									<span>{copy.name}</span>
									<input
										autoComplete="name"
										value={draft.name}
										onChange={(event) =>
											updateDraft({ name: event.target.value })
										}
									/>
								</label>
								<label>
									<span>{copy.email}</span>
									<input
										type="email"
										autoComplete="email"
										inputMode="email"
										value={draft.email}
										onChange={(event) =>
											updateDraft({ email: event.target.value })
										}
									/>
								</label>
							</div>
							<label className="intake__consent">
								<input
									type="checkbox"
									checked={draft.consent}
									onChange={(event) =>
										updateDraft({ consent: event.target.checked })
									}
								/>
								<span>{copy.consent}</span>
							</label>
							<p className="intake__privacy">{copy.privacy}</p>
						</section>
					</div>
				) : null}

				<div className="intake__feedback" aria-live="polite" aria-atomic="true">
					{validation ? (
						<p className="intake__message intake__message--error">
							{validation}
						</p>
					) : null}
					{deliveryStatus === "success" ? (
						<p className="intake__message intake__message--success">
							{copy.success}
						</p>
					) : null}
					{deliveryStatus === "error" ? (
						<p className="intake__message intake__message--error">
							{copy.error}
						</p>
					) : null}
				</div>

				<div className="intake__actions">
					{draft.step > 0 ? (
						<Button
							type="button"
							variant="outline"
							size="lg"
							onClick={() => updateDraft({ step: draft.step - 1 })}
						>
							<BackIcon data-icon="inline-start" aria-hidden="true" />
							{copy.back}
						</Button>
					) : (
						<span />
					)}
					{draft.step < 2 ? (
						<Button type="button" size="lg" onClick={continueFlow}>
							{copy.next}
							<DirectionalIcon data-icon="inline-end" aria-hidden="true" />
						</Button>
					) : (
						<Button
							type="button"
							size="lg"
							disabled={
								deliveryStatus === "pending" || deliveryStatus === "success"
							}
							onClick={submitBrief}
						>
							{deliveryStatus === "pending" ? (
								<LoaderCircle
									data-icon="inline-start"
									className="intake__spinner"
									aria-hidden="true"
								/>
							) : (
								<Send data-icon="inline-start" aria-hidden="true" />
							)}
							{deliveryStatus === "pending" ? copy.pending : copy.submit}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
