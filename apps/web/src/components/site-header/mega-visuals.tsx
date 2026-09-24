import type { ReactElement } from 'react';

/**
 * Six lightweight SVG-based "3D-style" visuals for the Company mega menu.
 * One consistent wireframe-glow aesthetic in electric blue + cyan on a dark
 * transparent stage. Each loops a subtle idle animation and brightens when
 * its stage is the active (hovered) item. Static under prefers-reduced-motion
 * (handled globally in index.css).
 */

export type MegaKey =
	| 'about'
	| 'industries'
	| 'careers'
	| 'insights'
	| 'white-papers'
	| 'contact';

const BLUE = 'hsl(217 91% 60%)';
const BLUE_BRIGHT = 'hsl(213 94% 72%)';
const CYAN = 'hsl(199 89% 60%)';
const CYAN_BRIGHT = 'hsl(199 95% 78%)';

function AboutVisual() {
	// Abstract org / network: central hub + ring of nodes, slowly rotating.
	const nodes = Array.from({ length: 7 }, (_, i) => {
		const angle = (i / 7) * Math.PI * 2;
		return { x: 200 + Math.cos(angle) * 92, y: 140 + Math.sin(angle) * 70 };
	});
	return (
		<svg viewBox="0 0 400 280" className="mm-visual h-full w-full" fill="none" aria-hidden>
			<g className="mm-spin-slow">
				{nodes.map((n, i) => (
					<line
						key={`c${i}`}
						x1={200}
						y1={140}
						x2={n.x}
						y2={n.y}
						stroke={BLUE}
						strokeWidth={1.1}
						strokeOpacity={0.55}
					/>
				))}
				{nodes.map((n, i) => {
					const next = nodes[(i + 1) % nodes.length];
					return (
						<line
							key={`r${i}`}
							x1={n.x}
							y1={n.y}
							x2={next.x}
							y2={next.y}
							stroke={CYAN}
							strokeWidth={1}
							strokeOpacity={0.32}
						/>
					);
				})}
				{nodes.map((n, i) => (
					<g key={`n${i}`}>
						<circle cx={n.x} cy={n.y} r={9} fill={CYAN} fillOpacity={0.16} />
						<circle cx={n.x} cy={n.y} r={4} fill={CYAN_BRIGHT} />
					</g>
				))}
			</g>
			<circle cx={200} cy={140} r={16} fill={BLUE} fillOpacity={0.18} />
			<circle cx={200} cy={140} r={7} fill={BLUE_BRIGHT} />
		</svg>
	);
}

function IndustriesVisual() {
	// Rotating globe: latitude rings + spinning meridian + glowing connection arcs.
	return (
		<svg viewBox="0 0 400 280" className="mm-visual h-full w-full" fill="none" aria-hidden>
			<circle cx={200} cy={140} r={96} stroke={BLUE} strokeWidth={1.2} strokeOpacity={0.5} />
			<ellipse cx={200} cy={140} rx={96} ry={34} stroke={CYAN} strokeWidth={1} strokeOpacity={0.4} />
			<ellipse cx={200} cy={140} rx={96} ry={64} stroke={CYAN} strokeWidth={1} strokeOpacity={0.28} />
			<ellipse cx={200} cy={100} rx={72} ry={20} stroke={BLUE} strokeWidth={1} strokeOpacity={0.3} />
			<ellipse cx={200} cy={180} rx={72} ry={20} stroke={BLUE} strokeWidth={1} strokeOpacity={0.3} />
			<g className="mm-spin-med">
				<ellipse cx={200} cy={140} rx={34} ry={96} stroke={CYAN_BRIGHT} strokeWidth={1.2} strokeOpacity={0.55} />
				<ellipse cx={200} cy={140} rx={64} ry={96} stroke={BLUE_BRIGHT} strokeWidth={1} strokeOpacity={0.35} />
			</g>
			{/* connection arcs */}
			<g className="mm-spin-rev">
				<path d="M150 96 Q200 40 268 120" stroke={CYAN_BRIGHT} strokeWidth={1.4} strokeOpacity={0.7} />
				<path d="M120 170 Q200 230 286 150" stroke={BLUE_BRIGHT} strokeWidth={1.4} strokeOpacity={0.6} />
				<circle cx={150} cy={96} r={3.5} fill={CYAN_BRIGHT} />
				<circle cx={268} cy={120} r={3.5} fill={CYAN_BRIGHT} />
				<circle cx={120} cy={170} r={3.5} fill={BLUE_BRIGHT} />
				<circle cx={286} cy={150} r={3.5} fill={BLUE_BRIGHT} />
			</g>
		</svg>
	);
}

function CareersVisual() {
	// Ascending node chain / growth ladder with rising particles.
	const steps = [
		{ x: 96, y: 214 },
		{ x: 158, y: 176 },
		{ x: 220, y: 138 },
		{ x: 282, y: 100 },
		{ x: 344, y: 62 },
	];
	return (
		<svg viewBox="0 0 400 280" className="mm-visual h-full w-full" fill="none" aria-hidden>
			<g className="mm-float-slow">
				<path
					d="M96 214 L158 176 L220 138 L282 100 L344 62"
					stroke={BLUE}
					strokeWidth={1.4}
					strokeOpacity={0.5}
					strokeDasharray="4 5"
				/>
				{steps.map((s, i) => (
					<g key={i}>
						<rect
							x={s.x - 26}
							y={s.y - 7}
							width={52}
							height={14}
							rx={4}
							stroke={i === steps.length - 1 ? CYAN_BRIGHT : BLUE_BRIGHT}
							strokeWidth={1.4}
							strokeOpacity={0.85}
							fill={i === steps.length - 1 ? CYAN : BLUE}
							fillOpacity={0.14}
						/>
						<circle cx={s.x} cy={s.y} r={3} fill={i === steps.length - 1 ? CYAN_BRIGHT : BLUE_BRIGHT} />
					</g>
				))}
			</g>
			{/* rising particles */}
			{[
				{ cx: 120, delay: '0s' },
				{ cx: 200, delay: '1.1s' },
				{ cx: 280, delay: '2.2s' },
				{ cx: 330, delay: '0.6s' },
			].map((p, i) => (
				<circle
					key={i}
					className="mm-particle"
					cx={p.cx}
					cy={230}
					r={2.4}
					fill={CYAN_BRIGHT}
					style={{ animationDelay: p.delay }}
				/>
			))}
		</svg>
	);
}

function InsightsVisual() {
	// Floating stack of glowing data panels: bar chart + line graph.
	const bars = [
		{ x: 96, h: 70 },
		{ x: 138, h: 110 },
		{ x: 180, h: 92 },
		{ x: 222, h: 132 },
		{ x: 264, h: 104 },
		{ x: 306, h: 150 },
	];
	return (
		<svg viewBox="0 0 400 280" className="mm-visual h-full w-full" fill="none" aria-hidden>
			<g className="mm-float">
				<rect x={72} y={48} width={272} height={172} rx={10} stroke={BLUE} strokeWidth={1.1} strokeOpacity={0.32} />
				<line x1={72} y1={196} x2={344} y2={196} stroke={BLUE} strokeWidth={1} strokeOpacity={0.4} />
				{bars.map((b, i) => (
					<rect
						key={i}
						className="mm-bar"
						x={b.x}
						y={196 - b.h}
						width={26}
						height={b.h}
						rx={3}
						fill={i % 2 === 0 ? BLUE : CYAN}
						fillOpacity={0.22}
						stroke={i % 2 === 0 ? BLUE_BRIGHT : CYAN_BRIGHT}
						strokeWidth={1.2}
						style={{ animationDelay: `${i * 0.18}s` }}
					/>
				))}
				<path
					d="M96 150 L138 110 L180 128 L222 88 L264 116 L306 70"
					stroke={CYAN_BRIGHT}
					strokeWidth={1.8}
					strokeOpacity={0.9}
				/>
				{[
					[96, 150],
					[138, 110],
					[180, 128],
					[222, 88],
					[264, 116],
					[306, 70],
				].map(([x, y], i) => (
					<circle key={i} cx={x} cy={y} r={3} fill={CYAN_BRIGHT} />
				))}
			</g>
		</svg>
	);
}

function WhitePapersVisual() {
	// Stacked semi-transparent glowing document sheets, floating with offset.
	const sheets = [
		{ x: 120, y: 96, o: 0.28, delay: '0s' },
		{ x: 150, y: 84, o: 0.4, delay: '0.3s' },
		{ x: 180, y: 72, o: 0.6, delay: '0.6s' },
		{ x: 210, y: 60, o: 0.9, delay: '0.9s' },
	];
	return (
		<svg viewBox="0 0 400 280" className="mm-visual h-full w-full" fill="none" aria-hidden>
			{sheets.map((s, i) => (
				<g key={i} className="mm-float" style={{ animationDelay: s.delay }}>
					<rect
						x={s.x}
						y={s.y}
						width={120}
						height={150}
						rx={8}
						fill={i === 3 ? CYAN : BLUE}
						fillOpacity={s.o * 0.18}
						stroke={i === 3 ? CYAN_BRIGHT : BLUE_BRIGHT}
						strokeWidth={1.3}
						strokeOpacity={s.o}
					/>
					<line x1={s.x + 16} y1={s.y + 26} x2={s.x + 104} y2={s.y + 26} stroke={BLUE_BRIGHT} strokeWidth={1} strokeOpacity={s.o * 0.7} />
					<line x1={s.x + 16} y1={s.y + 46} x2={s.x + 92} y2={s.y + 46} stroke={BLUE_BRIGHT} strokeWidth={1} strokeOpacity={s.o * 0.6} />
					<line x1={s.x + 16} y1={s.y + 66} x2={s.x + 100} y2={s.y + 66} stroke={BLUE_BRIGHT} strokeWidth={1} strokeOpacity={s.o * 0.5} />
					<line x1={s.x + 16} y1={s.y + 86} x2={s.x + 80} y2={s.y + 86} stroke={BLUE_BRIGHT} strokeWidth={1} strokeOpacity={s.o * 0.45} />
				</g>
			))}
		</svg>
	);
}

function ContactVisual() {
	// Pulsing signal tower with concentric expanding rings.
	return (
		<svg viewBox="0 0 400 280" className="mm-visual h-full w-full" fill="none" aria-hidden>
			{/* tower */}
			<g className="mm-signal">
				<line x1={200} y1={248} x2={200} y2={150} stroke={BLUE_BRIGHT} strokeWidth={2} strokeOpacity={0.7} />
				<line x1={184} y1={248} x2={216} y2={248} stroke={BLUE_BRIGHT} strokeWidth={2} strokeOpacity={0.7} />
				<line x1={188} y1={220} x2={212} y2={220} stroke={CYAN} strokeWidth={1.4} strokeOpacity={0.6} />
				<line x1={192} y1={190} x2={208} y2={190} stroke={CYAN} strokeWidth={1.4} strokeOpacity={0.5} />
				<circle cx={200} cy={150} r={6} fill={CYAN_BRIGHT} />
			</g>
			{/* concentric pulse rings */}
			{[0, 1, 2].map(i => (
				<circle
					key={i}
					className="mm-pulse-ring"
					cx={200}
					cy={150}
					r={52}
					fill="none"
					stroke={i === 1 ? CYAN_BRIGHT : BLUE_BRIGHT}
					strokeWidth={1.6}
					style={{ animationDelay: `${i * 1.05}s` }}
				/>
			))}
			{/* radiating arcs */}
			<g className="mm-tilt">
				<path d="M120 150 Q200 70 280 150" stroke={CYAN} strokeWidth={1.2} strokeOpacity={0.5} />
				<path d="M140 150 Q200 90 260 150" stroke={BLUE} strokeWidth={1.2} strokeOpacity={0.4} />
			</g>
		</svg>
	);
}

const VISUALS: Record<MegaKey, () => ReactElement> = {
	about: AboutVisual,
	industries: IndustriesVisual,
	careers: CareersVisual,
	insights: InsightsVisual,
	'white-papers': WhitePapersVisual,
	contact: ContactVisual,
};

/** Render a single visual by key (used in the mobile accordion). */
export function MegaVisual({ visualKey }: { visualKey: MegaKey }) {
	const Visual = VISUALS[visualKey];
	return (
		<div className="mm-stage h-full w-full" data-active="true">
			<Visual />
		</div>
	);
}

/**
 * Stacked crossfade stage: renders every visual layered, only the active one
 * visible. Crossfades with opacity + a slight scale/slide on switch.
 */
export function MegaVisualStage({ active }: { active: MegaKey }) {
	return (
		<div className="relative h-full w-full">
			{(Object.keys(VISUALS) as MegaKey[]).map(key => {
				const Visual = VISUALS[key];
				const isActive = key === active;
				return (
					<div
						key={key}
						className="mm-stage absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
						data-active={isActive}
						style={{
							opacity: isActive ? 1 : 0,
							transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(8px)',
							pointerEvents: isActive ? 'auto' : 'none',
						}}
						aria-hidden={!isActive}
					>
						<Visual />
					</div>
				);
			})}
		</div>
	);
}
