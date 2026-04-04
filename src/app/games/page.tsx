import { GAMES } from "@/data/games";
import Link from "next/link";

export default function GamesPage() {
  return (
    <div className="py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-body font-medium tracking-[0.2em] uppercase text-[#B45309] dark:text-[#F59E0B]">
            Entertainment
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1C1917] dark:text-[#FAFAF7] mt-3">
            Arcade Games
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {GAMES.map((game, i) => (
            <Link
              key={game.href}
              href={`/games${game.href}`}
              className="group relative bg-white dark:bg-[#1C1917] rounded-2xl overflow-hidden border border-[#E7E5E4] dark:border-[#44403C] p-8 transition-all duration-300 hover:border-[#B45309]/40 dark:hover:border-[#F59E0B]/40 hover:shadow-warm-lg animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <span className="text-5xl block mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">
                {game.icon}
              </span>
              <h2 className="font-display text-2xl font-bold text-[#1C1917] dark:text-[#FAFAF7] mb-2 group-hover:text-[#B45309] dark:group-hover:text-[#F59E0B] transition-colors">
                {game.title}
              </h2>
              <p className="font-body text-sm text-[#78716C] dark:text-[#A8A29E]">
                {game.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#B45309] to-[#F59E0B] dark:from-[#F59E0B] dark:to-[#FBBF24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
