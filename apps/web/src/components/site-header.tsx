"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import { pillars, pillarHref } from '@/data/pillars';
import { useInquiry } from '@/components/inquiry-dialog';
import { BrandLogo } from '@/components/brand-logo';
import { MegaMenu } from '@/components/site-header/mega-menu';
import type { MegaKey } from '@/components/site-header/mega-visuals';
import { MobileMegaAccordion } from '@/components/site-header/mobile-mega-accordion';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

/** Compact labels for the five pillars shown directly in the top navigation. */
const NAV_PILLARS = [
	{ label: 'Telecom', to: '/solutions/telecom' },
	{ label: 'AI Data Centre', to: '/solutions/ai-data-centre' },
	{ label: 'Cybersecurity', to: '/solutions/cybersecurity' },
	{ label: 'AI App Dev', to: '/solutions/ai-application-development' },
	{ label: 'IT Staffing', to: '/solutions/it-staffing' },
] as const;

export function SiteHeader() {
	const [companyOpen, setCompanyOpen] = useState(false);
	const [activeKey, setActiveKey] = useState<MegaKey>('about');
	const [sheetOpen, setSheetOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const closeTimer = useRef<number | null>(null);
	const pathname = usePathname();
	const inquiry = useInquiry();

	useEffect(() => {
		setCompanyOpen(false);
		setSheetOpen(false);
	}, [pathname]);

	useEffect(() => {
		function onScroll() {
			setScrolled(window.scrollY > 16);
		}
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setCompanyOpen(false);
			}
		}
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, []);

	function clearCloseTimer() {
		if (closeTimer.current) {
			window.clearTimeout(closeTimer.current);
			closeTimer.current = null;
		}
	}

	function openMenu() {
		clearCloseTimer();
		setCompanyOpen(true);
	}

	function scheduleClose() {
		clearCloseTimer();
		closeTimer.current = window.setTimeout(() => setCompanyOpen(false), 180);
	}

	useEffect(() => () => clearCloseTimer(), []);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 transition-all duration-300',
				scrolled
					? 'border-b border-cream/10 bg-ink/80 shadow-soft backdrop-blur-xl'
					: 'border-b border-transparent bg-transparent',
			)}
		>
			{/* Utility strip */}
			<div
				className={cn(
					'hidden border-b border-cream/10 text-cream/70 lg:block',
					scrolled ? 'bg-ink/50' : 'bg-ink/30',
				)}
			>
				<div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 font-mono-tech text-[11px] tracking-wide sm:px-6 lg:px-8">
					<p className="truncate">
						<span className="text-cyan-bright">●</span> Engineering Digital Success · Connect ·
						Compute · Secure · Operate
					</p>
					<div className="flex items-center gap-4">
						<span className="text-cream/50">Irving, TX</span>
						<span className="text-cream/25" aria-hidden>
							|
						</span>
						<a href="tel:+17328061984" className="transition-colors hover:text-cyan-bright">
							+1 (732) 806-1984
						</a>
					</div>
				</div>
			</div>

			<div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
				<BrandLogo compact />

				<nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
					{NAV_PILLARS.map(link => (
						<Link
							key={link.to}
							href={link.to}
							className={cn(
								'flex h-11 items-center rounded-full px-3 font-display text-[0.78rem] font-semibold uppercase tracking-wide transition-colors',
								pathname === link.to
									? 'text-white'
									: 'text-cream/80 hover:text-cyan-bright',
							)}
						>
							{link.label}
						</Link>
					))}

					{/* Company mega-menu trigger */}
					<div className="relative ml-1">
						<button
							type="button"
							aria-expanded={companyOpen}
							aria-haspopup="true"
							onClick={() => (companyOpen ? setCompanyOpen(false) : openMenu())}
							onMouseEnter={openMenu}
							onMouseLeave={scheduleClose}
							onFocus={openMenu}
							onBlur={scheduleClose}
							className={cn(
								'flex h-11 items-center gap-1.5 rounded-full px-3 font-display text-[0.78rem] font-semibold uppercase tracking-wide transition-colors',
								companyOpen ? 'text-white' : 'text-cream/85 hover:text-white',
							)}
						>
							Company
							<ChevronDown
								className={cn('h-4 w-4 transition-transform duration-300', companyOpen && 'rotate-180')}
								aria-hidden
							/>
						</button>
					</div>
				</nav>

				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={() => inquiry.open('general')}
						className="hidden h-10 items-center rounded-full bg-ultramarine px-5 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary transition-all hover:-translate-y-0.5 hover:bg-ultramarine-bright active:scale-[0.98] lg:inline-flex"
					>
						Get in Touch
					</button>
					<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
						<SheetTrigger asChild>
							<button
								type="button"
								className="glass flex h-11 w-11 items-center justify-center rounded-xl text-cream lg:hidden"
								aria-label="Open menu"
							>
								<Menu className="h-5 w-5" aria-hidden />
							</button>
						</SheetTrigger>
						<SheetContent side="right" className="border-cream/10 bg-ink p-0 text-cream">
							<SheetHeader className="border-b border-cream/10 p-5 text-left">
								<SheetTitle className="text-cream">
									<BrandLogo compact asSpan />
								</SheetTitle>
							</SheetHeader>
							<nav className="flex flex-col overflow-y-auto p-5 overflow-scroll h-[80vh]" aria-label="Mobile">
								<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-cyan-bright/80">
									Solutions
								</p>
								<ul className="mt-2 space-y-1">
									{pillars.map(pillar => (
										<li key={pillar.slug}>
											<Link
												href={pillarHref(pillar.slug)}
												className="flex items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 font-display text-sm font-semibold text-cream hover:border-cream/10 hover:bg-ultramarine/15"
											>
												<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ultramarine/20 text-cyan-bright">
													<pillar.icon className="h-4 w-4" aria-hidden />
												</span>
												{pillar.name}
											</Link>
										</li>
									))}
								</ul>
								<Link
									href="/solutions"
									className="mt-3 px-2 font-display text-sm font-semibold text-cyan-bright underline-offset-4 hover:underline"
								>
									All solutions →
								</Link>
								<div className="mt-5 border-t border-cream/10 pt-5">
									<p className="px-2 font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-cyan-bright/80">
										Company
									</p>
									<MobileMegaAccordion onNavigate={() => setSheetOpen(false)} />
								</div>
								<button
									type="button"
									onClick={() => {
										setSheetOpen(false);
										inquiry.open('general');
									}}
									className="mt-6 py-4 inline-flex h-20  items-center justify-center rounded-full bg-ultramarine px-5 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary"
								>
									Get in Touch
								</button>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>

			{/* Mega menu panel — hover zone covers trigger + panel via shared timers */}
			<div onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
				<MegaMenu
					open={companyOpen}
					activeKey={activeKey}
					onActiveChange={setActiveKey}
					onClose={() => setCompanyOpen(false)}
				/>
			</div>
		</header>
	);
}
