import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { Toaster } from "@/components/ui/sonner";
import PageLoader from "@/components/PageLoader";
import BackToTop from "@/components/BackToTop";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Prof. Salawu S.O | Professor of Biochemistry | FUTA",
  description: "Official portfolio of Professor Sule Ola Salawu (S.O), a leading researcher in Phytochemistry and Nutritional Biochemistry at FUTA. Mental Health Activist and Researcher.",
  keywords: ["Prof. Salawu", "Sule Ola Salawu", "S.O Salawu", "Biochemistry Professor Nigeria", "FUTA Biochemistry", "Phytochemistry Research", "Mental Health Activist Nigeria"],
  authors: [{ name: "Professor Sule Ola Salawu" }],
  openGraph: {
    title: "Prof. Salawu S.O | Professor of Biochemistry | FUTA",
    description: "Official academic portfolio and research of Professor Salawu.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100`}>
        <AnimatedBackground />
        <PageLoader />
        <Navbar />
        {children}
        <WhatsAppBubble />
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}
