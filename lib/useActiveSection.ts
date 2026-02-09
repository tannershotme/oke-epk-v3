"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "speaking",
  "keynote",
  "talks",
  "formats",
  "impact",
  "about",
  "speaker-kit",
  "faq",
  "booking",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aIdx = SECTION_IDS.indexOf(a.target.id);
            const bIdx = SECTION_IDS.indexOf(b.target.id);
            return aIdx - bIdx;
          });

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.15, rootMargin: "-80px 0px -40% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
