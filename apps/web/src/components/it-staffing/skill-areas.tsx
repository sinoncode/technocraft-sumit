import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { skillAreas } from '@/data/it-staffing';
import { pillars, pillarHref } from '@/data/pillars';
import { SectionHeading } from '@/components/section-heading';

/** Skill areas as a scannable tag list, cross-linked to the four other pillars. */
export function SkillAreas() {
	const otherPillars = pillars.filter(pillar => pillar.slug !== 'it-staffing');

	return (
		<section className="border-b border-ink/10 bg-cream-deep/40 py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading title={skillAreas.title} />
				<ul className="mt-10 flex flex-wrap gap-3">
					{skillAreas.tags.map(tag => (
						<li
							key={tag}
							className="rounded-full border border-ink/10 bg-card px-4 py-2.5 font-display text-sm font-semibold shadow-soft"
						>
							{tag}
						</li>
					))}
				</ul>
				<div className="mt-10 max-w-3xl space-y-5 text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
					{skillAreas.paragraphs.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>
				<div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
					{otherPillars.map(pillar => (
						<Link
							key={pillar.slug}
							href={pillarHref(pillar.slug)}
							className="group inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ultramarine underline-offset-4 hover:underline"
						>
							{pillar.name}
							<ArrowRight
								className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
								aria-hidden
							/>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
