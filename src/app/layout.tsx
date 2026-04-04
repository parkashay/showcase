import Navigation from "@/components/Navigation";
import TopLoadingBar from "@/components/TopLoadingBar";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "React Component Library",
  description: "A collection of reusable React components.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="font-body">
        <TopLoadingBar />
        <div className="min-h-screen bg-[#FAFAF7] dark:bg-[#0C0A09]">
          <main className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[300px] shrink-0 px-4 lg:px-6 lg:py-8 lg:border-r border-[#E7E5E4] dark:border-[#44403C] overflow-y-auto">
              <Navigation />
            </aside>
            {/* Content */}
            <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-10 py-8 lg:py-12">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
