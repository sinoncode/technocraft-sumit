import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { industryPages, industryHref } from '@/data/industries-pages';
import { industries } from '@/data/industries';
import { ScrollReveal } from '@/components/scroll-reveal';
import { homeMedia } from '@/data/home-media';

const IMAGES = [
	homeMedia.networkTower,
	homeMedia.handshake,
	homeMedia.soc,
	homeMedia.dataCentre,
	homeMedia.gpu,
	homeMedia.office,
];

export function IndustryCards() {
	return (
		<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{industryPages.map((page, index) => {
				const meta = industries.find(i => i.name.startsWith(page.name.split(' ')[0]));
				const Icon = meta?.icon;
				return (
					<ScrollReveal key={page.slug} delay={index * 80}>
						<Link
							href={industryHref(page.slug)}
							className="group relative block h-full overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-ultramarine/40 hover:shadow-soft-lg"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={IMAGES[index % IMAGES.length]}
									alt=""
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									loading="lazy"
								/>
								<div
									className="absolute inset-0"
									style={{
										background:
											'linear-gradient(to top, hsl(232 32% 6% / 0.92) 0%, hsl(232 32% 6% / 0.35) 55%, transparent 100%)',
									}}
									aria-hidden
								/>
								{Icon ? (
									<span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cream/15 bg-ink/70 text-cyan-bright backdrop-blur">
										<Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
									</span>
								) : null}
							</div>
							<div className="p-5">
								<h3 className="font-display text-lg font-bold text-foreground group-hover:text-ultramarine">
									{page.name}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{page.short}</p>
								<span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ultramarine">
									Explore {page.name.split(' / ')[0]}
									<ArrowUpRight
										className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
										aria-hidden
									/>
								</span>
							</div>
						</Link>
					</ScrollReveal>
				);
			})}
		</div>
	);
}
