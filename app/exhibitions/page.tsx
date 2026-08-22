import { PageShell, SectionHeading } from '@/components/PageShell';
import { exhibits } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

export default function ExhibitionsPage() {
  return <PageShell><SectionHeading eyebrow="Gallery 01 · Writings" title="文章不是被排列，而是被陈列。" intro="每一段文字都是一件正在呼吸的展品。它们记录我如何观察世界，也记录世界如何经过我。" />
    <section className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2">{exhibits.map((item, index) => <article key={item.id} className={`art-card relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 p-8 md:p-10 ${index === 0 ? 'md:col-span-2' : ''}`}>
      <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[100%] opacity-50" style={{ background: item.color }} /><div className="relative"><div className="mb-16 flex items-center justify-between text-xs tracking-widest text-ink/45"><span>NO. 0{item.id}</span><ArrowUpRight size={18} /></div><p className="text-xs text-moss">{item.category} / {item.date}</p><h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-5xl">{item.title}</h2><p className="mt-6 max-w-2xl leading-8 text-ink/60">{item.excerpt}</p><div className="mt-9 border-t border-ink/10 pt-4 text-xs text-ink/40">馆藏文字 · 可阅读状态</div></div>
    </article>)}</section>
  </PageShell>;
}
