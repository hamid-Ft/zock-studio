'use client';

import { usePathname } from 'next/navigation';
import { BriefcaseBusiness, Home, Layers3, Mail, Rocket, Sparkles, UsersRound } from 'lucide-react';

import { LocaleLink } from '@/components/i18n/locale-link';
import { Dock, DockIcon } from '@/components/ui/dock';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getLocaleFromPathname } from '@/lib/i18n';

const dockItems = [
	{ href: '/', icon: Home, label: { en: 'Home', fa: 'خانه' } },
	{ href: '/#capabilities', icon: Sparkles, label: { en: 'Capabilities', fa: 'توانمندی ها' } },
	{ href: '/#team', icon: UsersRound, label: { en: 'Team', fa: 'تیم' } },
	{ href: '/#services', icon: Rocket, label: { en: 'Services', fa: 'خدمات' } },
	{ href: '/#work', icon: Layers3, label: { en: 'Work', fa: 'نمونه کارها' } },
	{ href: '/#process', icon: BriefcaseBusiness, label: { en: 'Process', fa: 'فرایند' } },
];

export function TeamDock() {
	const locale = getLocaleFromPathname(usePathname());

	return (
		<div className="scrollbar-safe-fixed-x fixed bottom-6 z-50 px-4">
			<TooltipProvider>
				<Dock direction="middle" className="border-white/10 bg-black/35 shadow-2xl shadow-black/30">
					{dockItems.map((item) => (
						<DockIcon key={item.href}>
							<Tooltip>
								<TooltipTrigger asChild>
									<LocaleLink
										href={item.href}
										aria-label={item.label[locale]}
										className={cn(
											buttonVariants({ variant: 'ghost', size: 'default' }),
											'size-12 rounded-full text-zinc-200 hover:bg-cyan-300/10 hover:text-cyan-200'
										)}>
										<item.icon className="size-4" />
									</LocaleLink>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label[locale]}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator orientation="vertical" className="h-full bg-white/10" />
					<DockIcon>
						<Tooltip>
							<TooltipTrigger asChild>
								<LocaleLink
									href="mailto:hamidfattahi.a@gmail.com"
									aria-label={locale === 'fa' ? 'تماس' : 'Contact'}
									className={cn(
										buttonVariants({ variant: 'ghost', size: 'default' }),
										'size-12 rounded-full text-zinc-200 hover:bg-cyan-300/10 hover:text-cyan-200'
									)}>
									<Mail className="size-4" />
								</LocaleLink>
							</TooltipTrigger>
							<TooltipContent>
								<p>{locale === 'fa' ? 'تماس' : 'Contact'}</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				</Dock>
			</TooltipProvider>
		</div>
	);
}
