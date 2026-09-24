/** Photography used on the home page — varied, discipline-specific visuals. */
export const homeMedia = {
	hero: 'https://images.hostinger.com/ca1a066b-958a-4581-b3db-37f33769d140.png',
	handshake: 'https://images.hostinger.com/4888e25f-29e7-4043-91c3-5464fea0bbb7.png',
	networkTower: 'https://images.hostinger.com/eef0906b-3446-4af2-b387-4b47be2a4734.png',
	fieldSafety: 'https://images.hostinger.com/eef0906b-3446-4af2-b387-4b47be2a4734.png',
	dataCentre: 'https://images.hostinger.com/46c8f6bc-0727-4f53-ba18-a649e992a553.png',
	fiber: 'https://images.hostinger.com/2e49e242-6610-4a73-9f64-03428fe5248d.png',
	fiveG: 'https://images.hostinger.com/eef0906b-3446-4af2-b387-4b47be2a4734.png',
	sunsetTower: 'https://images.hostinger.com/eef0906b-3446-4af2-b387-4b47be2a4734.png',
	gpu: 'https://images.hostinger.com/32d52d27-6bea-4431-bf02-e62c065aeea5.png',
	soc: 'https://images.hostinger.com/3897cdfe-53b8-435d-b64d-989b0baa67fa.png',
	aiApp: 'https://images.hostinger.com/a54835cc-f3c0-406e-bf79-8d0e004361fe.png',
	staffing: 'https://images.hostinger.com/4888e25f-29e7-4043-91c3-5464fea0bbb7.png',
	cta: 'https://images.hostinger.com/32d52d27-6bea-4431-bf02-e62c065aeea5.png',
	careers: 'https://images.hostinger.com/4888e25f-29e7-4043-91c3-5464fea0bbb7.png',
	office: 'https://images.hostinger.com/4888e25f-29e7-4043-91c3-5464fea0bbb7.png',
} as const;

export const homeStoryBlocks = [
	{
		eyebrow: 'Why TechnoKraft',
		title: 'Engineering-led delivery, not a sales hand-off',
		body: 'Scoping conversations are held with the engineers who will do the work. Commitments reflect what is achievable in the field — on a tower, in a data hall, or inside a live security environment — rather than what looks good in a proposal.',
		linkLabel: 'About TechnoKraft',
		href: '/about',
		image: homeMedia.networkTower,
		imageAlt: 'Cell tower with 5G antennas on a prairie at golden hour',
		imageLeft: true,
	},
	{
		eyebrow: 'Connected practices',
		title: 'Five pillars that stay accountable to each other',
		body: 'Telecom, AI infrastructure, cybersecurity, AI applications and staffing under one structure. Clients are never forced to buy all five — but when more than one is needed, hand-offs stay inside the same company instead of across four vendor lists.',
		linkLabel: 'Explore solutions',
		href: '/solutions',
		image: homeMedia.gpu,
		imageAlt: 'GPU compute cluster in an enterprise data hall',
		imageLeft: false,
	},
	{
		eyebrow: 'Field discipline',
		title: 'Protecting people, assets and live networks',
		body: 'Infrastructure work happens in live environments. Safety protocols, change control and plain-language reporting are part of how engagements are run — not an afterthought bolted on after a schedule is set.',
		linkLabel: 'How we work',
		href: '/about',
		image: homeMedia.fiber,
		imageAlt: 'Fiber optic splice tray with illuminated glass fibers',
		imageLeft: true,
	},
] as const;

export const homeStatPlaceholders = [
	{
		label: 'Infrastructure programs',
		note: '[PROGRAM / SITE COUNT TO BE CONFIRMED]',
	},
	{
		label: 'Disciplines covered',
		value: '5',
		sub: 'Connected solution pillars under one engagement structure',
	},
	{
		label: 'Delivery model',
		value: '1',
		sub: 'Named lead per engagement — not a revolving account desk',
	},
] as const;
