import Link from "next/link";
import { footerLinks } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--text)]">
            FABIANO OLIVEIRA SILVA
          </p>
          <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--text-soft)]">
            QA ENGINEER · TEST AUTOMATION · FRONT-END · CYBERSECURITY
          </p>
          <p className="mt-6 text-sm text-[var(--text-soft)]">
            Brazil · Remote Worldwide · Open to Spain relocation
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-x-6 gap-y-3 text-sm text-[var(--text-soft)]">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-[var(--line)] px-5 py-5 text-center text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted)] sm:px-8 lg:px-10">
        © 2026 Fabiano Oliveira Silva
      </div>
    </footer>
  );
}
