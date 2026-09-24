/**
 * Page-by-page content planning briefs for the TechnoKraft site owner.
 *
 * Each entry lists the exact information and assets the owner needs to supply
 * before a page is considered content-complete, plus the recommended section
 * structure. This is an internal editor-planning view — NOT public marketing
 * copy — and is served on a noindex route kept out of the public sitemap and
 * navigation.
 *
 * Status values:
 *  - live          — page exists and is publicly navigable
 *  - draft-content — page exists but content is sample/placeholder
 *  - batch-2       — page not yet built; kept out of public nav until content is ready
 */

export type ContentStatus = 'live' | 'draft-content' | 'batch-2';

export type ContentBrief = {
	slug: string;
	page: string;
	route?: string;
	status: ContentStatus;
	purpose: string;
	wordTarget: string;
	recommendedSections: string[];
	needed: string[];
	assets?: string[];
	seoNotes?: string[];
};

export const contentBriefs: ContentBrief[] = [
	{
		slug: 'home',
		page: 'Home',
		route: '/',
		status: 'live',
		purpose:
			'Position TechnoKraft as an AI-era intelligent-infrastructure partner and route visitors into the right pillar.',
		wordTarget: '1,000–1,500 (across hero + sections)',
		recommendedSections: [
			'AI-positioned hero with primary + secondary CTA',
			'Interactive solutions explorer (five pillars)',
			'Connect → Compute → Secure → Intelligence → Operate stack timeline',
			'Alternating image/copy story bands',
			'Impact stats (real figures only)',
			'Industries grid',
			'How we work timeline',
			'Careers teaser',
			'Insights preview (latest posts)',
			'FAQ',
			'Closing CTA band',
		],
		needed: [
			'Confirmed company one-line positioning statement',
			'Real programme / site / client counts for the stats rail (or keep editor notes)',
			'Final hero photography selection',
			'Confirmed primary CTA wording',
		],
		assets: ['Hero photograph', 'Story band photographs (3)', 'CTA banner photograph'],
		seoNotes: ['Target keywords: AI infrastructure, telecom infrastructure, cybersecurity services, AI application development'],
	},
	{
		slug: 'about',
		page: 'About Us',
		route: '/about',
		status: 'live',
		purpose:
			'Establish credibility, engineering-led culture, and the five-pillar structure.',
		wordTarget: '1,000–1,500',
		recommendedSections: [
			'Page hero',
			'Who we are (company story)',
			'Five connected practices (pillar cards)',
			'Engineering approach',
			'Technology domains',
			'Delivery philosophy timeline',
			'Industries',
			'Global delivery capability',
			'Why organisations work with us',
			"How we're organised",
			'CTA + external references',
		],
		needed: [
			'Company history / founding details (currently an editor note)',
			'Confirmed office locations / delivery centres',
			'Certifications and partnership status (or keep editor notes)',
			'Client references (named, with permission) or keep generic',
		],
		seoNotes: ['Target keywords: technology consultancy, engineering-led delivery, infrastructure partner'],
	},
	{
		slug: 'solutions-hub',
		page: 'Solutions Hub',
		route: '/solutions',
		status: 'live',
		purpose: 'Index of the five pillars with a decision guide for which fits a visitor’s need.',
		wordTarget: '1,000–1,500',
		recommendedSections: [
			'Page hero',
			'Five pillar cards',
			'How the pillars work together',
			'Which solution fits your requirement (decision table)',
			'CTA',
		],
		needed: ['Confirmed pillar descriptions', 'Any cross-pillar case examples (sanitised)'],
	},
	{
		slug: 'telecom',
		page: 'Telecom Solutions',
		route: '/solutions/telecom',
		status: 'live',
		purpose: 'Detail the telecommunications infrastructure lifecycle and six services.',
		wordTarget: '1,000–1,500',
		recommendedSections: [
			'Page hero',
			'End-to-end network infrastructure',
			'Survey → Optimisation lifecycle timeline',
			'Six services card grid (child pages coming soon)',
			'Capabilities list',
			'Who we work with',
			'Industries served',
			'Staffing for telecom programs',
			'FAQ',
			'CTA + external references',
		],
		needed: [
			'Construction delivery model (self-perform / subcontracted / mixed) — currently an editor note',
			'Confirmed technology partners (OEMs) if naming any',
		],
	},
	{
		slug: 'telecom-network-deployment',
		page: 'Telecom — Network Deployment & Rollout',
		route: '/solutions/telecom/network-deployment',
		status: 'batch-2',
		purpose: 'Deep-dive on program and project management for wireless deployment.',
		wordTarget: '1,000–1,500',
		recommendedSections: ['Hero', 'Service overview', 'Rollout methodology', 'Case examples', 'FAQ', 'CTA'],
		needed: ['Service scope detail', 'Rollout methodology steps', 'Sanitised case examples', 'Pricing/engagement model notes'],
	},
	{
		slug: 'telecom-network-optimisation',
		page: 'Telecom — Network Design & Optimisation',
		route: '/solutions/telecom/network-optimisation',
		status: 'batch-2',
		purpose: 'RF planning, capacity modelling, drive testing and KPI analysis.',
		wordTarget: '1,000–1,500',
		recommendedSections: ['Hero', 'Service overview', 'Optimisation methodology', 'KPI examples', 'FAQ', 'CTA'],
		needed: ['Service scope detail', 'Optimisation methodology', 'KPI / benchmarking examples', 'Tooling list'],
	},
	{
		slug: 'telecom-rf-engineering',
		page: 'Telecom — RF Engineering',
		route: '/solutions/telecom/rf-engineering',
		status: 'batch-2',
		purpose: 'Propagation modelling, link budget analysis, frequency planning.',
		wordTarget: '1,000–1,500',
		recommendedSections: ['Hero', 'Service overview', 'RF design packages', 'Tooling', 'FAQ', 'CTA'],
		needed: ['Service scope detail', 'RF design deliverable list', 'Planning tool list', 'Case examples'],
	},
	{
		slug: 'telecom-in-building-small-cells',
		page: 'Telecom — In-Building Solutions & Small Cells',
		route: '/solutions/telecom/in-building-small-cells',
		status: 'batch-2',
		purpose: 'DAS, small cell and in-building RF design.',
		wordTarget: '1,000–1,500',
		recommendedSections: ['Hero', 'Service overview', 'DAS methodology', 'Venue examples', 'FAQ', 'CTA'],
		needed: ['Service scope detail', 'DAS / small cell methodology', 'Venue type examples', 'Tooling'],
	},
	{
		slug: 'telecom-fibre-construction',
		page: 'Telecom — Fibre Construction',
		route: '/solutions/telecom/fibre-construction',
		status: 'batch-2',
		purpose: 'Underground and aerial fibre builds, splicing.',
		wordTarget: '1,000–1,500',
		recommendedSections: ['Hero', 'Service overview', 'Construction methods', 'QA process', 'FAQ', 'CTA'],
		needed: ['Service scope detail', 'Construction methods', 'QA / acceptance process', 'Crew certifications'],
	},
	{
		slug: 'telecom-fibre-engineering-survey',
		page: 'Telecom — Fibre Engineering & Survey',
		route: '/solutions/telecom/fibre-engineering-survey',
		status: 'batch-2',
		purpose: 'Route surveys, make-ready, pole loading, permits, GIS.',
		wordTarget: '1,000–1,500',
		recommendedSections: ['Hero', 'Service overview', 'Engineering deliverables', 'Permit process', 'FAQ', 'CTA'],
		needed: ['Service scope detail', 'Engineering deliverable list', 'Permit / jurisdiction process', 'GIS tooling'],
	},
	{
		slug: 'ai-data-centre',
		page: 'AI Data Centre & AI Infrastructure',
		route: '/solutions/ai-data-centre',
		status: 'live',
		purpose: 'Engineering, integration, monitoring and operations for GPU/AI compute.',
		wordTarget: '1,000–1,500',
		recommendedSections: [
			'Page hero',
			'Why AI infrastructure requires a different operations model',
			'Stack graphic',
			'Capabilities card grid',
			'Engineering not reseller (with partnership editor note)',
			'Who this is for',
			'FAQ',
			'CTA + external references',
		],
		needed: [
			'NVIDIA partnership / certification status (currently an editor note)',
			'GPU supply / procurement capability confirmation',
			'Confirmed vendor ecosystem references',
		],
	},
	{
		slug: 'cybersecurity',
		page: 'Cybersecurity',
		route: '/solutions/cybersecurity',
		status: 'live',
		purpose: 'Full-posture enterprise cybersecurity services and engagement model.',
		wordTarget: '1,000–1,500',
		recommendedSections: [
			'Page hero',
			'Full posture defended as one system',
			'Capabilities card grid',
			'Engagement model timeline',
			'Technologies',
			'Who this is for',
			'FAQ',
			'CTA + external references',
		],
		needed: [
			'Specific SOC coverage hours (currently an editor note)',
			'Company security certifications (currently an editor note)',
			'Compliance framework coverage list',
		],
	},
	{
		slug: 'ai-application-development',
		page: 'AI Application Development',
		route: '/solutions/ai-application-development',
		status: 'live',
		purpose: 'Enterprise AI applications scoped against measurable business outcomes.',
		wordTarget: '1,000–1,500',
		recommendedSections: [
			'Page hero',
			'Scoped against the production bar',
			'Capabilities card grid',
			'Business outcomes',
			'Security and reliability',
			'Who this is for',
			'FAQ',
			'CTA + external references',
		],
		needed: ['Sanitised case examples', 'Confirmed model/vendor references if naming any'],
	},
	{
		slug: 'it-staffing',
		page: 'IT Staffing',
		route: '/solutions/it-staffing',
		status: 'live',
		purpose: 'Practitioner-screened technology resourcing across all disciplines.',
		wordTarget: '1,000–1,500',
		recommendedSections: [
			'Page hero',
			'Screened by people who do the work',
			'Engagement models card grid',
			'Skill areas',
			'Staffing lifecycle timeline',
			'Onboarding and beyond',
			'Why our screening is different',
			'Who this is for',
			'FAQ',
			'CTA',
		],
		needed: ['Confirmed skill area coverage', 'Typical turnaround times if publishing any'],
	},
	{
		slug: 'careers',
		page: 'Careers',
		route: '/careers',
		status: 'draft-content',
		purpose: 'Attract practitioners; list open roles and accept speculative applications.',
		wordTarget: '1,000–1,500',
		recommendedSections: [
			'Page hero',
			'What working here looks like',
			'Values card grid',
			'Benefits card grid',
			'Open roles board',
			'Speculative applications',
			'FAQ',
			'CTA',
		],
		needed: [
			'Confirmed open requisitions (current roles are sample)',
			'Reporting lines and hiring status',
			'Compensation, benefits, leave, insurance, location details (currently an editor note)',
			'Standard interview stages and timeline',
		],
	},
	{
		slug: 'blog',
		page: 'Blog / Insights',
		route: '/blog',
		status: 'draft-content',
		purpose: 'Practitioner-written insights index.',
		wordTarget: '1,000–1,500 (index + intro)',
		recommendedSections: ['Page hero', 'Intro', 'Post index with category filter', 'FAQ', 'CTA'],
		needed: [
			'Published articles (current posts are sample/draft)',
			'Confirmed authors and dates',
			'Publishing cadence',
			'Subscription option if adding one',
		],
	},
	{
		slug: 'white-papers',
		page: 'White Papers',
		route: '/white-papers',
		status: 'draft-content',
		purpose: 'In-depth technical reference library.',
		wordTarget: '1,000–1,500 (index + intro)',
		recommendedSections: ['Page hero', 'Intro', 'Paper library with status badges', 'FAQ', 'CTA'],
		needed: [
			'Full paper content (titles/summaries are planned/in-progress)',
			'Authors and publication dates',
			'Gated vs ungated decision per paper',
		],
	},
	{
		slug: 'contact',
		page: 'Contact Us',
		route: '/contact',
		status: 'live',
		purpose: 'Discipline-routed contact form and channels.',
		wordTarget: '1,000–1,500',
		recommendedSections: ['Page hero', 'Channels and response info', 'Contact form', 'Office locations (editor note)'],
		needed: [
			'Confirmed office addresses / phone / email',
			'Response-time SLA if publishing one',
			'Any regional contact routing rules',
		],
	},
	{
		slug: 'request-consultation',
		page: 'Request a Consultation',
		route: '/consultation',
		status: 'batch-2',
		purpose: 'Dedicated consultation-booking page (deeper than the inquiry dialog).',
		wordTarget: '1,000–1,500',
		recommendedSections: ['Hero', 'What a consultation includes', 'Consultation form (discipline + scheduling)', 'What happens next', 'FAQ'],
		needed: [
			'Consultation scope definition',
			'Scheduling approach (calendar link vs manual)',
			'Pre-call questionnaire fields',
			'Confirmation / follow-up process',
		],
	},
];

export const statusLabels: Record<ContentStatus, string> = {
	live: 'Live',
	'draft-content': 'Draft content',
	'batch-2': 'Batch 2 — not yet built',
};

export const statusStyles: Record<ContentStatus, string> = {
	live: 'border-ultramarine/40 bg-ultramarine/15 text-ultramarine-bright',
	'draft-content': 'border-amber-500/40 bg-amber-500/15 text-amber-300',
	'batch-2': 'border-cream/30 bg-cream/10 text-cream/80',
};
