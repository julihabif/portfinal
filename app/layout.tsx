import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/sections/navbar";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Julieta Habif Portfolio",
    template: "%s | Julieta Habif"
  },
  description: "Creative Portfolio of Julieta Habif - Product Manager & Developer",
  keywords: ["Product Manager", "Developer", "Portfolio", "Next.js", "React", "Full Stack", "Web Development"],
  authors: [{ name: "Julieta Habif" }],
  creator: "Julieta Habif",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julietahabif.com",
    title: "Julieta Habif Portfolio",
    description: "Creative Portfolio of Julieta Habif - Product Manager & Developer",
    siteName: "Julieta Habif Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Julieta Habif Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julieta Habif Portfolio",
    description: "Creative Portfolio of Julieta Habif - Product Manager & Developer",
    creator: "@julietahabif",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force dark mode before React hydration to prevent FOUC
              (function() {
                document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${satoshi.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Glow effects */}
        <div className="glow-blur glow-blur-1" />
        <div className="glow-blur glow-blur-2" />

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
