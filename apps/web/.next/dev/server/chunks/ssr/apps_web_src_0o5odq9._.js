module.exports = [
"[project]/apps/web/src/components/home/home-hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeHero",
    ()=>HomeHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/inquiry-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$network$2d$canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/network-canvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/data/home.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/data/home-media.ts [app-ssr] (ecmascript)");
"use client";
;
;
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
            delayChildren: 0.12
        }
    }
};
const item = {
    hidden: {
        opacity: 0,
        y: 24
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: 'easeOut'
        }
    }
};
function HomeHero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative -mt-16 min-h-[100dvh] overflow-hidden pt-16 text-cream",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeMedia"].hero,
                alt: "",
                className: "absolute inset-0 h-full w-full scale-105 object-cover",
                fetchPriority: "high"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                lineNumber: 24,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'linear-gradient(108deg, hsl(234 84% 18% / 0.96) 0%, hsl(240 34% 8% / 0.88) 42%, hsl(232 70% 28% / 0.55) 100%)'
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                lineNumber: 30,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$network$2d$canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkCanvas"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                    lineNumber: 39,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                lineNumber: 38,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-grid-faint-dark absolute inset-0 opacity-20",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                lineNumber: 41,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-aurora animate-aurora-drift pointer-events-none absolute -right-[12%] -top-[18%] h-[58%] w-[52%] rounded-full opacity-45",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                lineNumber: 42,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 opacity-50",
                style: {
                    background: 'radial-gradient(ellipse 70% 60% at 78% 40%, hsl(188 95% 53% / 0.2) 0%, transparent 60%)'
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                lineNumber: 46,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: container,
                initial: "hidden",
                animate: "show",
                className: "relative mx-auto grid min-h-[min(92dvh,52rem)] max-w-7xl items-center gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: item,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-4 py-1.5 font-mono-tech text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-cream/85 backdrop-blur",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-1.5 w-1.5 rounded-full bg-cyan-bright",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                            lineNumber: 64,
                                            columnNumber: 8
                                        }, this),
                                        "Engineering Digital Success · Connect · Compute · Secure · Operate"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                    lineNumber: 63,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                lineNumber: 62,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                variants: item,
                                className: "mt-7 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-cream",
                                        children: "Intelligent"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                        lineNumber: 72,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-gradient",
                                        children: "Infrastructure"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                        lineNumber: 73,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 block text-cream",
                                        children: "for the AI Era"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                        lineNumber: 74,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                lineNumber: 68,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: item,
                                className: "mt-6 max-w-xl text-pretty text-base leading-relaxed text-cream/80 sm:text-lg",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeHero"].lede
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                lineNumber: 76,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: item,
                                className: "mt-9 flex flex-wrap items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InquiryButton"], {
                                        label: "Get in Touch",
                                        topic: "general"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                        lineNumber: 83,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/solutions",
                                        className: "group glass inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 font-display text-sm font-semibold text-cream transition-all hover:border-cyan/50 hover:bg-cream/10",
                                        children: [
                                            "Explore Solutions",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                                lineNumber: 89,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                        lineNumber: 84,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                lineNumber: 82,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: item,
                                className: "mt-8 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-cream/45",
                                children: "Serving carriers, enterprises, healthcare, data centers & public sector"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                lineNumber: 95,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                        lineNumber: 61,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: item,
                        className: "relative mx-auto hidden w-full max-w-md lg:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square overflow-hidden rounded-[2rem] border border-cream/15 shadow-soft-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeMedia"].gpu,
                                        alt: "GPU compute infrastructure in an enterprise data hall",
                                        className: "h-full w-full object-cover",
                                        loading: "eager"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                        lineNumber: 105,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0",
                                        style: {
                                            background: 'linear-gradient(to top, hsl(232 32% 6% / 0.75) 0%, transparent 55%), radial-gradient(circle at 50% 40%, hsl(188 95% 53% / 0.15), transparent 60%)'
                                        },
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                        lineNumber: 111,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-x-0 bottom-0 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono-tech text-[10px] uppercase tracking-[0.22em] text-cyan-bright",
                                                children: "AI infrastructure · Engineered delivery"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                                lineNumber: 120,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 font-display text-lg font-semibold text-cream",
                                                children: "From fiber in the ground to GPU fabric in production"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                                lineNumber: 123,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                        lineNumber: 119,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                lineNumber: 104,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,hsl(188_95%_53%_/_0.18),transparent_65%)]",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                                lineNumber: 128,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                        lineNumber: 103,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                lineNumber: 55,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#solutions-explorer",
                className: "absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 transition hover:text-cyan-bright sm:flex",
                "aria-label": "Scroll to solutions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono-tech text-[0.6rem] font-semibold uppercase tracking-[0.3em]",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                        lineNumber: 140,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "h-4 w-4 animate-bounce",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                        lineNumber: 143,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
                lineNumber: 135,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/home/home-hero.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this);
}
}),
"[project]/apps/web/src/components/home/services-explorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesExplorer",
    ()=>ServicesExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/data/pillars.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/data/home-media.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const SERVICE_IMAGES = {
    telecom: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeMedia"].networkTower,
    'ai-data-centre': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeMedia"].gpu,
    cybersecurity: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeMedia"].soc,
    'ai-application-development': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeMedia"].aiApp,
    'it-staffing': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeMedia"].staffing
};
function ServicesExplorer() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pillars"][0].slug);
    const current = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pillars"].find((p)=>p.slug === active) ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pillars"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "solutions-explorer",
        className: "border-b border-cream/10 bg-mesh-cream py-16 text-cream sm:py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono-tech text-xs font-medium uppercase tracking-[0.24em] text-cyan-bright",
                            children: "Our solutions"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                            lineNumber: 26,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl",
                            children: "Five practices. One accountable partner."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                            lineNumber: 29,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                    lineNumber: 25,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "glow-border overflow-hidden rounded-2xl border border-cream/10 bg-card/90 shadow-soft",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pillars"].map((pillar)=>{
                                const isActive = pillar.slug === active;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "border-b border-cream/8 last:border-b-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActive(pillar.slug),
                                        onMouseEnter: ()=>setActive(pillar.slug),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-start gap-3 px-4 py-4 text-left transition-colors sm:px-5', isActive ? 'border-l-4 border-l-cyan bg-ultramarine/15' : 'border-l-4 border-l-transparent hover:bg-ultramarine/10'),
                                        "aria-current": isActive ? 'true' : undefined,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg', isActive ? 'bg-ultramarine text-primary-foreground' : 'bg-ultramarine/10 text-ultramarine'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(pillar.icon, {
                                                    className: "h-4 w-4",
                                                    strokeWidth: 1.75,
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 12
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                                lineNumber: 52,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('block font-display text-sm font-semibold', isActive ? 'text-cyan-bright' : 'text-cream'),
                                                        children: pillar.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 12
                                                    }, this),
                                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 block text-xs leading-relaxed text-muted-foreground",
                                                        children: pillar.homeCard
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 13
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                                lineNumber: 62,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 10
                                    }, this)
                                }, pillar.slug, false, {
                                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 9
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                            lineNumber: 35,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono-tech text-xs font-medium uppercase tracking-[0.2em] text-cyan-bright",
                                    children: "Our services"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                    lineNumber: 84,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl",
                                    children: current.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                    lineNumber: 85,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 max-w-2xl text-pretty text-base leading-relaxed text-cream/75",
                                    children: current.hubCard
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$pillars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pillarHref"])(current.slug),
                                    className: "group mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-cyan-bright underline-offset-4 hover:underline",
                                    children: [
                                        "Learn about ",
                                        current.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-8 overflow-hidden rounded-2xl shadow-soft-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: SERVICE_IMAGES[current.slug] ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$home$2d$media$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["homeMedia"].handshake,
                                            alt: "",
                                            className: "aspect-[16/10] w-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                            lineNumber: 107,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-3 left-3 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-signal",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono-tech text-[10px] font-medium uppercase tracking-[0.18em] text-cream/90",
                                                    children: current.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                            lineNumber: 111,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                                    lineNumber: 101,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                            lineNumber: 83,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
                    lineNumber: 34,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
            lineNumber: 24,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/home/services-explorer.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this);
}
}),
"[project]/apps/web/src/components/inquiry-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InquiryButton",
    ()=>InquiryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/inquiry-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function InquiryButton({ label, topic = 'general', variant = 'primary', className }) {
    const inquiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$inquiry$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInquiry"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>inquiry.open(topic),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 font-display text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-[0.98]', variant === 'primary' && 'bg-ultramarine text-primary-foreground shadow-soft-primary hover:bg-gradient-to-r hover:from-cyan hover:to-ultramarine-bright hover:shadow-glow-cyan', variant === 'outline-dark' && 'border border-cream/20 bg-transparent text-cream hover:border-cyan/50 hover:bg-ultramarine/15', variant === 'outline-light' && 'glass text-cream hover:border-cyan/50 hover:bg-cream/10', className),
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/inquiry-button.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this);
}
}),
"[project]/apps/web/src/components/network-canvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NetworkCanvas",
    ()=>NetworkCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function NetworkCanvas({ className }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            }, ()=>({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.32,
                    vy: (Math.random() - 0.5) * 0.32
                }));
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
        const observer = new ResizeObserver(()=>{
            resize();
            if (reduced) {
                draw();
            }
        });
        observer.observe(canvas);
        canvas.addEventListener('pointermove', onPointerMove);
        canvas.addEventListener('pointerleave', onPointerLeave);
        return ()=>{
            window.cancelAnimationFrame(frame);
            observer.disconnect();
            canvas.removeEventListener('pointermove', onPointerMove);
            canvas.removeEventListener('pointerleave', onPointerLeave);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
}),
"[project]/apps/web/src/components/scroll-reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollReveal({ children, className, delay = 0 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            }
        }, {
            rootMargin: '0px 0px -8% 0px',
            threshold: 0.12
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('transition-all duration-500 ease-out', visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0', className),
        style: delay ? {
            transitionDelay: `${delay}ms`
        } : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/scroll-reveal.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this);
}
}),
"[project]/apps/web/src/data/home-media.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Photography used on the home page — varied, discipline-specific visuals. */ __turbopack_context__.s([
    "homeMedia",
    ()=>homeMedia,
    "homeStatPlaceholders",
    ()=>homeStatPlaceholders,
    "homeStoryBlocks",
    ()=>homeStoryBlocks
]);
const homeMedia = {
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
    office: 'https://images.hostinger.com/4888e25f-29e7-4043-91c3-5464fea0bbb7.png'
};
const homeStoryBlocks = [
    {
        eyebrow: 'Why TechnoKraft',
        title: 'Engineering-led delivery, not a sales hand-off',
        body: 'Scoping conversations are held with the engineers who will do the work. Commitments reflect what is achievable in the field — on a tower, in a data hall, or inside a live security environment — rather than what looks good in a proposal.',
        linkLabel: 'About TechnoKraft',
        href: '/about',
        image: homeMedia.networkTower,
        imageAlt: 'Cell tower with 5G antennas on a prairie at golden hour',
        imageLeft: true
    },
    {
        eyebrow: 'Connected practices',
        title: 'Five pillars that stay accountable to each other',
        body: 'Telecom, AI infrastructure, cybersecurity, AI applications and staffing under one structure. Clients are never forced to buy all five — but when more than one is needed, hand-offs stay inside the same company instead of across four vendor lists.',
        linkLabel: 'Explore solutions',
        href: '/solutions',
        image: homeMedia.gpu,
        imageAlt: 'GPU compute cluster in an enterprise data hall',
        imageLeft: false
    },
    {
        eyebrow: 'Field discipline',
        title: 'Protecting people, assets and live networks',
        body: 'Infrastructure work happens in live environments. Safety protocols, change control and plain-language reporting are part of how engagements are run — not an afterthought bolted on after a schedule is set.',
        linkLabel: 'How we work',
        href: '/about',
        image: homeMedia.fiber,
        imageAlt: 'Fiber optic splice tray with illuminated glass fibers',
        imageLeft: true
    }
];
const homeStatPlaceholders = [
    {
        label: 'Infrastructure programs',
        note: '[PROGRAM / SITE COUNT TO BE CONFIRMED]'
    },
    {
        label: 'Disciplines covered',
        value: '5',
        sub: 'Connected solution pillars under one engagement structure'
    },
    {
        label: 'Delivery model',
        value: '1',
        sub: 'Named lead per engagement — not a revolving account desk'
    }
];
}),
"[project]/apps/web/src/data/home.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "builtFor",
    ()=>builtFor,
    "homeFaqs",
    ()=>homeFaqs,
    "homeHero",
    ()=>homeHero,
    "homeReferences",
    ()=>homeReferences,
    "howWeWork",
    ()=>howWeWork,
    "intelligenceTimeline",
    ()=>intelligenceTimeline,
    "pillarSpotlights",
    ()=>pillarSpotlights,
    "pillarsIntro",
    ()=>pillarsIntro,
    "whyTechnoKraft",
    ()=>whyTechnoKraft,
    "whyTechnoKraftPlaceholder",
    ()=>whyTechnoKraftPlaceholder
]);
const homeHero = {
    title: 'Intelligent Infrastructure for the AI Era — Connect, Compute, Secure, Operate',
    lede: 'TechnoKraft Consultancy Services LLC engineers the infrastructure modern AI depends on: telecommunications networks, AI data-center and GPU compute capability, cybersecurity, AI applications, and the specialized technology talent that keeps all of it running. One accountable partner across the full stack — from the fiber in the ground to the AI application in production.',
    chip: 'Connect · Compute · Secure · Intelligence · Operate'
};
const pillarsIntro = {
    title: 'Technology infrastructure built around your business',
    paragraphs: [
        'Five solution pillars, engineered to work together rather than as five separate vendors under one letterhead. Most technology partners specialise in one layer of the stack and hand off to someone else for the next — a telecom contractor that has never touched a firewall, a security vendor that has no view of the AI application it is supposed to be protecting.',
        'TechnoKraft was built the opposite way: the same company that designs a network also secures it, builds the applications that run on top of it, and staffs the team that operates it, so a client is never stuck translating between vendors who do not talk to each other.'
    ]
};
const intelligenceTimeline = [
    {
        title: 'Connect',
        body: 'The network and physical infrastructure that gets data where it needs to go — telecom builds, fibre, in-building coverage.'
    },
    {
        title: 'Compute',
        body: 'The data centre and AI infrastructure layer that processes it — GPU clusters, high-performance networking, storage.'
    },
    {
        title: 'Secure',
        body: 'The cybersecurity practice that protects both layers and everything running on them.'
    },
    {
        title: 'Intelligence',
        body: 'The AI applications built on top — assistants, automation, document intelligence, decision support.'
    },
    {
        title: 'Operate',
        body: 'The staffing and managed capability that keeps all of it running day to day.'
    }
];
const pillarSpotlights = [
    {
        title: 'Telecommunications engineering',
        body: 'From field survey and RF design through network deployment, optimisation and fibre construction, TechnoKraft supports carriers, OEMs, tower companies and fibre operators across the complete infrastructure lifecycle.',
        linkLabel: 'See Telecom Solutions',
        href: '/solutions/telecom'
    },
    {
        title: 'AI data centre infrastructure',
        body: 'GPU cluster networking, InfiniBand and high-speed Ethernet fabric, and the monitoring and operational discipline that AI workloads demand, engineered by people who understand why a standard data centre playbook does not transfer directly to GPU infrastructure.',
        linkLabel: 'See AI Data Centre & AI Infrastructure',
        href: '/solutions/ai-data-centre'
    },
    {
        title: 'Cybersecurity',
        body: 'Assessment, monitoring, SOC and incident response built around the reality that most breaches start with an ordinary, preventable gap, not an exotic attack.',
        linkLabel: 'See Cybersecurity',
        href: '/solutions/cybersecurity'
    },
    {
        title: 'AI application development',
        body: 'Enterprise applications with AI built in where it earns its place — assistants grounded in your own data, workflow automation, document intelligence — rather than a chatbot bolted onto an existing screen.',
        linkLabel: 'See AI Application Development',
        href: '/solutions/ai-application-development'
    },
    {
        title: 'Technology staffing',
        body: 'Contract, contract-to-hire and direct placement across network engineering, cybersecurity, cloud, DevOps, AI/ML, data centre, telecom and software development, sourced against the same technical bar TechnoKraft holds its own delivery teams to.',
        linkLabel: 'See IT Staffing',
        href: '/solutions/it-staffing'
    }
];
const whyTechnoKraft = [
    {
        title: 'One partner across the lifecycle',
        body: 'Telecom, AI infrastructure, cybersecurity, AI applications and staffing delivered by one company with a single point of accountability, rather than coordinated across four separate vendors.'
    },
    {
        title: 'Engineering-led, not sales-led',
        body: 'Scoping conversations are held with the engineers who will do the work, so commitments reflect what is actually achievable.'
    },
    {
        title: 'Security considered at every layer',
        body: 'Cybersecurity is treated as a property of the infrastructure and applications TechnoKraft builds, not an afterthought sold separately.'
    },
    {
        title: 'Staffing drawn from the same technical bar',
        body: "The engineers placed through IT Staffing are held to the same technical standard as the teams delivering TechnoKraft's own infrastructure and security work."
    }
];
const whyTechnoKraftPlaceholder = '[STATISTIC / CLIENT COUNT / PROJECT COUNT TO BE ADDED] once confirmed figures are available. Do not populate the StatsSection component until real numbers are supplied.';
const howWeWork = [
    {
        title: 'Discover',
        body: 'Understand the environment, the constraint, and what a successful outcome looks like, before proposing anything.'
    },
    {
        title: 'Design',
        body: 'A written plan, scope and team, sized to the actual problem rather than a standard package.'
    },
    {
        title: 'Deliver',
        body: 'Execution against that plan, with a named lead and regular, plain-language reporting.'
    },
    {
        title: 'Optimise',
        body: 'Tuning, testing and validation once the initial build is in place — a network, a security control, an application is rarely finished at first deployment.'
    },
    {
        title: 'Operate',
        body: 'Ongoing management, monitoring or staffing support for as long as the client needs it.'
    }
];
const builtFor = {
    title: 'Built for organisations that cannot afford a weak link',
    paragraphs: [
        "A carrier rolling out a new market cannot have its RF design team disconnected from the security team hardening the sites it builds. A data centre operator standing up GPU capacity cannot treat network engineering and cybersecurity as two separate procurement conversations. An enterprise shipping an AI feature cannot bolt security on after launch.",
        "TechnoKraft's five pillars exist as one accountable structure precisely because these problems do not respect the boundaries a typical vendor list draws around them — and because a resourcing gap in any one of them, from a specialised RF engineer to a SOC analyst, can stall a project as surely as a missing technical decision."
    ]
};
const homeFaqs = [
    {
        q: 'What does TechnoKraft Consultancy Services actually do?',
        a: 'We deliver telecommunications infrastructure, AI data-centre and AI infrastructure engineering, cybersecurity, AI application development, and specialised technology staffing, as five connected practices rather than five unrelated service lines.'
    },
    {
        q: 'Do you work with carriers and tower companies, or only enterprises?',
        a: 'Both. The Telecom Solutions practice serves carriers, OEMs, tower companies and fibre operators; the other four pillars primarily serve enterprises, data centres, healthcare organisations and technology companies.'
    },
    {
        q: 'Can we engage one pillar without the others?',
        a: 'Yes. Each pillar is a standalone engagement. Many clients start with one — a security assessment, a staffing request, a telecom project — and bring in another pillar later once the fit is proven.'
    },
    {
        q: 'Is TechnoKraft a staffing agency or an engineering company?',
        a: 'Both, deliberately. IT Staffing places engineers held to the same bar as the teams delivering our infrastructure, security and application work, so a placement and a delivered project both carry the same standard.'
    },
    {
        q: 'How do we start a conversation?',
        a: 'Use Talk to an Expert or Discuss Your Project from any page. You will speak with someone who understands the relevant pillar, not a general sales contact.'
    }
];
const homeReferences = [
    {
        label: 'NIST Cybersecurity Framework',
        href: 'https://www.nist.gov/cyberframework'
    },
    {
        label: '3GPP specifications (5G NR and LTE)',
        href: 'https://www.3gpp.org/specifications-technologies'
    }
];
}),
];

//# sourceMappingURL=apps_web_src_0o5odq9._.js.map