'use client';
import { PageShell, SectionHeading } from '@/components/PageShell';
import { useStore } from '@/lib/store';
import { Comments } from '@/components/Comments';
export default function MomentsPage() { const { moments } = useStore(); return <PageShell><SectionHeading eyebrow="LITTLE MOMENTS" title="随手记下的一句话。" intro="不一定完整，也不一定有结论。只是这一刻想留下的心情、照片和念头。" /><section className="mx-auto max-w-3xl space-y-4">{moments.map(moment => <article key={moment.id} className="rounded-[2rem] border border-white/70 bg-white/40 p-7"><div className="flex gap-4"><span className="text-2xl">{moment.mood}</span><p className="flex-1 text-lg leading-8 text-ink/70">{moment.text}</p></div><p className="mt-5 text-right text-xs text-ink/35">{moment.date}</p></article>)}<Comments target="moments" title="动态下面聊聊天" /></section></PageShell>; }
