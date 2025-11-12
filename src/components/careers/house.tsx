"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, staggerChildren } from "./animations";

const houseImages = [
  "/careers/house-1.webp",
  "/careers/house-2.webp",
  "/careers/house-3.webp",
  "/careers/house-4.webp",
  "/careers/house-5.webp",
  "/careers/house-6.webp",
];

export function HouseSection() {
  return (
    <section className="bg-brand-black py-24 sm:py-32">
      <div className="container space-y-16">
        <motion.div
          className="space-y-5 text-center"
          variants={staggerChildren()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.4em] text-brand-gold/70"
          >
            House of Alpha Star
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl leading-tight text-brand-smoke sm:text-5xl"
          >
            Spaces that frame sharper thinking.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerChildren(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {houseImages.map((src, index) => (
            <motion.figure
              key={src}
              variants={fadeUp}
              className="group relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10"
            >
              {/* Generated image for house section */}
              <Image
                src={src}
                alt={`Alpha Star space ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

