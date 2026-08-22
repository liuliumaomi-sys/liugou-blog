'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { PageShell, SectionHeading } from '@/components/PageShell';

type PetState = { affinity: number; visits: number; };

export default function CompanionPage() {
  const [pet, setPet] = useState<PetState>({ affinity: 36, visits: 1 });
  useEffect(() => {
    const saved = localStorage.getItem('liugou-pet');
    const previous: PetState = saved ? JSON.parse(saved) : { affinity: 34, visits: 0 };
    const next = { affinity: Math.min(100, previous.affinity + 2), visits: previous.visits + 1 };
    localStorage.setItem('liugou-pet', JSON.stringify(next)); setPet(next);
  }, []);
  const feed = () => setPet(current => { const next = { ...current, affinity: Math.min(100, current.affinity + 5) }; localStorage.setItem('liugou-pet', JSON.stringify(next)); return next; });
  const level = Math.floor(pet.affinity / 20) + 1;
  return <PageShell><SectionHeading eyebrow="Gallery guardian · Pet" title="认识一下，展馆的小小守护者。" intro="它会记得你来过。每次参观、每次互动，都会让你们之间的关系悄悄生长。" />
    <section className="mx-auto grid max-w-5xl items-center gap-10 rounded-[3rem] border border-white/70 bg-white/35 p-8 shadow-gallery md:grid-cols-2 md:p-14"><div className="relative flex min-h-96 items-center justify-center rounded-[2.5rem] bg-gradient-to-b from-[#d9e4d4] to-[#eadbc9]">
      <motion.div animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} className="relative h-48 w-52 rounded-[48%_48%_42%_42%] bg-[#789482] shadow-[inset_-15px_-12px_0_rgba(0,0,0,.06),0_24px_40px_rgba(80,110,90,.2)]"><div className="absolute -top-7 left-8 h-16 w-14 -rotate-12 rounded-[80%_10%] bg-[#789482]" /><div className="absolute -top-7 right-8 h-16 w-14 rotate-12 rounded-[10%_80%] bg-[#789482]" /><div className="absolute left-12 top-20 h-3 w-3 rounded-full bg-ink" /><div className="absolute right-12 top-20 h-3 w-3 rounded-full bg-ink" /><div className="absolute left-1/2 top-24 h-3 w-5 -translate-x-1/2 rounded-b-full bg-blush" /><motion.div animate={{ scale: [1, 1.3, 1], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -right-5 top-0 text-blush"><Heart fill="currentColor" /></motion.div></motion.div>
    </div><div><p className="text-xs tracking-[.28em] text-moss">DIGITAL CREATURE NO.01</p><h2 className="mt-3 font-serif text-5xl">苔苔</h2><p className="mt-3 text-ink/55">心情：{pet.affinity > 70 ? '开心得冒泡' : '安静地陪着你'}</p><div className="mt-9 grid grid-cols-2 gap-3"><Stat label="亲密度" value={`${pet.affinity}%`} /><Stat label="等级" value={`Lv.${level}`} /><Stat label="相遇次数" value={`${pet.visits}`} /><Stat label="状态" value="健康" /></div><div className="mt-7 h-2 overflow-hidden rounded-full bg-ink/10"><motion.div animate={{ width: `${pet.affinity}%` }} className="h-full rounded-full bg-blush" /></div><button onClick={feed} className="mt-7 flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm text-cream transition hover:bg-clay"><Sparkles size={16} /> 摸摸苔苔</button><p className="mt-4 text-xs leading-5 text-ink/40">成长数据只保存在你的浏览器中，不需要登录。</p></div></section>
  </PageShell>;
}

function Stat({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-white/70 bg-white/40 p-4"><p className="text-xs text-ink/40">{label}</p><p className="mt-1 font-serif text-xl">{value}</p></div>; }
