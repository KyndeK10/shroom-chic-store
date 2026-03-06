"use client";
import { motion } from "framer-motion";
import { Instagram, Youtube, Music2, Play, ExternalLink } from "lucide-react";

type EmbedType =
    | "instagram-grid"
    | "tiktok-carousel"
    | "youtube-player"
    | "tiktok-shorts"
    | "instagram-stories";

interface SocialEmbedProps {
    type: EmbedType;
    /** Optional embed URL or embed code. Shows placeholder if empty. */
    embedUrl?: string;
    /** Additional embed URLs for carousel/grid types */
    additionalUrls?: string[];
    title?: string;
    className?: string;
}

export default function SocialEmbed({
    type,
    embedUrl,
    additionalUrls = [],
    title,
    className = "",
}: SocialEmbedProps) {
    const hasContent = !!embedUrl;

    switch (type) {
        case "instagram-grid":
            return (
                <div className={`${className}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <Instagram className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                            {title || "Instagram"}
                        </h3>
                    </div>
                    {hasContent ? (
                        <div className="rounded-2xl overflow-hidden border border-purple-500/20">
                            <iframe
                                src={embedUrl}
                                className="w-full min-h-[450px]"
                                style={{ border: "none" }}
                                title="Instagram Feed"
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <div className="bg-stone-900/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6">
                            <div className="grid grid-cols-3 gap-2">
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="aspect-square bg-stone-800/80 rounded-lg overflow-hidden relative group cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Instagram className="w-6 h-6 text-white/70" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-stone-500 text-sm text-center mt-4">
                                @shroomchiccreations
                            </p>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 flex items-center justify-center gap-2 text-pink-400 hover:text-pink-300 text-sm transition-colors"
                            >
                                Follow on Instagram <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    )}
                </div>
            );

        case "tiktok-carousel":
            return (
                <div className={`${className}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center border border-stone-700">
                            <Music2 className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                            {title || "TikTok"}
                        </h3>
                    </div>
                    {hasContent ? (
                        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                            {[embedUrl, ...additionalUrls].map((url, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 w-[280px] snap-center rounded-2xl overflow-hidden border border-pink-500/20"
                                >
                                    <iframe
                                        src={url}
                                        className="w-full h-[500px]"
                                        style={{ border: "none" }}
                                        title={`TikTok Video ${i + 1}`}
                                        loading="lazy"
                                        allow="encrypted-media"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex gap-4 overflow-x-auto pb-4">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="flex-shrink-0 w-[200px] aspect-[9/16] bg-stone-900/60 rounded-2xl border border-pink-500/20 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"
                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: i * 0.5,
                                        }}
                                    />
                                    <div className="w-14 h-14 rounded-full bg-stone-800/80 flex items-center justify-center border border-pink-500/30 mb-3 group-hover:border-pink-400 transition-colors">
                                        <Play className="w-6 h-6 text-pink-400 ml-1" />
                                    </div>
                                    <p className="text-stone-500 text-xs">TikTok #{i + 1}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            );

        case "youtube-player":
            return (
                <div className={`${className}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                            <Youtube className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                            {title || "Watch Our Story"}
                        </h3>
                    </div>
                    {hasContent ? (
                        <div className="aspect-video rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                            <iframe
                                src={embedUrl}
                                className="w-full h-full"
                                title="YouTube Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <motion.div
                            className="aspect-video bg-stone-900/60 rounded-2xl border border-purple-500/20 flex flex-col items-center justify-center relative overflow-hidden cursor-pointer group"
                            whileHover={{ scale: 1.01 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-purple-900/10"
                                animate={{ opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                            <div className="w-20 h-20 rounded-full bg-red-600/20 flex items-center justify-center border-2 border-red-500/40 mb-4 group-hover:bg-red-600/30 group-hover:border-red-400 transition-all">
                                <Play className="w-8 h-8 text-red-400 ml-1" />
                            </div>
                            <p className="text-stone-400 text-sm">Brand Story Coming Soon</p>
                        </motion.div>
                    )}
                </div>
            );

        case "tiktok-shorts":
            return (
                <div className={`${className}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center border border-stone-700">
                            <Music2 className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                            {title || "Trending Now"}
                        </h3>
                    </div>
                    {hasContent ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[embedUrl, ...additionalUrls].map((url, i) => (
                                <div
                                    key={i}
                                    className="aspect-[9/16] rounded-2xl overflow-hidden border border-pink-500/20"
                                >
                                    <iframe
                                        src={url}
                                        className="w-full h-full"
                                        style={{ border: "none" }}
                                        title={`TikTok Short ${i + 1}`}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="aspect-[9/16] bg-stone-900/60 rounded-2xl border border-pink-500/20 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            background: `linear-gradient(${135 + i * 45}deg, rgba(168,85,247,0.1), rgba(236,72,153,0.1))`,
                                        }}
                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                        }}
                                    />
                                    <Play className="w-8 h-8 text-pink-400/60 group-hover:text-pink-400 transition-colors mb-2" />
                                    <p className="text-stone-600 text-xs">Coming Soon</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            );

        case "instagram-stories":
            return (
                <div className={`${className}`}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <Instagram className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                            {title || "Story Highlights"}
                        </h3>
                    </div>
                    {hasContent ? (
                        <div className="rounded-2xl overflow-hidden border border-purple-500/20">
                            <iframe
                                src={embedUrl}
                                className="w-full min-h-[400px]"
                                style={{ border: "none" }}
                                title="Instagram Stories"
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <div className="flex gap-4 overflow-x-auto pb-4">
                            {["✨ BTS", "🍄 Drops", "🎨 Design", "🎪 Fests", "💜 Reviews"].map(
                                (label, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                                            <div className="w-full h-full rounded-full bg-stone-900 flex items-center justify-center">
                                                <motion.div
                                                    className="w-12 h-12 rounded-full bg-stone-800"
                                                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        delay: i * 0.2,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <span className="text-stone-400 text-xs group-hover:text-white transition-colors">
                                            {label}
                                        </span>
                                    </motion.div>
                                ),
                            )}
                        </div>
                    )}
                </div>
            );

        default:
            return null;
    }
}
