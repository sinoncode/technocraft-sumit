import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceholderNote } from '@/components/placeholder-note';
import { homeMedia, homeStatPlaceholders } from '@/data/home-media';

/** Stats rail + featured insight card — unverified counts stay as editor notes. */
export function ImpactBand() {
	return (
		<section className="border-b border-cream/10 bg-ink-soft py-16 text-cream sm:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="glow-border grid items-stretch gap-6 rounded-3xl border border-cream/10 bg-card/90 p-6 shadow-soft lg:grid-cols-[minmax(0,18rem)_1fr] lg:p-8">
					<ul className="flex flex-col justify-center gap-6 border-cream/10 lg:border-r lg:pr-8">
						{homeStatPlaceholders.map(stat => (
							<li key={stat.label} className="border-l-4 border-ultramarine pl-4">
								{'value' in stat ? (
									<>
										<p className="font-display text-3xl font-bold text-ultramarine">{stat.value}</p>
										<p className="mt-1 text-sm font-semibold text-cream">{stat.label}</p>
										{'sub' in stat ? (
											<p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.sub}</p>
										) : null}
									</>
								) : (
									<>
										<p className="text-sm font-semibold text-cream">{stat.label}</p>
										{'note' in stat ? (
											<div className="mt-2">
												<PlaceholderNote text={stat.note} />
											</div>
										) : null}
									</>
								)}
							</li>
						))}
					</ul>
					<div className="relative overflow-hidden rounded-2xl min-h-[16rem]">
						<img
							src={homeMedia.fiber}
							alt=""
							className="absolute inset-0 h-full w-full object-cover"
							loading="lazy"
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									'linear-gradient(120deg, hsl(234 84% 30% / 0.9) 0%, hsl(240 34% 12% / 0.55) 100%)',
							}}
							aria-hidden
						/>
						<div className="bg-grid-faint-dark absolute inset-0 opacity-25" aria-hidden />
						<div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
							<p className="font-display text-xl font-bold text-cream sm:text-2xl">
								Insights from the engineers doing the work
							</p>
							<p className="mt-2 max-w-md text-sm text-cream/75">
								Practitioner notes on telecom builds, AI infrastructure, security and staffing —
								published as drafts until each piece is ready.
							</p>
							<Link
								href="/blog"
								className="group mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-cyan-bright underline-offset-4 hover:underline"
							>
								View insights
								<ArrowRight
									className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
									aria-hidden
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
