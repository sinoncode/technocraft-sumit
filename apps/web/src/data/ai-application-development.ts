import type { CardItem, ExternalReference, Faq } from '@/lib/content';

export const aiAppHero = {
	title: 'Enterprise AI Application Development',
	lede: 'An AI feature is only worth shipping if it changes what a business can do — process a claim faster, answer a customer without a hold queue, surface the right document before someone has to search for it. TechnoKraft builds enterprise AI applications around that standard: generative AI, retrieval-augmented generation, AI assistants and workflow automation, engineered into real systems with measurable outcomes rather than demonstrated once and left unused.',
	chip: 'Outcomes, not demos',
};

export const aiAppIntro = {
	title: 'Scoped against the production bar',
	paragraphs: [
		'A large share of AI pilots never reach production, and the reason is rarely the underlying model — it is usually a gap between what looked impressive in a demo and what the feature needed to do reliably against real, messy production data, with real integration requirements and real users who will notice when it is wrong. TechnoKraft scopes AI application work against that production bar from the outset, so the version that is demonstrated is close to the version that ships.',
	],
};

export const aiAppCapabilities: CardItem[] = [
	{
		title: 'AI Strategy',
		body: 'Identifying where an AI feature would change a real business outcome, and where it would not, before committing engineering time.',
	},
	{
		title: 'Generative AI & Enterprise AI',
		body: 'Large language model-powered features integrated into existing enterprise systems and workflows.',
	},
	{
		title: 'RAG Applications',
		body: "Retrieval-augmented generation grounding AI responses in an organisation's own documents and data, rather than general model knowledge alone.",
	},
	{
		title: 'AI Assistants & Chatbots',
		body: 'In-product and internal assistants that answer questions and, where appropriate, take defined actions through existing systems.',
	},
	{
		title: 'Document Intelligence',
		body: 'Extraction and classification from contracts, forms and unstructured documents, with confidence scoring and human review for uncertain cases.',
	},
	{
		title: 'Workflow Automation',
		body: 'Automating well-defined, repetitive processes, with AI applied where judgement or unstructured input is genuinely required.',
	},
	{
		title: 'LLM & AI API Integration',
		body: 'Integrating commercial or open-weight language models into applications, chosen for the task rather than a single default vendor.',
	},
	{
		title: 'Data Integration',
		body: 'Connecting AI features to the data they need — internal systems, document repositories, structured databases — securely and reliably.',
	},
	{
		title: 'AI Dashboards',
		body: 'Reporting and decision-support interfaces surfacing AI-derived insight for operational and leadership use.',
	},
	{
		title: 'AI Agents',
		body: 'Multi-step, tool-using AI workflows for tasks that require several coordinated actions, with human checkpoints on anything irreversible.',
	},
	{
		title: 'Custom AI Solutions',
		body: 'Purpose-built AI applications for requirements that do not fit an off-the-shelf tool.',
	},
];

export const businessOutcomes = {
	title: 'Business outcomes, not just features',
	terms: [
		'Automation of a manual process',
		'Faster decision-making',
		'Better knowledge discovery',
		'Improved customer experience',
		'Measurable operational efficiency',
	],
	paragraphs: [
		'Every AI application engagement is scoped against a specific business outcome — automation of a manual process, faster decision-making, better knowledge discovery across scattered documentation, an improved customer experience, or measurable operational efficiency gains. The technology choice (which model, which architecture, whether RAG or fine-tuning is appropriate) follows from that outcome rather than driving it.',
		"In practice this means the first deliverable in most engagements is not code — it is a clear, written definition of what 'working' means for the specific feature: an acceptable error rate, a required response time, a defined escalation path for cases the AI should not handle alone. Building against that definition from day one avoids the common failure mode where a feature is technically functional but nobody can say whether it is actually good enough to trust with real users or real decisions.",
	],
};

export const securityReliability = {
	title: 'Built with security and reliability in mind',
	paragraphs: [
		"AI applications carry considerations a standard application does not — prompt injection, data leakage through model context, and the risk of an autonomous action being taken incorrectly. These are addressed through the same engineering discipline used across TechnoKraft's other pillars: permission boundaries on what an AI assistant or agent can do, logging of AI-initiated actions, and evaluation against representative and adversarial inputs before launch, coordinated with the Cybersecurity practice where the application handles sensitive data.",
	],
};

export const aiAppWhoFor = {
	title: 'Who this is for',
	paragraphs: [
		'Enterprises with a specific, high-value process that AI could measurably improve; technology companies adding AI features to an existing product; healthcare and financial organisations that need AI applications built with data handling and audit requirements in mind from the start; and organisations with large volumes of unstructured documents or knowledge that is hard to search today.',
		'The common thread is not company size or industry but a well-defined problem: an AI feature works best when it replaces a specific, describable task someone currently does manually, rather than being asked to do everything a person could theoretically do. Engagements that start narrow and expand once value is proven tend to outperform those that start broad.',
		'It also includes organisations that have already tried an AI pilot internally and hit a wall — a proof of concept that worked on sample data but broke down against real documents, or a chatbot that answered confidently but incorrectly often enough that the business stopped trusting it. Diagnosing why a pilot did not generalise is frequently the fastest path to a production-ready version, and is often less work than starting over.',
	],
};

export const aiAppFaqs: Faq[] = [
	{
		q: 'Do you build a proprietary AI model, or use existing ones?',
		a: 'We integrate and orchestrate existing commercial and open-weight models rather than claim a proprietary model. The engineering value is in grounding, integration, evaluation and the surrounding application, not the model itself.',
	},
	{
		q: 'How do you prevent an AI assistant from giving wrong or made-up answers?',
		a: 'Primarily through retrieval-augmented generation, which grounds responses in an organisation\'s actual data, combined with evaluation testing and confidence handling for uncertain cases before a feature is released.',
	},
	{
		q: 'Can an AI application integrate with our existing systems?',
		a: 'Yes — AI features are built as additions to existing applications and data sources through defined integrations, not as a separate system to maintain independently.',
	},
	{
		q: 'What does an AI application project typically cost or take?',
		a: 'This depends entirely on scope — a single well-defined feature is a matter of weeks; a broader platform is longer. We scope and quote in writing after understanding the specific requirement.',
	},
	{
		q: 'Do you support AI agents that take actions automatically?',
		a: 'Yes, with permission boundaries and human checkpoints designed in for any action that is difficult to reverse, and full logging of what the agent did and why.',
	},
	{
		q: 'Who owns the resulting application and any custom integration work?',
		a: 'The client does. Source code, integrations and configuration built for the client are delivered to systems and repositories the client controls.',
	},
];

export const aiAppReferences: ExternalReference[] = [
	{
		label: 'OWASP Top 10 for Large Language Model Applications',
		href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
	},
	{
		label: 'NIST AI Risk Management Framework',
		href: 'https://www.nist.gov/itl/ai-risk-management-framework',
	},
];
