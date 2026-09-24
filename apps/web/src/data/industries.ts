import type { LucideIcon } from 'lucide-react';
import {
	Building2,
	Cpu,
	HeartPulse,
	Landmark,
	RadioTower,
	Server,
} from 'lucide-react';

export type Industry = {
	name: string;
	body: string;
	icon: LucideIcon;
};

export const industries: Industry[] = [
	{
		name: 'Telecommunications',
		body: 'Network deployment, RF, fibre and optimisation for carriers and infrastructure owners.',
		icon: RadioTower,
	},
	{
		name: 'Enterprise',
		body: 'Network, cloud, cybersecurity and staffing for organisations running complex internal technology estates.',
		icon: Building2,
	},
	{
		name: 'Healthcare',
		body: 'Infrastructure, security, managed IT and technology staffing for hospitals and healthcare groups.',
		icon: HeartPulse,
	},
	{
		name: 'Data Centers',
		body: 'AI infrastructure, network engineering, monitoring and cybersecurity for US data center operators.',
		icon: Server,
	},
	{
		name: 'Technology',
		body: 'Engineering, AI development and staffing for technology and software companies.',
		icon: Cpu,
	},
	{
		name: 'Government / Public Sector',
		body: 'Infrastructure, security, staffing and technology services for public-sector organisations.',
		icon: Landmark,
	},
];
