import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { ViewProvider } from "../context/ViewContext";
import { SmoothScroll } from "../components/SmoothScroll";
import { Footer } from "../components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tejaram Chaudhari | Editorial Lab",
  description: "Cyber-Physical Systems Researcher & Founder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <ViewProvider>
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
        </ViewProvider>
      </body>
    </html>
  );
}
