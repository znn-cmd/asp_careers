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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { fadeUp, staggerChildren } from "./animations";

const stayInTouchSchema = z.object({
  fullName: z.string().min(2, "Name is required."),
  email: z.string().email("Enter a valid email."),
  whatsapp: z.string().min(6, "Provide a reachable number."),
});

type StayInTouchValues = z.infer<typeof stayInTouchSchema>;

export function NotReadySection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<StayInTouchValues>({
    resolver: zodResolver(stayInTouchSchema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "stay-informed",
          ...values,
        }),
      });
      if (!response.ok) {
        throw new Error("Unable to submit form.");
      }
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <section className="relative isolate overflow-hidden bg-brand-black py-24 sm:py-32">
      <div className="absolute inset-0">
        {/* Generated image for not ready section */}
        <Image
          src="/careers/notready.webp"
          alt="Subtle Dubai skyline silhouette"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="relative container">
        <motion.div
          className="mx-auto max-w-3xl space-y-10 rounded-[36px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur"
          variants={staggerChildren()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div variants={fadeUp} className="space-y-3">
            <span className="text-sm uppercase tracking-[0.4em] text-brand-gold/70">
              Not Ready Yet?
            </span>
            <h2 className="font-serif text-4xl leading-tight text-brand-smoke">
              Stay close to our private openings.
            </h2>
            <p className="text-base text-brand-gray">
              Share your direct contacts and we will discreetly alert you when a
              role aligns with your profile.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Form {...form}>
              <form
                onSubmit={onSubmit}
                className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-3"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Preferred name"
                          {...field}
                          isError={fieldState.invalid}
                        />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="name@domain.com"
                          {...field}
                          isError={fieldState.invalid}
                        />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+971 50 000 0000"
                          {...field}
                          isError={fieldState.invalid}
                        />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <div className="sm:col-span-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Keep Me Informed"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>

          {submitted ? (
            <motion.p
              variants={fadeUp}
              className="text-sm text-brand-gold/80"
            >
              Thank you. We will connect when a confidential opportunity is
              ready.
            </motion.p>
          ) : (
            <motion.p variants={fadeUp} className="text-xs text-brand-gray/70">
              We respect silence. Your details are encrypted and never shared
              outside Alpha Star Properties.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}


