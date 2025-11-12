"use client";

import { type PropsWithChildren, useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

