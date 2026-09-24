import type { CardItem, Faq, TimelineStep } from '@/lib/content';

export const staffingHero = {
	title: 'IT Staffing & Technology Resourcing',
	lede: "TechnoKraft's staffing practice sources technology talent against the same technical bar used across the company's own delivery work in telecom, AI infrastructure, cybersecurity and AI application development. Roles are screened by people who understand the discipline being staffed, not evaluated on keyword matching alone, across contract, contract-to-hire and direct placement engagements.",
	chip: 'Screened by practitioners',
};

export const staffingIntro = {
	title: 'Screened by people who do the work',
	paragraphs: [
		"Technical hiring fails most often at the screening stage, not the sourcing stage — a resume can list the right tools without the candidate having done the actual work at the required depth, and a generalist recruiter is not well positioned to tell the difference on a network engineering, RF or SOC analyst role. TechnoKraft's staffing practice exists specifically to close that gap: because the company delivers telecom, AI infrastructure, cybersecurity and AI application work directly, candidates are evaluated by people who know what good work in that discipline actually looks like.",
	],
};

export const engagementModels: CardItem[] = [
	{
		title: 'Contract Staffing',
		body: 'A defined role for a defined period, with the client directing day-to-day work.',
	},
	{
		title: 'Contract-to-Hire',
		body: 'An initial contract period with the option to convert the placement to a permanent hire once fit is proven.',
	},
	{
		title: 'Direct Placement',
		body: 'Permanent hiring managed end to end, from sourcing and screening through offer.',
	},
	{
		title: 'Managed Staffing',
		body: 'An ongoing resourcing partnership covering multiple roles or a full team over time.',
	},
	{
		title: 'Project-Based Resources',
		body: 'Specialists engaged for the duration of a specific project or program, then released.',
	},
	{
		title: 'Remote & Onsite Resources',
		body: 'Talent sourced for fully remote, hybrid or onsite engagements depending on the role and client requirement.',
	},
];

export const engagementModelsNote =
	"Placements range from a single specialist filling one open role to a full team staffed for a defined program, and from short remote engagements to long-term onsite roles embedded in a client's own team structure.";

export const skillAreas = {
	title: 'Skill areas',
	tags: [
		'Network engineering',
		'Cybersecurity',
		'Cloud',
		'DevOps',
		'AI/ML',
		'Data centre operations',
		'Telecom — RF, fibre, field and construction',
		'Software development',
		'Infrastructure engineering',
		'NOC and SOC roles',
	],
	paragraphs: [
		"Network engineering, cybersecurity, cloud, DevOps, AI/ML, data centre operations, telecom (RF, fibre, field and construction roles), software development, infrastructure engineering, and NOC and SOC roles. Skill areas map directly to TechnoKraft's other four pillars, so a client can request the same discipline the company staffs on its own Telecom Solutions, AI Data Centre & AI Infrastructure, Cybersecurity and AI Application Development engagements.",
		'Engagement terms are set to match how the requirement actually behaves, not forced into a single default model. A role that may become permanent starts as contract-to-hire so both sides can confirm fit before committing; a role tied to a specific project\'s timeline is staffed as a project-based resource and released cleanly when the project ends, without the overhead of a permanent hiring and offboarding process on either side.',
	],
};

export const staffingLifecycle: TimelineStep[] = [
	{
		title: 'Requirement',
		body: 'Understanding the role, the team, the technical environment and the timeline before sourcing begins.',
	},
	{
		title: 'Sourcing',
		body: 'Identifying candidates against the specific skill area and seniority required, not a generic keyword search.',
	},
	{
		title: 'Technical Screening',
		body: 'Assessment by someone who works in the relevant discipline, evaluating real capability rather than resume claims alone.',
	},
	{
		title: 'Client Interview',
		body: 'Coordinated interviews with a shortlist that has already passed technical screening.',
	},
	{
		title: 'Onboarding',
		body: 'Paperwork, compliance checks and logistics handled so the placed resource is ready to start on the agreed date.',
	},
	{
		title: 'Resource Management',
		body: 'Ongoing account management for the duration of the placement, addressing performance or fit issues as they arise.',
	},
];

export const onboardingNote =
	'Onboarding is treated as part of the engagement rather than a formality once a candidate accepts. Paperwork, compliance verification and logistics are handled ahead of the start date so a placed resource is productive from day one, and a named account contact stays involved for the duration of the placement to handle anything that comes up rather than disappearing after the offer is signed.';

export const screeningDifferent = {
	title: 'Why our screening is different',
	paragraphs: [
		"Because TechnoKraft delivers telecom, AI infrastructure, cybersecurity and AI application work directly, technical screening for a placement is informed by people who do that work, not only by a recruiter reading a resume. A network engineering candidate is screened with the same standard applied to TechnoKraft's own telecom delivery teams; a SOC analyst candidate is screened against the same bar used for the company's own security monitoring work.",
	],
};

export const staffingWhoFor = {
	title: 'Who this is for',
	paragraphs: [
		'Organisations with a specific technical role to fill on a deadline; telecom and carrier programs needing crews or engineers staffed in waves; enterprises building an internal AI, cloud or security function faster than a standard hiring cycle allows; and companies that want an ongoing resourcing partner across multiple technical disciplines rather than a different agency for each one.',
		'It also suits organisations that have been burned by a previous staffing vendor sending candidates who looked right on paper but could not perform once placed — the most common source of frustration with generalist agencies staffing specialised technical roles. Because screening for TechnoKraft placements is handled by practitioners in the relevant discipline rather than a recruiter working from a keyword checklist, the candidates a client interviews have already been evaluated to the same bar used internally.',
	],
};

export const staffingFaqs: Faq[] = [
	{
		q: 'What is the difference between contract-to-hire and direct placement?',
		a: 'Contract-to-hire starts the person on a defined contract period with an option to convert to permanent; direct placement is a permanent hire from the outset, sourced and screened end to end.',
	},
	{
		q: 'How is a candidate technically screened?',
		a: 'By assessment relevant to the specific discipline — for example, a technical interview or practical exercise conducted by someone who works in that area — rather than by resume-keyword matching alone.',
	},
	{
		q: 'Can you staff telecom field roles, not just office-based technical roles?',
		a: 'Yes — telecom staffing includes RF engineers, fibre design engineers, and field, construction and program management roles for telecom deployment programs.',
	},
	{
		q: 'Do you offer remote staffing for cybersecurity or AI/ML roles?',
		a: 'Yes, where the role and client requirement support remote work; engagement location (remote, hybrid or onsite) is agreed as part of the requirement stage.',
	},
	{
		q: 'How quickly can a role be filled?',
		a: 'This depends on the seniority and specificity of the role; timelines are discussed and agreed during the requirement stage rather than promised generically here.',
	},
	{
		q: 'Can staffing be combined with a TechnoKraft-delivered project?',
		a: 'Yes — clients often combine a TechnoKraft-delivered project in one of the other four pillars with staffing augmentation on their own team for the same or a related initiative.',
	},
];
