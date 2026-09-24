import type { CardItem, ExternalReference, Faq, TimelineStep } from '@/lib/content';

export const telecomHero = {
	title: 'Telecommunications Infrastructure Solutions',
	lede: 'From field survey and engineering design to network deployment, optimisation and commissioning, TechnoKraft supports the complete telecommunications infrastructure lifecycle for carriers, OEMs, tower companies and fibre operators. Engineering and construction are managed under one program, so the same team that produced the RF design is accountable for the closeout package at the end of the build.',
	chip: 'Survey → Design → Build → Integrate → Optimise',
};

export const endToEnd = {
	title: 'End-to-end network infrastructure',
	paragraphs: [
		"Telecom programs typically fail on hand-offs, not engineering: a survey firm passes to a design firm, which passes to a construction crew, which passes to an integration team, each transition adding delay and disagreement about whose drawing was correct. TechnoKraft's telecom practice covers the chain from survey through optimisation as one program, so responsibility for the outcome does not change hands mid-project.",
		'This single-program structure is most valuable exactly where hand-offs typically break down — the point where a design assumption meets field reality. A pole loading calculation made from desk data can turn out to be wrong once a crew is on site; an RF design can call for an antenna position a landlord will not permit. When survey, design, construction and integration sit inside one accountable program, that kind of discrepancy is resolved by the same team that will also answer for the finished network\'s performance, rather than becoming a dispute about whose scope the change falls under.',
	],
};

export const telecomLifecycle: TimelineStep[] = [
	{
		title: 'Survey',
		body: 'Field data collection — site conditions, existing infrastructure, permitting requirements — that everything downstream depends on being accurate.',
	},
	{
		title: 'Design',
		body: 'RF, network and fibre engineering translating survey data into build-ready packages.',
	},
	{
		title: 'Build',
		body: 'Construction and installation to the engineered design, with quality assurance at each stage.',
	},
	{
		title: 'Integrate',
		body: 'Equipment integration, commissioning and system acceptance testing.',
	},
	{
		title: 'Optimise',
		body: 'Drive testing, KPI benchmarking and tuning once the network is live and carrying real traffic.',
	},
];

export const telecomServices: CardItem[] = [
	{
		title: 'Network Deployment & Rollout',
		body: 'Program and project management for wireless deployment, from single-site installs to multi-market rollout programs.'
	},
	{
		title: 'Network Design & Optimisation',
		body: 'RF planning, capacity modelling, drive testing and KPI analysis across LTE, 5G NR and legacy technologies.'
	},
	{
		title: 'RF Engineering',
		body: 'Propagation modelling, link budget analysis, frequency planning and site-specific RF design packages.'
	},
	{
		title: 'In-Building Solutions & Small Cells',
		body: 'DAS design and deployment, small cell site design, and in-building RF surveys for dense and indoor environments.'
	},
	{
		title: 'Fibre Construction',
		body: 'Underground and aerial fibre builds, including trenching, directional boring, conduit installation and splicing.'
	},
	{
		title: 'Fibre Engineering & Survey',
		body: 'Route surveys, make-ready engineering, pole loading analysis, permit drawing packages and GIS mapping.'
	},
];

export const telecomCapabilities: string[] = [
	'Network architecture and capacity planning',
	'Coverage and interference analysis',
	'Drive testing and KPI benchmarking across LTE and 5G NR',
	'RF propagation modelling, link budget analysis and frequency planning',
	'Antenna selection, azimuth and tilt optimisation',
	'Interference mitigation and spectrum coordination',
	'DAS, small cells and in-building RF design',
	'Underground fibre placement — trenching, directional boring, conduit installation',
	'Aerial construction — make-ready, strand placement, cable lashing',
	'Fibre splicing and termination',
	'Make-ready engineering and pole loading analysis',
	'Permit drawing packages and jurisdictional coordination',
	'GIS mapping',
	'As-built documentation with redline updates',
];

export const telecomCapabilitiesNote =
	"This capability set follows directly from TechnoKraft's telecommunications infrastructure services scope and is not expanded beyond it.";

export const whoWeWorkWith = {
	title: 'Who we work with',
	labels: ['Wireless carriers & general contractors', 'Network equipment manufacturers (OEMs)', 'Tower & infrastructure owners', 'Fibre & broadband operators'],
	paragraphs: [
		'Wireless carriers and their general contractors, network equipment manufacturers (OEMs), tower and infrastructure owners, and fibre and broadband operators. Where a telecom program also touches an enterprise network or a data centre, the AI Data Centre & AI Infrastructure and Cybersecurity practices are available under the same engagement.',
		'Engagement scale varies deliberately by design — a single-site RF survey and a multi-market fibre rollout are both handled within the same program structure, sized to the requirement rather than forced into a one-size proposal. A general contractor managing a larger build can bring TechnoKraft in for a specific stage — RF design, or fibre construction alone — without taking on the full survey-to-optimisation scope, just as a carrier planning a full market launch can engage the complete lifecycle under one program.',
	],
};

export const telecomIndustries = {
	title: 'Industries served',
	paragraphs: [
		'Primarily Telecommunications — carriers, OEMs, tower companies and fibre operators — and Enterprise and Data Centres organisations that need in-building coverage, campus connectivity or dedicated fibre routes.',
	],
};

export const telecomStaffing = {
	title: 'Staffing for telecom programs',
	paragraphs: [
		'Telecom programs are staffed in waves — a market launch may need additional RF engineers or tower technicians for a defined period. IT Staffing sources telecom-specific roles (RF engineers, fibre design engineers, tower and DAS technicians, construction and program managers) from the same technical bar used for TechnoKraft\'s own delivery teams.',
		'This matters most at the peak of a rollout, when a program needs a dozen additional field engineers for six weeks rather than a permanent headcount increase, or when a specific skill — a particular RF planning tool, a regional permitting relationship, a fibre splicing certification — is needed for one phase of a build and not the next. Sourcing that talent from a staffing partner who already understands telecom program structure removes a step most general staffing agencies cannot skip past.',
	],
};

export const telecomFaqs: Faq[] = [
	{
		q: 'Do you handle the full lifecycle, or specific stages only?',
		a: 'Both. Clients can engage TechnoKraft for the full survey-to-optimisation lifecycle on a program, or for a single stage — for example, an RF design package or a fibre construction phase — within a program managed by another party.',
	},
	{
		q: 'Which wireless technologies do you support?',
		a: 'LTE, 5G NR and legacy technology overlays, covering network design, optimisation and drive testing across each.',
	},
	{
		q: 'Do you handle permitting and jurisdictional coordination?',
		a: 'Yes, as part of fibre engineering and survey work — permit drawing packages, pole-attachment applications and jurisdictional coordination are included in that service.',
	},
	{
		q: 'Can you scale from a single site to a multi-market program?',
		a: 'Yes. Network Deployment & Rollout is scoped for both single-site installs and multi-market rollout programs under the same program-management approach.',
	},
	{
		q: 'Do you provide as-built documentation?',
		a: 'Yes, across fibre and RF work, including as-built documentation and redline updates as part of project closeout.',
	},
	{
		q: 'Do you subcontract construction, or self-perform?',
		a: '[CONSTRUCTION DELIVERY MODEL — SELF-PERFORM / SUBCONTRACTED / MIXED — TO BE CONFIRMED before publishing this answer.]',
	},
];

export const telecomReferences: ExternalReference[] = [
	{
		label: '3GPP, 5G NR and LTE specifications',
		href: 'https://www.3gpp.org/specifications-technologies',
	},
	{
		label: 'IEEE, telecommunications and networking standards',
		href: 'https://www.ieee.org/',
	},
	{ label: 'ETSI, telecommunications standards', href: 'https://www.etsi.org/' },
];
