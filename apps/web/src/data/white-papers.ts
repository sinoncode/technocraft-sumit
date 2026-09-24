import type { Faq } from '@/lib/content';

export const whitePapersHero = {
	title: 'In-depth guides from our engineering practices',
	lede: 'TechnoKraft white papers go deeper than a blog post — structured, technical references on AI infrastructure operations, cybersecurity assessment methodology, telecom program delivery and AI application engineering. Each paper is written by practitioners and marked clearly until its full content is confirmed for publication.',
	chip: 'Technical references',
};

export const whitePapersIntro = {
	title: 'What a TechnoKraft white paper is',
	paragraphs: [
		'A white paper here is a working reference, not a sales document. It documents how a practice actually approaches a problem — the assessment methodology, the monitoring signals that matter, the decisions that shape a build — so a technical reader can evaluate the approach on its merits rather than on claims.',
		'Papers are released as they are completed and reviewed. The index below lists planned and in-progress titles; each is clearly marked until its full content is confirmed and published.',
	],
};

export type WhitePaper = {
	slug: string;
	title: string;
	summary: string;
	practice: string;
	pages: string;
	status: 'planned' | 'in-progress' | 'published';
};

export const whitePapers: WhitePaper[] = [
	{
		slug: 'operating-ai-infrastructure',
		title: 'Operating AI Infrastructure: A Monitoring and Operations Reference',
		summary:
			'How to monitor a GPU compute cluster as a tightly coupled system — correlating GPU utilisation with InfiniBand and RDMA error rates, NCCL communication patterns and fabric congestion — and why standard data-centre operations playbooks do not transfer directly.',
		practice: 'AI Data Centre & AI Infrastructure',
		pages: '18 pages',
		status: 'in-progress',
	},
	{
		slug: 'security-assessment-methodology',
		title: 'A Structured Security Assessment Methodology',
		summary:
			'How TechnoKraft scopes and runs a security assessment across network, application, cloud and identity — how findings are prioritised against operational reality, and what a remediation path looks like beyond a flat severity score.',
		practice: 'Cybersecurity',
		pages: '14 pages',
		status: 'in-progress',
	},
	{
		slug: 'telecom-program-delivery',
		title: 'Single-Program Telecom Delivery: Survey to Optimisation',
		summary:
			'Why telecom programs fail on hand-offs rather than engineering, and how keeping survey, design, construction, integration and optimisation inside one accountable program changes the outcome when field reality diverges from desk data.',
		practice: 'Telecom Solutions',
		pages: '16 pages',
		status: 'planned',
	},
	{
		slug: 'production-ai-applications',
		title: 'Shipping AI Applications to Production',
		summary:
			'Scoping an AI feature against the production bar from day one — defining what \u201cworking\u201d means, choosing between RAG and fine-tuning, and engineering permission boundaries and evaluation before launch.',
		practice: 'AI Application Development',
		pages: '12 pages',
		status: 'planned',
	},
	{
		slug: 'practitioner-led-staffing',
		title: 'Practitioner-Led Staffing for Specialised Technical Roles',
		summary:
			'Why practitioner screening outperforms keyword recruiting on network, security, cloud, AI/ML and telecom roles, and how a staffing practice tied to a delivery organisation changes the candidates a client interviews.',
		practice: 'IT Staffing',
		pages: '10 pages',
		status: 'planned',
	},
];

export const whitePapersPlaceholder =
	'[WHITE PAPER FULL CONTENT, AUTHORS AND PUBLICATION DATES TO BE CONFIRMED. The titles and summaries above describe planned and in-progress papers; do not present any as published until its full content is confirmed.]';

export const whitePapersFaqs: Faq[] = [
	{
		q: 'Are the white papers free?',
		a: 'Yes. Published papers are available without charge; some may request a work email so we can share updates and related research.',
	},
	{
		q: 'How do I get notified when a paper is published?',
		a: 'A notification option will be added once papers are publishing. Until then, the status labels on this page track which papers are planned, in progress, or published.',
	},
	{
		q: 'Can I request a paper on a specific topic?',
		a: 'Yes — use Talk to an Expert or the Contact page to suggest a topic. Requests from practitioners in our disciplines are prioritised.',
	},
];
