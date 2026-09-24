import type { CardItem, Faq } from '@/lib/content';

export const careersHero = {
	title: 'Build your career at the intersection of infrastructure, security and intelligence',
	lede: 'TechnoKraft Consultancy Services hires practitioners — RF engineers, network architects, security analysts, AI engineers and technical recruiters — who do the technical work themselves rather than hand it to a generalist project office. Open roles are listed below as they become available; until then, speculative applications from engineers in our disciplines are welcome.',
	chip: 'Practitioner-led · Engineering-first',
};

export const careersIntro = {
	title: 'What working here looks like',
	paragraphs: [
		'Engagements are scoped and delivered by the engineers who carry them through, so the people who make commitments at the start of a project are the same people accountable for the outcome at the end. That structure shapes how hiring works: we look for practitioners who can own a technical problem end to end, communicate plainly with both engineering and business stakeholders, and prefer a smaller, achievable scope to a larger one sold on optimism.',
		'Because the five pillars are designed to connect, engineers frequently work across more than one discipline — a network architect on a telecom build who also contributes to the security hardening of the same sites, an AI engineer whose application work is informed by direct experience of the GPU infrastructure underneath it. Cross-pillar work is encouraged rather than discouraged, and career growth can run deeper into a single discipline or broader across several.',
	],
};

export const careersValues: CardItem[] = [
	{
		title: 'Engineering-led',
		body: 'Scoping conversations are held with the engineers who will do the work, so commitments reflect what is actually achievable.',
	},
	{
		title: 'One accountable lead',
		body: 'Every engagement has a named lead who carries responsibility end to end, regardless of how many disciplines are involved.',
	},
	{
		title: 'Cross-pillar exposure',
		body: 'Engineers are encouraged to work across connected pillars rather than being siloed into a single service line.',
	},
	{
		title: 'Plain-language reporting',
		body: 'Progress, risk and scope changes are communicated in language a non-technical stakeholder can act on.',
	},
];

export const careersBenefits: CardItem[] = [
	{
		title: 'Practitioner environment',
		body: 'You work alongside and are evaluated by people who do the same technical work you do.',
	},
	{
		title: 'Varied engagement mix',
		body: 'A mix of carrier, enterprise, data-centre and technology engagements across the five pillars.',
	},
	{
		title: 'Defined growth paths',
		body: 'Growth can run deeper into a single discipline or broader across several, supported rather than blocked.',
	},
	{
		title: 'Remote, hybrid and onsite',
		body: 'Engagement location follows the client requirement and the work — site-based for telecom, flexible for many other roles.',
	},
];

export const careersBenefitsPlaceholder =
	'[SPECIFIC COMPENSATION, BENEFITS, LEAVE, INSURANCE AND LOCATION DETAILS TO BE CONFIRMED before publishing this section with any concrete terms.]';

export type OpenRole = {
	title: string;
	team: string;
	location: string;
	type: string;
	summary: string;
};

export const openRoles: OpenRole[] = [
	{
		title: 'RF Engineer',
		team: 'Telecom Solutions',
		location: 'Site-based / Hybrid',
		type: 'Contract & Full-time',
		summary:
			'Propagation modelling, link budget analysis, frequency planning and site-specific RF design packages across LTE and 5G NR programs.',
	},
	{
		title: 'Network Architect — GPU Clusters',
		team: 'AI Data Centre & AI Infrastructure',
		location: 'Remote / Hybrid',
		type: 'Full-time',
		summary:
			'Leaf-spine fabric design, InfiniBand and RDMA tuning, and performance monitoring for tightly coupled distributed training workloads.',
	},
	{
		title: 'SOC Analyst',
		team: 'Cybersecurity',
		location: 'Remote',
		type: 'Shift-based / Full-time',
		summary:
			'Triage and investigation across SIEM, EDR and identity telemetry, with structured escalation into the incident response process.',
	},
	{
		title: 'AI Application Engineer',
		team: 'AI Application Development',
		location: 'Remote / Hybrid',
		type: 'Full-time',
		summary:
			'RAG systems, AI assistants and workflow automation grounded in client data, scoped against measurable business outcomes.',
	},
	{
		title: 'Technical Recruiter — Technology Disciplines',
		team: 'IT Staffing',
		location: 'Remote',
		type: 'Full-time',
		summary:
			'Sourcing and screening across network, security, cloud, AI/ML and telecom roles, working alongside practitioners in each discipline.',
	},
];

export const openRolesPlaceholder =
	'[THESE ARE SAMPLE / ILLUSTRATIVE ROLES. CONFIRMED OPEN REQUISITIONS, REPORTING LINES AND HIRING STATUS TO BE PROVIDED before publishing live job postings.]';

export const careersApply = {
	title: 'Speculative applications welcome',
	paragraphs: [
		'If you do not see a role that matches your discipline but you work in one of our five pillars — telecom, AI infrastructure, cybersecurity, AI application development, or technical recruiting — send a short note describing your background and the kind of work you are looking for. Applications are reviewed by practitioners in the relevant discipline, not a generalist recruiter.',
	],
};

export const careersFaqs: Faq[] = [
	{
		q: 'How are technical interviews conducted?',
		a: 'By practitioners in the relevant discipline — a network engineering candidate is assessed by network engineers, a SOC analyst candidate by security analysts — rather than a generalist recruiter working from a keyword checklist.',
	},
	{
		q: 'Do you offer remote roles?',
		a: 'Yes, where the role and client requirement support it. Telecom and fibre roles are typically site-based; many cybersecurity, AI infrastructure, AI application and recruiting roles can be remote or hybrid.',
	},
	{
		q: 'Can I move between pillars over time?',
		a: 'Yes. Cross-pillar work is encouraged, and career growth can run deeper into one discipline or broader across several connected pillars.',
	},
	{
		q: 'What is the interview process?',
		a: '[STANDARD INTERVIEW STAGES AND TIMELINE TO BE CONFIRMED per role.] Typically an initial conversation with a practitioner, a technical assessment relevant to the discipline, and a final discussion with the practice lead.',
	},
];
