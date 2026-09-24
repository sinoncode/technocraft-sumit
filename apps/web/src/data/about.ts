import type { CardItem, ExternalReference, TimelineStep } from '@/lib/content';

export const aboutHero = {
	title: 'Engineering across the infrastructure an enterprise actually runs on',
	lede: 'TechnoKraft Consultancy Services LLC works across five connected technology practices: telecommunications infrastructure, AI data-centre and AI infrastructure engineering, cybersecurity, AI application development, and specialised technology staffing. The company exists because these five areas are rarely separate problems in practice — a telecom build depends on secure networking, an AI infrastructure project depends on the right engineers being available, and an AI application is only as trustworthy as the security discipline behind it.',
};

export const whoWeAre = {
	title: 'Who we are',
	paragraphs: [
		'We are an engineering-led technology and infrastructure partner, built around practitioners rather than account managers. Every engagement, across every pillar, is scoped and delivered by people who do the technical work themselves — RF engineers, network architects, security analysts, AI engineers and technical recruiters — rather than handed to a generalist project office once a contract is signed.',
		"That structure matters because the alternative — a sales layer that scopes work it will not personally deliver — is where most infrastructure projects go wrong. A commitment made by someone who will not be on the project when a fibre route hits an unexpected permitting delay, or when a GPU cluster's network fabric behaves differently under real training load than it did in a proposal, is a commitment made without the information to keep it. TechnoKraft's engagements are scoped by the same people who carry them through, so what is promised at the start reflects what the team executing the work actually believes is achievable.",
	],
	placeholders: ['[COMPANY HISTORY / FOUNDING DETAILS TO BE CONFIRMED]'],
};

export const engineeringApproach = {
	title: 'Our engineering approach',
	paragraphs: [
		'Every engagement starts with understanding the actual environment — the existing network, the current security posture, the data an AI feature would need to be grounded in — before proposing a solution. We would rather scope a smaller, achievable first phase than sell a larger one we cannot deliver against on schedule. Technical decisions are documented and explained in terms both an engineering stakeholder and a business stakeholder can evaluate, because most of our engagements are approved by both.',
		'This shows up in how proposals are written. A scope document names the specific technical constraints that will shape delivery — an existing vendor\'s equipment that a new fibre build has to interoperate with, a compliance requirement that limits where certain data can be processed, a legacy system an AI application has to integrate with rather than replace — instead of describing the engagement only in generic service-line language. When a constraint changes mid-engagement, it is raised and re-scoped in writing rather than absorbed silently into a schedule slip.',
	],
};

export const technologyDomains = {
	title: 'Our technology domains',
	paragraphs: [
		"RF engineering, network architecture, fibre construction and survey; GPU and high-performance networking including InfiniBand, RDMA and leaf-spine fabric design; network, cloud, endpoint and identity security; generative AI, retrieval-augmented generation and enterprise application development; and technical recruiting across every discipline listed above. These domains are staffed by practitioners who work across TechnoKraft's own delivery engagements as well as client placements, so the technical bar is the same on both sides.",
	],
};

export const deliveryPhilosophy: TimelineStep[] = [
	{
		title: 'Understand before proposing',
		body: 'No standard package is proposed before the specific environment and constraint are understood.',
	},
	{
		title: 'Scope in writing',
		body: 'Every engagement has a written scope, team and, where applicable, price before work begins.',
	},
	{
		title: 'Deliver with a named lead',
		body: 'One accountable person per engagement, regardless of how many disciplines are involved.',
	},
	{
		title: 'Report plainly',
		body: 'Progress, risk and any change to scope communicated in language a non-technical stakeholder can act on.',
	},
	{
		title: 'Stay engaged after delivery',
		body: 'Optimisation, monitoring and support offered as a continuation of the relationship, not a separate sales process.',
	},
];

export const aboutIndustries = {
	title: 'Industries',
	paragraphs: [
		'Telecommunications, enterprise, healthcare, data centres, technology, and government and public-sector organisations. Each industry draws on a different mix of the five pillars, detailed on the Industries page.',
	],
};

export const globalDelivery = {
	title: 'Global delivery capability',
	paragraphs: [
		"TechnoKraft is positioned to serve US and international clients across telecom, enterprise and data-centre engagements, with delivery scoped to the client's location and site requirements. Telecom and fibre work is inherently site-based and scheduled around the physical location of the build; cybersecurity, AI infrastructure, AI application development and staffing engagements are delivered remotely, onsite, or in a hybrid model depending on what the client's environment and compliance requirements call for.",
	],
	placeholders: ['[SPECIFIC OFFICE LOCATIONS / DELIVERY CENTRE DETAILS TO BE CONFIRMED]'],
};

export const whyOrganisations: CardItem[] = [
	{
		title: 'Five pillars, one accountable partner',
		body: 'Telecom, AI infrastructure, cybersecurity, AI applications and staffing under a single engagement structure rather than four vendor relationships.',
	},
	{
		title: 'Practitioner-led engagements',
		body: 'Scoping and delivery are handled by the engineers doing the work, not a layer of account management between the client and the technical team.',
	},
	{
		title: 'Security built in, not bolted on',
		body: 'Cybersecurity considerations are part of how telecom, AI infrastructure and AI application engagements are scoped from the start.',
	},
	{
		title: 'Staffing held to the same bar as delivery',
		body: "Placed engineers are evaluated against the same technical standard used for TechnoKraft's own project teams.",
	},
];

export const whyOrganisationsPlaceholder =
	'[CERTIFICATION DETAILS, PARTNERSHIP STATUS AND CLIENT REFERENCES TO BE CONFIRMED before publishing this section with any specific credentials.]';

export const howOrganised = {
	title: "How we're organised",
	paragraphs: [
		'Each of the five pillars operates as its own technical practice with its own leads, so a telecom engagement is scoped by people who understand RF and fibre construction, and a cybersecurity engagement is scoped by people who work in security day to day — rather than a single generalist team stretched across all five areas. Where an engagement spans more than one pillar, one lead is still named as the client\'s primary point of contact, coordinating across practices rather than leaving the client to manage handoffs between teams themselves.',
	],
};

export const aboutCta = {
	title: "Let's talk about your environment",
	sub: 'Whether the starting point is a telecom rollout, an AI infrastructure build, a security assessment, an application idea, or a resourcing gap, the first conversation is with someone who works in that discipline.',
};

export const aboutReferences: ExternalReference[] = [
	{ label: 'NIST Cybersecurity Framework', href: 'https://www.nist.gov/cyberframework' },
	{ label: 'CNCF, cloud-native technology overview', href: 'https://www.cncf.io/' },
];
