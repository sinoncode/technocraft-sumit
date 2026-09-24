"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { InquiryButton } from '@/components/inquiry-button';
import { NetworkCanvas } from '@/components/network-canvas';
import { homeHero } from '@/data/home';
import { homeMedia } from '@/data/home-media';

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

const item = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

/** Full-bleed intelligent-infrastructure hero: photo base, network signal, gradient display type. */
export function HomeHero() {
	return (
		<section className="relative -mt-16 min-h-[100dvh] overflow-hidden pt-16 text-cream">
			<img
				src={homeMedia.hero}
				alt=""
				className="absolute inset-0 h-full w-full scale-105 object-cover"
				fetchPriority="high"
			/>
			<div
				className="absolute inset-0"
				style={{
					background:
						'linear-gradient(108deg, hsl(234 84% 18% / 0.96) 0%, hsl(240 34% 8% / 0.88) 42%, hsl(232 70% 28% / 0.55) 100%)',
				}}
				aria-hidden
			/>
			<div className="absolute inset-0 opacity-50">
				<NetworkCanvas />
			</div>
			<div className="bg-grid-faint-dark absolute inset-0 opacity-20" aria-hidden />
			<div
				className="bg-aurora animate-aurora-drift pointer-events-none absolute -right-[12%] -top-[18%] h-[58%] w-[52%] rounded-full opacity-45"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-0 opacity-50"
				style={{
					background:
						'radial-gradient(ellipse 70% 60% at 78% 40%, hsl(188 95% 53% / 0.2) 0%, transparent 60%)',
				}}
				aria-hidden
			/>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="relative mx-auto grid min-h-[min(92dvh,52rem)] max-w-7xl items-center gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32"
			>
				<div>
					<motion.div variants={item}>
						<span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-4 py-1.5 font-mono-tech text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-cream/85 backdrop-blur">
							<span className="h-1.5 w-1.5 rounded-full bg-cyan-bright" aria-hidden />
							Engineering Digital Success · Connect · Compute · Secure · Operate
						</span>
					</motion.div>
					<motion.h1
						variants={item}
						className="mt-7 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]"
					>
						<span className="block text-cream">Intelligent</span>
						<span className="block text-gradient">Infrastructure</span>
						<span className="mt-1 block text-cream">for the AI Era</span>
					</motion.h1>
					<motion.p
						variants={item}
						className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-cream/80 sm:text-lg"
					>
						{homeHero.lede}
					</motion.p>
					<motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
						<InquiryButton label="Get in Touch" topic="general" />
						<Link
							href="/solutions"
							className="group glass inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 font-display text-sm font-semibold text-cream transition-all hover:border-cyan/50 hover:bg-cream/10"
						>
							Explore Solutions
							<ArrowRight
								className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
								aria-hidden
							/>
						</Link>
					</motion.div>
					<motion.p
						variants={item}
						className="mt-8 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-cream/45"
					>
						Serving carriers, enterprises, healthcare, data centers &amp; public sector
					</motion.p>
				</div>

				<motion.div variants={item} className="relative mx-auto hidden w-full max-w-md lg:block">
					<div className="relative aspect-square overflow-hidden rounded-[2rem] border border-cream/15 shadow-soft-lg">
						<img
							src={homeMedia.gpu}
							alt="GPU compute infrastructure in an enterprise data hall"
							className="h-full w-full object-cover"
							loading="eager"
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									'linear-gradient(to top, hsl(232 32% 6% / 0.75) 0%, transparent 55%), radial-gradient(circle at 50% 40%, hsl(188 95% 53% / 0.15), transparent 60%)',
							}}
							aria-hidden
						/>
						<div className="absolute inset-x-0 bottom-0 p-6">
							<p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-cyan-bright">
								AI infrastructure · Engineered delivery
							</p>
							<p className="mt-2 font-display text-lg font-semibold text-cream">
								From fiber in the ground to GPU fabric in production
							</p>
						</div>
					</div>
					<div
						className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,hsl(188_95%_53%_/_0.18),transparent_65%)]"
						aria-hidden
					/>
				</motion.div>
			</motion.div>

			<a
				href="#solutions-explorer"
				className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 transition hover:text-cyan-bright sm:flex"
				aria-label="Scroll to solutions"
			>
				<span className="font-mono-tech text-[0.6rem] font-semibold uppercase tracking-[0.3em]">
					Scroll
				</span>
				<ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
			</a>
		</section>
	);
}
