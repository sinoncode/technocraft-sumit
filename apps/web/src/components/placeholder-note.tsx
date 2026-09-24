import { cn } from '@/lib/utils';

/**
 * Renders a bracketed unverified-fact placeholder from the content batch as a
 * visible editor note. These must stay on the page until confirmed — never
 * replaced with invented facts.
 */
export function PlaceholderNote({ text, dark }: { text: string; dark?: boolean }) {
	return (
		<p
			className={cn(
				'mt-6 rounded-xl border border-dashed border-amber-400/40 bg-amber-500/10 px-4 py-3 font-mono-tech text-xs leading-relaxed text-cream/80',
				dark && 'border-amber-300/35',
			)}
		>
			<span className="mr-2 font-display font-semibold uppercase tracking-wider text-cyan-bright">
				Editor note
			</span>
			{text}
		</p>
	);
}
