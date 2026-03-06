"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../../components/AnimatedBackground";
import SocialEmbed from "../../components/SocialEmbed";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  return (
    <div className="relative">
      {isMounted && <AnimatedBackground variant="organic" />}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
            Meet Kristen
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto">
            The creative soul behind Shroom Chic Creations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)] border border-purple-500/30"
          >
            <img
              src="https://picsum.photos/seed/kristen-creator/800/1000"
              alt="Kristen"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-stone-300 leading-relaxed"
          >
            <p className="text-lg">
              Hi, I'm Kristen! Welcome to my magical corner of the internet. Shroom Chic Creations was born out of my deep love for festival culture, psychedelic art, and the intricate beauty of nature.
            </p>
            <p>
              For years, I found myself searching for clothing and accessories that truly captured the essence of the experiences I had at music festivals—that feeling of connection, wonder, and unbridled self-expression. When I couldn't find exactly what I was looking for, I decided to create it myself.
            </p>
            <p>
              Every design you see here is inspired by the mesmerizing patterns of mycelium, the vibrant colors of the forest floor, and the transformative power of art. I believe that what we wear is an extension of our inner magic.
            </p>
            <p className="font-serif text-xl italic text-pink-400 mt-8">
              "Stay trippy, stay chic, and always embrace the magic within."
            </p>
          </motion.div>
        </div>

        {/* Brand Story Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-12 border-t border-purple-900/30"
        >
          <SocialEmbed type="youtube-player" title="Our Story" />
        </motion.div>
      </div>
    </div>
  );
}
