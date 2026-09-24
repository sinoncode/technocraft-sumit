import type { TimelineStep } from '@/lib/content';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';

type ProcessTimelineProps = {
	eyebrow?: string;
	title: string;
	intro?: string;
	steps: TimelineStep[];
	dark?: boolean;
};

const columnClasses: Record<number, string> = {
	4: 'lg:grid-cols-4',
	5: 'lg:grid-cols-5',
	6: 'lg:grid-cols-6',
};

export function ProcessTimeline({ eyebrow, title, intro, steps, dark }: ProcessTimelineProps) {
	const columns = columnClasses[Math.min(Math.max(steps.length, 4), 6)] ?? 'lg:grid-cols-5';

	return (
		<section
			className={cn(
				'relative border-b py-20 sm:py-24',
				dark ? 'border-cream/10 bg-ink text-cream' : 'border-cream/10 bg-mesh-cream text-cream',
			)}
		>
			{dark ? (
				<div className="bg-dotmatrix-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden />
			) : null}
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading eyebrow={eyebrow} title={title} lede={intro} dark={dark} />
				<ol className={cn('mt-12 grid gap-4 sm:grid-cols-2', columns)}>
					{steps.map((step, index) => (
						<li
							key={step.title}
							className={cn(
								'relative overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1',
								dark
									? 'border-cream/12 bg-ink-soft/80 hover:border-cyan/40 glow-border'
									: 'border-cream/10 bg-card/80 shadow-soft hover:border-ultramarine/50 hover:shadow-soft-lg glow-border',
								index === 1 && 'lg:translate-y-4',
								index === 3 && 'lg:translate-y-4',
							)}
						>
							<span
								className={cn(
									'absolute right-4 top-4 h-1.5 w-1.5 rounded-full',
									dark ? 'bg-cyan animate-pulse-signal' : 'bg-ultramarine',
								)}
								aria-hidden
							/>
							<span
								className={cn(
									'font-mono-tech text-3xl font-semibold',
									dark ? 'text-ultramarine-bright/70' : 'text-ultramarine/60',
								)}
								aria-hidden
							>
								{String(index + 1).padStart(2, '0')}
							</span>
							<h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
							<p
								className={cn(
									'mt-2 text-sm leading-relaxed',
									dark ? 'text-cream/65' : 'text-cream/70',
								)}
							>
								{step.body}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
