"use client";
import Link from 'next/link';
import { pillars, pillarHref } from '@/data/pillars';
import { useInquiry } from '@/components/inquiry-dialog';
import { BrandLogo } from '@/components/brand-logo';

import { useEffect, useState } from "react";

const COMPANY_LINKS = [
	{ label: 'About Us', to: '/about' },
	{ label: 'Industries', to: '/industries' },
	{ label: 'Careers', to: '/careers' },
	{ label: 'Insights', to: '/insights' },
	{ label: 'White Papers', to: '/white-papers' },
	{ label: 'Contact Us', to: '/contact' },
];
interface TypingTextProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterTyping?: number;
  pauseAfterDeleting?: number;
  startDelay?: number;
  className?: string;
}

export default function TypingText({
  text,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseAfterTyping = 2200,
  pauseAfterDeleting = 700,
  startDelay = 500,
  className = "",
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">(
    "typing"
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayedText.length < text.length) {
        const variation = Math.random() * 30 - 15;
        const delay = Math.max(45, typingSpeed + variation);

        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, pauseAfterTyping);
      }
    }

    if (phase === "deleting") {
      if (displayedText.length > 0) {
        const variation = Math.random() * 15 - 7;
        const delay = Math.max(25, deletingSpeed + variation);

        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setPhase("typing");
        }, pauseAfterDeleting);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    phase,
    text,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseAfterDeleting,
  ]);

  return (
    <span className={className}>
      {displayedText}
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-cyan-bright"
      />
    </span>
  );
}
export function SiteFooter() {
	const inquiry = useInquiry();

	return (
		<footer className="bg-mesh-ink relative overflow-hidden border-t border-cream/10 text-cream">
			<div className="bg-grid-faint-dark absolute inset-0 opacity-20" aria-hidden />
			<div
				className="bg-aurora animate-aurora-drift pointer-events-none absolute -left-[15%] -top-[30%] h-[60%] w-[55%] rounded-full opacity-30"
				aria-hidden
			/>
			<div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
					<div>
						<BrandLogo />
						<p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-cream/70">
							Telecommunications infrastructure, AI data-centre capability, cybersecurity, AI
							applications and specialised technology talent — five connected practices, one
							accountable partner.
						</p>
						

						<ul className="mt-4 space-y-2.5 text-sm">
							
							<li>
								<a
									href="tel:+17328061984"
									className="text-cream/80 underline-offset-4 transition-colors hover:text-cyan-bright hover:underline"
								>
									(405)469 676 6531
								</a>
							</li>
							<li>
								<a
									href="tel:+14696766531"
									className="text-cream/80 underline-offset-4 transition-colors hover:text-cyan-bright hover:underline"
								>
									+1-732-806-1984
								</a>
							</li>
							<li>
								<a
									href="mailto:sales@technokraftserve.com"
									className="text-cream/80 underline-offset-4 transition-colors hover:text-cyan-bright hover:underline"
								>
									
sales@technokraftserve.com

								</a>
							</li>
						</ul>
					</div>
					<nav aria-label="Solutions">
						<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-cream/50">
							Solutions
						</p>
						<ul className="mt-4 space-y-2.5 text-sm">
							{pillars.map(pillar => (
								<li key={pillar.slug}>
									<Link
										href={pillarHref(pillar.slug)}
										className="text-cream/80 underline-offset-4 transition-colors hover:text-cyan-bright hover:underline"
									>
										{pillar.name}
									</Link>
								</li>
							))}
							<li>
								<Link
									href="/solutions"
									className="text-cream/80 underline-offset-4 transition-colors hover:text-cyan-bright hover:underline"
								>
									All solutions
								</Link>
							</li>
						</ul>
					</nav>
					<nav aria-label="Company">
						<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-cream/50">
							Company
						</p>
						<ul className="mt-4 space-y-2.5 text-sm">
							{COMPANY_LINKS.map(link => (
								<li key={link.to}>
									<Link
										href={link.to}
										className="text-cream/80 underline-offset-4 transition-colors hover:text-cyan-bright hover:underline"
									>
										{link.label}
									</Link>
								</li>
							))}
						
						</ul>
					</nav>
					<div>
						<p className="font-mono-tech text-xs font-medium uppercase tracking-[0.18em] text-cream/50">
							Address
						</p>
						<ul className="mt-4 space-y-2.5 text-sm">
							
							<li className="pt-1  text-cyan-bright/75 font-semibold">
								1303 W. Suite Number: 130, Walnut Hill, <br/>Irving TX 75038
							</li>
						</ul>
						<p className="mt-4 text-pretty text-sm leading-relaxed text-cream/70">
							Have a complex technology requirement? The first conversation is with someone who
							works in that discipline.
						</p>
						<button
							type="button"
							onClick={() => inquiry.open('general')}
							className="mt-5 inline-flex h-11 items-center rounded-full bg-ultramarine px-5 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary transition-all hover:-translate-y-0.5 hover:bg-ultramarine-bright active:scale-[0.98]"
						>
							Book a Consultation
						</button>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-3  pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-center">
			<TypingText
  text="Engineering Digital Success! Connect · Compute · Secure · Intelligence · Operate"
  typingSpeed={95}
  deletingSpeed={40}
  pauseAfterTyping={2500}
  pauseAfterDeleting={700}
  startDelay={600}
  className="mt-4 font-mono-tech text-[13px] uppercase tracking-[0.18em] font-semibold text-cyan-bright/75"
/>
				</div>
				<div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
						<p>© 2026 TechnoKraft Consultancy Services LLC. All rights reserved.</p>
						<Link
							href="/content-planning"
							className="font-mono-tech text-[11px] uppercase tracking-wider text-cream/35 underline-offset-4 transition-colors hover:text-cyan-bright hover:underline"
						>
							Content planning
						</Link>
					</div>
					<p className="font-display text-sm font-semibold tracking-tight text-cream/65">
						Building the networks and systems that connect tomorrow.
					</p>
				</div>
			</div>
		</footer>
	);
}
