"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeUp, staggerChildren } from "./animations";

export function CareersFooter() {
  return (
    <footer className="bg-brand-black py-16">
      <div className="container">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          variants={staggerChildren()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeUp}
            className="font-serif text-2xl text-brand-gold"
          >
            Alpha Star Properties
          </motion.span>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-sm text-brand-gray"
          >
            Private. Intelligent. Iconic. Alpha Star Properties curates
            off-market real estate for global decision-makers.
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-2 text-sm">
            <span className="text-xs uppercase tracking-[0.4em] text-brand-gold/80">
              Legal
            </span>
            <div>
              <Link
                href="/privacy"
                className="text-sm text-brand-gray transition-colors hover:text-brand-gold"
              >
                Privacy
              </Link>
            </div>
            <p className="text-xs text-brand-gray/70">
              © 2025 Alpha Star Properties.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

