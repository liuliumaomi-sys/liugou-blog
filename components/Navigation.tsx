'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  ['/', '首页'], ['/posts', '文章'], ['/moments', '动态'],
  ['/cat', '灰灰的小窝'], ['/guestbook', '留言'], ['/about', '关于我'], ['/admin', '主人入口'],
];

export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-cream/75 px-5 py-3 shadow-sm backdrop-blur-xl">
        <Link href="/" className="font-serif text-lg text-ink">Liugou’s Corner</Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={`rounded-full px-3 py-2 text-sm transition ${path === href ? 'bg-ink text-cream' : 'text-ink/60 hover:bg-white/60 hover:text-ink'}`}>{label}</Link>
          ))}
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="切换菜单">{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-3xl border border-white/70 bg-cream/95 p-4 shadow-gallery lg:hidden">
          {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-ink/70 hover:bg-white">{label}</Link>)}
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
