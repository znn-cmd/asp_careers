"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { fadeUp, staggerChildren } from "./animations";

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email."),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "newsletter",
          ...values,
        }),
      });
      if (!response.ok) {
        throw new Error("Unable to subscribe.");
      }
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <section className="relative isolate overflow-hidden bg-brand-black py-24 sm:py-32">
      <div className="absolute inset-0">
        {/* Generated image for newsletter section */}
        <Image
          src="/careers/newsletter.webp"
          alt="Alpha Star market notes setup"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <div className="relative container">
        <motion.div
          className="mx-auto max-w-3xl space-y-8 rounded-[36px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur"
          variants={staggerChildren()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div variants={fadeUp} className="space-y-3">
            <span className="text-sm uppercase tracking-[0.4em] text-brand-gold/70">
              Newsletter
            </span>
            <h2 className="font-serif text-4xl leading-tight text-brand-smoke">
              Get weekly market notes from Alpha Star.
            </h2>
            <p className="text-base text-brand-gray">
              Intelligence briefings, off-market trends, and curated assets
              delivered quietly to your inbox.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Form {...form}>
              <form
                onSubmit={onSubmit}
                className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@alphastar.properties"
                          {...field}
                          isError={fieldState.invalid}
                        />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="flex-none">
                  Subscribe
                </Button>
              </form>
            </Form>
          </motion.div>

          {submitted ? (
            <motion.p
              variants={fadeUp}
              className="text-sm text-brand-gold/80"
            >
              Thank you. Your first note will arrive soon.
            </motion.p>
          ) : (
            <motion.p variants={fadeUp} className="text-xs text-brand-gray/70">
              We send one note per week. No noise. Unsubscribe anytime.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}


