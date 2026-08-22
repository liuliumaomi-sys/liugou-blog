'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initialMoments, initialPosts, type Moment, type Post } from '@/data/content';

export type Comment = { id: string; target: string; name: string; body: string; date: string; parentId?: string; likes: number };
export type Profile = { nickname: string; intro: string; doing: string; learning: string };
export type Pet = { hunger: number; mood: number; energy: number; affection: number; coins: number; visits: number; items: string[] };

type Store = {
  posts: Post[]; moments: Moment[]; comments: Comment[]; profile: Profile; pet: Pet;
  savePost: (post: Post) => void; removePost: (id: string) => void; addMoment: (text: string) => void;
  addComment: (target: string, name: string, body: string, parentId?: string) => void;
  likeComment: (id: string) => void; updateProfile: (profile: Profile) => void;
  updatePet: (change: Partial<Pet>) => void;
};

const defaults = {
  profile: { nickname: 'Liugou', intro: '欢迎来到我的网络小角落。这里记录生活、学习，以及一些正在慢慢发生的事情。', doing: '重新整理这个小站', learning: '持续学习与创造' },
  pet: { hunger: 72, mood: 80, energy: 66, affection: 38, coins: 20, visits: 1, items: ['绿格地毯', '纸箱'] },
};
const StoreContext = createContext<Store | null>(null);
const read = <T,>(key: string, fallback: T): T => { try { return JSON.parse(localStorage.getItem(key) || '') as T; } catch { return fallback; } };

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState(initialPosts), [moments, setMoments] = useState(initialMoments);
  const [comments, setComments] = useState<Comment[]>([]), [profile, setProfile] = useState(defaults.profile), [pet, setPet] = useState(defaults.pet);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setPosts(read('lc-posts', initialPosts)); setMoments(read('lc-moments', initialMoments)); setComments(read('lc-comments', []));
    setProfile(read('lc-profile', defaults.profile));
    const old = read('lc-pet', defaults.pet); const next = { ...old, visits: old.visits + 1, coins: old.coins + 1 };
    setPet(next); localStorage.setItem('lc-pet', JSON.stringify(next)); setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem('lc-posts', JSON.stringify(posts)); }, [posts, ready]);
  useEffect(() => { if (ready) localStorage.setItem('lc-moments', JSON.stringify(moments)); }, [moments, ready]);
  useEffect(() => { if (ready) localStorage.setItem('lc-comments', JSON.stringify(comments)); }, [comments, ready]);
  useEffect(() => { if (ready) localStorage.setItem('lc-profile', JSON.stringify(profile)); }, [profile, ready]);
  useEffect(() => { if (ready) localStorage.setItem('lc-pet', JSON.stringify(pet)); }, [pet, ready]);
  const value = useMemo<Store>(() => ({ posts, moments, comments, profile, pet,
    savePost: post => setPosts(all => [post, ...all.filter(p => p.id !== post.id)]),
    removePost: id => setPosts(all => all.filter(p => p.id !== id)),
    addMoment: text => setMoments(all => [{ id: crypto.randomUUID(), text, date: new Date().toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }), mood: '✨' }, ...all]),
    addComment: (target, name, body, parentId) => { setComments(all => [...all, { id: crypto.randomUUID(), target, name: name || '路过的小伙伴', body, parentId, likes: 0, date: new Date().toLocaleString('zh-CN') }]); setPet(p => ({ ...p, coins: p.coins + 3, affection: Math.min(100, p.affection + 1) })); },
    likeComment: id => setComments(all => all.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c)),
    updateProfile: setProfile, updatePet: change => setPet(old => ({ ...old, ...change })),
  }), [posts, moments, comments, profile, pet]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() { const store = useContext(StoreContext); if (!store) throw new Error('StoreProvider missing'); return store; }
