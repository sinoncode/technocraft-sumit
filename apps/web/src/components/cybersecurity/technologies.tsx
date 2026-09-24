import { cyberTechnologies } from '@/data/cybersecurity';
import { SectionHeading } from '@/components/section-heading';

/** Technology-example row with the partnership disclaimer kept visible beside it. */
export function Technologies() {
	return (
		<section className="border-b border-ink/10 bg-cream-deep/40 py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading title={cyberTechnologies.title} />
				<ul className="mt-10 flex flex-wrap gap-3" aria-label="Technology examples">
					{cyberTechnologies.tools.map(tool => (
						<li
							key={tool}
							className="rounded-full border border-ink/10 bg-card px-4 py-2.5 font-display text-sm font-semibold shadow-soft"
						>
							{tool}
						</li>
					))}
				</ul>
				<div className="mt-8 max-w-3xl space-y-5 border-l-2 border-ultramarine pl-6 text-pretty text-base leading-relaxed text-foreground/85">
					{cyberTechnologies.paragraphs.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
			</div>
		</section>
	);
}
