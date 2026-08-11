import type { Metadata } from "next";
import { headers } from "next/headers";
import "./local-fonts.css";
import "./globals.css";
import "./auroradot-cover.css";
import "./project-covers.css";
import "./mission-character.css";
import "./header-layout.css";
import "./musaic-case.css";
import "./font-system.css";
import "./typography-fixes.css";
import "./elihigh-mascots.css";
import "./responsive-system.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og-v4.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "Huy Hoàng — Nhà thiết kế UI/UX & Họa sĩ 2D",
    description:
      "Hồ sơ năng lực của Huy Hoàng — Nhà thiết kế UI/UX và Họa sĩ 2D với hơn 4 năm kinh nghiệm trong sản phẩm số, game di động và ứng dụng giáo dục.",
    openGraph: {
      title: "Huy Hoàng — Nhà thiết kế UI/UX & Họa sĩ 2D",
      description: "Giao diện trực quan và những thế giới 2D giàu cảm xúc — sáng tạo tại Việt Nam.",
      type: "website",
      images: [{ url: socialImage, width: 1672, height: 941, alt: "Huy Hoàng — Nhà thiết kế UI/UX & Họa sĩ 2D" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Huy Hoàng — Nhà thiết kế UI/UX & Họa sĩ 2D",
      description: "Giao diện trực quan và những thế giới 2D giàu cảm xúc — sáng tạo tại Việt Nam.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
