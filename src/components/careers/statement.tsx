"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "./animations";

export function StatementSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        {/* Generated image for statement section */}
        <Image
          src="/careers/statement.webp"
          alt="Architectural detail in Dubai"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(203,174,112,0.15),transparent_65%)]" />
      </div>
      <motion.div
        className="relative mx-auto flex min-h-[60vh] w-full max-w-5xl flex-col items-center justify-center gap-8 px-6 py-24 text-center sm:px-12"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="text-sm uppercase tracking-[0.4em] text-brand-gold/70">
          Statement
        </span>
        <p className="font-serif text-4xl leading-tight text-brand-smoke sm:text-5xl">
          “We don’t chase volume. We curate significance.”
        </p>
      </motion.div>
    </section>
  );
}

