import Link from 'next/link';
import { InquiryButton } from '@/components/inquiry-button';
import { homeMedia } from '@/data/home-media';
import { cn } from '@/lib/utils';

type CtaBandProps = {
	title: string;
	sub?: string;
	primaryLabel: string;
	secondaryLabel?: string;
	secondaryHref?: string;
	topic?:
		| 'general'
		| 'telecom'
		| 'ai-data-centre'
		| 'cybersecurity'
		| 'ai-application-development'
		| 'it-staffing';
	/** Photo-backed rounded banner (home-style). */
	photo?: boolean;
};

/** Full-width closing CTA band — mesh or photographic. */
export function CtaBand({
	title,
	sub,
	primaryLabel,
	secondaryLabel,
	secondaryHref,
	topic = 'general',
	photo = false,
}: CtaBandProps) {
	if (photo) {
		return (
			<section className="border-b border-cream/10 bg-ink py-14 sm:py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="relative overflow-hidden rounded-[1.75rem] text-cream shadow-soft-lg">
						<img
							src={homeMedia.cta}
							alt=""
							className="absolute inset-0 h-full w-full object-cover"
							loading="lazy"
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									'linear-gradient(105deg, hsl(234 84% 30% / 0.93) 0%, hsl(240 34% 12% / 0.8) 100%)',
							}}
							aria-hidden
						/>
						<div className="bg-grid-faint-dark absolute inset-0 opacity-25" aria-hidden />
						<div className="relative px-8 py-14 text-center sm:px-12 sm:py-16">
							<h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
								{title}
							</h2>
							{sub ? (
								<p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-cream/80 sm:text-lg">
									{sub}
								</p>
							) : null}
							<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
								<InquiryButton label={primaryLabel} topic={topic} />
								{secondaryLabel ? (
									secondaryHref ? (
										<Link
											href={secondaryHref}
											className="glass inline-flex h-12 items-center justify-center rounded-full px-7 font-display text-sm font-semibold text-cream transition-colors hover:border-cyan/50 hover:bg-cream/10"
										>
											{secondaryLabel}
										</Link>
									) : (
										<InquiryButton
											label={secondaryLabel}
											topic={topic}
											variant="outline-light"
										/>
									)
								) : null}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="bg-mesh-ink relative overflow-hidden border-b border-ink-raised/60 py-20 text-cream sm:py-24">
			<div className="bg-grid-faint-dark absolute inset-0 opacity-25" aria-hidden />
			<div className="bg-aurora animate-aurora-drift pointer-events-none absolute -left-[10%] -bottom-[20%] h-[55%] w-[50%] rounded-full opacity-40" aria-hidden />
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div
					className={cn(
						'relative overflow-hidden rounded-3xl border border-cream/15 bg-ink-soft/70 p-10 shadow-soft-lg backdrop-blur-md sm:p-14',
					)}
				>
					<div
						className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan/20 blur-3xl"
						aria-hidden
					/>
					<div
						className="absolute -top-3 left-10 rounded-full bg-cyan px-3 py-1 font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-ink shadow-glow-cyan"
						aria-hidden
					>
						Start here
					</div>
					<h2 className="max-w-2xl text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
						{title}
					</h2>
					{sub ? (
						<p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-cream/70 sm:text-lg">
							{sub}
						</p>
					) : null}
					<div className="mt-8 flex flex-wrap gap-4">
						<InquiryButton label={primaryLabel} topic={topic} />
						{secondaryLabel ? (
							secondaryHref ? (
								<Link
									href={secondaryHref}
									className="glass inline-flex h-12 items-center justify-center rounded-full px-7 font-display text-sm font-semibold text-cream transition-colors hover:border-cyan/50 hover:bg-cream/10"
								>
									{secondaryLabel}
								</Link>
							) : (
								<InquiryButton label={secondaryLabel} topic={topic} variant="outline-light" />
							)
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
}
