import { cn } from '@/lib/utils';

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	lede?: string;
	dark?: boolean;
	align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, lede, dark, align = 'left' }: SectionHeadingProps) {
	return (
		<div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
			{eyebrow ? (
				<div
					className={cn(
						'flex items-center gap-3',
						align === 'center' && 'justify-center',
					)}
				>
					<span
						className={cn(
							'h-px w-8',
							dark ? 'bg-gradient-to-r from-transparent to-cyan-bright' : 'bg-gradient-to-r from-transparent to-ultramarine',
						)}
						aria-hidden
					/>
					<p
						className={cn(
							'font-mono-tech text-xs font-medium uppercase tracking-[0.24em]',
							dark ? 'text-cyan-bright' : 'text-ultramarine',
						)}
					>
						{eyebrow}
					</p>
					<span
						className={cn(
							'h-px w-8',
							dark ? 'bg-gradient-to-l from-transparent to-cyan-bright' : 'bg-gradient-to-l from-transparent to-ultramarine',
							align === 'center' ? 'block' : 'hidden',
						)}
						aria-hidden
					/>
				</div>
			) : null}
			<h2
				className={cn(
					'mt-4 text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl',
					dark ? 'text-cream' : 'text-foreground',
				)}
			>
				{title}
			</h2>
			{lede ? (
				<p
					className={cn(
						'mt-4 text-pretty text-base leading-relaxed sm:text-lg',
						dark ? 'text-cream/70' : 'text-muted-foreground',
					)}
				>
					{lede}
				</p>
			) : null}
		</div>
	);
}
