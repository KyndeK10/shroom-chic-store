"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";
import SocialEmbed from "../components/SocialEmbed";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-stone-900 via-[#2a221f] to-[#1e1a18]">
      {/* Unique animated background: drifting mushrooms */}
      {isMounted && <AnimatedBackground variant="mushrooms" />}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="Shroom Chic Creations Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.4)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600"
        >
          Embrace the Magic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl text-stone-300 max-w-2xl mx-auto mb-10 font-light"
        >
          Psychedelic festival fashion and boho accessories designed for the free spirit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/shop"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative flex items-center gap-2">
              Shop Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/drops"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-stone-300 border border-purple-500/50 rounded-full overflow-hidden transition-all hover:text-white hover:bg-purple-900/30"
          >
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400" /> Limited Drops
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Social Media Embeds Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
            Follow the Journey
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Get inspired by our community and see the latest creations in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Instagram Grid */}
          <SocialEmbed type="instagram-grid" title="@shroomchiccreations" />

          {/* TikTok Carousel */}
          <SocialEmbed type="tiktok-carousel" title="Viral Moments" />

          {/* YouTube Playlist */}
          <SocialEmbed
            type="youtube-player"
            title="Behind the Magic"
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-16 w-full max-w-4xl mx-auto px-4 pb-16"
      >
        <div className="bg-stone-900/50 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">Join the Coven</h2>
          <p className="text-stone-400 mb-8 max-w-md mx-auto">
            Subscribe for exclusive drops, secret sales, and psychedelic inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-stone-950/50 border border-purple-500/30 rounded-full px-6 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
