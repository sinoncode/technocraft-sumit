import { ExternalLink } from 'lucide-react';
import type { ExternalReference } from '@/lib/content';
import { cn } from '@/lib/utils';

type ExternalReferencesProps = {
	references: ExternalReference[];
	dark?: boolean;
};

export function ExternalReferences({ references, dark }: ExternalReferencesProps) {
	if (references.length === 0) {
		return null;
	}

	return (
		<section
			className={cn(
				'border-b py-14',
				dark ? 'border-cream/10 bg-ink text-cream' : 'border-cream/10 bg-ink-soft text-cream',
			)}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
					External references
				</h2>
				<ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{references.map(reference => (
						<li key={reference.href}>
							<a
								href={reference.href}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									'group flex items-start gap-2 rounded-xl border p-4 text-sm transition-all hover:-translate-y-0.5',
									dark
										? 'border-cream/12 bg-ink-soft hover:border-ultramarine/50'
										: 'border-ink/10 bg-card shadow-soft hover:border-ultramarine/40',
								)}
							>
								<ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-ultramarine" aria-hidden />
								<span className="underline-offset-4 group-hover:underline">{reference.label}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
