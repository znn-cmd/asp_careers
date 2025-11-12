"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, staggerChildren } from "./animations";

export function AcademySection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#121212_0%,#f7f7f7_15%,#f7f7f7_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(18,18,18,0.2),transparent_55%)]" />
      <div className="relative container grid gap-12 rounded-[40px] border border-brand-black/10 bg-white/90 p-12 shadow-subtle backdrop-blur lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:p-16">
        <motion.div
          className="space-y-5"
          variants={staggerChildren()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.4em] text-brand-gold/80"
          >
            Alpha Star Academy
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl leading-tight text-brand-black sm:text-5xl"
          >
            We believe knowledge builds confidence.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg leading-relaxed text-brand-graphite">
            Our academy pairs market analytics with private briefings from
            developers, legal teams, and valuation experts. Every consultant
            learns how to speak with certainty—even when answering the toughest
            client questions.
          </motion.p>
          <motion.ul
            variants={staggerChildren(0.08)}
            className="space-y-3 text-sm text-brand-graphite/90"
          >
            {[
              "Weekly intelligence sessions with leadership.",
              "Shadow elite advisors on off-market negotiations.",
              "Advanced positioning for UHNW and family office clients.",
            ].map((line) => (
              <motion.li key={line} variants={fadeUp} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-gold/70" />
                <span>{line}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-brand-black/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {/* Generated image for academy section */}
          <Image
            src="/careers/academy-awards.jpg"
            alt="Alpha Star Academy training session"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

