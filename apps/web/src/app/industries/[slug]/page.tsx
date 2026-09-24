
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = industryPages.find(p => p.slug === slug);
  if (!page) {
    return { title: 'Industry Not Found' };
  }
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export function generateStaticParams() {
  return industryPages.map((page) => ({
    slug: page.slug,
  }));
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { CardGrid } from '@/components/card-grid';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import { PlaceholderNote } from '@/components/placeholder-note';
import { industryPages } from '@/data/industries-pages';



export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
	const page = industryPages.find(p => p.slug === slug);

	if (!page) {
		return (
			<main className="mx-auto max-w-3xl px-6 py-24">
				<h1 className="font-display text-3xl font-bold">Industry not found</h1>
				<p className="mt-4 text-muted-foreground">
					<Link href="/industries" className="text-ultramarine underline-offset-4 hover:underline">
						Back to industries
					</Link>
				</p>
			</main>
		);
	}

	const bodyParas = page.body.filter(p => !p.startsWith('['));
	const placeholders = page.body.filter(p => p.startsWith('['));

	return (
		<main>
			<PageHero
				eyebrow={page.name}
				title={page.h1}
				lede={page.lede}
				primaryCta={{ label: 'Talk to an Expert', topic: 'general' }}
				secondaryCta={{ label: 'Discuss Your Project', topic: 'general' }}
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Industries', href: '/industries' },
					{ label: page.name },
				]}
			/>
			<ProseSection title="How we engage" paragraphs={bodyParas} />
			{placeholders.length > 0 ? (
				<section className="border-b border-ink/10 bg-cream px-4 pb-12 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-3xl">
						{placeholders.map(text => (
							<PlaceholderNote key={text} text={text} />
						))}
					</div>
				</section>
			) : null}
			<CardGrid
				eyebrow="How the five pillars apply"
				title="Relevant practices"
				cards={page.pillars}
				columns={2}
			/>
			<section className="border-b border-ink-raised/60 bg-ink py-20 text-cream sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2">
						<div>
							<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.24em] text-cyan-bright">
								In practice
							</p>
							<ul className="mt-6 space-y-4">
								{page.practice.map(item => (
									<li key={item} className="flex gap-3 text-sm leading-relaxed text-cream/80">
										<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden />
										{item}
									</li>
								))}
							</ul>
						</div>
						<div>
							<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.24em] text-cyan-bright">
								Common engagement triggers
							</p>
							<ul className="mt-6 space-y-3">
								{page.triggers.map(item => (
									<li
										key={item}
										className="rounded-xl border border-cream/12 bg-ink-soft/80 px-4 py-3 text-sm leading-relaxed text-cream/85"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<FaqSection items={page.faqs} />
			<CtaBand
				title={`Planning work in ${page.name}?`}
				sub="The first conversation is with someone who works in the relevant discipline — not a general sales contact."
				primaryLabel="Talk to an Expert"
				secondaryLabel="Discuss Your Project"
			/>
		</main>
	);
}


