"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pillars, pillarHref } from '@/data/pillars';
import { homeMedia } from '@/data/home-media';
import { cn } from '@/lib/utils';

const SERVICE_IMAGES: Record<string, string> = {
	telecom: homeMedia.networkTower,
	'ai-data-centre': homeMedia.gpu,
	cybersecurity: homeMedia.soc,
	'ai-application-development': homeMedia.aiApp,
	'it-staffing': homeMedia.staffing,
};

/** Left-rail service list + detail panel (Celnet-style explorer, TechnoKraft pillars). */
export function ServicesExplorer() {
	const [active, setActive] = useState(pillars[0].slug);
	const current = pillars.find(p => p.slug === active) ?? pillars[0];

	return (
		<section id="solutions-explorer" className="border-b border-cream/10 bg-mesh-cream py-16 text-cream sm:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-10 max-w-2xl">
					<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.24em] text-cyan-bright">
						Our solutions
					</p>
					<h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
						Five practices. One accountable partner.
					</h2>
				</div>

				<div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-12">
					<ul className="glow-border overflow-hidden rounded-2xl border border-cream/10 bg-card/90 shadow-soft">
						{pillars.map(pillar => {
							const isActive = pillar.slug === active;
							return (
								<li key={pillar.slug} className="border-b border-cream/8 last:border-b-0">
									<button
										type="button"
										onClick={() => setActive(pillar.slug)}
										onMouseEnter={() => setActive(pillar.slug)}
										className={cn(
											'flex w-full items-start gap-3 px-4 py-4 text-left transition-colors sm:px-5',
											isActive
												? 'border-l-4 border-l-cyan bg-ultramarine/15'
												: 'border-l-4 border-l-transparent hover:bg-ultramarine/10',
										)}
										aria-current={isActive ? 'true' : undefined}
									>
										<span
											className={cn(
												'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
												isActive
													? 'bg-ultramarine text-primary-foreground'
													: 'bg-ultramarine/10 text-ultramarine',
											)}
										>
											<pillar.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
										</span>
										<span>
											<span
												className={cn(
													'block font-display text-sm font-semibold',
													isActive ? 'text-cyan-bright' : 'text-cream',
												)}
											>
												{pillar.name}
											</span>
											{isActive ? (
												<span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
													{pillar.homeCard}
												</span>
											) : null}
										</span>
									</button>
								</li>
							);
						})}
					</ul>

					<div className="flex flex-col">
						<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.2em] text-cyan-bright">Our services</p>
						<h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
							{current.name}
						</h3>
						<p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-cream/75">
							{current.hubCard}
						</p>
						<Link
							href={pillarHref(current.slug)}
							className="group mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-cyan-bright underline-offset-4 hover:underline"
						>
							Learn about {current.name}
							<ArrowRight
								className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
								aria-hidden
							/>
						</Link>
						<div className="relative mt-8 overflow-hidden rounded-2xl shadow-soft-lg">
							<img
								src={SERVICE_IMAGES[current.slug] ?? homeMedia.handshake}
								alt=""
								className="aspect-[16/10] w-full object-cover"
							/>
							<div
								className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent"
								aria-hidden
							/>
							<div className="absolute bottom-3 left-3 flex items-center gap-2">
								<span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-signal" aria-hidden />
								<span className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.18em] text-cream/90">
									{current.name}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
