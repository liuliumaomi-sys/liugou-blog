'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function PageShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-screen px-5 pb-24 pt-32 md:px-10 ${className}`}
    >
      {children}
    </motion.main>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <header className="mx-auto mb-14 max-w-6xl">
      <p className="mb-4 text-xs tracking-[0.32em] text-moss uppercase">{eyebrow}</p>
      <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] text-ink md:text-7xl">{title}</h1>
      <p className="mt-7 max-w-2xl text-base leading-8 text-ink/65 md:text-lg">{intro}</p>
    </header>
  );
}
