import { Plus } from 'lucide-react';
import { telecomCapabilities, telecomCapabilitiesNote } from '@/data/telecom';
import { SectionHeading } from '@/components/section-heading';

/** Technical capabilities as a scannable multi-column list, not dense prose. */
export function CapabilitiesList() {
	return (
		<section className="border-b border-ink/10 bg-cream-deep/40 py-20 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading eyebrow="Capability set" title="Technical capabilities" />
				<ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
					{telecomCapabilities.map(capability => (
						<li key={capability} className="flex items-start gap-2.5 text-sm leading-relaxed">
							<Plus className="mt-0.5 h-4 w-4 shrink-0 text-ultramarine" strokeWidth={2.5} aria-hidden />
							{capability}
						</li>
					))}
				</ul>
				<p className="mt-8 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">
					{telecomCapabilitiesNote}
				</p>
			</div>
		</section>
	);
}
