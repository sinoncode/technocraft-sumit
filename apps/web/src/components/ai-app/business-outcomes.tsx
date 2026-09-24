import { businessOutcomes } from '@/data/ai-application-development';

/** Business-outcomes callout with the outcome terms visually emphasised. */
export function BusinessOutcomes() {
	return (
		<section className="border-b border-ink-raised/60 bg-ink py-20 text-cream sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="max-w-3xl text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
					{businessOutcomes.title}
				</h2>
				<ul className="mt-10 flex flex-wrap gap-3">
					{businessOutcomes.terms.map((term, index) => (
						<li
							key={term}
							className={
								index === 0
									? 'rounded-full bg-ultramarine px-4 py-2.5 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary'
									: 'rounded-full border border-cream/20 bg-ink-soft px-4 py-2.5 font-display text-sm font-semibold text-cream'
							}
						>
							{term}
						</li>
					))}
				</ul>
				<div className="mt-10 max-w-3xl space-y-5 text-pretty text-base leading-relaxed text-cream/80 sm:text-lg">
					{businessOutcomes.paragraphs.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
			</div>
		</section>
	);
}
