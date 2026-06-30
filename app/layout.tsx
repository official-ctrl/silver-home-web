import type { Metadata } from "next";
import MuiProvider from "@/components/MuiProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "불곡산숲실버홈 | 자연이 품은 두 번째 집",
  description:
    "불곡산 숲 한가운데 위치한 프리미엄 요양원, 불곡산숲실버홈입니다. 소중한 가족을 위한 자연 친화적 돌봄을 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
