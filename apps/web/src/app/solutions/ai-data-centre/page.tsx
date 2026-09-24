import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { StackGraphic } from '@/components/ai-data-centre/stack-graphic';
import { CardGrid } from '@/components/card-grid';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import { ExternalReferences } from '@/components/external-references';
import {
	aiDcCapabilities,
	aiDcFaqs,
	aiDcHero,
	aiDcReferences,
	aiDcWhoFor,
	notReseller,
	whyDifferent,
} from '@/data/ai-data-centre';

const DESCRIPTION =
	'TechnoKraft engineers and manages AI data centre infrastructure: GPU cluster networking, InfiniBand and RDMA, high-speed Ethernet fabric, and the monitoring and operations discipline AI workloads require.';

export const metadata = {
  title: 'AI Data Centre & AI Infrastructure Engineering | TechnoKraft',
  description: 'TechnoKraft Consultancy Services engineers telecommunications infrastructure...'};

export default function AiDataCentrePage() {
	return (
		<main>
			<PageHero
				eyebrow="AI Data Centre & AI Infrastructure"
				title={aiDcHero.title}
				lede={aiDcHero.lede}
				primaryCta={{ label: 'Explore AI Infrastructure', href: '#capabilities' }}
				secondaryCta={{ label: 'Talk to an Expert', topic: 'ai-data-centre' }}
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Solutions', href: '/solutions' },
					{ label: 'AI Data Centre & AI Infrastructure' },
				]}
				chip={aiDcHero.chip}
			/>
			<ProseSection title={whyDifferent.title} paragraphs={whyDifferent.paragraphs} />
			<StackGraphic />
			<div id="capabilities">
				<CardGrid
					eyebrow="What we deliver"
					title="Engineering, integration, monitoring and operations"
					cards={aiDcCapabilities}
					columns={3}
				/>
			</div>
			<ProseSection
				title={notReseller.title}
				paragraphs={notReseller.paragraphs}
				placeholders={notReseller.placeholders}
				dark
			/>
			<ProseSection
				title={aiDcWhoFor.title}
				paragraphs={aiDcWhoFor.paragraphs}
				links={[
					{ label: 'Cybersecurity', href: '/solutions/cybersecurity' },
				]}
			/>
			<FaqSection items={aiDcFaqs} />
			<CtaBand
				title="Building or scaling AI compute infrastructure?"
				sub="Talk to engineers who have worked specifically with GPU networking."
				primaryLabel="Talk to an Expert"
				secondaryLabel="Discuss Your Project"
				topic="ai-data-centre"
			/>
			<ExternalReferences references={aiDcReferences} />
		</main>
	);
}
