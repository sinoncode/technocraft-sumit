import { whoWeWorkWith } from '@/data/telecom';
import { SectionHeading } from '@/components/section-heading';

/** Who-we-work-with label row (labels only — no fabricated client logos). */
export function WhoWeWorkWith() {
	return (
		<section className="border-b border-ink/10 bg-cream py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading title={whoWeWorkWith.title} />
				<ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{whoWeWorkWith.labels.map(label => (
						<li
							key={label}
							className="flex items-center justify-center rounded-2xl border border-ink/10 bg-card px-5 py-6 text-center font-display text-sm font-semibold shadow-soft"
						>
							{label}
						</li>
					))}
				</ul>
				<div className="mt-10 max-w-3xl space-y-5 text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
					{whoWeWorkWith.paragraphs.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
			</div>
		</section>
	);
}
