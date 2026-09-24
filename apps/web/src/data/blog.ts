import type { Faq } from '@/lib/content';

export const blogHero = {
	title: 'Insights from the engineers doing the work',
	lede: 'TechnoKraft Insights shares practitioner perspectives on telecommunications infrastructure, AI data-center operations, cybersecurity, AI application engineering and technology staffing — written by the people who scope and deliver the work, not a marketing desk. Articles are published as they are written; the index below will populate as posts go live.',
	chip: 'Practitioner perspectives',
};

export const blogIntro = {
	title: 'What you will read here',
	paragraphs: [
		'Field notes from active engagements (sanitised of client detail), engineering explainers on the parts of the stack that are most often misunderstood — why GPU-cluster networking is not ordinary data-centre networking, why a vulnerability scan is not a penetration test — and plain-language commentary on where the five pillars intersect in real enterprise environments.',
		'Posts are written to be useful to both engineering and business readers. We avoid vendor hype and unverified claims; where a topic depends on a fact we have not confirmed, it is marked as such rather than asserted.',
	],
};

export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	readTime: string;
	date: string;
	author: string;
	draft: boolean;
};

export const blogPosts: BlogPost[] = [
	{
		slug: 'why-gpu-cluster-networking-is-different',
		title: 'Why GPU cluster networking is not ordinary data-centre networking',
		excerpt:
			'A tightly coupled distributed training job runs only as fast as its slowest link. Here is why a technically correct leaf-spine fabric can still under-perform once real training traffic is applied — and what to monitor instead of GPU utilisation alone.',
		category: 'AI Infrastructure',
		readTime: '8 min read',
		date: '2026-09-12',
		author: 'AI Infrastructure team',
		draft: true,
	},
	{
		slug: 'vulnerability-scan-is-not-a-pentest',
		title: 'A vulnerability scan is not a penetration test',
		excerpt:
			'The two are complementary but not interchangeable. We break down what each actually validates, why an automated scan alone rarely shows real-world exploitability, and how to read a findings report without over- or under-reacting.',
		category: 'Cybersecurity',
		readTime: '6 min read',
		date: '2026-09-05',
		author: 'Cybersecurity team',
		draft: true,
	},
	{
		slug: 'where-telecom-builds-break',
		title: 'Where telecom builds actually break (and how one program avoids it)',
		excerpt:
			'Telecom programs fail on hand-offs, not engineering. A look at the survey-to-optimisation chain and why keeping it inside one accountable program changes what happens when a design assumption meets field reality.',
		category: 'Telecom',
		readTime: '7 min read',
		date: '2026-08-28',
		author: 'Telecom Solutions team',
		draft: true,
	},
	{
		slug: 'rag-before-fine-tuning',
		title: 'Reach for RAG before you reach for fine-tuning',
		excerpt:
			'Most enterprise AI features that look like they need a fine-tuned model are better served by retrieval-augmented generation grounded in the organisation\u2019s own data. A practical guide to deciding which is which.',
		category: 'AI Applications',
		readTime: '9 min read',
		date: '2026-08-20',
		author: 'AI Application team',
		draft: true,
	},
	{
		slug: 'screening-specialised-roles',
		title: 'Screening specialised technical roles without a keyword checklist',
		excerpt:
			'Why generalist recruiting fails on network engineering, RF and SOC analyst roles, and how practitioner-led screening changes the candidates a client actually interviews.',
		category: 'IT Staffing',
		readTime: '5 min read',
		date: '2026-08-14',
		author: 'IT Staffing team',
		draft: true,
	},
	{
		slug: 'security-as-a-property-not-a-product',
		title: 'Security as a property of the infrastructure, not a product',
		excerpt:
			'Why cybersecurity treated as a separate procurement conversation from the network and applications it protects leaves exactly the gaps most real incidents exploit.',
		category: 'Cybersecurity',
		readTime: '6 min read',
		date: '2026-08-06',
		author: 'Cybersecurity team',
		draft: true,
	},
];

export const blogPlaceholder =
	'[THESE ARE SAMPLE / PLACEHOLDER POSTS. PUBLISHED ARTICLES, AUTHORS, DATES AND FULL CONTENT TO BE PROVIDED before the blog goes live with real entries.]';

export const blogCategories = [
	'All',
	'Telecom',
	'AI Infrastructure',
	'Cybersecurity',
	'AI Applications',
	'IT Staffing',
];

export const blogFaqs: Faq[] = [
	{
		q: 'Who writes the posts?',
		a: 'Practitioners in the relevant pillar — engineers who scope and deliver the work described, not a marketing desk. Posts are reviewed internally for technical accuracy before publication.',
	},
	{
		q: 'How often is the blog updated?',
		a: '[PUBLISHING CADENCE TO BE CONFIRMED.] Posts are published as they are written rather than on a fixed calendar; the index above populates as articles go live.',
	},
	{
		q: 'Can I subscribe to updates?',
		a: 'A subscription option will be added once the blog is publishing regularly. Until then, the index on this page is the canonical list of published posts.',
	},
];
