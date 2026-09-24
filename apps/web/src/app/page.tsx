import type { Metadata } from 'next';
import { HomeHero } from '@/components/home/home-hero';
import { ServicesExplorer } from '@/components/home/services-explorer';
import { StorySplits } from '@/components/home/story-splits';
import { ImpactBand } from '@/components/home/impact-band';
import { CareersTeaser } from '@/components/home/careers-teaser';
import { InsightsPreview } from '@/components/home/insights-preview';
import { ProcessTimeline } from '@/components/process-timeline';
import { IndustryGrid } from '@/components/industry-grid';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import { ExternalReferences } from '@/components/external-references';
import {
	homeFaqs,
	homeReferences,
	howWeWork,
	intelligenceTimeline,
} from '@/data/home';

export const metadata = {
  title: 'TechnoKraft Consultancy Services | Telecom, AI Infrastructure & Cybersecurity',
  description: 'TechnoKraft Consultancy Services engineers telecommunications infrastructure, AI data centre capability, cybersecurity, AI applications and specialised technology talent for complex enterprise environments.'};

export default function HomePage() {
	return (
		<main>
			<HomeHero />
			<ServicesExplorer />
			<ProcessTimeline
				eyebrow="One connected stack"
				title="From infrastructure to intelligence"
				steps={intelligenceTimeline}
				dark
			/>
			<StorySplits />
			<ImpactBand />
			<IndustryGrid eyebrow="Who we serve" title="Industries" />
			<ProcessTimeline eyebrow="How we work" title="How we work" steps={howWeWork} />
			<CareersTeaser />
			<InsightsPreview />
			<FaqSection items={homeFaqs} />
			<CtaBand
				title="Infrastructure services you can depend on"
				sub="Have a complex technology requirement? The first conversation is with someone who works in that discipline."
				primaryLabel="Talk to an Expert"
				secondaryLabel="Discuss Your Project"
				photo
			/>
			<ExternalReferences references={homeReferences} />
		</main>
	);
}
