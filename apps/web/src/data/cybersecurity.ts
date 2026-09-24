import type { CardItem, ExternalReference, Faq, TimelineStep } from '@/lib/content';

export const cyberHero = {
	title: 'Enterprise Cybersecurity Services',
	lede: 'Most breaches begin with an ordinary, preventable gap — a missed patch, an overly permissive firewall rule, a misconfigured cloud bucket — not an exotic attack. TechnoKraft\'s cybersecurity practice is built around finding and closing those gaps first, then maintaining the monitoring and response capability to catch what gets through. Every engagement is scoped and authorised in writing, and every finding comes with a specific remediation path, not just a severity label.',
	chip: 'Assess → Remediate → Monitor → Respond → Sustain',
};

export const cyberIntro = {
	title: 'The full posture, defended as one system',
	paragraphs: [
		'The practice covers the full posture a modern enterprise has to defend — network perimeter, endpoints, cloud workloads, identity, and the applications running on top of all of it — because attackers do not respect the boundaries between those categories either. A security assessment scoped only to the network while identity controls go unreviewed, or a cloud security review that ignores the endpoints connecting to it, leaves exactly the kind of gap most real incidents exploit.',
	],
};

export const cyberCapabilities: CardItem[] = [
	{
		title: 'Security Assessment',
		body: 'Structured review of network, application, cloud and identity security posture against recognised frameworks.',
	},
	{
		title: 'Vulnerability Management & VAPT',
		body: 'Ongoing vulnerability scanning combined with periodic penetration testing to validate real-world exploitability, not just scan output.',
	},
	{
		title: 'Network & Firewall Security',
		body: 'Firewall rule review, network segmentation and perimeter security design and hardening.',
	},
	{
		title: 'Endpoint Security & EDR',
		body: 'Endpoint detection and response deployment and tuning across the device fleet.',
	},
	{
		title: 'SIEM & Security Monitoring',
		body: 'Log aggregation and correlation across network, endpoint, cloud and identity systems for continuous visibility.',
	},
	{
		title: 'SOC & MDR',
		body: 'Security operations centre monitoring and managed detection and response, including out-of-hours coverage.',
	},
	{
		title: 'Data Loss Prevention',
		body: 'Controls to detect and prevent unauthorised movement of sensitive data out of the environment.',
	},
	{
		title: 'Cloud Security',
		body: 'Configuration review and ongoing security posture management for cloud environments and workloads.',
	},
	{
		title: 'Identity Security',
		body: 'Identity and access management review, privileged access controls and authentication hardening.',
	},
	{
		title: 'Incident Response',
		body: 'Structured response to confirmed incidents — containment, investigation and remediation guidance.',
	},
	{
		title: 'Compliance Support',
		body: "Gap assessment and evidence support against frameworks relevant to the client's industry and regulatory obligations.",
	},
];

export const findingsNote =
	"Findings are also delivered with the client's operational reality in mind. A vulnerability that is technically severe but sits behind three other controls is prioritised differently from the same vulnerability on an internet-facing system with no compensating control, and the remediation guidance reflects that distinction rather than a flat severity score copied from a scanner.";

export const engagementIntro =
	'Most engagements begin with an assessment even when a client has already decided they want monitoring or a specific control implemented, because sizing that work correctly requires knowing the current state first. A SOC deployed onto an environment with unresolved basic gaps will spend its early months generating noise rather than useful signal.';

export const cyberTimeline: TimelineStep[] = [
	{
		title: 'Assess',
		body: 'Security assessment and, where relevant, VAPT to establish the current state and prioritised findings.',
	},
	{
		title: 'Remediate',
		body: 'Fixes to the highest-priority findings, with retesting to confirm they hold.',
	},
	{
		title: 'Monitor',
		body: 'SIEM and SOC monitoring established or reviewed for ongoing visibility.',
	},
	{
		title: 'Respond',
		body: 'An incident response process defined and rehearsed before it is needed, not written for the first time during an incident.',
	},
	{
		title: 'Sustain',
		body: 'Continued monitoring, periodic reassessment and compliance support as the environment changes.',
	},
];

export const cyberTechnologies = {
	title: 'Technologies we work with',
	tools: [
		'Palo Alto',
		'Fortinet',
		'CrowdStrike',
		'SentinelOne',
		'Microsoft Sentinel',
		'Splunk',
		'Qualys',
		'Nessus',
		'ManageEngine',
		'Zscaler',
		'Prisma Access',
	],
	paragraphs: [
		'Depending on the environment and the client\'s existing investment, engagements may involve technologies such as Palo Alto, Fortinet, CrowdStrike, SentinelOne, Microsoft Sentinel, Splunk, Qualys, Nessus, ManageEngine, Zscaler and Prisma Access. These are referenced here as technology examples describing the ecosystems we work in, not as claimed vendor partnerships; any formal partnership status is stated separately once verified.',
		'Tool selection follows the environment rather than a fixed preference — an organisation already invested in a particular SIEM or EDR platform is generally better served by getting more value from that platform than by a wholesale replacement, and TechnoKraft\'s engagements are scoped with that in mind. Where a client has no existing tooling, or where the current stack cannot support the required visibility, recommendations are made on technical fit rather than a standing vendor relationship.',
	],
};

export const cyberWhoFor = {
	title: 'Who this is for',
	paragraphs: [
		'Enterprises and technology companies that need an independent assessment of their security posture; healthcare and financial organisations under regulatory scrutiny; data centre and AI infrastructure operators needing security integrated with AI Data Centre & AI Infrastructure operations; and any organisation that has been asked by a customer, insurer or auditor to demonstrate its security controls.',
		'This also includes organisations that have never had a formal security assessment and are unsure where to start, as well as those that have an existing program but suspect it has gaps — a firewall ruleset that has accumulated years of unreviewed exceptions, an EDR deployment that was never fully rolled out past a pilot group, or a SOC that generates alerts nobody has time to triage. An initial assessment is designed to surface exactly that kind of drift, not just confirm that controls exist on paper.',
	],
};

export const cyberFaqs: Faq[] = [
	{
		q: 'What is the difference between vulnerability management and VAPT?',
		a: 'Vulnerability management is the ongoing process of scanning for and tracking known weaknesses. VAPT (vulnerability assessment and penetration testing) is a point-in-time exercise where testers attempt to actively exploit weaknesses to show real-world impact, going beyond what an automated scan alone reports.',
	},
	{
		q: 'Do you offer 24x7 SOC monitoring?',
		a: "SOC and MDR coverage is scoped to the client's requirement, including out-of-hours monitoring where needed. [SPECIFIC COVERAGE HOURS TO BE CONFIRMED per engagement.]",
	},
	{
		q: 'Which compliance frameworks do you support?',
		a: "Compliance support is scoped to the frameworks relevant to the client's industry and regulatory obligations; specific framework coverage is confirmed during scoping rather than claimed generically here.",
	},
	{
		q: 'Do you hold specific security certifications as a company?',
		a: '[CERTIFICATION DETAILS TO BE CONFIRMED before publishing any specific certification claim.]',
	},
	{
		q: 'Is testing disruptive to production systems?',
		a: 'Testing windows, scope and any production restrictions are agreed in writing before testing begins, and destructive testing is excluded unless separately authorised.',
	},
	{
		q: 'Can cybersecurity be added to an existing telecom or AI infrastructure engagement?',
		a: 'Yes. Security is designed to integrate with Telecom Solutions and AI Data Centre & AI Infrastructure engagements rather than operate as a fully separate track.',
	},
];

export const cyberReferences: ExternalReference[] = [
	{ label: 'NIST Cybersecurity Framework', href: 'https://www.nist.gov/cyberframework' },
	{
		label: 'CISA, cybersecurity best practices',
		href: 'https://www.cisa.gov/topics/cybersecurity-best-practices',
	},
	{ label: 'OWASP Top 10', href: 'https://owasp.org/www-project-top-ten/' },
];
