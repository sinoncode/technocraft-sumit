import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { CardGrid } from '@/components/card-grid';
import { OpenRoles } from '@/components/careers/open-roles';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import {
	careersApply,
	careersBenefits,
	careersBenefitsPlaceholder,
	careersFaqs,
	careersHero,
	careersIntro,
	careersValues,
} from '@/data/careers';

export const metadata = {
  title: 'Careers at TechnoKraft | Engineering Roles Across Five Practices',
  description: 'TechnoKraft hires practitioners across telecom, AI infrastructure, cybersecurity, AI application development and technical recruiting. View open roles and submit a speculative application.'};

export default function CareersPage() {
	return (
		<main>
			<PageHero
				eyebrow="Careers"
				title={careersHero.title}
				lede={careersHero.lede}
				primaryCta={{ label: 'View open roles', href: '#open-roles' }}
				secondaryCta={{ label: 'Talk to an Expert', topic: 'general' }}
				breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
				chip={careersHero.chip}
			/>
			<ProseSection title={careersIntro.title} paragraphs={careersIntro.paragraphs} />
			<CardGrid
				eyebrow="How we work"
				title="What we value"
				cards={careersValues}
				columns={4}
			/>
			<CardGrid
				eyebrow="Working here"
				title="What you get"
				cards={careersBenefits}
				columns={4}
				note={careersBenefitsPlaceholder}
				dark
			/>
			<div id="open-roles">
				<OpenRoles />
			</div>
			<ProseSection title={careersApply.title} paragraphs={careersApply.paragraphs} dark />
			<FaqSection items={careersFaqs} />
			<CtaBand
				title="Don't see your role?"
				sub="Send a short note about your background and the kind of work you are looking for. Applications are reviewed by practitioners in the relevant discipline."
				primaryLabel="Talk to an Expert"
				secondaryLabel="Discuss Your Project"
			/>
		</main>
	);
}
