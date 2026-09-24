import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { homeStoryBlocks } from '@/data/home-media';
import { cn } from '@/lib/utils';

/** Alternating image + copy story bands. */
export function StorySplits() {
	return (
		<div>
			{homeStoryBlocks.map(block => (
				<section
					key={block.title}
					className="border-b border-cream/10 bg-mesh-cream py-16 text-cream sm:py-20"
				>
					<div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14 lg:px-8">
						<div
							className={cn(
								'relative overflow-hidden rounded-2xl shadow-soft-lg',
								block.imageLeft ? 'md:order-1' : 'md:order-2',
							)}
						>
							<img
								src={block.image}
								alt={block.imageAlt}
								className="aspect-[4/3] w-full object-cover"
								loading="lazy"
							/>
							<div
								className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent"
								aria-hidden
							/>
						</div>
						<div className={cn(block.imageLeft ? 'md:order-2' : 'md:order-1')}>
							<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.22em] text-cyan-bright">
								{block.eyebrow}
							</p>
							<h2 className="mt-3 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
								{block.title}
							</h2>
							<p className="mt-5 text-pretty text-base leading-relaxed text-cream/75 sm:text-lg">
								{block.body}
							</p>
							<Link
								href={block.href}
								className="group mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-cyan-bright underline-offset-4 hover:underline"
							>
								{block.linkLabel}
								<ArrowRight
									className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
									aria-hidden
								/>
							</Link>
						</div>
					</div>
				</section>
			))}
		</div>
	);
}
