"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { MEGA_ITEMS } from './mega-menu';
import { MegaVisual } from './mega-visuals';
import { cn } from '@/lib/utils';

/**
 * Mobile/tablet accordion for the Company menu. Each heading is a tappable row
 * that expands to reveal its 3D-style visual stacked above the blurb and a
 * link into the page. No hover dependency — fully touch driven.
 */
export function MobileMegaAccordion({ onNavigate }: { onNavigate: () => void }) {
	const [openKey, setOpenKey] = useState<string | null>(null);

	return (
		<div className="mt-2 space-y-1.5">
			{MEGA_ITEMS.map(item => {
				const isOpen = openKey === item.key;
				return (
					<div
						key={item.key}
						className="overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft/60"
					>
						<button
							type="button"
							aria-expanded={isOpen}
							onClick={() => setOpenKey(isOpen ? null : item.key)}
							className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left"
						>
							<span className="font-display text-sm font-semibold text-cream">{item.label}</span>
							<ChevronDown
								className={cn(
									'h-4 w-4 shrink-0 text-cyan-bright transition-transform duration-300',
									isOpen && 'rotate-180',
								)}
								aria-hidden
							/>
						</button>
						<div
							className={cn(
								'grid transition-all duration-300 ease-out',
								isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
							)}
						>
							<div className="overflow-hidden">
								<div className="relative h-32 bg-mesh-cream px-3">
									<div className="absolute inset-0 bg-grid-faint-dark opacity-60" aria-hidden />
									<div className="relative h-full">
										<MegaVisual visualKey={item.key} />
									</div>
								</div>
								<p className="px-3 py-2.5 text-sm leading-snug text-cream/60">{item.blurb}</p>
								<Link
									href={item.to}
									onClick={onNavigate}
									className="mx-3 mb-3 inline-flex items-center gap-1.5 rounded-full bg-ultramarine/15 px-4 py-2 font-display text-sm font-semibold text-cyan-bright transition-colors hover:bg-ultramarine/25"
								>
									Open {item.label}
									<ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
