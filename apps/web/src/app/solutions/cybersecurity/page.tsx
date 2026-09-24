import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { CardGrid } from '@/components/card-grid';
import { ProcessTimeline } from '@/components/process-timeline';
import { Technologies } from '@/components/cybersecurity/technologies';
import { FaqSection } from '@/components/faq-section';
import { CtaBand } from '@/components/cta-band';
import { ExternalReferences } from '@/components/external-references';
import {
	cyberCapabilities,
	cyberFaqs,
	cyberHero,
	cyberIntro,
	cyberReferences,
	cyberTimeline,
	cyberWhoFor,
	engagementIntro,
	findingsNote,
} from '@/data/cybersecurity';

const DESCRIPTION =
	'TechnoKraft delivers enterprise cybersecurity services: security assessment and VAPT, network and endpoint security, SIEM and SOC monitoring, cloud and identity security, and incident response.';

export const metadata = {
  title: 'Enterprise Cybersecurity Services: SOC, Monitoring, VAPT | TechnoKraft',
  description: 'TechnoKraft Consultancy Services engineers telecommunications infrastructure...'};

export default function CybersecurityPage() {
	return (
		<main>
			<PageHero
				eyebrow="Cybersecurity"
				title={cyberHero.title}
				lede={cyberHero.lede}
				primaryCta={{ label: 'Assess Your Security', topic: 'cybersecurity' }}
				secondaryCta={{ label: 'Talk to an Expert', topic: 'cybersecurity' }}
				breadcrumbs={[
					{ label: 'Home', href: '/' },
					{ label: 'Solutions', href: '/solutions' },
					{ label: 'Cybersecurity' },
				]}
				chip={cyberHero.chip}
			/>
			<ProseSection title={cyberIntro.title} paragraphs={cyberIntro.paragraphs} />
			<CardGrid
				eyebrow="What we deliver"
				title="The full posture, covered"
				cards={cyberCapabilities}
				columns={3}
				note={findingsNote}
			/>
			<ProcessTimeline
				eyebrow="Engagement model"
				title="How an engagement typically runs"
				intro={engagementIntro}
				steps={cyberTimeline}
				dark
			/>
			<Technologies />
			<ProseSection
				title={cyberWhoFor.title}
				paragraphs={cyberWhoFor.paragraphs}
				links={[
					{ label: 'AI Data Centre & AI Infrastructure', href: '/solutions/ai-data-centre' },
					{ label: 'Telecom Solutions', href: '/solutions/telecom' },
				]}
			/>
			<FaqSection items={cyberFaqs} />
			<CtaBand
				title="Unsure where your security gaps are?"
				sub="An initial assessment is designed to surface exactly that kind of drift."
				primaryLabel="Assess Your Security"
				secondaryLabel="Talk to an Expert"
				topic="cybersecurity"
			/>
			<ExternalReferences references={cyberReferences} />
		</main>
	);
}
