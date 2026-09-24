"use client";
import { useEffect, useRef } from 'react';

type Node = {
	x: number;
	y: number;
	vx: number;
	vy: number;
};

/**
 * Animated network-node graph for dark heroes: glowing connected dots and
 * lines that drift and react subtly to pointer movement. Static under
 * prefers-reduced-motion; fewer nodes on narrow viewports.
 */
export function NetworkCanvas({ className }: { className?: string }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		const ctx = canvas.getContext('2d');
		if (!ctx) {
			return;
		}

		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const coarse = window.matchMedia('(pointer: coarse)').matches;
		let frame = 0;
		let nodes: Node[] = [];
		let width = 0;
		let height = 0;
		const mouse = { x: -9999, y: -9999, active: false };

		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		function resize() {
			if (!canvas || !ctx) {
				return;
			}
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			canvas.width = Math.max(1, Math.floor(width * dpr));
			canvas.height = Math.max(1, Math.floor(height * dpr));
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

			const density = width < 640 ? 32000 : 20000;
			const count = Math.min(width < 640 ? 36 : 80, Math.max(18, Math.floor((width * height) / density)));
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.32,
				vy: (Math.random() - 0.5) * 0.32,
			}));
		}

		function draw() {
			if (!ctx) {
				return;
			}
			ctx.clearRect(0, 0, width, height);

			const linkDistance = width < 640 ? 110 : 155;

			for (let i = 0; i < nodes.length; i += 1) {
				const a = nodes[i];
				for (let j = i + 1; j < nodes.length; j += 1) {
					const b = nodes[j];
					const dx = a.x - b.x;
					const dy = a.y - b.y;
					const dist = Math.hypot(dx, dy);
					if (dist < linkDistance) {
						const alpha = (1 - dist / linkDistance) * 0.48;
						const near = dist < linkDistance * 0.4;
						// Electric blue → cyan
						const r = near ? 56 : 37;
						const g = near ? 189 : 99;
						const bl = near ? 248 : 235;
						ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${alpha.toFixed(3)})`;
						ctx.lineWidth = near ? 1.25 : 1;
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
			}

			for (const node of nodes) {
				const md = Math.hypot(node.x - mouse.x, node.y - mouse.y);
				const hot = mouse.active && md < 140;
				const radius = hot ? 2.6 : 1.7;
				ctx.fillStyle = hot ? 'rgba(56, 189, 248, 0.95)' : 'rgba(96, 165, 250, 0.9)';
				ctx.beginPath();
				ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
				ctx.fill();
				ctx.fillStyle = hot ? 'rgba(56, 189, 248, 0.28)' : 'rgba(37, 99, 235, 0.2)';
				ctx.beginPath();
				ctx.arc(node.x, node.y, hot ? 8 : 4.5, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		function step() {
			for (const node of nodes) {
				if (mouse.active) {
					const dx = mouse.x - node.x;
					const dy = mouse.y - node.y;
					const dist = Math.hypot(dx, dy) || 1;
					if (dist < 180) {
						const force = ((180 - dist) / 180) * 0.018;
						node.vx += (dx / dist) * force;
						node.vy += (dy / dist) * force;
					}
				}
				node.vx *= 0.992;
				node.vy *= 0.992;
				const speed = Math.hypot(node.vx, node.vy);
				if (speed > 0.55) {
					node.vx = (node.vx / speed) * 0.55;
					node.vy = (node.vy / speed) * 0.55;
				}
				node.x += node.vx;
				node.y += node.vy;
				if (node.x < -20) node.x = width + 20;
				if (node.x > width + 20) node.x = -20;
				if (node.y < -20) node.y = height + 20;
				if (node.y > height + 20) node.y = -20;
			}
			draw();
			frame = window.requestAnimationFrame(step);
		}

		function onPointerMove(event: PointerEvent) {
			if (coarse || reduced || !canvas) return;
			const rect = canvas.getBoundingClientRect();
			mouse.x = event.clientX - rect.left;
			mouse.y = event.clientY - rect.top;
			mouse.active = true;
		}

		function onPointerLeave() {
			mouse.active = false;
			mouse.x = -9999;
			mouse.y = -9999;
		}

		resize();
		if (reduced) {
			draw();
		} else {
			frame = window.requestAnimationFrame(step);
		}

		const observer = new ResizeObserver(() => {
			resize();
			if (reduced) {
				draw();
			}
		});
		observer.observe(canvas);

		canvas.addEventListener('pointermove', onPointerMove);
		canvas.addEventListener('pointerleave', onPointerLeave);

		return () => {
			window.cancelAnimationFrame(frame);
			observer.disconnect();
			canvas.removeEventListener('pointermove', onPointerMove);
			canvas.removeEventListener('pointerleave', onPointerLeave);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className={className}
			aria-hidden="true"
			style={{ width: '100%', height: '100%' }}
		/>
	);
}
