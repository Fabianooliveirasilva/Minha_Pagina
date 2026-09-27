import Link from "next/link";
import { navItems } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--bg)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-8 sm:py-4 lg:px-10">
        <Link
          href="#top"
          className="hero-name min-w-0 flex-1 truncate text-[clamp(0.68rem,3.4vw,1.75rem)] font-semibold leading-none tracking-[0.04em] transition-opacity duration-300 hover:opacity-80 sm:tracking-[0.08em] lg:max-w-[21rem] lg:flex-none lg:text-[1.45rem]"
        >
          FABIANO OLIVEIRA SILVA
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--text-soft)] transition-colors duration-300 hover:text-[var(--text)]"
            >
              <span>{t(item.label.toLowerCase() as "work" | "skills" | "experience" | "about" | "contact")}</span>
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_var(--accent-soft)]" />
            {t("available")}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="#contact"
            aria-label="Contact"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[0.9rem] font-medium text-[var(--text)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
          >
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
