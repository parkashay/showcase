"use client";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NavigateBack } from "./common/navigate-back";
import { navigationItems } from "@/data/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="py-4 flex flex-col h-full">
      {/* Logo / Brand */}
      <div className="px-3 mb-8">
        <Link href="/" className="group inline-flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1C1917] dark:bg-[#FAFAF7] text-[#FAFAF7] dark:text-[#1C1917] font-display text-sm font-bold transition-transform group-hover:scale-105">
            R
          </span>
          <span className="font-display text-lg font-semibold text-[#1C1917] dark:text-[#FAFAF7]">
            Components
          </span>
        </Link>
      </div>

      {/* Back button */}
      {!isHome && <NavigateBack href="/" text="Home" classsName="mb-5" />}

      {/* Section label */}
      <span className="text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-[#A8A29E] dark:text-[#78716C] px-3 mb-2">
        Library
      </span>

      {/* Nav items */}
      <div className="flex flex-col gap-0.5">
        {navigationItems.map((component, i) => {
          const isActive = pathname.includes(component.href);
          return (
            <Link
              href={component.href}
              className={cn(
                "group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 font-body text-sm",
                isActive
                  ? "bg-[#FEF3C7] dark:bg-[#F59E0B]/10 text-[#92400E] dark:text-[#FBBF24]"
                  : "text-[#57534E] dark:text-[#A8A29E] hover:bg-[#F5F5F0] dark:hover:bg-[#292524] hover:text-[#1C1917] dark:hover:text-[#FAFAF7]"
              )}
              key={component.title}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-lg text-base transition-all duration-200",
                  isActive
                    ? "bg-[#F59E0B]/20 dark:bg-[#F59E0B]/20"
                    : "bg-[#F5F5F0] dark:bg-[#292524] group-hover:bg-[#FEF3C7]/60 dark:group-hover:bg-[#F59E0B]/10"
                )}
              >
                {component.icon}
              </span>
              <span className={cn("font-medium", isActive && "font-semibold")}>
                {component.title}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Footer card */}
      <div className="mt-auto pt-8">
        <div className="px-3 py-4 rounded-xl bg-[#F5F5F0] dark:bg-[#1C1917] border border-[#E7E5E4] dark:border-[#292524]">
          <div className="w-6 h-px bg-[#B45309] dark:bg-[#F59E0B] mb-3" />
          <p className="font-body text-xs text-[#78716C] dark:text-[#A8A29E] leading-relaxed mb-3">
            Reusable React components by Prakash Poudel.
          </p>
          <a
            href="https://github.com/parkashay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-[#B45309] dark:text-[#F59E0B] hover:text-[#92400E] dark:hover:text-[#FBBF24] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
