import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { PlaceholderNote } from '@/components/placeholder-note';
import { cn } from '@/lib/utils';

type ProseLink = { label: string; href: string };

type ProseSectionProps = {
	eyebrow?: string;
	title: string;
	paragraphs: string[];
	placeholders?: string[];
	links?: ProseLink[];
	dark?: boolean;
	/** Render as h2 section (default) — set false when the title duplicates the page H1. */
	heading?: boolean;
};

/** Long-form copy section: heading, paragraphs, optional inline links and editor notes. */
export function ProseSection({
	eyebrow,
	title,
	paragraphs,
	placeholders,
	links,
	dark,
	heading = true,
}: ProseSectionProps) {
	return (
		<section
			className={cn(
				'relative border-b py-20 sm:py-24',
				dark ? 'border-cream/10 bg-ink text-cream' : 'border-cream/10 bg-mesh-cream text-cream',
			)}
		>
			{dark ? (
				<div className="bg-grid-faint-dark pointer-events-none absolute inset-0 opacity-25" aria-hidden />
			) : null}
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					{heading ? (
						<SectionHeading eyebrow={eyebrow} title={title} dark={dark} />
					) : (
						<h2 className="sr-only">{title}</h2>
					)}
					<div
						className={cn(
							'space-y-5 text-pretty text-base leading-relaxed sm:text-lg',
							heading && 'mt-8',
							dark ? 'text-cream/80' : 'text-foreground/85',
						)}
					>
						{paragraphs.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
					{links && links.length > 0 ? (
						<div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
							{links.map(link => (
								<Link
									key={link.href + link.label}
									href={link.href}
									className={cn(
										'group inline-flex items-center gap-1.5 font-display text-sm font-semibold underline-offset-4 hover:underline',
										dark ? 'text-cyan-bright' : 'text-ultramarine',
									)}
								>
									{link.label}
									<ArrowRight
										className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
										aria-hidden
									/>
								</Link>
							))}
						</div>
					) : null}
					{placeholders?.map(note => (
						<PlaceholderNote key={note} text={note} dark={dark} />
					))}
				</div>
			</div>
		</section>
	);
}
