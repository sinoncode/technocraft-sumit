(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/components/inquiry-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InquiryButton",
    ()=>InquiryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/inquiry-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function InquiryButton({ label, topic = 'general', variant = 'primary', className }) {
    _s();
    const inquiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInquiry"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>inquiry.open(topic),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 font-display text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-[0.98]', variant === 'primary' && 'bg-ultramarine text-primary-foreground shadow-soft-primary hover:bg-gradient-to-r hover:from-cyan hover:to-ultramarine-bright hover:shadow-glow-cyan', variant === 'outline-dark' && 'border border-cream/20 bg-transparent text-cream hover:border-cyan/50 hover:bg-ultramarine/15', variant === 'outline-light' && 'glass text-cream hover:border-cyan/50 hover:bg-cream/10', className),
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/inquiry-button.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this);
}
_s(InquiryButton, "eK0AOloQGUCZyEjFumNwy/2wh6E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInquiry"]
    ];
});
_c = InquiryButton;
var _c;
__turbopack_context__.k.register(_c, "InquiryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/network-canvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NetworkCanvas",
    ()=>NetworkCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function NetworkCanvas({ className }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NetworkCanvas.useEffect": ()=>{
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
            let nodes = [];
            let width = 0;
            let height = 0;
            const mouse = {
                x: -9999,
                y: -9999,
                active: false
            };
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
                const count = Math.min(width < 640 ? 36 : 80, Math.max(18, Math.floor(width * height / density)));
                nodes = Array.from({
                    length: count
                }, {
                    "NetworkCanvas.useEffect.resize": ()=>({
                            x: Math.random() * width,
                            y: Math.random() * height,
                            vx: (Math.random() - 0.5) * 0.32,
                            vy: (Math.random() - 0.5) * 0.32
                        })
                }["NetworkCanvas.useEffect.resize"]);
            }
            function draw() {
                if (!ctx) {
                    return;
                }
                ctx.clearRect(0, 0, width, height);
                const linkDistance = width < 640 ? 110 : 155;
                for(let i = 0; i < nodes.length; i += 1){
                    const a = nodes[i];
                    for(let j = i + 1; j < nodes.length; j += 1){
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
                for (const node of nodes){
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
                for (const node of nodes){
                    if (mouse.active) {
                        const dx = mouse.x - node.x;
                        const dy = mouse.y - node.y;
                        const dist = Math.hypot(dx, dy) || 1;
                        if (dist < 180) {
                            const force = (180 - dist) / 180 * 0.018;
                            node.vx += dx / dist * force;
                            node.vy += dy / dist * force;
                        }
                    }
                    node.vx *= 0.992;
                    node.vy *= 0.992;
                    const speed = Math.hypot(node.vx, node.vy);
                    if (speed > 0.55) {
                        node.vx = node.vx / speed * 0.55;
                        node.vy = node.vy / speed * 0.55;
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
            function onPointerMove(event) {
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
            const observer = new ResizeObserver({
                "NetworkCanvas.useEffect": ()=>{
                    resize();
                    if (reduced) {
                        draw();
                    }
                }
            }["NetworkCanvas.useEffect"]);
            observer.observe(canvas);
            canvas.addEventListener('pointermove', onPointerMove);
            canvas.addEventListener('pointerleave', onPointerLeave);
            return ({
                "NetworkCanvas.useEffect": ()=>{
                    window.cancelAnimationFrame(frame);
                    observer.disconnect();
                    canvas.removeEventListener('pointermove', onPointerMove);
                    canvas.removeEventListener('pointerleave', onPointerLeave);
                }
            })["NetworkCanvas.useEffect"];
        }
    }["NetworkCanvas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: className,
        "aria-hidden": "true",
        style: {
            width: '100%',
            height: '100%'
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/network-canvas.tsx",
        lineNumber: 179,
        columnNumber: 3
    }, this);
}
_s(NetworkCanvas, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = NetworkCanvas;
var _c;
__turbopack_context__.k.register(_c, "NetworkCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/page-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHero",
    ()=>PageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$network$2d$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/network-canvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/inquiry-button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.08
        }
    }
};
const item = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};
function PageHero({ eyebrow, title, lede, primaryCta, secondaryCta, breadcrumbs, chip }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative -mt-16 min-h-[min(74dvh,40rem)] overflow-hidden border-b border-ink-raised/60 pt-16 text-cream",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-mesh-ink absolute inset-0",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                lineNumber: 57,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-55",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$network$2d$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkCanvas"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/components/page-hero.tsx",
                    lineNumber: 59,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                lineNumber: 58,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-grid-faint-dark absolute inset-0 opacity-30",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                lineNumber: 61,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-aurora animate-aurora-drift pointer-events-none absolute -right-[10%] -top-[20%] h-[60%] w-[55%] rounded-full opacity-50",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                lineNumber: 62,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                style: {
                    background: 'linear-gradient(115deg, hsl(234 70% 24% / 0.6) 0%, transparent 48%), radial-gradient(ellipse 75% 65% at 22% 38%, transparent 0%, hsl(232 32% 6% / 0.6) 100%)'
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                lineNumber: 66,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: container,
                initial: "hidden",
                animate: "show",
                className: "relative mx-auto flex min-h-[min(74dvh,40rem)] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32",
                children: [
                    breadcrumbs && breadcrumbs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                        variants: item,
                        "aria-label": "Breadcrumb",
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "flex flex-wrap items-center gap-2 font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-cream/50",
                            children: breadcrumbs.map((crumb, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        index > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cyan/60",
                                            "aria-hidden": true,
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                            lineNumber: 86,
                                            columnNumber: 11
                                        }, this) : null,
                                        crumb.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: crumb.href,
                                            className: "underline-offset-4 transition-colors hover:text-cyan-bright hover:underline",
                                            children: crumb.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                            lineNumber: 91,
                                            columnNumber: 11
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cream/85",
                                            children: crumb.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                            lineNumber: 98,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, crumb.label, true, {
                                    fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                    lineNumber: 84,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/page-hero.tsx",
                            lineNumber: 82,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/page-hero.tsx",
                        lineNumber: 81,
                        columnNumber: 6
                    }, this) : null,
                    eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: item,
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-px w-10 bg-gradient-to-r from-transparent to-cyan-bright",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                lineNumber: 107,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "font-mono-tech text-xs font-medium uppercase tracking-[0.24em] text-cyan-bright",
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                lineNumber: 108,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/page-hero.tsx",
                        lineNumber: 106,
                        columnNumber: 6
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        variants: item,
                        className: "mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/page-hero.tsx",
                        lineNumber: 113,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        variants: item,
                        className: "mt-6 max-w-3xl text-pretty text-base leading-relaxed text-cream/75 sm:text-lg",
                        children: lede
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/page-hero.tsx",
                        lineNumber: 119,
                        columnNumber: 5
                    }, this),
                    primaryCta || secondaryCta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: item,
                        className: "mt-9 flex flex-wrap items-center gap-4",
                        children: [
                            primaryCta ? primaryCta.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: primaryCta.href,
                                className: "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ultramarine px-7 font-display text-sm font-semibold text-primary-foreground shadow-soft-primary transition-all hover:-translate-y-0.5 hover:bg-ultramarine-bright active:scale-[0.98]",
                                children: [
                                    primaryCta.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                        lineNumber: 134,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                lineNumber: 129,
                                columnNumber: 9
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InquiryButton"], {
                                label: primaryCta.label,
                                topic: primaryCta.topic ?? 'general'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                lineNumber: 137,
                                columnNumber: 9
                            }, this) : null,
                            secondaryCta ? secondaryCta.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: secondaryCta.href,
                                className: "glass inline-flex h-12 items-center justify-center rounded-full px-7 font-display text-sm font-semibold text-cream transition-colors hover:border-cyan/50 hover:bg-cream/10",
                                children: secondaryCta.label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                lineNumber: 142,
                                columnNumber: 9
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InquiryButton"], {
                                label: secondaryCta.label,
                                topic: secondaryCta.topic ?? 'general',
                                variant: "outline-light"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                                lineNumber: 149,
                                columnNumber: 9
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/page-hero.tsx",
                        lineNumber: 126,
                        columnNumber: 6
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                lineNumber: 74,
                columnNumber: 4
            }, this),
            chip ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    rotate: 6,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    rotate: 3,
                    y: 0
                },
                transition: {
                    delay: 0.7,
                    duration: 0.5,
                    ease: 'easeOut'
                },
                className: "glass absolute -right-4 bottom-10 hidden rounded-full px-5 py-3 font-mono-tech text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-bright shadow-glow-cyan lg:block",
                children: chip
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/page-hero.tsx",
                lineNumber: 160,
                columnNumber: 5
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/page-hero.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this);
}
_c = PageHero;
var _c;
__turbopack_context__.k.register(_c, "PageHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_components_0bv3amp._.js.map