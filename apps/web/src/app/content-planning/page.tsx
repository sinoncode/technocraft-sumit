import type { Metadata } from 'next';
import { contentBriefs, statusLabels, statusStyles } from '@/data/content-planning';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Page Content Planning — TechnoKraft (Editor Notes)',
  description: 'Internal owner-only content planning view listing the exact information and assets needed for each page before publication. Not public marketing copy.'};

export default function ContentPlanningPage() {
	const live = contentBriefs.filter(b => b.status === 'live');
	const draft = contentBriefs.filter(b => b.status === 'draft-content');
	const batch2 = contentBriefs.filter(b => b.status === 'batch-2');

	return (
		<main className="bg-cream">
			<section className="bg-mesh-ink relative overflow-hidden border-b border-ink-raised/60 py-16 text-cream sm:py-20">
				<div className="bg-grid-faint-dark absolute inset-0 opacity-25" aria-hidden />
				<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-center gap-3">
						<span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-bright" aria-hidden />
						<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.24em] text-cyan-bright">
							Editor / Owner planning view
						</p>
					</div>
					<h1 className="mt-4 max-w-3xl text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
						Page content needed — per-page briefs
					</h1>
					<p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-cream/75">
						This is an internal content-planning view, not public marketing copy. Each page below lists the
						exact information and assets needed before it is considered content-complete, plus its recommended
						section structure. Pages marked <span className="font-semibold text-cyan-bright">Batch 2</span> are
						kept out of public navigation until their content is ready. This page is hidden from search engines.
					</p>
					<div className="mt-8 flex flex-wrap gap-3 font-mono-tech text-[11px] uppercase tracking-wider">
						<span className="rounded-full border border-ultramarine/40 bg-ultramarine/15 px-3 py-1 text-ultramarine-bright">
							{live.length} live
						</span>
						<span className="rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-amber-300">
							{draft.length} draft content
						</span>
						<span className="rounded-full border border-cream/30 bg-cream/10 px-3 py-1 text-cream/80">
							{batch2.length} batch 2
						</span>
					</div>
				</div>
			</section>

			<section className="border-b border-ink/10 py-16 sm:py-20">
				<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
					<div className="space-y-6">
						{contentBriefs.map(brief => (
							<article
								key={brief.slug}
								className="overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-soft"
							>
								<div className="flex flex-col gap-3 border-b border-ink/8 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
									<div>
										<div className="flex flex-wrap items-center gap-3">
											<h2 className="font-display text-xl font-bold tracking-tight">{brief.page}</h2>
											<span
												className={cn(
													'rounded-full border px-2.5 py-0.5 font-mono-tech text-[10px] font-medium uppercase tracking-wider',
													statusStyles[brief.status],
												)}
											>
												{statusLabels[brief.status]}
											</span>
										</div>
										{brief.route ? (
											<p className="mt-1 font-mono-tech text-xs text-muted-foreground">{brief.route}</p>
										) : null}
									</div>
									<p className="shrink-0 font-mono-tech text-[11px] uppercase tracking-wider text-ultramarine">
										{brief.wordTarget}
									</p>
								</div>
								<div className="grid gap-6 p-5 sm:p-6 md:grid-cols-2">
									<div>
										<p className="text-sm leading-relaxed text-foreground/85">{brief.purpose}</p>
										<div className="mt-5">
											<p className="font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
												Recommended sections
											</p>
											<ol className="mt-2 space-y-1.5 text-sm text-foreground/85">
												{brief.recommendedSections.map((section, index) => (
													<li key={section} className="flex gap-2.5">
														<span className="font-mono-tech text-xs text-ultramarine/70">
															{String(index + 1).padStart(2, '0')}
														</span>
														<span>{section}</span>
													</li>
												))}
											</ol>
										</div>
									</div>
									<div className="space-y-5">
										<div>
											<p className="font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
												Information needed
											</p>
											<ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
												{brief.needed.map(item => (
													<li key={item} className="flex gap-2">
														<span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
										{brief.assets && brief.assets.length > 0 ? (
											<div>
												<p className="font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
													Assets needed
												</p>
												<ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
													{brief.assets.map(asset => (
														<li key={asset} className="flex gap-2">
															<span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ultramarine" aria-hidden />
															<span>{asset}</span>
														</li>
													))}
												</ul>
											</div>
										) : null}
										{brief.seoNotes && brief.seoNotes.length > 0 ? (
											<div>
												<p className="font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
													SEO notes
												</p>
												<ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
													{brief.seoNotes.map(note => (
														<li key={note} className="flex gap-2">
															<span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ultramarine/60" aria-hidden />
															<span>{note}</span>
														</li>
													))}
												</ul>
											</div>
										) : null}
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
