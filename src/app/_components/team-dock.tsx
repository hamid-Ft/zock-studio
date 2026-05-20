'use client';

import Link from 'next/link';
import { BriefcaseBusiness, Home, Layers3, Mail, Sparkles } from 'lucide-react';

import { Dock, DockIcon } from '@/components/ui/dock';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const dockItems = [
	{ href: '/', icon: Home, label: 'Home' },
	{ href: '/#capabilities', icon: Sparkles, label: 'Capabilities' },
	{ href: '/#work', icon: Layers3, label: 'Work' },
	{ href: '/#process', icon: BriefcaseBusiness, label: 'Process' },
];

export function TeamDock() {
	return (
		<div className="fixed inset-x-0 bottom-6 z-50 px-4">
			<TooltipProvider>
				<Dock direction="middle" className="border-white/10 bg-black/35 shadow-2xl shadow-black/30">
					{dockItems.map((item) => (
						<DockIcon key={item.label}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={item.href}
										aria-label={item.label}
										className={cn(
											buttonVariants({ variant: 'ghost', size: 'default' }),
											'size-12 rounded-full text-zinc-200 hover:bg-cyan-300/10 hover:text-cyan-200'
										)}>
										<item.icon className="size-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator orientation="vertical" className="h-full bg-white/10" />
					<DockIcon>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="mailto:hamidfattahi.a@gmail.com"
									aria-label="Contact"
									className={cn(
										buttonVariants({ variant: 'ghost', size: 'default' }),
										'size-12 rounded-full text-zinc-200 hover:bg-cyan-300/10 hover:text-cyan-200'
									)}>
									<Mail className="size-4" />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Contact</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				</Dock>
			</TooltipProvider>
		</div>
	);
}
