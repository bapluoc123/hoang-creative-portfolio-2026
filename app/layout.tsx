import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

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
  const socialImage = new URL("/og-v2.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "Hoang — Ideas Built to Move",
    description:
      "Portfolio of Hoang, an independent creative developer turning ideas into expressive digital experiences.",
    openGraph: {
      title: "Hoang — Ideas Built to Move",
      description: "Creative direction, design and development — made in Vietnam.",
      type: "website",
      images: [{ url: socialImage, width: 1672, height: 941, alt: "Hoang — Creative Developer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hoang — Ideas Built to Move",
      description: "Creative direction, design and development — made in Vietnam.",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
