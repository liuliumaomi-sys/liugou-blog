'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cat } from './Cat';
type Action = 'idle' | 'play' | 'sleep';
const lines = ['我去楼上看看。', '你可以拖动我哦。', '今天也要记得休息。', '要去看看我的小窝吗？'];
export function RoamingCat() {
  const bounds = useRef<HTMLDivElement>(null); const [action, setAction] = useState<Action>('idle'), [open, setOpen] = useState(false), [line, setLine] = useState('我会到处走，也可以拖动我。');
  const act = (next: Action, text: string) => { setAction(next); setLine(text); setOpen(false); };
  return <div ref={bounds} className="pointer-events-none fixed inset-0 z-40 overflow-hidden"><motion.div drag dragConstraints={bounds} dragElastic={0.12} dragMomentum={false} className="pointer-events-auto absolute left-2 top-24 cursor-grab touch-none active:cursor-grabbing" animate={open ? undefined : { x: ['4vw', '70vw', '48vw', '12vw'], y: ['65vh', '12vh', '48vh', '24vh'] }} transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut', times: [0, .36, .68, 1] }} onDragStart={() => { setLine('被你抱起来啦。'); setOpen(false); }} onDragEnd={() => setLine('这里也不错。')}><div className="absolute -top-8 left-4 whitespace-nowrap rounded-full bg-cream/95 px-3 py-2 text-xs shadow-md">{line}</div>{open && <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} className="absolute -top-28 left-4 grid w-36 grid-cols-2 gap-1 rounded-2xl bg-cream/95 p-2 text-xs shadow-gallery"><button onClick={() => act('idle','灰灰坐下来陪你。')} className="rounded-xl bg-white/70 p-2">坐下</button><button onClick={() => act('play','灰灰开心地跑起来！')} className="rounded-xl bg-white/70 p-2">玩耍</button><button onClick={() => act('sleep','灰灰找了个舒服的位置。')} className="rounded-xl bg-white/70 p-2">睡觉</button><Link href="/cat" className="rounded-xl bg-moss p-2 text-center text-cream">去小窝</Link></motion.div>}<button onClick={() => { setOpen(!open); setLine(lines[Math.floor(Math.random() * lines.length)]); }} className="block origin-center scale-[.42] drop-shadow-lg md:scale-[.56]" aria-label="和灰灰互动"><Cat action={action} /></button></motion.div></div>;
}
