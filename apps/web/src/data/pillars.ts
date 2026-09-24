import type { LucideIcon } from 'lucide-react';
import { BrainCircuit, RadioTower, Server, ShieldCheck, Users } from 'lucide-react';

export type Pillar = {
	slug: string;
	name: string;
	/** Card copy used on the Solutions hub. */
	hubCard: string;
	/** Shorter card copy used on the home page. */
	homeCard: string;
	/** Card copy used on the About page. */
	aboutCard: string;
	homeLinkLabel: string;
	aboutLinkLabel: string;
	icon: LucideIcon;
};

export const pillars: Pillar[] = [
	{
		slug: 'telecom',
		name: 'Telecom Solutions',
		hubCard:
			'Network deployment and rollout, RF engineering, in-building coverage and small cells, and fibre construction and survey, across the survey-to-optimisation lifecycle for carriers, OEMs, tower companies and fibre operators.',
		homeCard:
			'Network deployment, RF engineering, in-building coverage and fibre construction across the full survey-to-optimisation lifecycle.',
		aboutCard:
			'Survey, design, deployment, optimisation and fibre construction for carriers, OEMs, tower companies and fibre operators.',
		homeLinkLabel: 'Explore Telecom Solutions',
		aboutLinkLabel: 'Explore Telecom Solutions',
		icon: RadioTower,
	},
	{
		slug: 'ai-data-centre',
		name: 'AI Data Centre & AI Infrastructure',
		hubCard:
			'GPU cluster networking, InfiniBand and RDMA, high-speed Ethernet fabric, and the monitoring and operations discipline that distinguishes AI infrastructure from a standard data centre build.',
		homeCard:
			'GPU cluster networking, high-performance fabric and the operations discipline AI workloads actually require.',
		aboutCard:
			'GPU cluster networking, high-performance fabric and the operational discipline AI compute environments require.',
		homeLinkLabel: 'Explore AI Infrastructure',
		aboutLinkLabel: 'Explore AI Infrastructure',
		icon: Server,
	},
	{
		slug: 'cybersecurity',
		name: 'Cybersecurity',
		hubCard:
			'Security assessment, vulnerability management, network and endpoint security, SIEM and SOC, cloud and identity security, and incident response.',
		homeCard:
			'Assessment, monitoring, SOC and incident response for organisations that cannot afford to guess at their exposure.',
		aboutCard:
			'Assessment, monitoring, SOC and incident response across network, cloud, endpoint and identity.',
		homeLinkLabel: 'Assess Your Security',
		aboutLinkLabel: 'Explore Cybersecurity',
		icon: ShieldCheck,
	},
	{
		slug: 'ai-application-development',
		name: 'AI Application Development',
		hubCard:
			'Generative AI and enterprise AI applications, RAG systems, AI assistants, document intelligence and workflow automation, built around measurable business outcomes.',
		homeCard:
			'Enterprise AI applications, RAG systems and AI agents built around real business outcomes.',
		aboutCard:
			'Enterprise applications with generative AI, RAG and automation built in where they solve a real problem.',
		homeLinkLabel: 'Build an AI Application',
		aboutLinkLabel: 'Explore AI Application Development',
		icon: BrainCircuit,
	},
	{
		slug: 'it-staffing',
		name: 'IT Staffing',
		hubCard:
			'Contract, contract-to-hire and direct placement across network engineering, cybersecurity, cloud, DevOps, AI/ML, data centre and telecom disciplines.',
		homeCard:
			'Contract, contract-to-hire and direct placement talent across network, security, cloud, AI/ML and telecom disciplines.',
		aboutCard:
			'Contract, contract-to-hire and direct placement across network, security, cloud, AI/ML and telecom disciplines.',
		homeLinkLabel: 'Find Technology Talent',
		aboutLinkLabel: 'Explore IT Staffing',
		icon: Users,
	},
];

export const pillarHref = (slug: string) => `/solutions/${slug}`;
