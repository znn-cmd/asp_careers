"use client";

import { motion } from "framer-motion";

import { staggerChildren, wordReveal } from "./animations";

const words = ["Curate", "Educate", "Elevate", "Inspire"];

export function FourWordsRow() {
  return (
    <section className="border-t border-b border-white/10 bg-brand-black/60 py-16 backdrop-blur">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16"
        variants={staggerChildren(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {words.map((word) => (
          <motion.h2
            key={word}
            variants={wordReveal}
            className="text-4xl font-serif uppercase tracking-[0.4em] text-brand-gold/80 lg:text-[44px]"
          >
            {word}
          </motion.h2>
        ))}
      </motion.div>
    </section>
  );
}

