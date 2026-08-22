'use client';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { PageShell, SectionHeading } from '@/components/PageShell';
import { PostCard } from '@/components/PostCard';
import { useStore } from '@/lib/store';
const filters = [['all','全部'], ['life','生活'], ['study','学习'], ['project','项目']];
export default function PostsPage() {
  const { posts } = useStore(); const [filter, setFilter] = useState('all'), [query, setQuery] = useState('');
  const list = useMemo(() => posts.filter(p => p.status === 'public' && (filter === 'all' || p.type === filter) && `${p.title}${p.excerpt}${p.tags.join('')}`.toLowerCase().includes(query.toLowerCase())), [posts, filter, query]);
  return <PageShell><SectionHeading eyebrow="WRITING & NOTES" title="生活与学习，都值得好好记下来。" intro="长一点的思考、学习笔记、项目过程，还有普通日子里想留下的片段。" /><section className="mx-auto max-w-6xl"><div className="mb-10 flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/35 p-4 md:flex-row md:items-center md:justify-between"><div className="flex gap-2">{filters.map(([id,label]) => <button key={id} onClick={() => setFilter(id)} className={`rounded-full px-4 py-2 text-sm ${filter === id ? 'bg-ink text-cream' : 'text-ink/50 hover:bg-white/60'}`}>{label}</button>)}</div><label className="flex items-center gap-2 rounded-full bg-white/50 px-4 py-2"><Search size={16} className="text-ink/35" /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="搜标题、标签……" className="w-44 bg-transparent text-sm outline-none" /></label></div><div className="grid gap-6 md:grid-cols-2">{list.map(post => <PostCard key={post.id} post={post} />)}</div>{!list.length && <p className="py-24 text-center text-ink/35">没有找到相关内容。</p>}</section></PageShell>;
}
