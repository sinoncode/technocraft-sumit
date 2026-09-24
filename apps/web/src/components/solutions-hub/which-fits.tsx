import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { whichFits } from '@/data/solutions-hub';
import { SectionHeading } from '@/components/section-heading';

export function WhichFits() {
	return (
		<section className="border-b border-ink/10 bg-cream py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading title={whichFits.title} />
				<ul className="mt-10 grid gap-4 md:grid-cols-2">
					{whichFits.starters.map(starter => (
						<li key={starter.href}>
							<Link
								href={starter.href}
								className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-ultramarine/40 hover:shadow-soft-lg"
							>
								<span>
									<span className="block text-sm text-muted-foreground">{starter.need}</span>
									<span className="mt-1 block font-display text-base font-semibold text-ultramarine">
										Start with {starter.pillar}
									</span>
								</span>
								<ArrowRight
									className="h-5 w-5 shrink-0 text-ultramarine transition-transform group-hover:translate-x-1"
									aria-hidden
								/>
							</Link>
						</li>
					))}
				</ul>
				<div className="mt-10 max-w-3xl space-y-5 text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
					{whichFits.paragraphs.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
			</div>
		</section>
	);
}
