import { navigationItems } from "@/data/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FEF3C7]/40 dark:bg-[#FEF3C7]/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#F59E0B]/5 blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-body font-medium tracking-[0.2em] uppercase text-[#B45309] dark:text-[#F59E0B] mb-6 border border-[#E7E5E4] dark:border-[#44403C] px-4 py-1.5 rounded-full">
              Side Projects & Experiments
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 font-display text-5xl md:text-7xl font-bold text-[#1C1917] dark:text-[#FAFAF7] leading-[1.1] mb-8">
            Project
            <span className="block text-[#B45309] dark:text-[#F59E0B]">Showcase</span>
          </h1>

          <p className="animate-fade-in-up delay-200 font-body text-lg md:text-xl text-[#78716C] dark:text-[#A8A29E] max-w-xl mx-auto mb-10 leading-relaxed">
            A growing collection of side projects, mini apps, and code snippets I've built — useful bits worth keeping around.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-3">
            <Link
              href="#components"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] dark:bg-[#FAFAF7] text-[#FAFAF7] dark:text-[#1C1917] font-body font-medium rounded-full transition-all hover:shadow-warm-lg hover:scale-[1.02]"
            >
              Explore Components
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="https://github.com/parkashay/small-library-of-components"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D6D3D1] dark:border-[#44403C] text-[#1C1917] dark:text-[#FAFAF7] font-body font-medium rounded-full transition-all hover:border-[#B45309] dark:hover:border-[#F59E0B] hover:shadow-warm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D6D3D1] dark:via-[#44403C] to-transparent" />
      </div>

      {/* Components Grid */}
      <section id="components" className="py-16 lg:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-xs font-body font-medium tracking-[0.2em] uppercase text-[#B45309] dark:text-[#F59E0B]">
              Collection
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1C1917] dark:text-[#FAFAF7] mt-3">
              Featured Components
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {navigationItems.map((component, i) => (
              <Link
                key={component.title}
                href={component.href}
                className={`group relative bg-white dark:bg-[#1C1917] rounded-2xl p-6 border border-[#E7E5E4] dark:border-[#44403C] transition-all duration-300 hover:border-[#B45309]/40 dark:hover:border-[#F59E0B]/40 hover:shadow-warm-lg animate-fade-in-up`}
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FEF3C7] dark:bg-[#F59E0B]/10 text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {component.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold text-[#1C1917] dark:text-[#FAFAF7] mb-1.5 group-hover:text-[#B45309] dark:group-hover:text-[#F59E0B] transition-colors">
                      {component.title}
                    </h3>
                    <p className="font-body text-sm text-[#78716C] dark:text-[#A8A29E] leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#B45309] dark:text-[#F59E0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-px bg-[#B45309] dark:bg-[#F59E0B] mx-auto mb-8" />
          <p className="font-body text-[#78716C] dark:text-[#A8A29E] leading-relaxed">
            Each component is designed to be customizable, accessible, and performance-optimized.
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="font-body text-sm text-[#A8A29E] dark:text-[#78716C] mt-6">
            Crafted by{" "}
            <span className="font-medium text-[#1C1917] dark:text-[#FAFAF7]">
              Prakash Poudel
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
