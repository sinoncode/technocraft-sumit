import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { CardGrid } from '@/components/card-grid';
import { BusinessOutcomes } from '@/components/ai-app/business-outcomes';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import { ExternalReferences } from '@/components/external-references';
import {
	aiAppCapabilities,
	aiAppFaqs,
	aiAppHero,
	aiAppIntro,
	aiAppReferences,
	aiAppWhoFor,
	securityReliability,
} from '@/data/ai-application-development';

const DESCRIPTION =
	'TechnoKraft builds enterprise AI applications: generative AI, RAG systems, AI assistants, document intelligence and workflow automation, engineered around measurable business outcomes.';

export const metadata = {
  title: 'Enterprise AI Application Development | TechnoKraft',
  description: 'TechnoKraft Consultancy Services engineers telecommunications infrastructure...'};

export default function AiApplicationDevelopmentPage() {
	return (
		<main>
			<PageHero
				eyebrow="AI Application Development"
				title={aiAppHero.title}
				lede={aiAppHero.lede}
				primaryCta={{ label: 'Build an AI Application', topic: 'ai-application-development' }}
				secondaryCta={{ label: 'Talk to an Expert', topic: 'ai-application-development' }}
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Solutions', href: '/solutions' },
					{ label: 'AI Application Development' },
				]}
				chip={aiAppHero.chip}
			/>
			<ProseSection title={aiAppIntro.title} paragraphs={aiAppIntro.paragraphs} />
			<CardGrid
				eyebrow="What we deliver"
				title="AI capabilities, engineered to ship"
				cards={aiAppCapabilities}
				columns={3}
			/>
			<BusinessOutcomes />
			<ProseSection
				title={securityReliability.title}
				paragraphs={securityReliability.paragraphs}
				links={[{ label: 'Cybersecurity', href: '/solutions/cybersecurity' }]}
			/>
			<ProseSection title={aiAppWhoFor.title} paragraphs={aiAppWhoFor.paragraphs} dark />
			<FaqSection items={aiAppFaqs} />
			<CtaBand
				title="Have a process AI could measurably improve?"
				sub="The first deliverable is a written definition of what 'working' means — not a demo."
				primaryLabel="Build an AI Application"
				secondaryLabel="Talk to an Expert"
				topic="ai-application-development"
			/>
			<ExternalReferences references={aiAppReferences} />
		</main>
	);
}
