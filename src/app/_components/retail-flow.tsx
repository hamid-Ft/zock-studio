"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
	ChartNoAxesCombined,
	Check,
	CreditCard,
	Package,
	Store,
	Warehouse,
	Wifi,
	WifiOff,
} from "lucide-react";
import { useEffect, useState } from "react";

import { retailFlowCopy } from "@/content/retail-flow-content";
import { localizeDigits, type Locale } from "@/lib/i18n";

type Phase = "connected" | "offline" | "syncing" | "recovered";
const icons = [CreditCard, Package, Warehouse, ChartNoAxesCombined];

export function RetailFlow({ locale }: { locale: Locale }) {
	const copy = retailFlowCopy[locale];
	const reduceMotion = useReducedMotion();
	const [phase, setPhase] = useState<Phase>("connected");
	const [syncedSteps, setSyncedSteps] = useState(4);
	const [ready, setReady] = useState(false);
	const offline = phase === "offline";

	useEffect(() => setReady(true), []);

	useEffect(() => {
		if (phase !== "syncing") return;
		const timer = window.setTimeout(
			() => {
				if (syncedSteps < 4) setSyncedSteps((step) => step + 1);
				else setPhase("recovered");
			},
			reduceMotion ? 80 : 480,
		);
		return () => window.clearTimeout(timer);
	}, [phase, syncedSteps, reduceMotion]);

	function toggleConnection() {
		if (phase === "syncing") return;
		setSyncedSteps(0);
		setPhase(offline ? "syncing" : "offline");
	}

	return (
		<section className="retail-flow" data-phase={phase} aria-label={copy.label}>
			<div className="retail-flow__label">
				<span>
					{localizeDigits("01", locale)} / {copy.label}
				</span>
				<span>{copy.caption}</span>
			</div>
			<div className="retail-flow__scene">
				<svg
					className="retail-flow__circuit"
					viewBox="0 0 1200 350"
					fill="none"
					aria-hidden="true"
				>
					<defs>
						<linearGradient
							id="retail-crescent"
							x1="170"
							y1="180"
							x2="1130"
							y2="70"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#33d6ff" stopOpacity="0.05" />
							<stop offset="0.48" stopColor="#72e5ff" />
							<stop offset="1" stopColor="#33d6ff" stopOpacity="0.12" />
						</linearGradient>
					</defs>
					<path
						className="retail-flow__orbit"
						d="M-60 24C205 359 890 403 1250 13"
					/>
					<path
						className="retail-flow__orbit retail-flow__orbit--outer"
						d="M-60 4C205 417 890 455 1250 -7"
					/>
					<path
						className="retail-flow__track"
						d="M180 140C290 140 300 220 420 220S585 235 670 205S830 177 900 130S1000 48 1080 48"
					/>
					{!offline && (
						<path
							key={phase}
							className="retail-flow__signal"
							pathLength="1"
							d="M180 140C290 140 300 220 420 220S585 235 670 205S830 177 900 130S1000 48 1080 48"
						/>
					)}
					<g className="retail-flow__coordinates">
						<path d="M580 95h16m-8-8v16M1010 300h16m-8-8v16M295 50h16m-8-8v16" />
					</g>
				</svg>
				<div className="retail-flow__center" aria-hidden="true">
					<span>
						m<span className="retail-flow__moon" />
						onlancer
					</span>
					<small>CONNECTED BY DESIGN</small>
				</div>
				<div className="retail-flow__receipt">
					<div className="retail-flow__receipt-top">
						<Store aria-hidden="true" />
						<span>{copy.store}</span>
						<span className="retail-flow__receipt-dot" />
					</div>
					<p className="retail-flow__receipt-title">{copy.receipt}</p>
					<p className="retail-flow__order">{copy.order}</p>
					<div className="retail-flow__purchase">
						<Package aria-hidden="true" />
						<div>
							<strong>{copy.item}</strong>
							<small>{copy.quantity}</small>
						</div>
					</div>
					<div className="retail-flow__barcode" aria-hidden="true" />
					<p className="retail-flow__receipt-status">
						{offline ? (
							<WifiOff aria-hidden="true" />
						) : (
							<Check aria-hidden="true" />
						)}
						{offline
							? copy.saved
							: phase === "syncing"
								? copy.sending
								: copy.complete}
					</p>
				</div>
				<ol className="retail-flow__steps">
					{copy.steps.map((step, index) => {
						const Icon = icons[index];
						const synced = index < syncedSteps;
						return (
							<li
								className={`retail-flow__step retail-flow__step--${index + 1}`}
								key={step.title}
								data-synced={synced}
							>
								<motion.div
									className="retail-flow__step-icon"
									initial={false}
									animate={{ scale: synced || reduceMotion ? 1 : 0.92 }}
									transition={{ type: "spring", stiffness: 260, damping: 22 }}
								>
									<Icon aria-hidden="true" />
									<span>{localizeDigits(`0${index + 2}`, locale)}</span>
								</motion.div>
								<div>
									<h2>{step.title}</h2>
									<p>
										{synced ? (
											<Check aria-hidden="true" />
										) : (
											<span
												className="retail-flow__waiting"
												aria-hidden="true"
											/>
										)}
										{synced ? step.detail : copy.queued}
									</p>
								</div>
							</li>
						);
					})}
				</ol>
			</div>
			<div className="retail-flow__controls">
				<div className="retail-flow__status">
					<span className="retail-flow__status-light" aria-hidden="true" />
					<p
						id="retail-flow-status"
						role="status"
						aria-live="polite"
						aria-atomic="true"
					>
						{copy[phase]}
					</p>
				</div>
				<button
					type="button"
					onClick={toggleConnection}
					disabled={!ready || phase === "syncing"}
					aria-controls="retail-flow-status"
				>
					{offline ? (
						<Wifi aria-hidden="true" />
					) : (
						<WifiOff aria-hidden="true" />
					)}
					{offline
						? copy.restore
						: phase === "syncing"
							? copy.restoring
							: copy.tryOutage}
					<span aria-hidden="true">↗</span>
				</button>
			</div>
			<noscript>
				<p>{copy.noScript}</p>
			</noscript>
		</section>
	);
}
