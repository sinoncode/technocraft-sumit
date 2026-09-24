"use client";

import { useState, type FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const TOPICS = [
	{ value: 'general', label: 'General enquiry' },
	{ value: 'telecom', label: 'Telecom Solutions' },
	{ value: 'ai-data-centre', label: 'AI Data Centre & AI Infrastructure' },
	{ value: 'cybersecurity', label: 'Cybersecurity' },
	{ value: 'ai-application-development', label: 'AI Application Development' },
	{ value: 'it-staffing', label: 'IT Staffing' },
] as const;

type TopicValue = (typeof TOPICS)[number]['value'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass = 'border-cream/15 bg-ink text-cream placeholder:text-cream/40';

/** Inline contact form that persists to the local inquiries database via /api/inquiries. */
export function ContactForm() {
	const [topic, setTopic] = useState<TopicValue>('general');
	const [status, setStatus] = useState<Status>('idle');
	const [errorMessage, setErrorMessage] = useState('');
	const pathname = usePathname();

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);

		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const company = String(data.get('company') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();
		const consent = data.get('consent') === 'on';

		if (!name || !email || !message) {
			setStatus('error');
			setErrorMessage('Please fill in your name, work email and a short message.');
			return;
		}

		if (!consent) {
			setStatus('error');
			setErrorMessage('Please confirm you consent to us processing your enquiry.');
			return;
		}

		setStatus('submitting');
		setErrorMessage('');

		try {
			const response = await fetch('/api/inquiries', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name,
					email,
					company,
					topic,
					message,
					consent,
					page: pathname,
				}),
			});

			if (!response.ok) {
				const payload = (await response.json().catch(() => null)) as { error?: string } | null;
				throw new Error(payload?.error ?? 'Request failed');
			}

			setStatus('success');
			form.reset();
			setTopic('general');
		} catch (error) {
			setStatus('error');
			setErrorMessage(
				error instanceof Error && error.message
					? error.message
					: 'Something went wrong while sending your message. Please try again in a moment.',
			);
		}
	}

	if (status === 'success') {
		return (
			<div className="glow-border rounded-2xl border border-cream/10 bg-card p-8 text-center text-cream shadow-soft">
				<CheckCircle2 className="mx-auto h-12 w-12 text-cyan-bright" strokeWidth={1.5} aria-hidden />
				<h3 className="mt-4 font-display text-2xl font-bold">Thank you — your message is in.</h3>
				<p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-cream/70">
					You will hear back from someone who works in the relevant discipline, not a general
					sales contact.
				</p>
				<button
					type="button"
					onClick={() => setStatus('idle')}
					className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-ultramarine px-6 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary transition-all hover:-translate-y-0.5 active:scale-[0.98]"
				>
					Send another message
				</button>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="glow-border rounded-2xl border border-cream/10 bg-card p-6 text-cream shadow-soft sm:p-8"
			noValidate
		>
			<div className="grid gap-4 sm:grid-cols-2">
				<div className="space-y-2">
					<Label htmlFor="contact-name">Name *</Label>
					<Input
						id="contact-name"
						name="name"
						required
						maxLength={200}
						autoComplete="name"
						className={fieldClass}
						placeholder="Your full name"
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="contact-email">Work email *</Label>
					<Input
						id="contact-email"
						name="email"
						type="email"
						required
						autoComplete="email"
						className={fieldClass}
						placeholder="you@company.com"
					/>
				</div>
			</div>
			<div className="mt-4 grid gap-4 sm:grid-cols-2">
				<div className="space-y-2">
					<Label htmlFor="contact-company">Company</Label>
					<Input
						id="contact-company"
						name="company"
						maxLength={200}
						autoComplete="organization"
						className={fieldClass}
						placeholder="Organisation (optional)"
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="contact-topic">Area of interest *</Label>
					<Select value={topic} onValueChange={v => setTopic(v as TopicValue)}>
						<SelectTrigger id="contact-topic" className="border-cream/15 bg-ink text-cream">
							<SelectValue placeholder="Select an area" />
						</SelectTrigger>
						<SelectContent className="border-cream/15 bg-ink-soft text-cream">
							{TOPICS.map(t => (
								<SelectItem key={t.value} value={t.value}>
									{t.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="mt-4 space-y-2">
				<Label htmlFor="contact-message">How can we help? *</Label>
				<Textarea
					id="contact-message"
					name="message"
					required
					maxLength={5000}
					rows={6}
					className={fieldClass}
					placeholder="A few sentences about your environment, timeline and what a successful outcome looks like."
				/>
			</div>
			<div className="mt-4 flex items-start gap-3">
				<Checkbox id="contact-consent" name="consent" className="mt-0.5 border-cream/30" />
				<Label
					htmlFor="contact-consent"
					className="text-xs font-normal leading-relaxed text-cream/65"
				>
					I consent to TechnoKraft Consultancy Services LLC storing and processing the
					information I submit so the team can respond to my enquiry. *
				</Label>
			</div>
			{status === 'error' && errorMessage ? (
				<p
					role="alert"
					className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
				>
					{errorMessage}
				</p>
			) : null}
			<button
				type="submit"
				disabled={status === 'submitting'}
				className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ultramarine px-6 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary transition-all hover:-translate-y-0.5 hover:bg-ultramarine-bright active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
			>
				{status === 'submitting' ? (
					<>
						<Loader2 className="h-4 w-4 animate-spin" aria-hidden />
						Sending…
					</>
				) : (
					'Send message'
				)}
			</button>
		</form>
	);
}
