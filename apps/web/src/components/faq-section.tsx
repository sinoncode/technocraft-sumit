import type { Faq } from '@/lib/content';
import { SectionHeading } from '@/components/section-heading';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type FaqSectionProps = {
	items: Faq[];
	title?: string;
	dark?: boolean;
};

export function FaqSection({ items, title = 'Frequently asked questions', dark }: FaqSectionProps) {
	return (
		<section
			className={cn(
				'relative border-b py-20 sm:py-24',
				dark ? 'border-cream/10 bg-ink text-cream' : 'border-cream/10 bg-mesh-cream text-cream',
			)}
		>
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<SectionHeading title={title} dark={dark} />
				<Accordion type="single" collapsible className="mt-10 space-y-3">
					{items.map((item, index) => (
						<AccordionItem
							key={item.q}
							value={`faq-${index}`}
							className={cn(
								'overflow-hidden rounded-2xl border px-5 transition-colors',
								dark
									? 'border-cream/12 bg-ink-soft/80 data-[state=open]:border-cyan/40'
									: 'border-cream/10 bg-card/80 shadow-soft data-[state=open]:border-cyan/40',
							)}
						>
							<AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
								{item.q}
							</AccordionTrigger>
							<AccordionContent
								className={cn(
									'text-sm leading-relaxed',
									dark ? 'text-cream/70' : 'text-cream/70',
								)}
							>
								{item.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
