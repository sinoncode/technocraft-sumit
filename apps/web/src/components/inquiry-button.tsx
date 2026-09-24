"use client";
import { useInquiry } from '@/components/inquiry-dialog';
import { cn } from '@/lib/utils';

type Topic =
	| 'general'
	| 'telecom'
	| 'ai-data-centre'
	| 'cybersecurity'
	| 'ai-application-development'
	| 'it-staffing';

type InquiryButtonProps = {
	label: string;
	topic?: Topic;
	variant?: 'primary' | 'outline-dark' | 'outline-light';
	className?: string;
};

/** CTA button that opens the expert-inquiry dialog. */
export function InquiryButton({
	label,
	topic = 'general',
	variant = 'primary',
	className,
}: InquiryButtonProps) {
	const inquiry = useInquiry();

	return (
		<button
			type="button"
			onClick={() => inquiry.open(topic)}
			className={cn(
				'group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 font-display text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-[0.98]',
				variant === 'primary' &&
					'bg-ultramarine text-primary-foreground shadow-soft-primary hover:bg-gradient-to-r hover:from-cyan hover:to-ultramarine-bright hover:shadow-glow-cyan',
				variant === 'outline-dark' &&
					'border border-cream/20 bg-transparent text-cream hover:border-cyan/50 hover:bg-ultramarine/15',
				variant === 'outline-light' &&
					'glass text-cream hover:border-cyan/50 hover:bg-cream/10',
				className,
			)}
		>
			{label}
		</button>
	);
}
