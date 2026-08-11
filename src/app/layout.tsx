import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const protestRevolution = localFont({
  src: "../../public/assets/fonts/ProtestRevolution-Regular.ttf",
  variable: "--font-protest-revolution",
  display: "swap",
});

const fontjek = localFont({
  src: "../../public/assets/fonts/Fontjek.ttf",
  variable: "--font-fontjek",
  display: "swap",
});

const merienda = localFont({
  src: "../../public/assets/fonts/Merienda-VariableFont_wght.ttf",
  variable: "--font-merienda",
  display: "swap",
});

const maShanZheng = localFont({
  src: "../../public/assets/fonts/MaShanZheng-Regular.ttf",
  variable: "--font-MaShanZheng",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://swarakarya.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Swarakarya | Solusi Digital yang Bermakna & Kreatif",
    template: "%s | Swarakarya",
  },
  icons: {
    icon: "/assets/logo/logo_utama.svg",
  },
  description: "Partner kreatif yang membantu bisnis Anda tumbuh lebih cepat melalui solusi digital yang menarik dan bermakna. Kami menciptakan pengalaman digital yang relevan, inovatif, dan berkesinambungan.",
  keywords: [
    "Swarakarya", "Saranakarya", "solusi digital", "agency kreatif", "branding", 
    "desain website", "jasa desain", "pembuatan website", "digital marketing", 
    "web development", "UI UX design", "konten digital"
  ],
  authors: [{ name: "Swarakarya Team", url: siteUrl }],
  creator: "Swarakarya",
  publisher: "Swarakarya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: "Swarakarya | Solusi Digital yang Bermakna & Kreatif",
    description: "Partner kreatif yang membantu bisnis Anda tumbuh lebih cepat melalui solusi digital yang menarik dan bermakna. Kami menciptakan pengalaman digital yang relevan, inovatif, dan berkesinambungan.",
    siteName: "Swarakarya",
    images: [
      {
        url: "/assets/logo/logo_utama.svg",
        width: 1200,
        height: 630,
        alt: "Swarakarya Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarakarya | Solusi Digital yang Bermakna & Kreatif",
    description: "Partner kreatif yang membantu bisnis Anda tumbuh lebih cepat melalui solusi digital yang menarik dan bermakna. Kami menciptakan pengalaman digital yang relevan, inovatif, dan berkesinambungan.",
    images: ["/assets/logo/logo_utama.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${protestRevolution.variable} ${fontjek.variable} ${merienda.variable} ${maShanZheng.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


