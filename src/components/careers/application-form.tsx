"use client";

import Script from "next/script";
import { motion } from "framer-motion";

import { fadeUp, staggerChildren } from "./animations";

const FORM_IFRAME_ID = "inline-2APuqMw8iAVLqoYKsj8b";
const FORM_IFRAME_SRC =
  "https://api.leadconnectorhq.com/widget/form/2APuqMw8iAVLqoYKsj8b";
const FORM_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";
const FORM_HEIGHT = 920;

export function ApplicationForm() {
  return (
    <section
      id="apply"
      className="bg-[radial-gradient(circle_at_top,rgba(203,174,112,0.15),rgba(255,255,255,0.95)_70%)] py-24 sm:py-32"
    >
      <Script
        id="leadconnector-form-script"
        src={FORM_SCRIPT_SRC}
        strategy="afterInteractive"
      />
      <div className="container flex flex-col items-center gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-2xl text-center"
        >
          <h2 className="font-serif text-4xl text-brand-gold">Submit Your Profile</h2>
          <p className="mt-3 text-base text-brand-black/80">
            We respond within two business days. If we proceed, expect a quiet
            interview and a tour inside Alpha Star.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="w-full max-w-4xl rounded-[36px] border border-brand-gold/30 bg-white/95 p-4 text-brand-black shadow-subtle"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-[28px] border border-brand-gold/25 bg-white/90 p-2 shadow-subtle"
          >
            <iframe
              id={FORM_IFRAME_ID}
              title="Agent form"
              src={FORM_IFRAME_SRC}
              style={{
                width: "100%",
                height: "100%",
                minHeight: `${FORM_HEIGHT}px`,
                border: "none",
                borderRadius: "24px",
              }}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Agent form"
              data-height={FORM_HEIGHT.toString()}
              data-layout-iframe-id={FORM_IFRAME_ID}
              data-form-id="2APuqMw8iAVLqoYKsj8b"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
