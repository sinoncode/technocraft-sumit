import type { CardItem, ExternalReference, Faq } from '@/lib/content';

export const aiDcHero = {
	title: 'AI Data Centre & AI Infrastructure Engineering',
	lede: 'AI workloads place different demands on infrastructure than standard enterprise compute: GPU-to-GPU communication is latency-sensitive in a way ordinary application traffic is not, a single stalled node can idle an entire training job, and the network fabric itself becomes a performance bottleneck if it is treated as an afterthought. TechnoKraft provides the engineering, integration, monitoring and managed-service capability to design and operate AI infrastructure with this reality in view, from GPU cluster networking to the NOC and SOC functions that keep it running.',
	chip: 'Power → GPU → Fabric → NOC/SOC',
};

export const whyDifferent = {
	title: 'Why AI infrastructure requires a different operations model',
	paragraphs: [
		'A standard data centre operations playbook is built around CPU-bound, loosely coupled workloads where a slow server degrades one service. AI training and inference clusters are tightly coupled: GPUs communicate constantly during a distributed training job, coordinated through libraries such as NCCL, and the job runs only as fast as its slowest link. A single degraded InfiniBand port, a misconfigured RDMA queue pair, or unexpected congestion on the leaf-spine fabric does not just slow one workload — it can stall an entire multi-GPU job across dozens of nodes.',
		"This changes what 'monitoring' has to mean. GPU utilisation alone is not a useful health signal if the GPUs are idle while waiting on network communication rather than compute. Effective AI infrastructure operations track network latency and error rates at the fabric level, GPU-to-GPU communication patterns, RDMA and InfiniBand link health, and job-level throughput together, so a bottleneck is diagnosed as a network issue, a driver issue, or a genuine compute limit — rather than assumed to be one when it is another.",
	],
};

export const stackLayers: string[] = [
	'Power into the data centre facility',
	'GPU compute — on NVIDIA infrastructure where deployed',
	'Rocky Linux operating environment',
	'CUDA and NCCL — GPU compute and inter-GPU communication',
	'RDMA across an InfiniBand or high-speed Ethernet fabric',
	'Leaf-spine network topology',
	'Security and observability layered throughout',
	'NOC and SOC operations',
];

export const stackIntro =
	'A representative AI infrastructure stack, from the physical layer up: power, into the data centre facility, into GPU compute, running on NVIDIA infrastructure where deployed, on a Rocky Linux operating environment, with CUDA and NCCL handling GPU compute and inter-GPU communication, over RDMA, across an InfiniBand or high-speed Ethernet fabric in a leaf-spine network topology, with security and observability layered throughout, feeding into NOC and SOC operations.';

export const stackNote =
	"This is also why AI infrastructure engagements are staffed differently to a standard data-centre project. A network engineer without GPU-cluster experience can design a technically correct leaf-spine fabric that still under-performs once real training traffic is applied, because the traffic pattern of synchronised gradient exchange across dozens of GPUs does not resemble ordinary application traffic. TechnoKraft's AI infrastructure engagements are staffed by engineers who have worked specifically with GPU networking, not general network engineers applied to a new use case.";

export const aiDcCapabilities: CardItem[] = [
	{
		title: 'AI Infrastructure Strategy',
		body: 'Architecture planning for GPU compute environments sized to the workload — training, inference, or both — and the growth expected over time.',
	},
	{
		title: 'GPU Cluster Networking',
		body: 'Network fabric design connecting GPU nodes for the throughput and latency distributed training and inference require.',
	},
	{
		title: 'InfiniBand & RDMA',
		body: 'Design, deployment and tuning of InfiniBand fabric and RDMA-based communication for low-latency GPU-to-GPU data transfer.',
	},
	{
		title: 'High-Speed Ethernet',
		body: 'High-speed Ethernet fabric design as an alternative or complement to InfiniBand, depending on workload and existing infrastructure.',
	},
	{
		title: 'Rocky Linux Infrastructure',
		body: 'Operating system deployment and hardening for GPU compute nodes on Rocky Linux environments.',
	},
	{
		title: 'GPU / Network Performance Monitoring',
		body: 'Monitoring GPU utilisation, network latency, InfiniBand and RDMA error rates, and NCCL communication health together, not in isolation.',
	},
	{
		title: 'AI Infrastructure Security',
		body: 'Security controls appropriate to GPU compute environments — network segmentation, access control, and monitoring integrated with the broader Cybersecurity practice.',
	},
	{
		title: 'NOC & SOC',
		body: 'Network and security operations centre functions for AI infrastructure environments, covering both network health and security monitoring.',
	},
	{
		title: 'Infrastructure Automation',
		body: 'Automation of provisioning, configuration and routine operational tasks across GPU compute environments.',
	},
	{
		title: 'Capacity Planning',
		body: 'Planning for GPU, network and storage capacity against current and projected AI workload demand.',
	},
	{
		title: 'Managed AI Infrastructure',
		body: 'Ongoing management of AI compute environments where a client prefers an operating partner to an in-house team.',
	},
];

export const notReseller = {
	title: 'Engineering, integration and managed services — not a hardware reseller',
	paragraphs: [
		"TechnoKraft's role in AI infrastructure is engineering, integration, monitoring and managed operations — architecting the network and systems layer around GPU compute, integrating it into a working cluster, and keeping it observable and secure afterwards.",
	],
	placeholders: [
		'[NVIDIA PARTNERSHIP / CERTIFICATION STATUS TO BE CONFIRMED] — NVIDIA and other vendor names on this page describe the technology ecosystem TechnoKraft engineers around, not a claimed formal partnership unless one is confirmed separately.',
	],
};

export const aiDcWhoFor = {
	title: 'Who this is for',
	paragraphs: [
		'AI infrastructure companies and cloud/GPU providers building or scaling compute environments; data centre operators adding AI-specific capacity; enterprises building internal AI compute rather than relying solely on external inference APIs; and technology companies whose product depends on reliable, well-monitored GPU infrastructure.',
	],
};

export const aiDcFaqs: Faq[] = [
	{
		q: 'Is TechnoKraft an NVIDIA-authorised partner?',
		a: '[TO BE CONFIRMED.] Any partnership status will be stated plainly and only once verified; NVIDIA technology references on this page describe the ecosystem we engineer around.',
	},
	{
		q: 'Do you sell or supply GPU hardware?',
		a: '[GPU SUPPLY / PROCUREMENT CAPABILITY TO BE CONFIRMED.] Our stated capability is engineering, integration, monitoring and managed operations around GPU infrastructure.',
	},
	{
		q: 'What is the difference between InfiniBand and high-speed Ethernet for AI clusters?',
		a: 'Both are used to connect GPU nodes for the low-latency, high-throughput communication distributed AI workloads need. The right choice depends on existing infrastructure, workload profile and cost, and we assess this case by case rather than defaulting to one.',
	},
	{
		q: 'How is monitoring an AI cluster different from monitoring a standard server fleet?',
		a: 'It requires correlating GPU utilisation with network-level signals — InfiniBand and RDMA error rates, NCCL communication patterns, fabric congestion — because a tightly coupled training job can be network-bound in ways a standard server workload rarely is.',
	},
	{
		q: 'Can you take over management of an existing AI cluster?',
		a: 'Yes, typically starting with an architecture and operations review to understand the current environment before proposing a managed-services scope.',
	},
	{
		q: 'Do you provide the security layer for AI infrastructure, or is that separate?',
		a: 'AI infrastructure security is delivered in coordination with the Cybersecurity practice, so network and security monitoring for the same environment are not split across disconnected teams.',
	},
];

export const aiDcReferences: ExternalReference[] = [
	{
		label: 'NVIDIA, GPU cluster and networking documentation',
		href: 'https://docs.nvidia.com/',
	},
	{
		label: 'Red Hat, Rocky Linux and enterprise Linux platform documentation',
		href: 'https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux',
	},
	{
		label: 'CNCF, cloud-native infrastructure and observability landscape',
		href: 'https://www.cncf.io/',
	},
];
