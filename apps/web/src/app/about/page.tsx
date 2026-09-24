import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { PillarCards } from '@/components/pillar-cards';
import { ProcessTimeline } from '@/components/process-timeline';
import { CardGrid } from '@/components/card-grid';
import { CtaBand } from '@/components/cta-band';
import { ExternalReferences } from '@/components/external-references';
import {
	aboutCta,
	aboutHero,
	aboutIndustries,
	aboutReferences,
	deliveryPhilosophy,
	engineeringApproach,
	globalDelivery,
	howOrganised,
	technologyDomains,
	whoWeAre,
	whyOrganisations,
	whyOrganisationsPlaceholder,
} from '@/data/about';

export const metadata = {
  title: 'About TechnoKraft Consultancy Services | Telecom, AI Infrastructure, Cybersecurity',
  description: 'TechnoKraft Consultancy Services LLC engineers telecommunications infrastructure, AI infrastructure, cybersecurity, AI applications and technology staffing for organisations operating in complex technology environments.'};

export default function AboutPage() {
	return (
		<main>
			<PageHero
				eyebrow="About TechnoKraft"
				title={aboutHero.title}
				lede={aboutHero.lede}
				primaryCta={{ label: 'Talk to an Expert', topic: 'general' }}
				secondaryCta={{ label: 'Discuss Your Project', topic: 'general' }}
				chip="Engineering-led, not sales-led"
			/>
			<ProseSection
				title={whoWeAre.title}
				paragraphs={whoWeAre.paragraphs}
				placeholders={whoWeAre.placeholders}
			/>
			<PillarCards variant="about" eyebrow="What we do" title="Five connected practices" />
			<ProseSection
				title={engineeringApproach.title}
				paragraphs={engineeringApproach.paragraphs}
				dark
			/>
			<ProseSection title={technologyDomains.title} paragraphs={technologyDomains.paragraphs} />
			<ProcessTimeline
				eyebrow="Delivery philosophy"
				title="Delivery philosophy"
				steps={deliveryPhilosophy}
				dark
			/>
			<ProseSection title={aboutIndustries.title} paragraphs={aboutIndustries.paragraphs} />
			<ProseSection
				title={globalDelivery.title}
				paragraphs={globalDelivery.paragraphs}
				placeholders={globalDelivery.placeholders}
			/>
			<CardGrid
				eyebrow="Why TechnoKraft"
				title="Why organisations work with us"
				cards={whyOrganisations}
				columns={4}
				note={whyOrganisationsPlaceholder}
			/>
			<ProseSection title={howOrganised.title} paragraphs={howOrganised.paragraphs} dark />
			<CtaBand
				title={aboutCta.title}
				sub={aboutCta.sub}
				primaryLabel="Talk to an Expert"
				secondaryLabel="Discuss Your Project"
			/>
			<ExternalReferences references={aboutReferences} />
		</main>
	);
}
