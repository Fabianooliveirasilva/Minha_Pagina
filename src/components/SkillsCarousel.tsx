"use client";

import {
  Braces,
  Bug,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Code2,
  FileCode2,
  FileText,
  FlaskConical,
  Database,
  GitBranch,
  GitFork,
  Globe2,
  Laptop,
  ListChecks,
  LockKeyhole,
  MonitorCheck,
  Network,
  Package,
  Search,
  Send,
  Server,
  ShieldCheck,
  Terminal,
  TestTube2,
  UsersRound,
  Zap,
} from "lucide-react";
import { useState } from "react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

const icons = [TestTube2, Bug, Database, Code2, GitBranch, ShieldCheck] as const;

const itemIcons: Record<string, LucideIcon> = {
  "Manual Testing": Search,
  "Functional Testing": CheckCircle2,
  "Regression Testing": TestTube2,
  "Exploratory Testing": FlaskConical,
  "Test Cases": ListChecks,
  "Bug Reporting": Bug,
  "Test Documentation": FileText,
  SDLC: Network,
  STLC: GitBranch,
  "Agile / Scrum / Kanban": UsersRound,
  Cypress: CircleDot,
  Selenium: MonitorCheck,
  Playwright: Laptop,
  Python: Code2,
  JavaScript: Braces,
  TypeScript: FileCode2,
  "E2E Testing": Globe2,
  "UI Automation": MonitorCheck,
  Postman: Send,
  "REST APIs": Network,
  "API Testing": Server,
  JSON: Braces,
  SQL: Database,
  MySQL: Database,
  MongoDB: Database,
  HTML5: Code2,
  CSS3: Code2,
  React: Package,
  "Vue.js": Package,
  "Tailwind CSS": Package,
  Bootstrap: Package,
  Vite: Zap,
  Webpack: Package,
  "Node.js": Server,
  "Express.js": Server,
  Git: GitBranch,
  GitHub: GitFork,
  Linux: Terminal,
  Windows: Laptop,
  "Cybersecurity fundamentals": ShieldCheck,
  "Web Security": LockKeyhole,
  "Security awareness": ShieldCheck,
  "Secure development concepts": LockKeyhole,
};

type SkillGroup = {
  number: string;
  title: string;
  items: readonly string[];
};

type SkillsCarouselProps = {
  groups: readonly SkillGroup[];
};

export function SkillsCarousel({ groups }: SkillsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = groups[activeIndex];
  const ActiveIcon = icons[activeIndex % icons.length];

  function move(delta: number) {
    setActiveIndex((current) => (current + delta + groups.length) % groups.length);
  }

  return (
    <div className="skills-carousel">
      <div className="skills-orbit" aria-label="Skill areas">
        <div className="skills-orbit-ring" aria-hidden="true" />
        {groups.map((group, index) => {
          const Icon = icons[index % icons.length];
          const angle = `${index * (360 / groups.length) - 90}deg`;
          const isActive = index === activeIndex;

          return (
            <button
              key={group.number}
              type="button"
              aria-label={`Show ${group.title} skills`}
              aria-pressed={isActive}
              className={`skills-orbit-item ${isActive ? "is-active" : ""}`}
              style={{ "--orbit-angle": angle } as CSSProperties}
              onClick={() => setActiveIndex(index)}
            >
              <span className="skills-orbit-item-inner">
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                <span>{group.number}</span>
              </span>
            </button>
          );
        })}

        <div className="skills-orbit-core">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
            FOS / QA
          </span>
          <ActiveIcon size={34} strokeWidth={1.4} aria-hidden="true" />
          <strong>{activeGroup.title}</strong>
          <span className="text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">
            Skill domain
          </span>
        </div>
      </div>

      <article className="skills-active-panel">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
          <div>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--accent)]">
              {activeGroup.number} / 06
            </span>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">
              {activeGroup.title}
            </h3>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous skill area"
              className="icon-control"
              onClick={() => move(-1)}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next skill area"
              className="icon-control"
              onClick={() => move(1)}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 text-sm leading-6 text-[var(--text-soft)] sm:grid-cols-3">
          {activeGroup.items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              {(() => {
                const ItemIcon = itemIcons[item] ?? Code2;
                return (
                  <ItemIcon
                    size={15}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-[var(--accent)]"
                    aria-hidden="true"
                  />
                );
              })()}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
