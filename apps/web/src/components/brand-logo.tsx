import Link from 'next/link';
import { cn } from '@/lib/utils';

type BrandLogoProps = {
	/** Compact mark for tight spaces */
	compact?: boolean;
	className?: string;
	/** When true, render as a non-link (e.g. inside SheetTitle) */
	asSpan?: boolean;
};

/**
 * Official TechnoKraft wordmark — logo asset used exactly as provided.
 */
export function BrandLogo({ compact, className, asSpan }: BrandLogoProps) {
	const img = (
		<img
			src="/technokraft-logo.png"
			alt="TechnoKraft Consultancy — Engineering Digital Success"
			width={compact ? 160 : 220}
			height={compact ? 48 : 66}
			className={cn(
				'h-auto w-auto object-contain object-left',
				compact ? 'max-h-9 sm:max-h-10' : 'max-h-11 sm:max-h-12',
				className,
			)}
			decoding="async"
		/>
	);

	if (asSpan) {
		return <span className="inline-flex items-center">{img}</span>;
	}

	return (
		<Link
			href="/"
			className="inline-flex items-center transition-opacity hover:opacity-90"
			aria-label="TechnoKraft Consultancy Services — home"
		>
			{img}
		</Link>
	);
}
