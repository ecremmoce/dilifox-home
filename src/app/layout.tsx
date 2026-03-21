import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "Dilifox - 글로벌 물류의 새로운 기준",
  description:
    "항공특송, 3PL 풀필먼트, 상품공급·판매까지. 국내 구매부터 해외 출고까지 원스톱 물류 서비스를 제공합니다.",
  keywords: "항공특송, 3PL, 풀필먼트, 물류대행, 해외배송, B2B, B2C",
  openGraph: {
    title: "Dilifox - 글로벌 물류의 새로운 기준",
    description:
      "항공특송, 3PL 풀필먼트, 상품공급·판매까지 원스톱 물류 서비스",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
