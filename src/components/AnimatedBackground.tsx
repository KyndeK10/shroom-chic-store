"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

type BackgroundVariant = "mushrooms" | "waves" | "fungi" | "organic" | "spores" | "neon";

interface AnimatedBackgroundProps {
    variant: BackgroundVariant;
}

export default function AnimatedBackground({ variant }: AnimatedBackgroundProps) {
    const { theme } = useTheme();
    const density = theme.particleDensity / 100; // 0-1

    const particles = useMemo(() => {
        const count = Math.max(3, Math.round(density * 20));
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 300 + 100,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
        }));
    }, [density]);

    const smallParticles = useMemo(() => {
        const count = Math.max(5, Math.round(density * 15));
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 8 + 8,
            delay: Math.random() * 3,
        }));
    }, [density]);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            {variant === "mushrooms" && (
                <>
                    {/* Floating mushroom emojis */}
                    {smallParticles.map((p) => (
                        <motion.div
                            key={`shroom-${p.id}`}
                            className="absolute text-3xl md:text-4xl opacity-15"
                            style={{
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                filter: `drop-shadow(0 0 8px ${theme.primaryColor}80)`,
                            }}
                            animate={{
                                y: [0, -(Math.random() * 120 + 40), 0],
                                x: [0, Math.random() * 60 - 30, 0],
                                rotate: [0, Math.random() * 30 - 15, 0],
                            }}
                            transition={{
                                duration: p.duration + 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay,
                            }}
                        >
                            🍄
                        </motion.div>
                    ))}
                    {/* Earthy glow orbs */}
                    {particles.slice(0, 5).map((p) => (
                        <motion.div
                            key={`glow-${p.id}`}
                            className="absolute rounded-full blur-[100px] opacity-20"
                            style={{
                                background: p.id % 2 === 0 ? "#8B5A2B" : "#556B2F",
                                width: p.size,
                                height: p.size,
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                            }}
                            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </>
            )}

            {variant === "waves" && (
                <>
                    {/* Radial gradient pulses */}
                    {particles.slice(0, 3).map((p, i) => (
                        <motion.div
                            key={`wave-${p.id}`}
                            className="absolute inset-0 opacity-25 mix-blend-screen"
                            style={{
                                background: `radial-gradient(circle at 50% 50%, ${i === 0 ? `${theme.primaryColor}66` : i === 1 ? `${theme.secondaryColor}66` : "rgba(56,189,248,0.4)"
                                    } 0%, transparent 60%)`,
                                filter: "blur(60px)",
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                x: [0, p.x - 50, 0],
                                y: [0, p.y - 50, 0],
                            }}
                            transition={{
                                duration: 15 + i * 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                    {/* Neon pulse dots */}
                    {smallParticles.map((p) => (
                        <motion.div
                            key={`pulse-${p.id}`}
                            className="absolute w-2 h-2 rounded-full bg-white"
                            style={{
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                boxShadow: `0 0 20px 10px ${p.id % 2 === 0 ? theme.primaryColor : theme.secondaryColor}`,
                            }}
                            animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.5, 0.5] }}
                            transition={{
                                duration: p.duration / 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay,
                            }}
                        />
                    ))}
                </>
            )}

            {variant === "fungi" && (
                <>
                    {/* Color-shifting gradient */}
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                            background: [
                                `linear-gradient(135deg, ${theme.primaryColor}40, transparent 50%, ${theme.secondaryColor}30)`,
                                `linear-gradient(225deg, ${theme.secondaryColor}40, transparent 50%, ${theme.primaryColor}30)`,
                                `linear-gradient(315deg, ${theme.primaryColor}30, transparent 50%, #38bdf840)`,
                                `linear-gradient(135deg, ${theme.primaryColor}40, transparent 50%, ${theme.secondaryColor}30)`,
                            ],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Subtle mycelium tendrils */}
                    {particles.slice(0, 4).map((p) => (
                        <motion.div
                            key={`tendril-${p.id}`}
                            className="absolute rounded-full blur-[80px] opacity-15"
                            style={{
                                background: `radial-gradient(circle, ${theme.primaryColor}50, transparent)`,
                                width: p.size * 0.8,
                                height: p.size * 0.8,
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                            }}
                            animate={{
                                scale: [0.8, 1.2, 0.8],
                                x: [0, 30, -20, 0],
                                y: [0, -20, 30, 0],
                            }}
                            transition={{
                                duration: p.duration + 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay,
                            }}
                        />
                    ))}
                </>
            )}

            {variant === "organic" && (
                <>
                    {/* Slow organic blob growth */}
                    {particles.slice(0, 4).map((p) => (
                        <motion.div
                            key={`blob-${p.id}`}
                            className="absolute rounded-full blur-[120px] opacity-20"
                            style={{
                                background: p.id % 3 === 0
                                    ? "#556B2F"
                                    : p.id % 3 === 1
                                        ? "#8B5A2B"
                                        : theme.primaryColor,
                                width: p.size,
                                height: p.size,
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                            }}
                            animate={{
                                scale: [0.6, 1.4, 0.6],
                                borderRadius: ["50%", "40%", "60%", "50%"],
                                opacity: [0.1, 0.25, 0.1],
                            }}
                            transition={{
                                duration: p.duration + 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay,
                            }}
                        />
                    ))}
                </>
            )}

            {variant === "spores" && (
                <>
                    {/* Gentle drifting spore particles */}
                    {smallParticles.map((p) => (
                        <motion.div
                            key={`spore-${p.id}`}
                            className="absolute w-1 h-1 rounded-full"
                            style={{
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                background: p.id % 2 === 0 ? theme.primaryColor : theme.secondaryColor,
                                boxShadow: `0 0 6px 3px ${p.id % 2 === 0 ? theme.primaryColor : theme.secondaryColor}60`,
                            }}
                            animate={{
                                y: [0, -(Math.random() * 200 + 100)],
                                x: [0, Math.random() * 80 - 40],
                                opacity: [0, 0.6, 0],
                            }}
                            transition={{
                                duration: p.duration + 4,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: p.delay,
                            }}
                        />
                    ))}
                    {/* Soft glow backdrop */}
                    <motion.div
                        className="absolute inset-0 opacity-10"
                        style={{
                            background: `radial-gradient(ellipse at bottom, ${theme.primaryColor}30, transparent 70%)`,
                        }}
                        animate={{ opacity: [0.05, 0.15, 0.05] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                </>
            )}

            {variant === "neon" && (
                <>
                    {/* Neon pulse rings */}
                    {particles.slice(0, 3).map((p, i) => (
                        <motion.div
                            key={`ring-${p.id}`}
                            className="absolute rounded-full border opacity-20"
                            style={{
                                borderColor: i === 0 ? theme.primaryColor : i === 1 ? theme.secondaryColor : "#38bdf8",
                                width: p.size * 1.5,
                                height: p.size * 1.5,
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                boxShadow: `0 0 40px 5px ${i === 0 ? theme.primaryColor : i === 1 ? theme.secondaryColor : "#38bdf8"}40`,
                            }}
                            animate={{
                                scale: [0.5, 2, 0.5],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay,
                            }}
                        />
                    ))}
                    {/* Bright neon dots */}
                    {smallParticles.map((p) => (
                        <motion.div
                            key={`ndot-${p.id}`}
                            className="absolute w-1.5 h-1.5 rounded-full bg-white"
                            style={{
                                top: `${p.y}%`,
                                left: `${p.x}%`,
                                boxShadow: `0 0 15px 8px ${p.id % 3 === 0 ? theme.primaryColor : p.id % 3 === 1 ? theme.secondaryColor : "#38bdf8"
                                    }`,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.3, 1.8, 0.3],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: p.delay,
                            }}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
