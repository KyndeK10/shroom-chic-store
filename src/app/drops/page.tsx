"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import AnimatedBackground from "../../components/AnimatedBackground";
import SocialEmbed from "../../components/SocialEmbed";

export default function Drops() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const dropDate = new Date();
    dropDate.setDate(dropDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = dropDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {isMounted && <AnimatedBackground variant="neon" />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-pink-500/20 rounded-full mb-6 border border-pink-500/50">
            <Sparkles className="w-6 h-6 text-pink-400 mr-2" />
            <span className="text-pink-400 font-bold uppercase tracking-widest text-sm pr-2">Limited Edition</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mb-6">
            The Midnight Mycelium Drop
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto">
            Exclusive, small-batch designs that glow under UV light. Only 50 pieces of each item available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-stone-900/60 backdrop-blur-xl border border-purple-500/30 rounded-[3rem] p-8 md:p-16 shadow-[0_0_100px_rgba(168,85,247,0.15)] max-w-4xl mx-auto text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent z-0" />

          <div className="relative z-10">
            <h2 className="text-2xl font-serif font-bold text-white mb-8 flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-purple-400" /> Unlocking In
            </h2>

            <div className="flex justify-center gap-4 md:gap-8 mb-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((unit, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-stone-950 border border-purple-500/50 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-mono font-bold text-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                    {unit.value.toString().padStart(2, "0")}
                  </div>
                  <span className="mt-3 text-stone-400 text-sm md:text-base uppercase tracking-wider font-medium">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-stone-300 mb-8 max-w-md mx-auto">
              Sign up to get early access 1 hour before the general public. These will sell out fast.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-stone-950/80 border border-purple-500/50 rounded-full px-6 py-4 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all"
              >
                Get VIP Access
              </button>
            </form>
          </div>
        </motion.div>

        {/* Sneak Peek */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-serif font-bold text-stone-200 mb-8">Sneak Peek</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-square rounded-3xl overflow-hidden group border border-purple-900/30">
                <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm z-10 flex items-center justify-center group-hover:bg-stone-950/40 transition-all duration-500">
                  <span className="text-white font-bold tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">Classified</span>
                </div>
                <img
                  src={`https://picsum.photos/seed/drop-sneak-${i}/600/600`}
                  alt="Sneak peek"
                  className="w-full h-full object-cover filter blur-md group-hover:blur-sm transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* TikTok Shorts Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-12 border-t border-purple-900/30"
        >
          <SocialEmbed type="tiktok-shorts" title="Drop Day Vibes" />
        </motion.div>
      </div>
    </div>
  );
}
