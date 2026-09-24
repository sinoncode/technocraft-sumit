import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { PaperList } from '@/components/white-papers/paper-list';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import { whitePapersFaqs, whitePapersHero, whitePapersIntro } from '@/data/white-papers';

export const metadata = {
  title: 'White Papers | TechnoKraft Consultancy Services',
  description: 'In-depth technical references from TechnoKraft engineering practices — AI infrastructure operations, security assessment methodology, telecom program delivery and AI application engineering.'};

export default function WhitePapersPage() {
	return (
		<main>
			<PageHero
				eyebrow="White Papers"
				title={whitePapersHero.title}
				lede={whitePapersHero.lede}
				primaryCta={{ label: 'Browse the library', href: '#library' }}
				secondaryCta={{ label: 'Talk to an Expert', topic: 'general' }}
				breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'White Papers' }]}
				chip={whitePapersHero.chip}
			/>
			<ProseSection title={whitePapersIntro.title} paragraphs={whitePapersIntro.paragraphs} />
			<div id="library">
				<PaperList />
			</div>
			<FaqSection items={whitePapersFaqs} />
			<CtaBand
				title="Need a deeper technical conversation?"
				sub="A white paper is a starting point. The next step is a conversation with the engineers who would scope and deliver the work."
				primaryLabel="Talk to an Expert"
				secondaryLabel="Discuss Your Project"
			/>
		</main>
	);
}
