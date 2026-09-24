import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { CardGrid } from '@/components/card-grid';
import { SkillAreas } from '@/components/it-staffing/skill-areas';
import { ProcessTimeline } from '@/components/process-timeline';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import {
	engagementModels,
	engagementModelsNote,
	onboardingNote,
	screeningDifferent,
	staffingFaqs,
	staffingHero,
	staffingIntro,
	staffingLifecycle,
	staffingWhoFor,
} from '@/data/it-staffing';

const DESCRIPTION =
	'TechnoKraft provides IT staffing across network engineering, cybersecurity, cloud, DevOps, AI/ML, data centre and telecom disciplines, on contract, contract-to-hire and direct placement terms.';

export const metadata = {
  title: 'IT Staffing & Technology Resourcing Services | TechnoKraft',
  description: 'TechnoKraft Consultancy Services engineers telecommunications infrastructure...'};

export default function ItStaffingPage() {
	return (
		<main>
			<PageHero
				eyebrow="IT Staffing"
				title={staffingHero.title}
				lede={staffingHero.lede}
				primaryCta={{ label: 'Find Technology Talent', topic: 'it-staffing' }}
				secondaryCta={{ label: 'Talk to an Expert', topic: 'it-staffing' }}
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Solutions', href: '/solutions' },
					{ label: 'IT Staffing' },
				]}
				chip={staffingHero.chip}
			/>
			<ProseSection title={staffingIntro.title} paragraphs={staffingIntro.paragraphs} />
			<CardGrid
				eyebrow="Engagement models"
				title="Terms that match how the requirement behaves"
				cards={engagementModels}
				columns={3}
				note={engagementModelsNote}
			/>
			<SkillAreas />
			<ProcessTimeline
				eyebrow="The staffing lifecycle"
				title="From requirement to resource management"
				steps={staffingLifecycle}
				dark
			/>
			<ProseSection title="Onboarding and beyond" paragraphs={[onboardingNote]} heading={false} />
			<ProseSection
				title={screeningDifferent.title}
				paragraphs={screeningDifferent.paragraphs}
			/>
			<ProseSection title={staffingWhoFor.title} paragraphs={staffingWhoFor.paragraphs} dark />
			<FaqSection items={staffingFaqs} />
			<CtaBand
				title="Have a technical role to fill on a deadline?"
				sub="Candidates are screened by practitioners in the relevant discipline before you interview them."
				primaryLabel="Find Technology Talent"
				secondaryLabel="Talk to an Expert"
				topic="it-staffing"
			/>
		</main>
	);
}
