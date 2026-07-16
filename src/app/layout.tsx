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

export const metadata: Metadata = {
  title: "Saranakarya | Solusi Digital yang Bermakna",
  description: "Partner kreatif yang membantu bisnis Anda tumbuh lebih cepat melalui solusi digital yang menarik and bermakna. Kami menciptakan pengalaman digital yang relevan, inovatif, dan berkesinambungan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${protestRevolution.variable} ${fontjek.variable} ${merienda.variable} ${maShanZheng.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


