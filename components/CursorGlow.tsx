'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function CursorGlow() {
  const x = useMotionValue(-200), y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 80, damping: 24 }), sy = useSpring(y, { stiffness: 80, damping: 24 });
  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX - 160); y.set(e.clientY - 160); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);
  return <motion.div aria-hidden className="pointer-events-none fixed z-0 hidden h-80 w-80 rounded-full bg-blush/10 blur-3xl md:block" style={{ x: sx, y: sy }} />;
}
