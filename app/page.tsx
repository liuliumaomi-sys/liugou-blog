'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { exhibits } from '@/data/content';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden px-5 pt-28 md:px-10">
      <section className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/25 px-7 py-16 shadow-gallery backdrop-blur-sm md:px-16">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 55, repeat: Infinity, ease: 'linear' }} className="absolute -right-24 -top-36 h-[34rem] w-[34rem] rounded-[42%_58%_63%_37%] border border-moss/20 bg-moss/10" />
        <motion.div animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute bottom-8 right-[12%] h-40 w-32 rounded-[50%_50%_12%_12%] bg-blush/25 blur-sm" />
        <div className="relative max-w-4xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="mb-6 flex items-center gap-2 text-xs tracking-[.34em] text-moss uppercase"><Sparkles size={15} /> Online exhibition · 2026</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="font-serif text-[clamp(3.4rem,9vw,8.6rem)] leading-[.95] tracking-[-.04em] text-ink">欢迎来到<br /><span className="ml-[8vw] italic text-clay">我的数字美术馆</span></motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="mt-10 flex flex-col gap-7 md:ml-[8vw] md:flex-row md:items-end">
            <p className="max-w-xl text-base leading-8 text-ink/65 md:text-lg">这里收藏代码之外的温度、生活里的微光，和一个工程师没有说完的想象。请慢慢走，展厅永远为你亮着灯。</p>
            <Link href="/exhibitions" className="group flex w-fit items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm text-cream transition hover:bg-clay">进入展馆 <ArrowDownRight className="transition group-hover:rotate-45" size={18} /></Link>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 py-24 md:grid-cols-3">
        <div className="md:col-span-1"><p className="text-xs tracking-[.3em] text-moss">CURRENT EXHIBITION</p><h2 className="mt-4 font-serif text-4xl">此刻展出</h2></div>
        {exhibits.slice(0, 2).map((item) => <Link href="/exhibitions" key={item.id} className="art-card rounded-[2rem] border border-white/60 bg-white/35 p-7"><span className="mb-12 block h-2 w-16 rounded-full" style={{ background: item.color }} /><p className="text-xs text-ink/45">{item.category} · {item.date}</p><h3 className="mt-3 font-serif text-2xl">{item.title}</h3><p className="mt-4 leading-7 text-ink/60">{item.excerpt}</p></Link>)}
      </section>
    </main>
  );
}
