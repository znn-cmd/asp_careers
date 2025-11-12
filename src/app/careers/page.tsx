import type { Metadata } from "next";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { AcademySection } from "@/components/careers/academy";
import { ApplicationForm } from "@/components/careers/application-form";
import { CareersFooter } from "@/components/careers/footer";
import { FAQSection } from "@/components/careers/faq";
import { IntroBlock } from "@/components/careers/intro";
import { StatementSection } from "@/components/careers/statement";
import { ValuesSection } from "@/components/careers/values";
import { FourWordsRow } from "@/components/careers/word-row";
import { CareersHero } from "@/components/careers/hero";

export const metadata: Metadata = {
  title: "We’re Hiring — Alpha Star Properties Dubai",
  description:
    "Alpha Star Properties is recruiting private advisors, analysts, and marketers in Dubai. Boutique culture, precise execution, and discreet outcomes.",
  openGraph: {
    title: "Work in Dubai Real Estate — Alpha Star Properties",
    description:
      "Join Alpha Star’s private collective. We recruit advisors who value precision, discretion, and long-term trust.",
    url: "https://www.alphastar.properties/careers",
    type: "website",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <SmoothScrollProvider>
      <main className="flex min-h-screen flex-col bg-brand-black text-brand-smoke">
        <CareersHero />
        <FourWordsRow />
        <IntroBlock />
        <ValuesSection />
        <AcademySection />
        <StatementSection />
        <ApplicationForm />
        <FAQSection />
        <CareersFooter />
      </main>
    </SmoothScrollProvider>
  );
}


