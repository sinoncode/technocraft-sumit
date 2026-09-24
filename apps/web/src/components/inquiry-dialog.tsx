"use client";

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
	type FormEvent,
	type ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';
import { CheckCircle2, Loader2 } from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
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

type InquiryContextValue = {
	open: (topic?: TopicValue) => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function useInquiry() {
	const ctx = useContext(InquiryContext);
	if (!ctx) {
		throw new Error('useInquiry must be used inside <InquiryProvider>');
	}
	return ctx;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function InquiryProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	const [topic, setTopic] = useState<TopicValue>('general');
	const [status, setStatus] = useState<Status>('idle');
	const [errorMessage, setErrorMessage] = useState('');
	const pathname = usePathname();

	const open = useCallback((nextTopic?: TopicValue) => {
		setTopic(nextTopic ?? 'general');
		setStatus('idle');
		setErrorMessage('');
		setIsOpen(true);
	}, []);

	const value = useMemo(() => ({ open }), [open]);

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
				const data = (await response.json().catch(() => null)) as { error?: string } | null;
				throw new Error(data?.error ?? 'Request failed');
			}

			setStatus('success');
			form.reset();
		} catch (error) {
			setStatus('error');
			setErrorMessage(
				error instanceof Error && error.message
					? error.message
					: 'Something went wrong while sending your enquiry. Please try again in a moment.',
			);
		}
	}

	return (
		<InquiryContext.Provider value={value}>
			{children}
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="overflow-hidden rounded-2xl border border-cream/15 bg-ink-soft text-cream shadow-soft-lg sm:max-w-lg">
					{status === 'success' ? (
						<div className="py-6 text-center">
							<CheckCircle2
								className="mx-auto h-12 w-12 text-cyan-bright"
								strokeWidth={1.5}
								aria-hidden
							/>
							<DialogHeader className="mt-4">
								<DialogTitle className="font-display text-2xl text-cream">
									Thank you — your enquiry is in.
								</DialogTitle>
								<DialogDescription className="text-cream/65">
									You will hear back from someone who works in the relevant discipline,
									not a general sales contact.
								</DialogDescription>
							</DialogHeader>
							<button
								type="button"
								onClick={() => setIsOpen(false)}
								className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-ultramarine px-6 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary transition-all hover:-translate-y-0.5 active:scale-[0.98]"
							>
								Close
							</button>
						</div>
					) : (
						<>
							<DialogHeader>
								<DialogTitle className="font-display text-2xl text-cream">
									Talk to an expert
								</DialogTitle>
								<DialogDescription className="text-cream/65">
									Tell us about your environment and the problem you are working on. The
									first conversation is with someone who works in that discipline.
								</DialogDescription>
							</DialogHeader>
							<form onSubmit={handleSubmit} className="mt-2 space-y-4" noValidate={false}>
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="inquiry-name">Name *</Label>
										<Input
											id="inquiry-name"
											name="name"
											required
											maxLength={200}
											autoComplete="name"
											className="border-cream/15 bg-ink text-cream placeholder:text-cream/40"
											placeholder="Your full name"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="inquiry-email">Work email *</Label>
										<Input
											id="inquiry-email"
											name="email"
											type="email"
											required
											autoComplete="email"
											className="border-cream/15 bg-ink text-cream placeholder:text-cream/40"
											placeholder="you@company.com"
										/>
									</div>
								</div>
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="inquiry-company">Company</Label>
										<Input
											id="inquiry-company"
											name="company"
											maxLength={200}
											autoComplete="organization"
											className="border-cream/15 bg-ink text-cream placeholder:text-cream/40"
											placeholder="Organisation (optional)"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="inquiry-topic">Area of interest *</Label>
										<Select
											value={topic}
											onValueChange={v => setTopic(v as TopicValue)}
										>
											<SelectTrigger
												id="inquiry-topic"
												className="border-cream/15 bg-ink text-cream"
											>
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
								<div className="space-y-2">
									<Label htmlFor="inquiry-message">How can we help? *</Label>
									<Textarea
										id="inquiry-message"
										name="message"
										required
										maxLength={5000}
										rows={4}
										className="border-cream/15 bg-ink text-cream placeholder:text-cream/40"
										placeholder="A few sentences about your environment, timeline and what a successful outcome looks like."
									/>
								</div>
								<div className="flex items-start gap-3">
									<Checkbox id="inquiry-consent" name="consent" className="mt-0.5 border-cream/30" />
									<Label
										htmlFor="inquiry-consent"
										className="text-xs font-normal leading-relaxed text-cream/65"
									>
										I consent to TechnoKraft Consultancy Services LLC storing and
										processing the information I submit so the team can respond to my
										enquiry. *
									</Label>
								</div>
								{status === 'error' && errorMessage ? (
									<p role="alert" className="rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
										{errorMessage}
									</p>
								) : null}
								<button
									type="submit"
									disabled={status === 'submitting'}
									className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ultramarine px-6 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary transition-all hover:-translate-y-0.5 hover:bg-ultramarine-bright active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
								>
									{status === 'submitting' ? (
										<>
											<Loader2 className="h-4 w-4 animate-spin" aria-hidden />
											Sending…
										</>
									) : (
										'Send enquiry'
									)}
								</button>
							</form>
						</>
					)}
				</DialogContent>
			</Dialog>
		</InquiryContext.Provider>
	);
}
