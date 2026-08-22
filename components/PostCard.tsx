'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Post } from '@/data/content';
export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return <Link href={`/read?slug=${post.slug}`} className={`art-card group block overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 ${featured ? 'md:grid md:grid-cols-2' : ''}`}><div className={`min-h-48 bg-gradient-to-br ${post.cover} p-6`}><div className="flex h-full items-start justify-between"><span className="rounded-full bg-cream/70 px-3 py-1 text-xs text-ink/55">{post.category}</span><ArrowUpRight className="text-ink/40 transition group-hover:rotate-45" size={20} /></div></div><div className="p-7"><p className="text-xs tracking-wider text-ink/40">{post.date}</p><h2 className={`mt-3 font-serif leading-snug ${featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>{post.title}</h2><p className="mt-4 line-clamp-2 leading-7 text-ink/55">{post.excerpt}</p><div className="mt-6 flex flex-wrap gap-2">{post.tags.map(tag => <span key={tag} className="text-xs text-moss">#{tag}</span>)}</div></div></Link>;
}
