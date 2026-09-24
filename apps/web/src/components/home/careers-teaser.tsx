import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { homeMedia } from '@/data/home-media';

export function CareersTeaser() {
	return (
		<section className="relative overflow-hidden border-b border-ink-raised/60 text-cream">
			<img
				src={homeMedia.careers}
				alt=""
				className="absolute inset-0 h-full w-full object-cover"
				loading="lazy"
			/>
			<div
				className="absolute inset-0"
				style={{
					background:
						'linear-gradient(100deg, hsl(234 80% 24% / 0.95) 0%, hsl(240 34% 12% / 0.82) 55%, hsl(232 76% 38% / 0.55) 100%)',
				}}
				aria-hidden
			/>
			<div className="bg-grid-faint-dark absolute inset-0 opacity-25" aria-hidden />
			<div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
				<div className="max-w-xl">
					<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.24em] text-cyan-bright">
						Our careers
					</p>
					<h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
						Join the delivery team
					</h2>
					<p className="mt-4 text-pretty text-base leading-relaxed text-cream/80">
						TechnoKraft hires engineers and specialists across telecom, AI infrastructure,
						cybersecurity, AI applications and technical recruiting. Roles are listed as they open —
						speculative applications are welcome when no matching post is live.
					</p>
					<Link
						href="/careers"
						className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ultramarine px-7 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary transition-all hover:-translate-y-0.5 hover:bg-ultramarine-bright active:scale-[0.98]"
					>
						Our Careers
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</div>
			</div>
		</section>
	);
}
