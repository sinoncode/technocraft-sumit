import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ProseSection } from '@/components/prose-section';
import { IndustryCards } from '@/components/industries/industry-cards';
import { CtaBand } from '@/components/cta-band';
import { industriesHub, industryPages, industryHref } from '@/data/industries-pages';

export const metadata = {
  title: 'Industries We Serve | TechnoKraft Consultancy Services',
  description: 'TechnoKraft Consultancy Services supports telecommunications, enterprise, healthcare, data center, technology, and government organizations across telecom, AI infrastructure, cybersecurity, AI applications and staffing.'};

export default function IndustriesPage() {
	return (
		<main>
			<PageHero
				eyebrow="Industries"
				title={industriesHub.title}
				lede={industriesHub.lede}
				primaryCta={{ label: 'Talk to an Expert', topic: 'general' }}
				secondaryCta={{ label: 'Discuss Your Project', topic: 'general' }}
				breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
				chip="Six sectors · Practitioner lens"
			/>
			<section className="border-b border-ink/10 bg-cream py-20 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<IndustryCards />
				</div>
			</section>
			<ProseSection title={industriesHub.whyTitle} paragraphs={industriesHub.whyParagraphs} dark />
			<CtaBand
				title="Not sure which industry framing fits?"
				sub="Start with the constraint you are under — spectrum, uptime, compliance, compute density or hiring speed. We will map the right pillars."
				primaryLabel="Talk to an Expert"
				secondaryLabel="Discuss Your Project"
			/>
		</main>
	);
}
