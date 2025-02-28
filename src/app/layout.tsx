import type { Metadata } from 'next';
import Header from '@/components/Header'; // 헤더 추가

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Next.js 13+ App Router 사용',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header /> {/* ✅ 헤더 추가 */}
        {children}
      </body>
    </html>
  );
}
