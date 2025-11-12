"use client";
import { motion } from "framer-motion";

import { fadeUp, staggerChildren } from "./animations";

export function IntroBlock() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#121212_0%,#f7f7f7_15%,#f7f7f7_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(18,18,18,0.25),transparent_55%)]" />
      <div className="relative container">
        <div className="grid gap-12 rounded-[40px] border border-brand-black/10 bg-white/90 p-12 shadow-subtle backdrop-blur lg:grid-cols-[1.2fr,0.8fr] lg:p-16">
          <motion.div
            className="space-y-8"
            variants={staggerChildren()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.4em] text-brand-gold/80"
            >
              Work at Alpha Star
            </motion.span>
            <motion.h3
              variants={fadeUp}
              className="font-serif text-4xl leading-tight text-brand-black sm:text-5xl"
            >
              Boutique intelligence for Dubai&apos;s quiet elite.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-brand-graphite">
              Alpha Star Properties curates the city’s most discreet real estate opportunities.
              We work selectively with those who appreciate precision, privacy, and long-term value.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-brand-graphite">
              Our team operates with calm confidence. We prepare quietly, orchestrate without friction,
              and answer every request with detail.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-brand-black/10 bg-brand-smoke/70 p-6 text-left"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-brand-gold/80">
                What We Offer
              </span>
              <ul className="mt-4 space-y-3 text-sm text-brand-graphite">
                <li>Precision-led mentorship from market directors.</li>
                <li>Bespoke intelligence briefings for every mandate.</li>
                <li>Calm, private spaces designed for strategic advisory.</li>
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-brand-black/10 bg-brand-smoke/70 p-6 text-left"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-brand-gold/80">
                Who Thrives Here
              </span>
              <ul className="mt-4 space-y-3 text-sm text-brand-graphite">
                <li>Autonomous thinkers who anticipate the next move.</li>
                <li>Advisors fluent in discretion and high-touch service.</li>
                <li>Builders of trust who value significance over volume.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

