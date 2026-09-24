import { stackIntro, stackLayers, stackNote } from '@/data/ai-data-centre';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';

/** Vertical architecture-stack graphic: power at the base, NOC/SOC at the top. */
export function StackGraphic() {
	return (
		<section className="border-b border-ink/10 bg-cream-deep/40 py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
					<div>
						<SectionHeading eyebrow="The stack" title="The AI infrastructure stack" />
						<p className="mt-6 text-pretty text-base leading-relaxed text-foreground/85">
							{stackIntro}
						</p>
						<p className="mt-5 text-pretty text-base leading-relaxed text-foreground/85">
							{stackNote}
						</p>
					</div>
					<ol
						className="flex flex-col-reverse gap-2"
						aria-label="AI infrastructure stack layers, from power at the base to NOC and SOC operations at the top"
					>
						{stackLayers.map((layer, index) => {
							const isTop = index === stackLayers.length - 1;
							return (
								<li
									key={layer}
									className={cn(
										'rounded-xl border px-5 py-3.5 font-display text-sm font-semibold transition-all',
										isTop
											? 'border-transparent bg-ultramarine text-primary-foreground shadow-soft-primary'
											: 'border-ink/10 bg-card text-foreground shadow-soft',
									)}
									style={{ marginLeft: `${(stackLayers.length - 1 - index) * 1.25}rem` }}
								>
									<span className="mr-3 font-mono text-xs opacity-60">L{index + 1}</span>
									{layer}
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		</section>
	);
}
