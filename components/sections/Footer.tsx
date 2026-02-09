import { SITE_NAME } from "@/data/site";
import { NAV_ITEMS } from "@/data/nav";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-sm font-bold tracking-tighter text-white">
              {SITE_NAME}
            </span>
            <span className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} Oke Okaro. All rights reserved.
            </span>
          </div>

          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="text-[10px] text-zinc-700 text-center mt-8">
          Logos and trademarks are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
