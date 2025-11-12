"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { fadeUp, staggerChildren } from "./animations";

const faqItems = [
  {
    question: "Do I need a RERA license to apply?",
    answer:
      "A current RERA license is welcomed but not required. We sponsor licensing for advisors who pass our internal assessments and onboarding program.",
  },
  {
    question: "Is training included?",
    answer:
      "Yes. Alpha Star Academy delivers market intelligence, legal frameworks, and negotiation labs so you can speak with certainty from day one.",
  },
  {
    question: "What languages are required?",
    answer:
      "English is essential. Arabic, Russian, Mandarin, French, and other regional languages are strong differentiators for private client work.",
  },
  {
    question: "Do you hire new-to-Dubai professionals?",
    answer:
      "We consider candidates with international real estate or advisory experience who can adapt quickly to Dubai’s regulatory landscape and luxury clientele.",
  },
  {
    question: "How does compensation work?",
    answer:
      "We tailor compensation to each advisor. Packages combine retainers, elevated splits, and performance incentives tied to private mandates.",
  },
  {
    question: "Can I work remotely?",
    answer:
      "Our advisory model is hybrid. We expect presence in our private office for key briefings, client walk-throughs, and culture alignment.",
  },
  {
    question: "How soon will I hear back?",
    answer:
      "Applications are reviewed daily. We respond within two business days and invite shortlisted talent for a discreet conversation.",
  },
  {
    question: "Do you support visa sponsorship?",
    answer:
      "Yes. For selected advisors we handle residency, RERA licensing, and relocation guidance in partnership with our compliance team.",
  },
  {
    question: "What tools will I use?",
    answer:
      "You will access our proprietary market dashboards, curated off-market briefs, and a concierge team that orchestrates every client interaction.",
  },
  {
    question: "Can I submit a video introduction?",
    answer:
      "Absolutely. A calm two-minute introduction helps us understand your communication style. Upload it alongside your CV in the application form.",
  },
];

export function FAQSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-black">
      <div className="absolute inset-0">
        {/* Generated image for FAQ background */}
        <Image
          src="/careers/faq-bg.webp"
          alt="Alpha Star FAQ background texture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="relative py-24 sm:py-32">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl space-y-5 text-center"
            variants={staggerChildren()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.span
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.4em] text-brand-gold/70"
            >
              FAQ
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl leading-tight text-brand-smoke sm:text-5xl"
            >
              Clarity before commitment.
            </motion.h2>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


