"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MegaVisualStage, type MegaKey } from './mega-visuals';
import { cn } from '@/lib/utils';

export type MegaItem = {
	key: MegaKey;
	label: string;
	to: string;
	blurb: string;
};

export const MEGA_ITEMS: MegaItem[] = [
	{
		key: 'about',
		label: 'About',
		to: '/about',
		blurb: 'Who we are, what we do, and the team behind the work.',
	},
	{
		key: 'industries',
		label: 'Industries',
		to: '/industries',
		blurb: 'Use cases across finance, healthcare, manufacturing and more.',
	},
	{
		key: 'careers',
		label: 'Careers',
		to: '/careers',
		blurb: 'Open roles and what it means to engineer digital success with us.',
	},
	{
		key: 'insights',
		label: 'Insights',
		to: '/insights',
		blurb: 'Field notes on AI infrastructure, security and operations.',
	},
	{
		key: 'white-papers',
		label: 'White Papers',
		to: '/white-papers',
		blurb: 'In-depth technical briefs and reference architectures.',
	},
	{
		key: 'contact',
		label: 'Contact',
		to: '/contact',
		blurb: 'Reach the team in Irving, TX — phone, email or in person.',
	},
];

type MegaMenuProps = {
	open: boolean;
	activeKey: MegaKey;
	onActiveChange: (key: MegaKey) => void;
	onClose: () => void;
};

/**
 * Full-width Company mega menu: left rail of headings (hover/focus drives the
 * active visual), right preview panel with a crossfading 3D-style graphic.
 * Animates in (fade + slide-down) and out (fade + slide-up) with a short
 * grace period handled by the parent so it never flickers on edge crossing.
 */
export function MegaMenu({ open, activeKey, onActiveChange, onClose }: MegaMenuProps) {
	const [render, setRender] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (open) {
			setRender(true);
			const id = window.requestAnimationFrame(() =>
				window.requestAnimationFrame(() => setVisible(true)),
			);
			return () => window.cancelAnimationFrame(id);
		}
		setVisible(false);
		const t = window.setTimeout(() => setRender(false), 320);
		return () => window.clearTimeout(t);
	}, [open]);

	if (!render) {
		return null;
	}

	return (
		<div
			className={cn(
				'absolute left-1/2 top-full z-50 w-full max-w-7xl -translate-x-1/2 px-4 sm:px-6 lg:px-8',
				'transition-all duration-300 ease-out',
				visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none',
			)}
			role="region"
			aria-label="Company menu"
		>
			<div
				className="glass overflow-hidden rounded-3xl shadow-soft-lg"
				style={{ boxShadow: '0 0 0 1px hsl(var(--ultramarine) / 0.18), 0 28px 60px -20px hsl(217 91% 40% / 0.5)' }}
			>
				<div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
					{/* Left rail */}
					<div
	className="
		relative overflow-hidden
		border-b border-white/[0.08]
		bg-white/[0.035]
		p-3
		shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.25)]
		backdrop-blur-2xl
		backdrop-saturate-150
		lg:border-b-0
		lg:border-r
	"
>
	{/* Ambient glass glow */}
	<div
		className="
			pointer-events-none
			absolute -left-20 -top-20
			h-40 w-40
			rounded-full
			bg-cyan-bright/[0.08]
			blur-3xl
		"
	/>

	<div
		className="
			pointer-events-none
			absolute -bottom-24 -right-20
			h-48 w-48
			rounded-full
			bg-ultramarine/[0.10]
			blur-3xl
		"
	/>

	{/* Content */}
	<div className="relative z-10">
		<p className="px-3 pb-2 pt-1 font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-bright/80">
			Company
		</p>

		<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
			{MEGA_ITEMS.map(item => {
				const isActive = item.key === activeKey;

				return (
					<li key={item.key}>
						<Link
							href={item.to}
							onMouseEnter={() => onActiveChange(item.key)}
							onFocus={() => onActiveChange(item.key)}
							onClick={onClose}
							className={cn(
								'group relative flex items-start gap-3 rounded-2xl px-3 py-3',
								'border border-transparent',
								'transition-all duration-300 ease-out',

								isActive
									? [
											'border-cyan-bright/[0.10]',
											'bg-white/[0.055]',
											'shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.18)]',
										]
									: [
											'hover:border-white/[0.06]',
											'hover:bg-white/[0.025]',
										],
							)}
						>
							<span
								className={cn(
									'mt-1 h-9 w-1 shrink-0 rounded-full',
									'transition-all duration-300',
									isActive
										? 'bg-gradient-to-b from-cyan-bright to-ultramarine shadow-glow-cyan'
										: 'bg-white/[0.12] group-hover:bg-white/[0.25]',
								)}
								aria-hidden
							/>

							<span className="min-w-0">
								<span
									className={cn(
										'flex items-center gap-1.5 font-display text-base font-semibold',
										'transition-colors duration-300',
										isActive
											? 'text-cyan-bright'
											: 'text-cream group-hover:text-white',
									)}
								>
									{item.label}

									<ArrowUpRight
										className={cn(
											'h-3.5 w-3.5',
											'transition-all duration-300',
											isActive
												? 'translate-x-0 text-cyan-bright opacity-100'
												: '-translate-x-1 text-cream/40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
										)}
										aria-hidden
									/>
								</span>

								<span className="mt-0.5 block text-sm leading-snug text-cream/55 transition-colors duration-300 group-hover:text-cream/70">
									{item.blurb}
								</span>
							</span>
						</Link>
					</li>
				);
			})}
		</ul>
	</div>
</div>

					{/* Right preview panel */}
					<div className="relative hidden min-h-[18rem] bg-mesh-cream lg:block">
						<div className="absolute inset-0 bg-grid-faint-dark opacity-60" aria-hidden />
						<div className="relative h-full min-h-[18rem] p-6">
							<MegaVisualStage active={activeKey} />
							<div className="pointer-events-none absolute bottom-4 left-5 right-5 flex items-center justify-between">
								<span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-cream/45">
									TechnoKraft · Engineering Digital Success
								</span>
								<span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-cyan-bright/70">
									{activeKey.replace('-', ' ')}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
