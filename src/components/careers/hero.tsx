"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

export function CareersHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] items-end overflow-hidden bg-brand-black pb-24 pt-32 lg:min-h-[100vh]"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/careers/hero.webp"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/careers/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(203,174,112,0.25),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 text-brand-smoke sm:px-12 lg:px-16">
        <motion.span
          style={{ y: subtitleY }}
          className="text-sm uppercase tracking-[0.4em] text-brand-gold/80"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Private. Intelligent. Iconic.
        </motion.span>

        <motion.h1
          style={{ y: titleY }}
          className="max-w-4xl font-serif text-4xl leading-tight text-brand-smoke sm:text-5xl lg:text-[72px] lg:leading-[1.05]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Careers in Dubai Real Estate
        </motion.h1>

        <motion.p
          style={{ y: subtitleY }}
          className="max-w-2xl text-lg text-brand-gray lg:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          We build trust for those who value silence.
        </motion.p>

        <motion.div
          style={{ opacity: ctaOpacity }}
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button asChild size="lg" className="shadow-subtle">
            <Link href="#apply">Apply Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#roles">Explore Roles</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

