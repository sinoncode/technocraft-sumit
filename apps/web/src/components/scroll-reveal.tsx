"use client";
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ScrollRevealProps = {
	children: ReactNode;
	className?: string;
	/** Stagger delay in ms for sibling cards. */
	delay?: number;
};

/** Fade-and-rise on viewport entry; no-op under prefers-reduced-motion. */
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			entries => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.disconnect();
					}
				}
			},
			{ rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={cn(
				'transition-all duration-500 ease-out',
				visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
				className,
			)}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</div>
	);
}
