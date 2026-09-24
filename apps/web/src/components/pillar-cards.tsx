import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pillars, pillarHref } from '@/data/pillars';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';

type PillarCardsProps = {
	variant: 'home' | 'hub' | 'about';
	eyebrow?: string;
	title?: string;
	intro?: string;
	dark?: boolean;
};

/** The five solution-pillar cards, with copy matched to the page they appear on. */
export function PillarCards({ variant, eyebrow, title, intro, dark }: PillarCardsProps) {
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
				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
					{pillars.map((pillar, index) => {
						const body =
							variant === 'hub'
								? pillar.hubCard
								: variant === 'about'
									? pillar.aboutCard
									: pillar.homeCard;
						const linkLabel = variant === 'about' ? pillar.aboutLinkLabel : pillar.homeLinkLabel;

						return (
							<article
								key={pillar.slug}
								className={cn(
									'group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1',
									dark
										? 'border-cream/12 bg-ink-soft/80 hover:border-cyan/40 glow-border'
										: 'border-cream/10 bg-card/80 shadow-soft hover:border-cyan/40 hover:shadow-soft-lg glow-border',
									index % 2 === 1 && 'lg:translate-y-4',
								)}
							>
								<span
									className={cn(
										'absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100',
										dark ? 'bg-gradient-to-r from-transparent via-cyan to-transparent' : 'bg-gradient-to-r from-transparent via-ultramarine to-transparent',
									)}
									aria-hidden
								/>
								<span
									className={cn(
										'inline-flex h-11 w-11 items-center justify-center rounded-xl',
										dark ? 'bg-ultramarine/15 text-cyan-bright' : 'bg-ultramarine/10 text-ultramarine',
									)}
								>
									<pillar.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
								</span>
								<h3 className="mt-5 font-display text-base font-semibold leading-snug">
									{pillar.name}
								</h3>
								<p
									className={cn(
										'mt-2 flex-1 text-sm leading-relaxed',
										dark ? 'text-cream/65' : 'text-muted-foreground',
									)}
								>
									{body}
								</p>
								<Link
									href={pillarHref(pillar.slug)}
									className={cn(
										'mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold underline-offset-4 hover:underline',
										dark ? 'text-cyan-bright' : 'text-ultramarine',
									)}
								>
									{linkLabel}
									<ArrowRight
										className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
										aria-hidden
									/>
								</Link>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
