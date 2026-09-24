"use client";
import { ArrowUpRight } from 'lucide-react';
import { openRoles, openRolesPlaceholder } from '@/data/careers';
import { useInquiry } from '@/components/inquiry-dialog';
import { PlaceholderNote } from '@/components/placeholder-note';
import { SectionHeading } from '@/components/section-heading';

/** Open roles board. Roles open the inquiry dialog with the general topic. */
export function OpenRoles() {
	const inquiry = useInquiry();

	return (
		<section className="border-b border-ink/10 bg-cream py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading eyebrow="Open roles" title="Current openings" />
				<ul className="mt-10 grid gap-4 lg:grid-cols-2">
					{openRoles.map(role => (
						<li key={role.title}>
							<button
								type="button"
								onClick={() => inquiry.open('general')}
								className="group flex h-full w-full flex-col gap-3 rounded-2xl border border-ink/10 bg-card p-6 text-left shadow-soft transition-all hover:-translate-y-1 hover:border-ultramarine/40 hover:shadow-soft-lg"
							>
								<div className="flex items-start justify-between gap-4">
									<h3 className="font-display text-lg font-semibold leading-snug">
										{role.title}
									</h3>
									<ArrowUpRight
										className="h-5 w-5 shrink-0 text-ultramarine transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
										aria-hidden
									/>
								</div>
								<p className="text-sm leading-relaxed text-muted-foreground">
									{role.summary}
								</p>
								<div className="mt-1 flex flex-wrap gap-2">
									<span className="rounded-full border border-ink/10 bg-cream-deep/60 px-3 py-1 text-xs font-semibold text-foreground/80">
										{role.team}
									</span>
									<span className="rounded-full border border-ink/10 bg-cream-deep/60 px-3 py-1 text-xs font-semibold text-foreground/80">
										{role.location}
									</span>
									<span className="rounded-full border border-ultramarine/30 bg-ultramarine/10 px-3 py-1 text-xs font-semibold text-ultramarine">
										{role.type}
									</span>
								</div>
							</button>
						</li>
					))}
				</ul>
				<PlaceholderNote text={openRolesPlaceholder} />
			</div>
		</section>
	);
}
