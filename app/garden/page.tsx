import { PageShell, SectionHeading } from '@/components/PageShell';
import { Plant } from '@/components/Plant';
import { exhibits } from '@/data/content';

export default function GardenPage() {
  return <PageShell><SectionHeading eyebrow="Living archive · Garden" title="文字落地以后，长成一座花园。" intro="每发布一篇文章，就会有一株新植物在这里发芽。持续书写，它们便会慢慢长高。" />
    <section className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/70 bg-[#e6eadc]/65 p-7 shadow-gallery md:p-12"><div className="grid gap-5 md:grid-cols-4">{exhibits.map((item, i) => <div key={item.id} className="rounded-[2rem] border border-white/60 bg-white/25 px-4 pb-5 text-center"><Plant delay={i * .15} size={.8 + i * .05} /><p className="font-serif text-lg">{item.title}</p><p className="mt-2 text-xs text-ink/45">成长值 {68 + i * 7}%</p><div className="mx-auto mt-4 h-1.5 max-w-28 overflow-hidden rounded-full bg-white/60"><div className="h-full rounded-full bg-moss" style={{ width: `${68 + i * 7}%` }} /></div></div>)}</div><p className="mt-12 text-center text-xs tracking-[.3em] text-moss">4 PLANTS · GROWING QUIETLY</p></section>
  </PageShell>;
}
