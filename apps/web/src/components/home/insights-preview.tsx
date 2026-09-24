import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { homeMedia } from '@/data/home-media';

const PREVIEW_IMAGES = [homeMedia.fiber, homeMedia.fiveG, homeMedia.sunsetTower];

export function InsightsPreview() {
	const posts = blogPosts.slice(0, 3);

	return (
		<section className="border-b border-cream/10 bg-mesh-cream py-16 text-cream sm:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.24em] text-cyan-bright">
							Insights
						</p>
						<h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
							Insights from the field
						</h2>
						<p className="mt-3 text-pretty text-base text-muted-foreground">
							Expert perspectives on infrastructure, security and the systems that sit on top —
							marked Draft until each article is ready to publish.
						</p>
					</div>
					<Link
						href="/blog"
						className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-cream/15 bg-card px-5 font-display text-sm font-semibold text-cream transition-colors hover:border-cyan/40 hover:text-cyan-bright"
					>
						View all insights
						<ArrowRight className="ml-2 h-4 w-4" aria-hidden />
					</Link>
				</div>

				<ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{posts.map((post, index) => (
						<li key={post.slug}>
							<article className="group glow-border flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-card/90 shadow-soft transition-all hover:-translate-y-1 hover:border-cyan/30 hover:shadow-soft-lg">
								<div className="relative aspect-[16/10] overflow-hidden">
									<img
										src={PREVIEW_IMAGES[index % PREVIEW_IMAGES.length]}
										alt=""
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
									/>
									{post.draft ? (
										<span className="absolute left-3 top-3 rounded-full bg-ultramarine px-2.5 py-1 font-mono-tech text-[10px] font-medium uppercase tracking-wider text-primary-foreground shadow-soft">
											Draft
										</span>
									) : null}
								</div>
								<div className="flex flex-1 flex-col p-5">
									<p className="font-mono-tech text-[11px] font-medium uppercase tracking-wider text-cyan-bright">
										{post.category}
									</p>
									<h3 className="mt-2 font-display text-lg font-semibold leading-snug text-cream group-hover:text-cyan-bright">
										{post.title}
									</h3>
									<p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
										{post.excerpt}
									</p>
									<span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold text-cyan-bright">
										More
										<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
									</span>
								</div>
							</article>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
