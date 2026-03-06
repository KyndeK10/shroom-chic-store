(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnimatedBackground({ variant }) {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const density = theme.particleDensity / 100; // 0-1
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedBackground.useMemo[particles]": ()=>{
            const count = Math.max(3, Math.round(density * 20));
            return Array.from({
                length: count
            }, {
                "AnimatedBackground.useMemo[particles]": (_, i)=>({
                        id: i,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        size: Math.random() * 300 + 100,
                        duration: Math.random() * 10 + 10,
                        delay: Math.random() * 5
                    })
            }["AnimatedBackground.useMemo[particles]"]);
        }
    }["AnimatedBackground.useMemo[particles]"], [
        density
    ]);
    const smallParticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedBackground.useMemo[smallParticles]": ()=>{
            const count = Math.max(5, Math.round(density * 15));
            return Array.from({
                length: count
            }, {
                "AnimatedBackground.useMemo[smallParticles]": (_, i)=>({
                        id: i,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        duration: Math.random() * 8 + 8,
                        delay: Math.random() * 3
                    })
            }["AnimatedBackground.useMemo[smallParticles]"]);
        }
    }["AnimatedBackground.useMemo[smallParticles]"], [
        density
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[-1] pointer-events-none overflow-hidden",
        children: [
            variant === "mushrooms" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    smallParticles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute text-3xl md:text-4xl opacity-15",
                            style: {
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                filter: `drop-shadow(0 0 8px ${theme.primaryColor}80)`
                            },
                            animate: {
                                y: [
                                    0,
                                    -(Math.random() * 120 + 40),
                                    0
                                ],
                                x: [
                                    0,
                                    Math.random() * 60 - 30,
                                    0
                                ],
                                rotate: [
                                    0,
                                    Math.random() * 30 - 15,
                                    0
                                ]
                            },
                            transition: {
                                duration: p.duration + 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay
                            },
                            children: "🍄"
                        }, `shroom-${p.id}`, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                            lineNumber: 45,
                            columnNumber: 25
                        }, this)),
                    particles.slice(0, 5).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute rounded-full blur-[100px] opacity-20",
                            style: {
                                background: p.id % 2 === 0 ? "#8B5A2B" : "#556B2F",
                                width: p.size,
                                height: p.size,
                                top: `${p.y}%`,
                                left: `${p.x}%`
                            },
                            animate: {
                                scale: [
                                    1,
                                    1.3,
                                    1
                                ],
                                opacity: [
                                    0.15,
                                    0.3,
                                    0.15
                                ]
                            },
                            transition: {
                                duration: p.duration,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }, `glow-${p.id}`, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                            lineNumber: 70,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true),
            variant === "waves" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    particles.slice(0, 3).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 opacity-25 mix-blend-screen",
                            style: {
                                background: `radial-gradient(circle at 50% 50%, ${i === 0 ? `${theme.primaryColor}66` : i === 1 ? `${theme.secondaryColor}66` : "rgba(56,189,248,0.4)"} 0%, transparent 60%)`,
                                filter: "blur(60px)"
                            },
                            animate: {
                                scale: [
                                    1,
                                    1.5,
                                    1
                                ],
                                x: [
                                    0,
                                    p.x - 50,
                                    0
                                ],
                                y: [
                                    0,
                                    p.y - 50,
                                    0
                                ]
                            },
                            transition: {
                                duration: 15 + i * 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }, `wave-${p.id}`, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                            lineNumber: 95,
                            columnNumber: 25
                        }, this)),
                    smallParticles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute w-2 h-2 rounded-full bg-white",
                            style: {
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                boxShadow: `0 0 20px 10px ${p.id % 2 === 0 ? theme.primaryColor : theme.secondaryColor}`
                            },
                            animate: {
                                opacity: [
                                    0,
                                    0.7,
                                    0
                                ],
                                scale: [
                                    0.5,
                                    1.5,
                                    0.5
                                ]
                            },
                            transition: {
                                duration: p.duration / 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay
                            }
                        }, `pulse-${p.id}`, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                            lineNumber: 117,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true),
            variant === "fungi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 opacity-30",
                        animate: {
                            background: [
                                `linear-gradient(135deg, ${theme.primaryColor}40, transparent 50%, ${theme.secondaryColor}30)`,
                                `linear-gradient(225deg, ${theme.secondaryColor}40, transparent 50%, ${theme.primaryColor}30)`,
                                `linear-gradient(315deg, ${theme.primaryColor}30, transparent 50%, #38bdf840)`,
                                `linear-gradient(135deg, ${theme.primaryColor}40, transparent 50%, ${theme.secondaryColor}30)`
                            ]
                        },
                        transition: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                        lineNumber: 140,
                        columnNumber: 21
                    }, this),
                    particles.slice(0, 4).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute rounded-full blur-[80px] opacity-15",
                            style: {
                                background: `radial-gradient(circle, ${theme.primaryColor}50, transparent)`,
                                width: p.size * 0.8,
                                height: p.size * 0.8,
                                top: `${p.y}%`,
                                left: `${p.x}%`
                            },
                            animate: {
                                scale: [
                                    0.8,
                                    1.2,
                                    0.8
                                ],
                                x: [
                                    0,
                                    30,
                                    -20,
                                    0
                                ],
                                y: [
                                    0,
                                    -20,
                                    30,
                                    0
                                ]
                            },
                            transition: {
                                duration: p.duration + 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay
                            }
                        }, `tendril-${p.id}`, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                            lineNumber: 154,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true),
            variant === "organic" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: particles.slice(0, 4).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute rounded-full blur-[120px] opacity-20",
                        style: {
                            background: p.id % 3 === 0 ? "#556B2F" : p.id % 3 === 1 ? "#8B5A2B" : theme.primaryColor,
                            width: p.size,
                            height: p.size,
                            top: `${p.y}%`,
                            left: `${p.x}%`
                        },
                        animate: {
                            scale: [
                                0.6,
                                1.4,
                                0.6
                            ],
                            borderRadius: [
                                "50%",
                                "40%",
                                "60%",
                                "50%"
                            ],
                            opacity: [
                                0.1,
                                0.25,
                                0.1
                            ]
                        },
                        transition: {
                            duration: p.duration + 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: p.delay
                        }
                    }, `blob-${p.id}`, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                        lineNumber: 184,
                        columnNumber: 25
                    }, this))
            }, void 0, false),
            variant === "spores" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    smallParticles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute w-1 h-1 rounded-full",
                            style: {
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                background: p.id % 2 === 0 ? theme.primaryColor : theme.secondaryColor,
                                boxShadow: `0 0 6px 3px ${p.id % 2 === 0 ? theme.primaryColor : theme.secondaryColor}60`
                            },
                            animate: {
                                y: [
                                    0,
                                    -(Math.random() * 200 + 100)
                                ],
                                x: [
                                    0,
                                    Math.random() * 80 - 40
                                ],
                                opacity: [
                                    0,
                                    0.6,
                                    0
                                ]
                            },
                            transition: {
                                duration: p.duration + 4,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: p.delay
                            }
                        }, `spore-${p.id}`, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                            lineNumber: 218,
                            columnNumber: 25
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 opacity-10",
                        style: {
                            background: `radial-gradient(ellipse at bottom, ${theme.primaryColor}30, transparent 70%)`
                        },
                        animate: {
                            opacity: [
                                0.05,
                                0.15,
                                0.05
                            ]
                        },
                        transition: {
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                        lineNumber: 241,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            variant === "neon" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    particles.slice(0, 3).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute rounded-full border opacity-20",
                            style: {
                                borderColor: i === 0 ? theme.primaryColor : i === 1 ? theme.secondaryColor : "#38bdf8",
                                width: p.size * 1.5,
                                height: p.size * 1.5,
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                boxShadow: `0 0 40px 5px ${i === 0 ? theme.primaryColor : i === 1 ? theme.secondaryColor : "#38bdf8"}40`
                            },
                            animate: {
                                scale: [
                                    0.5,
                                    2,
                                    0.5
                                ],
                                opacity: [
                                    0.1,
                                    0.3,
                                    0.1
                                ]
                            },
                            transition: {
                                duration: p.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay
                            }
                        }, `ring-${p.id}`, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                            lineNumber: 256,
                            columnNumber: 25
                        }, this)),
                    smallParticles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute w-1.5 h-1.5 rounded-full bg-white",
                            style: {
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                boxShadow: `0 0 15px 8px ${p.id % 3 === 0 ? theme.primaryColor : p.id % 3 === 1 ? theme.secondaryColor : "#38bdf8"}`
                            },
                            animate: {
                                opacity: [
                                    0,
                                    1,
                                    0
                                ],
                                scale: [
                                    0.3,
                                    1.8,
                                    0.3
                                ]
                            },
                            transition: {
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay
                            }
                        }, `ndot-${p.id}`, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
                            lineNumber: 281,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(AnimatedBackground, "3N98oYFAyMXk8c6AdiplzWkjLmI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AnimatedBackground;
var _c;
__turbopack_context__.k.register(_c, "AnimatedBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocialEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
"use client";
;
;
;
function SocialEmbed({ type, embedUrl, additionalUrls = [], title, className = "" }) {
    const hasContent = !!embedUrl;
    switch(type){
        case "instagram-grid":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${className}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                    lineNumber: 37,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white",
                                children: title || "Instagram"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    hasContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl overflow-hidden border border-purple-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: embedUrl,
                            className: "w-full min-h-[450px]",
                            style: {
                                border: "none"
                            },
                            title: "Instagram Feed",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                            lineNumber: 45,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 44,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-stone-900/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2",
                                children: [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "aspect-square bg-stone-800/80 rounded-lg overflow-hidden relative group cursor-pointer",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 300
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                                lineNumber: 63,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10",
                                                animate: {
                                                    opacity: [
                                                        0.3,
                                                        0.6,
                                                        0.3
                                                    ]
                                                },
                                                transition: {
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: i * 0.2
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                                lineNumber: 64,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                    className: "w-6 h-6 text-white/70"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                                lineNumber: 73,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 57,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 55,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-stone-500 text-sm text-center mt-4",
                                children: "@shroomchiccreations"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 79,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://instagram.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mt-3 flex items-center justify-center gap-2 text-pink-400 hover:text-pink-300 text-sm transition-colors",
                                children: [
                                    "Follow on Instagram ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 88,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 82,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 54,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                lineNumber: 34,
                columnNumber: 17
            }, this);
        case "tiktok-carousel":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${className}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-black rounded-xl flex items-center justify-center border border-stone-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white",
                                children: title || "TikTok"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this),
                    hasContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory",
                        children: [
                            embedUrl,
                            ...additionalUrls
                        ].map((url, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 w-[280px] snap-center rounded-2xl overflow-hidden border border-pink-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    src: url,
                                    className: "w-full h-[500px]",
                                    style: {
                                        border: "none"
                                    },
                                    title: `TikTok Video ${i + 1}`,
                                    loading: "lazy",
                                    allow: "encrypted-media"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                    lineNumber: 113,
                                    columnNumber: 37
                                }, this)
                            }, i, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 109,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 107,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 overflow-x-auto pb-4",
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex-shrink-0 w-[200px] aspect-[9/16] bg-stone-900/60 rounded-2xl border border-pink-500/20 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer",
                                whileHover: {
                                    scale: 1.03
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent",
                                        animate: {
                                            opacity: [
                                                0.3,
                                                0.6,
                                                0.3
                                            ]
                                        },
                                        transition: {
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: i * 0.5
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 132,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full bg-stone-800/80 flex items-center justify-center border border-pink-500/30 mb-3 group-hover:border-pink-400 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "w-6 h-6 text-pink-400 ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                            lineNumber: 142,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 141,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-stone-500 text-xs",
                                        children: [
                                            "TikTok #",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 144,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 127,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 125,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                lineNumber: 97,
                columnNumber: 17
            }, this);
        case "youtube-player":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${className}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                    lineNumber: 157,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 156,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white",
                                children: title || "Watch Our Story"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 159,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 155,
                        columnNumber: 21
                    }, this),
                    hasContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-video rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: embedUrl,
                            className: "w-full h-full",
                            title: "YouTube Video",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true,
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                            lineNumber: 165,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 164,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "aspect-video bg-stone-900/60 rounded-2xl border border-purple-500/20 flex flex-col items-center justify-center relative overflow-hidden cursor-pointer group",
                        whileHover: {
                            scale: 1.01
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 bg-gradient-to-br from-red-900/10 to-purple-900/10",
                                animate: {
                                    opacity: [
                                        0.3,
                                        0.5,
                                        0.3
                                    ]
                                },
                                transition: {
                                    duration: 5,
                                    repeat: Infinity
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 179,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-full bg-red-600/20 flex items-center justify-center border-2 border-red-500/40 mb-4 group-hover:bg-red-600/30 group-hover:border-red-400 transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-8 h-8 text-red-400 ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                    lineNumber: 185,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 184,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-stone-400 text-sm",
                                children: "Brand Story Coming Soon"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 187,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 175,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                lineNumber: 154,
                columnNumber: 17
            }, this);
        case "tiktok-shorts":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${className}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-black rounded-xl flex items-center justify-center border border-stone-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                    lineNumber: 198,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 197,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white",
                                children: title || "Trending Now"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 200,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 196,
                        columnNumber: 21
                    }, this),
                    hasContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                        children: [
                            embedUrl,
                            ...additionalUrls
                        ].map((url, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-[9/16] rounded-2xl overflow-hidden border border-pink-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    src: url,
                                    className: "w-full h-full",
                                    style: {
                                        border: "none"
                                    },
                                    title: `TikTok Short ${i + 1}`,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                    lineNumber: 211,
                                    columnNumber: 37
                                }, this)
                            }, i, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 207,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 205,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "aspect-[9/16] bg-stone-900/60 rounded-2xl border border-pink-500/20 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer",
                                whileHover: {
                                    scale: 1.03
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0",
                                        style: {
                                            background: `linear-gradient(${135 + i * 45}deg, rgba(168,85,247,0.1), rgba(236,72,153,0.1))`
                                        },
                                        animate: {
                                            opacity: [
                                                0.3,
                                                0.6,
                                                0.3
                                            ]
                                        },
                                        transition: {
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: i * 0.3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 229,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-8 h-8 text-pink-400/60 group-hover:text-pink-400 transition-colors mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 241,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-stone-600 text-xs",
                                        children: "Coming Soon"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 242,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 224,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 222,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                lineNumber: 195,
                columnNumber: 17
            }, this);
        case "instagram-stories":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${className}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                    lineNumber: 255,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 254,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white",
                                children: title || "Story Highlights"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 257,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 253,
                        columnNumber: 21
                    }, this),
                    hasContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl overflow-hidden border border-purple-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: embedUrl,
                            className: "w-full min-h-[400px]",
                            style: {
                                border: "none"
                            },
                            title: "Instagram Stories",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                            lineNumber: 263,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 262,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 overflow-x-auto pb-4",
                        children: [
                            "✨ BTS",
                            "🍄 Drops",
                            "🎨 Design",
                            "🎪 Fests",
                            "💜 Reviews"
                        ].map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group",
                                whileHover: {
                                    scale: 1.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full rounded-full bg-stone-900 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "w-12 h-12 rounded-full bg-stone-800",
                                                animate: {
                                                    opacity: [
                                                        0.5,
                                                        0.8,
                                                        0.5
                                                    ]
                                                },
                                                transition: {
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: i * 0.2
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                                lineNumber: 282,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                            lineNumber: 281,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 280,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-stone-400 text-xs group-hover:text-white transition-colors",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                        lineNumber: 293,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                                lineNumber: 275,
                                columnNumber: 37
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                        lineNumber: 272,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx",
                lineNumber: 252,
                columnNumber: 17
            }, this);
        default:
            return null;
    }
}
_c = SocialEmbed;
var _c;
__turbopack_context__.k.register(_c, "SocialEmbed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/src/components/AnimatedBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$src$2f$components$2f$SocialEmbed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/apps/Shroom Chic Creations/src/components/SocialEmbed.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setIsMounted(true);
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 via-[#2a221f] to-[#1e1a18]",
        children: [
            isMounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "mushrooms"
            }, void 0, false, {
                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-24 pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1,
                            ease: "easeOut"
                        },
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/logo.png",
                            alt: "Shroom Chic Creations Logo",
                            className: "w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.4)]"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.3,
                            duration: 0.8
                        },
                        className: "text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600",
                        children: "Embrace the Magic"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.5,
                            duration: 0.8
                        },
                        className: "text-lg md:text-2xl text-stone-300 max-w-2xl mx-auto mb-10 font-light",
                        children: "Psychedelic festival fashion and boho accessories designed for the free spirit."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.7,
                            duration: 0.8
                        },
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                className: "group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex items-center gap-2",
                                        children: [
                                            "Shop Collection ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/drops",
                                className: "group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-stone-300 border border-purple-500/50 rounded-full overflow-hidden transition-all hover:text-white hover:bg-purple-900/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5 text-pink-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        " Limited Drops"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.8
                },
                className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4",
                                children: "Follow the Journey"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-stone-400 max-w-2xl mx-auto",
                                children: "Get inspired by our community and see the latest creations in action."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$src$2f$components$2f$SocialEmbed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "instagram-grid",
                                title: "@shroomchiccreations"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$src$2f$components$2f$SocialEmbed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "tiktok-carousel",
                                title: "Viral Moments"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$src$2f$components$2f$SocialEmbed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "youtube-player",
                                title: "Behind the Magic",
                                className: "md:col-span-2 lg:col-span-1"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 1
                },
                className: "relative z-10 mt-16 w-full max-w-4xl mx-auto px-4 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-stone-900/50 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-serif font-bold mb-4 text-white",
                            children: "Join the Coven"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-400 mb-8 max-w-md mx-auto",
                            children: "Subscribe for exclusive drops, secret sales, and psychedelic inspiration."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto",
                            onSubmit: (e)=>e.preventDefault(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Enter your email",
                                    className: "flex-1 bg-stone-950/50 border border-purple-500/30 rounded-full px-6 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$apps$2f$Shroom__Chic__Creations$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all",
                                    children: "Subscribe"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/apps/Shroom Chic Creations/src/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Home, "h7njlszr1nxUzrk46zHyBTBrvgI=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_apps_Shroom%20Chic%20Creations_src_1746ad75._.js.map