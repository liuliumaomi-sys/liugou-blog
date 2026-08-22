export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  tags: string[];
  cover: string;
  status: 'public' | 'draft' | 'private';
  type: 'life' | 'study' | 'project';
};

export const initialPosts: Post[] = [
  { id: '1', slug: 'hello-corner', title: '欢迎来到 Liugou’s Corner', date: '2026-08-22', category: '生活碎片', excerpt: '把这里重新收拾成一个可以慢慢记录生活与学习的小角落。', tags: ['日常', '开始'], cover: 'from-[#c9d8c6] to-[#efe4d3]', status: 'public', type: 'life', content: `这里不是展览，也不需要一条规定好的参观路线。\n\n我想把生活里值得记住的小事、学习过程中踩过的坑，还有正在做的项目，慢慢放在这里。\n\n如果你愿意，可以看看文章、留下一句话，或者去和灰灰玩一会儿。` },
  { id: '2', slug: 'learning-notes', title: '学习笔记应该怎样留下来', date: '2026-08-18', category: '学习手账', excerpt: '比起收藏一百个链接，我更想留下真正理解过的东西。', tags: ['学习方法', '笔记'], cover: 'from-[#d6c9b6] to-[#f4ddd3]', status: 'public', type: 'study', content: `学习笔记不应该只是资料的搬运。\n\n我会尽量记录问题是什么、尝试过哪些方法，以及最后为什么选择现在的答案。\n\n\`\`\`ts\nconst learning = curiosity + practice;\n\`\`\`` },
  { id: '3', slug: 'weekend-walk', title: '周末散步时遇见的晚风', date: '2026-08-11', category: '个人日常', excerpt: '没有目的地走了一会儿，顺便捡回几段很轻的心情。', tags: ['散步', '随手记'], cover: 'from-[#b8c8c4] to-[#ead6c9]', status: 'public', type: 'life', content: `傍晚的风刚好，路边的树影被拉得很长。\n\n有时候什么都不完成，也是一种很重要的休息。` },
  { id: '4', slug: 'blog-rebuild', title: '把旧博客重新搭起来', date: '2026-08-03', category: '项目记录', excerpt: '从一个空壳开始，重新想象属于自己的长期数字空间。', tags: ['Next.js', '项目'], cover: 'from-[#aebfae] to-[#e7c1b8]', status: 'public', type: 'project', content: `这个博客使用 Next.js、TypeScript 和 Tailwind CSS。\n\n目标不是堆很多功能，而是让记录和维护都足够顺手。` },
];

export type Moment = { id: string; text: string; date: string; mood: string };
export const initialMoments: Moment[] = [
  { id: 'm1', text: '今天把旧博客翻出来了，决定认真地让它重新生长。', date: '08.22 12:40', mood: '🌱' },
  { id: 'm2', text: '晚饭后吹到一点凉风，秋天好像正在来的路上。', date: '08.19 21:16', mood: '🍃' },
  { id: 'm3', text: '终于弄懂了一个困扰很久的问题，记下来比“我会了”更可靠。', date: '08.16 18:02', mood: '💡' },
];
