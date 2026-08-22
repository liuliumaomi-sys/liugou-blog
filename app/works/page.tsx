import { PageShell, SectionHeading } from '@/components/PageShell';
import { works } from '@/data/content';

export default function WorksPage() {
  return <PageShell><SectionHeading eyebrow="Gallery 02 · Works" title="一些正在形成的世界。" intro="这里会收藏项目、摄影和设计实验。现在的留白不是空缺，而是为未来作品预留的呼吸。" />
    <section className="mx-auto grid max-w-6xl gap-7 md:grid-cols-3">{works.map((work, i) => <article key={work.title} className="group art-card overflow-hidden rounded-[2rem] border-8 border-white/55 bg-white/35 p-3"><div className={`relative aspect-[3/4] overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${work.gradient}`}><div className="absolute inset-5 rounded-full border border-white/40 transition duration-700 group-hover:scale-110" /><div className="absolute inset-12 rotate-12 rounded-[45%] bg-white/20 blur-sm transition duration-700 group-hover:-rotate-6" /><span className="absolute left-5 top-5 text-xs tracking-[.25em] text-ink/45">0{i + 1}</span></div><div className="flex items-end justify-between px-3 pb-3 pt-5"><div><p className="text-xs text-moss">{work.type}</p><h2 className="mt-1 font-serif text-xl">{work.title}</h2></div><span className="text-xs text-ink/40">{work.year}</span></div></article>)}</section>
  </PageShell>;
}
