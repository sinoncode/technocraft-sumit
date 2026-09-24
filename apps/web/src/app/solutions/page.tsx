import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { PillarCards } from '@/components/pillar-cards';
import { ProseSection } from '@/components/prose-section';
import { WhichFits } from '@/components/solutions-hub/which-fits';
import { CtaBand } from '@/components/cta-band';
import { pillarsTogether, solutionsHero } from '@/data/solutions-hub';
import { pillars, pillarHref } from '@/data/pillars';

export const metadata = {
  title: 'Solutions | TechnoKraft Consultancy Services',
  description: 'TechnoKraft Consultancy Services delivers five connected technology solutions: telecom infrastructure, AI data centre and AI infrastructure, cybersecurity, AI application development, and IT staffing.'};

export default function SolutionsPage() {
	return (
		<main>
			<PageHero
				eyebrow="Solutions"
				title={solutionsHero.title}
				lede={solutionsHero.lede}
				primaryCta={{ label: 'Talk to an Expert', topic: 'general' }}
				secondaryCta={{ label: 'Discuss Your Project', topic: 'general' }}
				breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Solutions' }]}
			/>
			<PillarCards variant="hub" />
			<ProseSection
				title={pillarsTogether.title}
				paragraphs={pillarsTogether.paragraphs}
				dark
			/>
			<WhichFits />
			<CtaBand
				title="Not sure which pillar fits?"
				sub="Start with whichever pillar most closely matches the immediate problem — scoping the rest is part of the first conversation."
				primaryLabel="Talk to an Expert"
				secondaryLabel="Discuss Your Project"
			/>
		</main>
	);
}
