import type { CardItem, ExternalReference, Faq, TimelineStep } from '@/lib/content';

export const homeHero = {
	title: 'Intelligent Infrastructure for the AI Era — Connect, Compute, Secure, Operate',
	lede: 'TechnoKraft Consultancy Services LLC engineers the infrastructure modern AI depends on: telecommunications networks, AI data-center and GPU compute capability, cybersecurity, AI applications, and the specialized technology talent that keeps all of it running. One accountable partner across the full stack — from the fiber in the ground to the AI application in production.',
	chip: 'Connect · Compute · Secure · Intelligence · Operate',
};

export const pillarsIntro = {
	title: 'Technology infrastructure built around your business',
	paragraphs: [
		'Five solution pillars, engineered to work together rather than as five separate vendors under one letterhead. Most technology partners specialise in one layer of the stack and hand off to someone else for the next — a telecom contractor that has never touched a firewall, a security vendor that has no view of the AI application it is supposed to be protecting.',
		'TechnoKraft was built the opposite way: the same company that designs a network also secures it, builds the applications that run on top of it, and staffs the team that operates it, so a client is never stuck translating between vendors who do not talk to each other.',
	],
};

export const intelligenceTimeline: TimelineStep[] = [
	{
		title: 'Connect',
		body: 'The network and physical infrastructure that gets data where it needs to go — telecom builds, fibre, in-building coverage.',
	},
	{
		title: 'Compute',
		body: 'The data centre and AI infrastructure layer that processes it — GPU clusters, high-performance networking, storage.',
	},
	{
		title: 'Secure',
		body: 'The cybersecurity practice that protects both layers and everything running on them.',
	},
	{
		title: 'Intelligence',
		body: 'The AI applications built on top — assistants, automation, document intelligence, decision support.',
	},
	{
		title: 'Operate',
		body: 'The staffing and managed capability that keeps all of it running day to day.',
	},
];

export const pillarSpotlights: {
	title: string;
	body: string;
	linkLabel: string;
	href: string;
}[] = [
	{
		title: 'Telecommunications engineering',
		body: 'From field survey and RF design through network deployment, optimisation and fibre construction, TechnoKraft supports carriers, OEMs, tower companies and fibre operators across the complete infrastructure lifecycle.',
		linkLabel: 'See Telecom Solutions',
		href: '/solutions/telecom',
	},
	{
		title: 'AI data centre infrastructure',
		body: 'GPU cluster networking, InfiniBand and high-speed Ethernet fabric, and the monitoring and operational discipline that AI workloads demand, engineered by people who understand why a standard data centre playbook does not transfer directly to GPU infrastructure.',
		linkLabel: 'See AI Data Centre & AI Infrastructure',
		href: '/solutions/ai-data-centre',
	},
	{
		title: 'Cybersecurity',
		body: 'Assessment, monitoring, SOC and incident response built around the reality that most breaches start with an ordinary, preventable gap, not an exotic attack.',
		linkLabel: 'See Cybersecurity',
		href: '/solutions/cybersecurity',
	},
	{
		title: 'AI application development',
		body: 'Enterprise applications with AI built in where it earns its place — assistants grounded in your own data, workflow automation, document intelligence — rather than a chatbot bolted onto an existing screen.',
		linkLabel: 'See AI Application Development',
		href: '/solutions/ai-application-development',
	},
	{
		title: 'Technology staffing',
		body: 'Contract, contract-to-hire and direct placement across network engineering, cybersecurity, cloud, DevOps, AI/ML, data centre, telecom and software development, sourced against the same technical bar TechnoKraft holds its own delivery teams to.',
		linkLabel: 'See IT Staffing',
		href: '/solutions/it-staffing',
	},
];

export const whyTechnoKraft: CardItem[] = [
	{
		title: 'One partner across the lifecycle',
		body: 'Telecom, AI infrastructure, cybersecurity, AI applications and staffing delivered by one company with a single point of accountability, rather than coordinated across four separate vendors.',
	},
	{
		title: 'Engineering-led, not sales-led',
		body: 'Scoping conversations are held with the engineers who will do the work, so commitments reflect what is actually achievable.',
	},
	{
		title: 'Security considered at every layer',
		body: 'Cybersecurity is treated as a property of the infrastructure and applications TechnoKraft builds, not an afterthought sold separately.',
	},
	{
		title: 'Staffing drawn from the same technical bar',
		body: "The engineers placed through IT Staffing are held to the same technical standard as the teams delivering TechnoKraft's own infrastructure and security work.",
	},
];

export const whyTechnoKraftPlaceholder =
	'[STATISTIC / CLIENT COUNT / PROJECT COUNT TO BE ADDED] once confirmed figures are available. Do not populate the StatsSection component until real numbers are supplied.';

export const howWeWork: TimelineStep[] = [
	{
		title: 'Discover',
		body: 'Understand the environment, the constraint, and what a successful outcome looks like, before proposing anything.',
	},
	{
		title: 'Design',
		body: 'A written plan, scope and team, sized to the actual problem rather than a standard package.',
	},
	{
		title: 'Deliver',
		body: 'Execution against that plan, with a named lead and regular, plain-language reporting.',
	},
	{
		title: 'Optimise',
		body: 'Tuning, testing and validation once the initial build is in place — a network, a security control, an application is rarely finished at first deployment.',
	},
	{
		title: 'Operate',
		body: 'Ongoing management, monitoring or staffing support for as long as the client needs it.',
	},
];

export const builtFor = {
	title: 'Built for organisations that cannot afford a weak link',
	paragraphs: [
		"A carrier rolling out a new market cannot have its RF design team disconnected from the security team hardening the sites it builds. A data centre operator standing up GPU capacity cannot treat network engineering and cybersecurity as two separate procurement conversations. An enterprise shipping an AI feature cannot bolt security on after launch.",
		"TechnoKraft's five pillars exist as one accountable structure precisely because these problems do not respect the boundaries a typical vendor list draws around them — and because a resourcing gap in any one of them, from a specialised RF engineer to a SOC analyst, can stall a project as surely as a missing technical decision.",
	],
};

export const homeFaqs: Faq[] = [
	{
		q: 'What does TechnoKraft Consultancy Services actually do?',
		a: 'We deliver telecommunications infrastructure, AI data-centre and AI infrastructure engineering, cybersecurity, AI application development, and specialised technology staffing, as five connected practices rather than five unrelated service lines.',
	},
	{
		q: 'Do you work with carriers and tower companies, or only enterprises?',
		a: 'Both. The Telecom Solutions practice serves carriers, OEMs, tower companies and fibre operators; the other four pillars primarily serve enterprises, data centres, healthcare organisations and technology companies.',
	},
	{
		q: 'Can we engage one pillar without the others?',
		a: 'Yes. Each pillar is a standalone engagement. Many clients start with one — a security assessment, a staffing request, a telecom project — and bring in another pillar later once the fit is proven.',
	},
	{
		q: 'Is TechnoKraft a staffing agency or an engineering company?',
		a: 'Both, deliberately. IT Staffing places engineers held to the same bar as the teams delivering our infrastructure, security and application work, so a placement and a delivered project both carry the same standard.',
	},
	{
		q: 'How do we start a conversation?',
		a: 'Use Talk to an Expert or Discuss Your Project from any page. You will speak with someone who understands the relevant pillar, not a general sales contact.',
	},
];

export const homeReferences: ExternalReference[] = [
	{ label: 'NIST Cybersecurity Framework', href: 'https://www.nist.gov/cyberframework' },
	{
		label: '3GPP specifications (5G NR and LTE)',
		href: 'https://www.3gpp.org/specifications-technologies',
	},
];
