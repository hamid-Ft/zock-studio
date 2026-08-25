import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const NativeSelect = React.forwardRef<
	HTMLSelectElement,
	React.ComponentProps<"select">
>(({ className, children, ...props }, ref) => (
	<div className="relative w-full" data-slot="native-select-wrapper">
		<select
			ref={ref}
			data-slot="native-select"
			className={cn(
				"h-11 w-full appearance-none rounded-md border border-input bg-background px-3 pe-10 text-base text-foreground outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		>
			{children}
		</select>
		<ChevronDown
			aria-hidden="true"
			className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
		/>
	</div>
));
NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
