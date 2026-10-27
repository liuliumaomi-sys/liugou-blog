export const metadata = { title: '实习工作台' };

export default function InternshipPage() {
  const staticPrefix = process.env.NODE_ENV === 'production' ? '/liugou-blog' : '';
  return <main className="min-h-screen bg-[#f7f8fa] pt-24"><iframe title="实习工作台" src={`${staticPrefix}/internship/index.html`} className="h-[calc(100vh-6rem)] w-full border-0" /></main>;
}
