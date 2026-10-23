import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "심심한책방 도서 견적서",
  description: "도서·라벨 견적서 작성 및 기기 간 동기화",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
