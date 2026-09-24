import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'Contact TechnoKraft | Talk to an Expert in Your Discipline',
  description: 'Contact TechnoKraft Consultancy Services. The first response comes from someone who works in the relevant discipline — telecom, AI infrastructure, cybersecurity, AI applications or IT staffing.'};

export default function ContactPage() {
	return (
		<main>
			<PageHero
				eyebrow="Contact"
				title="Talk to someone who works in your discipline"
				lede="Tell us about your environment and the problem you are working on. The first response comes from someone in the relevant pillar — telecom, AI infrastructure, cybersecurity, AI application development or IT staffing — not a general sales contact. Call, email, or request a consultation through the form."
				primaryCta={{ label: 'Call Us', href: 'tel:+17328061984' }}
				secondaryCta={{ label: 'Send a Message', href: '#contact-form' }}
				breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
				chip="Irving, TX · Head office"
			/>
			<section className="border-b border-ink/10 bg-cream py-20 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
						<div>
							<SectionHeading
								eyebrow="How to reach us"
								title="Channels and response"
							/>
							<div className="mt-8">
								<ContactInfo />
							</div>
						</div>
						<div id="contact-form">
							<SectionHeading
								eyebrow="Request a consultation"
								title="Tell us about your requirement"
							/>
							<p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
								A consultation request and a general inquiry share this form — select the pillar
								that best matches so we route you to someone in that discipline.
							</p>
							<div className="mt-8">
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
