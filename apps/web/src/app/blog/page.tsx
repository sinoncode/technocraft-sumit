import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { BlogPostList } from '@/components/blog/post-list';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import { blogFaqs, blogHero, blogIntro } from '@/data/blog';

export const metadata: Metadata = {
	title: 'Insights | TechnoKraft Consultancy Services',
	description:
		'Practitioner perspectives on telecommunications infrastructure, AI data-center operations, cybersecurity, AI application engineering and technology staffing — written by the engineers who do the work.',
};

export default function BlogPage() {
	return (
		<main>
			<PageHero
				eyebrow="Insights"
				title={blogHero.title}
				lede={blogHero.lede}
				primaryCta={{ label: 'Read recent posts', href: '#posts' }}
				secondaryCta={{ label: 'Talk to an Expert', topic: 'general' }}
				breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights' }]}
				chip={blogHero.chip}
			/>
			<ProseSection title={blogIntro.title} paragraphs={blogIntro.paragraphs} />
			<div id="posts">
				<BlogPostList />
			</div>
			<FaqSection items={blogFaqs} />
			<CtaBand
				title="Have a topic you'd like us to cover?"
				sub="Requests from practitioners in our disciplines are prioritised. Suggest a topic or ask a question."
				primaryLabel="Talk to an Expert"
				secondaryLabel="Discuss Your Project"
			/>
		</main>
	);
}
