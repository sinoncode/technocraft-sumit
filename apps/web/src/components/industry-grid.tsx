import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/industries';
import { industryPages, industryHref } from '@/data/industries-pages';
import { SectionHeading } from '@/components/section-heading';
import { ScrollReveal } from '@/components/scroll-reveal';
import { cn } from '@/lib/utils';

type IndustryGridProps = {
	eyebrow?: string;
	title?: string;
	intro?: string;
	dark?: boolean;
};

function slugForName(name: string): string | undefined {
	const match = industryPages.find(
		p => p.name === name || name.startsWith(p.name) || p.name.startsWith(name.split(' ')[0]),
	);
	return match?.slug;
}

export function IndustryGrid({ eyebrow, title = 'Industries', intro, dark }: IndustryGridProps) {
	return (
		<section
			className={cn(
				'relative border-b py-20 sm:py-24',
				dark ? 'border-cream/10 bg-ink text-cream' : 'border-cream/10 bg-mesh-cream text-cream',
			)}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<SectionHeading eyebrow={eyebrow} title={title} lede={intro} dark={dark} />
					<Link
						href="/industries"
						className={cn(
							'inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-semibold underline-offset-4 hover:underline',
							dark ? 'text-cyan-bright' : 'text-ultramarine',
						)}
					>
						All industries
						<ArrowUpRight className="h-4 w-4" aria-hidden />
					</Link>
				</div>
				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{industries.map((industry, index) => {
						const slug = slugForName(industry.name);
						const inner = (
							<>
								<span
									className={cn(
										'absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100',
										dark
											? 'bg-gradient-to-r from-transparent via-cyan to-transparent'
											: 'bg-gradient-to-r from-transparent via-ultramarine to-transparent',
									)}
									aria-hidden
								/>
								<span
									className={cn(
										'inline-flex h-11 w-11 items-center justify-center rounded-xl',
										dark
											? 'bg-ultramarine/15 text-cyan-bright'
											: 'bg-ultramarine/10 text-ultramarine',
									)}
								>
									<industry.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
								</span>
								<h3 className="mt-5 font-display text-lg font-semibold">{industry.name}</h3>
								<p
									className={cn(
										'mt-2 text-sm leading-relaxed',
										dark ? 'text-cream/65' : 'text-muted-foreground',
									)}
								>
									{industry.body}
								</p>
								{slug ? (
									<span
										className={cn(
											'mt-4 inline-flex items-center gap-1 text-sm font-semibold',
											dark ? 'text-cyan-bright' : 'text-ultramarine',
										)}
									>
										Explore
										<ArrowUpRight
											className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
											aria-hidden
										/>
									</span>
								) : null}
							</>
						);

						const className = cn(
							'group relative overflow-hidden rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1',
							dark
								? 'border-cream/12 bg-ink-soft/80 hover:border-cyan/40'
								: 'border-ink/10 bg-card shadow-soft hover:border-ultramarine/40 hover:shadow-soft-lg',
						);

						return (
							<ScrollReveal key={industry.name} delay={index * 70}>
								{slug ? (
									<Link href={industryHref(slug)} className={cn(className, 'block h-full')}>
										{inner}
									</Link>
								) : (
									<article className={className}>{inner}</article>
								)}
							</ScrollReveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
