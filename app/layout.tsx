import type { Metadata } from 'next';
import { Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { CursorGlow } from '@/components/CursorGlow';
import { StoreProvider } from '@/lib/store';
import { Footer } from '@/components/Footer';
import { RoamingCat } from '@/components/RoamingCat';

const sans = Noto_Sans_SC({ subsets: ['latin'], variable: '--font-sans', weight: ['300', '400', '500'] });
const serif = Noto_Serif_SC({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '600'] });

export const metadata: Metadata = {
  title: { default: 'Liugou 数字美术馆', template: '%s · Liugou' },
  description: '一座收藏生活、代码与灵感的个人数字美术馆。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={`${sans.variable} ${serif.variable} font-sans antialiased`}><StoreProvider><CursorGlow /><Navigation /><div className="relative z-10">{children}</div><Footer /><RoamingCat /></StoreProvider></body></html>;
}
