export type Exhibit = {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  color: string;
};

export const exhibits: Exhibit[] = [
  { id: 1, title: '在代码的缝隙里种花', date: '2026.08.22', category: '生活札记', excerpt: '关于创造、缓慢生活，以及如何为普通日子保留一点想象力。', color: '#c9d8c6' },
  { id: 2, title: '我的数字房间', date: '2026.07.16', category: '设计思考', excerpt: '当网页不再只是一张页面，它能否成为一个愿意让人停留的房间？', color: '#e7c1b8' },
  { id: 3, title: '一次温柔的重构', date: '2026.06.02', category: '工程手记', excerpt: '整理旧代码，也是在整理过去的自己；保留痕迹，然后继续生长。', color: '#d8cfb9' },
  { id: 4, title: '晚风、散步与灵感', date: '2026.05.18', category: '灵感采集', excerpt: '一些没有目的的散步，和途中捡到的颜色、声音与念头。', color: '#b8c8c4' },
];

export const works = [
  { title: '未命名的宇宙', type: '项目', year: '2026', gradient: 'from-[#90a58f] to-[#d2cbb8]' },
  { title: '日光标本', type: '摄影', year: '持续收集', gradient: 'from-[#d8a99d] to-[#eee0ca]' },
  { title: '柔软界面实验', type: '设计', year: '2026', gradient: 'from-[#b5c9c1] to-[#d8c4cc]' },
];
