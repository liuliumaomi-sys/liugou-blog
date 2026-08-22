'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PageShell } from '@/components/PageShell';
import { Comments } from '@/components/Comments';
import { useStore } from '@/lib/store';
function Reader() { const params = useSearchParams(), { posts } = useStore(); const post = posts.find(p => p.slug === params.get('slug')); if (!post || post.status !== 'public') return <PageShell><div className="mx-auto max-w-2xl py-24 text-center"><h1 className="font-serif text-4xl">这篇内容暂时看不到</h1><Link href="/posts" className="mt-7 inline-block text-moss">回到文章列表</Link></div></PageShell>;
  const blocks = post.content.split('\n'); return <PageShell><article className="mx-auto max-w-3xl"><Link href="/posts" className="text-sm text-ink/40">← 返回全部文章</Link><div className={`mt-8 h-72 rounded-[2.5rem] bg-gradient-to-br ${post.cover}`} /><p className="mt-10 text-xs tracking-[.2em] text-moss">{post.category} · {post.date}</p><h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{post.title}</h1><p className="mt-6 text-lg leading-8 text-ink/50">{post.excerpt}</p><div className="mt-12 space-y-5 text-[17px] leading-9 text-ink/75">{blocks.map((line, i) => line.startsWith('```') ? null : line.startsWith('const ') ? <pre key={i} className="overflow-x-auto rounded-2xl bg-ink p-5 font-mono text-sm text-cream">{line}</pre> : line ? <p key={i}>{line}</p> : <br key={i} />)}</div><div className="mt-10 flex gap-2">{post.tags.map(tag => <span key={tag} className="rounded-full bg-moss/10 px-3 py-1 text-xs text-moss">#{tag}</span>)}</div><Comments target={`post:${post.id}`} /></article></PageShell>; }
export default function ReadPage() { return <Suspense><Reader /></Suspense>; }
