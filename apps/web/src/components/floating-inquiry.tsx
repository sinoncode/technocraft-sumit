"use client";
import { MessageCircle } from 'lucide-react';
import { useInquiry } from '@/components/inquiry-dialog';

/** Fixed “Talk to an Expert” control — US market primary CTA. */
export function FloatingInquiry() {
	const inquiry = useInquiry();

	return (
		<button
			type="button"
			onClick={() => inquiry.open('general')}
			aria-label="Talk to an Expert — open contact form"
			className="group fixed bottom-6 right-5 z-[60] flex h-14 items-center gap-2.5 rounded-full border border-cream/15 bg-ink/90 px-5 py-3.5 text-sm font-semibold text-cream shadow-soft-primary backdrop-blur-xl transition hover:border-cyan/50 hover:-translate-y-0.5 active:scale-[0.98] sm:right-6 sm:bottom-8"
		>
			<span className="relative flex h-5 w-5 items-center justify-center">
				<span className="absolute inline-flex h-full w-full animate-pulse-signal rounded-full bg-cyan/50 opacity-60" />
				<MessageCircle className="relative h-[18px] w-[18px] text-cyan-bright" aria-hidden />
			</span>
			<span className="hidden font-display sm:inline">Talk to an Expert</span>
		</button>
	);
}
