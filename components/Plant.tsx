'use client';

import { motion } from 'framer-motion';

export function Plant({ delay = 0, size = 1 }: { delay?: number; size?: number }) {
  return (
    <div className="relative flex h-48 items-end justify-center" style={{ transform: `scale(${size})`, transformOrigin: 'bottom' }}>
      <motion.div initial={{ height: 0 }} whileInView={{ height: 112 }} viewport={{ once: true }} transition={{ duration: 1.2, delay }} className="w-1 rounded-full bg-moss" />
      <motion.div initial={{ scale: 0, rotate: -30 }} whileInView={{ scale: 1, rotate: -18 }} viewport={{ once: true }} transition={{ delay: delay + .65 }} className="absolute bottom-16 left-1/2 h-9 w-14 origin-bottom-right rounded-[100%_0_100%_0] bg-[#91a88f]" />
      <motion.div initial={{ scale: 0, rotate: 30 }} whileInView={{ scale: 1, rotate: 18 }} viewport={{ once: true }} transition={{ delay: delay + .85 }} className="absolute bottom-24 right-1/2 h-8 w-12 origin-bottom-left rounded-[0_100%_0_100%] bg-[#b1c2a8]" />
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: delay + 1.05, type: 'spring' }} className="absolute bottom-[105px] h-8 w-8 rounded-full bg-blush shadow-[0_0_0_7px_#efd1c8]" />
    </div>
  );
}
