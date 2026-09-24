import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { CardItem } from '@/lib/content';
import { SectionHeading } from '@/components/section-heading';
import { PlaceholderNote } from '@/components/placeholder-note';
import { cn } from '@/lib/utils';

type CardGridProps = {
	eyebrow?: string;
	title?: string;
	intro?: string;
	cards: CardItem[];
	columns?: 2 | 3 | 4;
	dark?: boolean;
	/** Visible bracketed editor note rendered below the grid. */
	note?: string;
};

export function CardGrid({ eyebrow, title, intro, cards, columns = 3, dark, note }: CardGridProps) {
	return (
		<section
			className={cn(
				'relative border-b py-20 sm:py-24',
				dark ? 'border-cream/10 bg-ink text-cream' : 'border-cream/10 bg-mesh-cream text-cream',
			)}
		>
			{dark ? (
				<div className="bg-dotmatrix-dark pointer-events-none absolute inset-0 opacity-30" aria-hidden />
			) : null}
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{title ? <SectionHeading eyebrow={eyebrow} title={title} lede={intro} dark={dark} /> : null}
				<div
					className={cn(
						'mt-12 grid gap-5 sm:grid-cols-2',
						columns === 3 && 'lg:grid-cols-3',
						columns === 4 && 'lg:grid-cols-4',
						columns === 2 && 'lg:grid-cols-2',
					)}
				>
					{cards.map(card => (
						<article
							key={card.title}
							className={cn(
								'group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1',
								dark
									? 'border-cream/12 bg-ink-soft/80 hover:border-cyan/40 glow-border'
									: 'border-cream/10 bg-card/80 shadow-soft hover:border-ultramarine/50 hover:shadow-soft-lg glow-border',
							)}
						>
							<span
								className={cn(
									'absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100',
									dark ? 'bg-gradient-to-r from-transparent via-cyan to-transparent' : 'bg-gradient-to-r from-transparent via-ultramarine to-transparent',
								)}
								aria-hidden
							/>
							<h3 className="font-display text-lg font-semibold leading-snug">{card.title}</h3>
							<p
								className={cn(
									'mt-3 flex-1 text-sm leading-relaxed',
									dark ? 'text-cream/65' : 'text-cream/70',
								)}
							>
								{card.body}
							</p>
							{card.href && card.linkLabel && !card.comingSoon ? (
								<Link
									href={card.href}
									className={cn(
										'mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold underline-offset-4 hover:underline',
										dark ? 'text-cyan-bright' : 'text-cyan-bright',
									)}
								>
									{card.linkLabel}
									<ArrowRight
										className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
										aria-hidden
									/>
								</Link>
							) : null}
							{card.comingSoon ? (
								<p className="mt-5 inline-flex items-center gap-2 text-sm">
									<span
										className={cn(
											'font-display text-sm font-semibold',
											dark ? 'text-cream/55' : 'text-cream/55',
										)}
									>
										{card.linkLabel}
									</span>
									<span
										className={cn(
											'rounded-full border px-2 py-0.5 font-mono-tech text-[10px] font-medium uppercase tracking-wider',
											dark ? 'border-cream/25 text-cream/55' : 'border-cream/20 text-cream/55',
										)}
									>
										Coming soon
									</span>
								</p>
							) : null}
						</article>
					))}
				</div>
				{note ? <PlaceholderNote text={note} dark={dark} /> : null}
			</div>
		</section>
	);
}
