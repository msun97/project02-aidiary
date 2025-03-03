import Header from '@/components/Header'; // 헤더 추가

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className='m-0'>
        <Header /> {/* ✅ 헤더 추가 */}
        {children}
      </body>
    </html>
  );
}
