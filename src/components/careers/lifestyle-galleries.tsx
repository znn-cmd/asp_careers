"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, {
  type EmblaCarouselType,
} from "embla-carousel-react";
import { motion } from "framer-motion";

import { fadeUp, staggerChildren } from "./animations";

const galleries = [
  {
    title: "Private Office Life",
    description:
      "Strategy sessions, advisory work, and quiet deal-making in a space designed for focus.",
    images: [
      "/careers/gallery-1-1.webp",
      "/careers/gallery-1-2.webp",
      "/careers/gallery-1-3.webp",
    ],
  },
  {
    title: "Field Days",
    description:
      "On-site previews across Palm Jumeirah and Downtown Dubai with clients who expect discretion.",
    images: [
      "/careers/gallery-2-1.webp",
      "/careers/gallery-2-2.webp",
      "/careers/gallery-2-3.webp",
    ],
  },
  {
    title: "Off-Market Briefings",
    description:
      "Curated releases with architectural models and confidential data in a controlled environment.",
    images: [
      "/careers/gallery-3-1.webp",
      "/careers/gallery-3-2.webp",
      "/careers/gallery-3-3.webp",
    ],
  },
  {
    title: "Year-End Gathering",
    description:
      "An intimate celebration for those who shaped the year—no noise, only significance.",
    images: [
      "/careers/gallery-4-1.webp",
      "/careers/gallery-4-2.webp",
      "/careers/gallery-4-3.webp",
    ],
  },
];

function useAutoplay(embla: EmblaCarouselType | undefined, enabled: boolean) {
  useEffect(() => {
    if (!embla || !enabled) return;

    let raf: ReturnType<typeof setTimeout>;
    let stopped = false;

    const play = () => {
      if (stopped) return;
      raf = setTimeout(() => {
        embla.scrollNext();
        play();
      }, 3600);
    };

    play();

    return () => {
      stopped = true;
      clearTimeout(raf);
    };
  }, [embla, enabled]);
}

function GalleryCarousel({
  images,
}: {
  images: string[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: true },
    [],
  );
  const [isHovered, setIsHovered] = useState(false);

  useAutoplay(emblaApi as EmblaCarouselType | undefined, !isHovered);

  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div ref={emblaRef} className="overflow-hidden rounded-[36px] border border-white/10">
        <div className="flex">
          {images.map((image) => (
            <div key={image} className="relative aspect-[5/4] min-w-[85%] sm:min-w-[60%] lg:min-w-[45%]">
              {/* Generated image for lifestyle galleries */}
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LifestyleGalleries() {
  return (
    <section id="roles" className="bg-brand-black py-24 sm:py-32">
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
            Inside Alpha Star
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl leading-tight text-brand-smoke sm:text-5xl"
          >
            Lifestyle Galleries
          </motion.h2>
        </motion.div>

        <div className="space-y-16">
          {galleries.map((gallery) => (
            <motion.div
              key={gallery.title}
              className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-start"
              variants={staggerChildren()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div variants={fadeUp} className="space-y-4">
                <h3 className="font-serif text-3xl text-brand-smoke">
                  {gallery.title}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-brand-gray">
                  {gallery.description}
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <GalleryCarousel images={gallery.images} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

