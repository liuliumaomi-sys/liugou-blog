import { PageShell, SectionHeading } from '@/components/PageShell';
import { Comments } from '@/components/Comments';
import { Cat } from '@/components/Cat';
export default function GuestbookPage() { return <PageShell><section className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[.65fr_1.35fr]"><div className="flex min-h-96 flex-col items-center justify-end rounded-[2.5rem] bg-gradient-to-b from-[#dce8d8] to-[#ead8cb] p-8"><div className="mb-8 rounded-2xl bg-white/55 p-4 text-sm">“留下点什么再走吧，喵。”</div><Cat /></div><div><SectionHeading eyebrow="GUESTBOOK" title="欢迎留下你的脚印。" intro="分享最近的心情、推荐一首歌，或者只是来和我、和灰灰打声招呼。" /><Comments target="guestbook" title="留言板" /></div></section></PageShell>; }
