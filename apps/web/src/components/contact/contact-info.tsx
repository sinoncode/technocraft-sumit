import { Building2, Mail, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

const CHANNELS = [
	{
		icon: Building2,
		title: 'Office',
		body: '1303 W. Suite Number 130, Walnut Hill, Irving, TX 75038.',
	},
	{
		icon: Phone,
		title: 'Phone',
		body: '+1 (732) 806-1984 · +1 (469) 676-6531 ext. 405',
		hrefs: ['tel:+17328061984', 'tel:+14696766531'],
	},
	{
		icon: Mail,
		title: 'Email',
		body: 'sales@technokraftserve.com',
		href: 'mailto:sales@technokraftserve.com',
	},
	{
		icon: Clock,
		title: 'Response time',
		body: 'Most inquiries receive a first response within one to two business days, sooner for time-sensitive infrastructure or security requests.',
	},
];

/** Contact channels with confirmed US office, phone and email. */
export function ContactInfo() {
	return (
		<div className="flex flex-col gap-6">
			<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
				{CHANNELS.map(channel => (
					<li
						key={channel.title}
						className="glow-border rounded-2xl border border-cream/10 bg-card p-5 text-cream shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-soft-lg"
					>
						<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ultramarine/20 text-cyan-bright">
							<channel.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
						</span>
						<h3 className="mt-4 font-display text-base font-semibold">{channel.title}</h3>
						{'href' in channel && channel.href ? (
							<a
								href={channel.href}
								className="mt-2 block text-sm leading-relaxed text-cyan-bright underline-offset-4 hover:underline"
							>
								{channel.body}
							</a>
						) : (
							<p className="mt-2 text-sm leading-relaxed text-cream/70">{channel.body}</p>
						)}
					</li>
				))}
			</ul>
			<p className="text-sm leading-relaxed text-cream/70">
				Careers inquiries are welcome — see{' '}
				<Link href="/careers" className="font-semibold text-cyan-bright underline-offset-4 hover:underline">
					Careers
				</Link>{' '}
				or use the form with the relevant area selected. Existing clients should reach their named
				engagement lead when possible.
			</p>
		</div>
	);
}
