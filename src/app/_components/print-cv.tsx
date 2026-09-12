"use client";

import { Printer } from "lucide-react";

export function PrintCV({ label }: { label: string }) {
	return (
		<button type="button" className="cv-print" onClick={() => window.print()}>
			<Printer aria-hidden="true" />
			{label}
		</button>
	);
}
