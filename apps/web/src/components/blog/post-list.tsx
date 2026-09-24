import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts, blogPlaceholder } from '@/data/blog';
import { PlaceholderNote } from '@/components/placeholder-note';
import { SectionHeading } from '@/components/section-heading';

/** Blog index. Posts are sample/placeholder until published; clicking opens a notice. */
export function BlogPostList() {
	return (
		<section className="border-b border-ink/10 bg-cream py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading eyebrow="Latest" title="Recent posts" />
				<ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{blogPosts.map(post => (
						<li key={post.slug}>
							<article className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-ultramarine/40 hover:shadow-soft-lg">
								<div className="flex items-center justify-between gap-3">
									<span className="rounded-full bg-ultramarine/10 px-3 py-1 text-xs font-semibold text-ultramarine">
										{post.category}
									</span>
									<span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
										<Clock className="h-3.5 w-3.5" aria-hidden />
										{post.readTime}
									</span>
								</div>
								<h3 className="mt-4 font-display text-lg font-semibold leading-snug">
									{post.title}
								</h3>
								<p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
									{post.excerpt}
								</p>
								<div className="mt-5 flex items-center justify-between border-t border-ink/5 pt-4 text-xs text-muted-foreground">
									<span>{post.author}</span>
									<span className="inline-flex items-center gap-1 font-semibold text-ultramarine">
										Draft
										<ArrowRight
											className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
											aria-hidden
										/>
									</span>
								</div>
							</article>
						</li>
					))}
				</ul>
				<PlaceholderNote text={blogPlaceholder} />
			</div>
		</section>
	);
}
