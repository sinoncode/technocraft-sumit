import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { ProcessTimeline } from '@/components/process-timeline';
import { CardGrid } from '@/components/card-grid';
import { CapabilitiesList } from '@/components/telecom/capabilities-list';
import { WhoWeWorkWith } from '@/components/telecom/who-we-work-with';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import { ExternalReferences } from '@/components/external-references';
import {
	endToEnd,
	telecomFaqs,
	telecomHero,
	telecomIndustries,
	telecomLifecycle,
	telecomReferences,
	telecomServices,
	telecomStaffing,
} from '@/data/telecom';

const DESCRIPTION =
	'TechnoKraft delivers telecommunications infrastructure services from field survey and RF design through network deployment, optimisation and fibre construction, for carriers, OEMs, tower companies and fibre operators.';

export const metadata = {
  title: 'Telecommunications Infrastructure Services: RF, Deployment, Fibre | TechnoKraft',
  description: 'TechnoKraft Consultancy Services engineers telecommunications infrastructure...'};

export default function TelecomPage() {
	return (
		<main>
			<PageHero
				eyebrow="Telecom Solutions"
				title={telecomHero.title}
				lede={telecomHero.lede}
				primaryCta={{ label: 'Discuss Your Project', topic: 'telecom' }}
				secondaryCta={{ label: 'Talk to an Expert', topic: 'telecom' }}
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Solutions', href: '/solutions' },
					{ label: 'Telecom Solutions' },
				]}
				chip={telecomHero.chip}
			/>
			<ProseSection title={endToEnd.title} paragraphs={endToEnd.paragraphs} />
			<ProcessTimeline
				eyebrow="One accountable program"
				title="From survey to optimisation"
				steps={telecomLifecycle}
				dark
			/>
			<CardGrid
				eyebrow="Our services"
				title="Six services, one lifecycle"
				cards={telecomServices}
				columns={3}
			/>
			<CapabilitiesList />
			<WhoWeWorkWith />
			<ProseSection
				title={telecomIndustries.title}
				paragraphs={telecomIndustries.paragraphs}
				dark
			/>
			<ProseSection
				title={telecomStaffing.title}
				paragraphs={telecomStaffing.paragraphs}
				links={[{ label: 'IT Staffing', href: '/solutions/it-staffing' }]}
			/>
			<FaqSection items={telecomFaqs} />
			<CtaBand
				title="Planning a network build or optimisation program?"
				sub="Talk to the engineers who would scope and deliver it."
				primaryLabel="Discuss Your Project"
				secondaryLabel="Talk to an Expert"
				topic="telecom"
			/>
			<ExternalReferences references={telecomReferences} />
		</main>
	);
}
