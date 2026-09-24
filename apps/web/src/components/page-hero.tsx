"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NetworkCanvas } from '@/components/network-canvas';
import { InquiryButton } from '@/components/inquiry-button';

type Crumb = { label: string; href?: string };

type Topic =
	| 'general'
	| 'telecom'
	| 'ai-data-centre'
	| 'cybersecurity'
	| 'ai-application-development'
	| 'it-staffing';

type HeroCta = {
	label: string;
	topic?: Topic;
	/** Render as a link (page or in-page anchor) instead of opening the inquiry dialog. */
	href?: string;
};

type PageHeroProps = {
	eyebrow?: string;
	title: string;
	lede: string;
	primaryCta?: HeroCta;
	secondaryCta?: HeroCta;
	breadcrumbs?: Crumb[];
	/** Off-grid signature chip, rotated and displaced from the text column. */
	chip?: string;
};

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function PageHero({
	eyebrow,
	title,
	lede,
	primaryCta,
	secondaryCta,
	breadcrumbs,
	chip,
}: PageHeroProps) {
	return (
		<section className="relative -mt-16 min-h-[min(74dvh,40rem)] overflow-hidden border-b border-ink-raised/60 pt-16 text-cream">
			<div className="bg-mesh-ink absolute inset-0" aria-hidden />
			<div className="absolute inset-0 opacity-55">
				<NetworkCanvas />
			</div>
			<div className="bg-grid-faint-dark absolute inset-0 opacity-30" aria-hidden />
			<div
				className="bg-aurora animate-aurora-drift pointer-events-none absolute -right-[10%] -top-[20%] h-[60%] w-[55%] rounded-full opacity-50"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						'linear-gradient(115deg, hsl(234 70% 24% / 0.6) 0%, transparent 48%), radial-gradient(ellipse 75% 65% at 22% 38%, transparent 0%, hsl(232 32% 6% / 0.6) 100%)',
				}}
				aria-hidden
			/>
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="relative mx-auto flex min-h-[min(74dvh,40rem)] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
			>
				{breadcrumbs && breadcrumbs.length > 0 ? (
					<motion.nav variants={item} aria-label="Breadcrumb" className="mb-8">
						<ol className="flex flex-wrap items-center gap-2 font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-cream/50">
							{breadcrumbs.map((crumb, index) => (
								<li key={crumb.label} className="flex items-center gap-2">
									{index > 0 ? (
										<span className="text-cyan/60" aria-hidden>
											/
										</span>
									) : null}
									{crumb.href ? (
										<Link
											href={crumb.href}
											className="underline-offset-4 transition-colors hover:text-cyan-bright hover:underline"
										>
											{crumb.label}
										</Link>
									) : (
										<span className="text-cream/85">{crumb.label}</span>
									)}
								</li>
							))}
						</ol>
					</motion.nav>
				) : null}
				{eyebrow ? (
					<motion.div variants={item} className="flex items-center gap-3">
						<span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-bright" aria-hidden />
						<motion.p className="font-mono-tech text-xs font-medium uppercase tracking-[0.24em] text-cyan-bright">
							{eyebrow}
						</motion.p>
					</motion.div>
				) : null}
				<motion.h1
					variants={item}
					className="mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]"
				>
					{title}
				</motion.h1>
				<motion.p
					variants={item}
					className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-cream/75 sm:text-lg"
				>
					{lede}
				</motion.p>
				{primaryCta || secondaryCta ? (
					<motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
						{primaryCta ? (
							primaryCta.href ? (
								<a
									href={primaryCta.href}
									className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ultramarine px-7 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary transition-all hover:-translate-y-0.5 hover:bg-ultramarine-bright active:scale-[0.98]"
								>
									{primaryCta.label}
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
								</a>
							) : (
								<InquiryButton label={primaryCta.label} topic={primaryCta.topic ?? 'general'} />
							)
						) : null}
						{secondaryCta ? (
							secondaryCta.href ? (
								<a
									href={secondaryCta.href}
									className="glass inline-flex h-12 items-center justify-center rounded-full px-7 font-display text-sm font-semibold text-cream transition-colors hover:border-cyan/50 hover:bg-cream/10"
								>
									{secondaryCta.label}
								</a>
							) : (
								<InquiryButton
									label={secondaryCta.label}
									topic={secondaryCta.topic ?? 'general'}
									variant="outline-light"
								/>
							)
						) : null}
					</motion.div>
				) : null}
			</motion.div>
			{chip ? (
				<motion.div
					initial={{ opacity: 0, rotate: 6, y: 16 }}
					animate={{ opacity: 1, rotate: 3, y: 0 }}
					transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
					className="glass absolute -right-4 bottom-10 hidden rounded-full px-5 py-3 font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-bright shadow-glow-cyan lg:block"
				>
					{chip}
				</motion.div>
			) : null}
		</section>
	);
}
