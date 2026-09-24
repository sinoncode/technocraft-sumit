"use client";
import { FileText, Download } from 'lucide-react';
import { whitePapers, whitePapersPlaceholder } from '@/data/white-papers';
import { useInquiry } from '@/components/inquiry-dialog';
import { PlaceholderNote } from '@/components/placeholder-note';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';

const STATUS_LABEL: Record<string, string> = {
	planned: 'Planned',
	'in-progress': 'In progress',
	published: 'Published',
};

/** White paper index. Until published, each card requests the paper via the inquiry dialog. */
export function PaperList() {
	const inquiry = useInquiry();

	return (
		<section className="border-b border-ink/10 bg-cream py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading eyebrow="Library" title="Available and upcoming papers" />
				<ul className="mt-10 grid gap-5 md:grid-cols-2">
					{whitePapers.map(paper => (
						<li key={paper.slug}>
							<article className="group flex h-full gap-5 rounded-2xl border border-ink/10 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-ultramarine/40 hover:shadow-soft-lg">
								<span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ultramarine/10 text-ultramarine">
									<FileText className="h-6 w-6" strokeWidth={1.5} aria-hidden />
								</span>
								<div className="flex flex-1 flex-col">
									<div className="flex flex-wrap items-center gap-2">
										<span className="rounded-full bg-ultramarine/10 px-3 py-1 text-xs font-semibold text-ultramarine">
											{paper.practice}
										</span>
										<span
											className={cn(
												'rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider',
												paper.status === 'published'
													? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600'
													: 'border-ink/15 bg-cream-deep/60 text-muted-foreground',
											)}
										>
											{STATUS_LABEL[paper.status]}
										</span>
									</div>
									<h3 className="mt-3 font-display text-lg font-semibold leading-snug">
										{paper.title}
									</h3>
									<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
										{paper.summary}
									</p>
									<div className="mt-4 flex items-center justify-between">
										<span className="text-xs text-muted-foreground">{paper.pages}</span>
										<button
											type="button"
											onClick={() => inquiry.open('general')}
											className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ultramarine underline-offset-4 hover:underline"
										>
											{paper.status === 'published' ? 'Download' : 'Request access'}
											<Download className="h-4 w-4" aria-hidden />
										</button>
									</div>
								</div>
							</article>
						</li>
					))}
				</ul>
				<PlaceholderNote text={whitePapersPlaceholder} />
			</div>
		</section>
	);
}
