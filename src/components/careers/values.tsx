"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, staggerChildren } from "./animations";

const values = [
  {
    title: "Discipline",
    description:
      "We prepare quietly and execute without friction. Every file, every client note, every viewing is designed ahead of time.",
    image: "/careers/asp_logo.jpg",
  },
  {
    title: "Integrity",
    description:
      "Trust is currency. We protect it through clear communication, focused listening, and absolute discretion at every touchpoint.",
    image: "/careers/asp_logo.jpg",
  },
  {
    title: "Precision",
    description:
      "Details change outcomes. We refine data, visuals, and words until they carry the exact tone our clients expect.",
    image: "/careers/asp_logo.jpg",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,rgba(203,174,112,0.08),transparent_60%)] py-24 sm:py-32">
      <div className="container">
        <motion.div
          className="mb-16 space-y-5 text-center"
          variants={staggerChildren()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.4em] text-brand-gold/70"
          >
            Beliefs
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl leading-tight text-brand-smoke sm:text-5xl"
          >
            The Alpha Star Standard
          </motion.h2>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerChildren(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-8"
            >
              <div className="relative mb-10 h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-3">
                {/* Generated image for values section */}
                <Image
                  src={value.image}
                  alt={`${value.title} illustration`}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-95"
                />
              </div>
              <h3 className="mb-4 font-serif text-2xl text-brand-smoke">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-gray/90">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

