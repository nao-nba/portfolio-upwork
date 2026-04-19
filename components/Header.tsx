"use client";

import { Link, usePathname, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

export const Header = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className="border-b px-10 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" aria-label="N.I — Home" className="font-bold text-xl tracking-tighter">
        N.I
      </Link>

      <nav aria-label="Site navigation" className="flex gap-6 items-center text-sm font-medium">
        <div role="group" aria-label="Language selector" className="flex bg-slate-100 p-1 rounded-lg">
          {routing.locales.map((loc) => (
            <Link
              key={loc}
              href={pathname}
              locale={loc}
              aria-label={`Switch to ${loc === "en" ? "English" : "日本語"}`}
              aria-current={locale === loc ? true : undefined}
              className={`px-3 py-1 rounded-md transition ${
                locale === loc
                  ? "bg-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {loc.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
