"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsCarousel } from "@/components/SkillsCarousel";
import { useLanguage } from "@/components/LanguageProvider";
import {
  education,
  experience,
  expertise,
  projects,
  qualityCases,
} from "@/data/profile";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main id="top" className="bg-[var(--bg)] text-[var(--text)]">
        <section className="hero-section relative overflow-hidden border-b border-[var(--line)] px-5 pb-16 pt-12 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
          <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
            <span>{t("qa")}</span>
            <span className="text-[var(--accent)]">·</span>
            <span>{t("automation")}</span>
            <span className="text-[var(--accent)]">·</span>
            <span>{t("frontend")}</span>
            <span className="text-[var(--accent)]">·</span>
            <span>{t("security")}</span>
          </div>

          <div className="hero-video mb-12 overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] shadow-[0_24px_80px_var(--shadow)]">
            <video
              className="aspect-[16/8] w-full object-cover sm:aspect-[16/6]"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Cinematic introduction to Fabiano Oliveira Silva's portfolio"
            >
              <source src="/videos/portfolio-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.08em] text-[var(--text)] sm:text-6xl lg:text-[7rem]">
                QA Engineer
                <span className="block text-[var(--text-soft)]">
                  {t("focused")}
                </span>
                <span className="block">{t("quality")}</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--text-soft)] sm:text-lg">
                {t("heroDescription")}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#fff8f8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
                >
                  {t("viewWork")} <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--card)] px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  {t("requestCv")} <span aria-hidden="true">→</span>
                </a>
                <a
                  href="https://linkedin.com/in/fabiano-silva-oliveira"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  {t("linkedin")} <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                <span>{t("remote")}</span>
                <span>{t("relocation")}</span>
              </div>
            </div>

            <div className="justify-self-end">
              <div className="w-full max-w-md rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_var(--shadow)]">
                <div className="mb-4 flex items-center justify-between border-b border-[var(--line)] pb-3">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {t("testSuite")}
                  </span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--accent)]">
                    {t("live")}
                  </span>
                </div>
                <div className="space-y-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--text)]">
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent)]">✓</span>
                    <span>{t("apiTests")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent)]">✓</span>
                    <span>{t("functionalTests")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent)]">✓</span>
                    <span>{t("regressionTests")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent)]">✓</span>
                    <span>{t("e2eAutomation")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent)]">✓</span>
                    <span>{t("uiValidation")}</span>
                  </div>
                </div>
                <div className="mt-8 border-t border-[var(--line)] pt-4 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                  <span className="text-[var(--text)]">98%</span> {t("coverage")}
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="border-b border-[var(--line)] bg-[var(--panel)]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[var(--line)] sm:grid-cols-4">
            {[
              ["06", "Skill domains"],
              ["03", "Languages"],
              ["QA + FE", "Core focus"],
              ["GLOBAL", "Remote-ready"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[var(--panel)] px-5 py-7 sm:px-8 lg:py-9">
                <p className="text-2xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-3xl">{value}</p>
                <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="border-t border-[var(--line)] bg-[var(--bg-alt)]"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeading number="01" title={t("aboutTitle")} />
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] shadow-[0_20px_60px_var(--shadow)]">
                <Image
                  src="/images/fabiano-oliveira-silva.jpeg"
                  alt="Fabiano Oliveira Silva"
                  width={800}
                  height={1067}
                  className="aspect-[3/4] w-full object-cover object-top grayscale-[0.12] transition duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/20 bg-black/45 px-4 py-3 text-white backdrop-blur-md">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/70">FOS / 2026</p>
                  <p className="mt-1 text-sm">QA Engineer · Front-end Developer</p>
                </div>
              </div>
              <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
                <p className="text-2xl font-medium leading-tight tracking-[-0.06em] text-[var(--text)] md:text-4xl">
                  {t("aboutLead")}
                </p>
                <p>
                  {t("aboutText1")}
                </p>
                <p>
                  {t("aboutText2")}
                </p>
                <p>
                  {t("aboutText3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="skills-section relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
          <div aria-hidden="true" className="code-background">
            <span>{`const quality = await ship({ tests: true });`}</span>
            <span>{`if (bug.severity === "critical") { blockRelease(); }`}</span>
            <span>{`expect(response.status).toBe(200);`}</span>
            <span>{`git commit -m "raise quality bar"`}</span>
            <span>{`describe("reliable software", () => { ... });`}</span>
          </div>
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading number="02" title={t("skillsTitle")} />
            <SkillsCarousel groups={expertise} />
          </div>
        </section>

        <section
          id="work"
          className="border-t border-[var(--line)] bg-[var(--bg-alt)]"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeading number="03" title={t("workTitle")} />
            <div className="space-y-10">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--card)] shadow-[0_18px_60px_var(--shadow)]"
                >
                  <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-[1.3fr_0.7fr] lg:p-10">
                    <div className="relative min-h-[260px] overflow-hidden rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)]">
                      <Image
                        src="/images/software-quality.jpg"
                        alt="Software development workspace"
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition duration-700 hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-6 text-white">
                        <div>
                          <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-white/70">{project.number}</p>
                          <p className="mt-2 text-3xl font-semibold tracking-[-0.06em]">{project.name}</p>
                          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">{project.imageLabel}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                          {project.category}
                        </p>
                        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[var(--text)]">
                          {project.name}
                        </h3>
                        <p className="mt-5 max-w-md text-base leading-7 text-[var(--text-soft)]">
                          {project.description}
                        </p>
                        <div className="mt-6 grid gap-4 border-t border-[var(--line)] pt-5 text-sm leading-6 text-[var(--text-soft)]">
                          <div>
                            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">Challenge</p>
                            <p className="mt-1">{project.challenge}</p>
                          </div>
                          <div>
                            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">Approach</p>
                            <p className="mt-1">{project.solution}</p>
                          </div>
                          <div>
                            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--accent)]">Outcome</p>
                            <p className="mt-1">{project.outcome}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                          {t("stack")}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1 text-[0.66rem] uppercase tracking-[0.14em] text-[var(--text)]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
                        >
                          {t("viewGithub")} <span aria-hidden="true">↗</span>
                        </a>
                        <a
                          href={project.demo}
                          className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
                        >
                          {t("viewLive")} <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading number="04" title={t("qualityTitle")} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {qualityCases.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6"
              >
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {item.number}
                </p>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.05em] text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-8 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--text-soft)]">
                  {item.status}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="border-t border-[var(--line)] bg-[var(--bg-alt)]"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeading number="05" title={t("experienceTitle")} />
            <div className="relative space-y-10 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--line)]">
              {experience.map((job) => (
                <article key={job.period} className="relative pl-10">
                  <span className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-[var(--bg)] bg-[var(--text)]" />
                  <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6 md:p-8">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                        {job.period}
                      </p>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                        {job.company}
                      </p>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-[var(--text)]">
                      {job.role}
                    </h3>
                    <p className="mt-4 border-l-2 border-[var(--accent)] pl-4 text-sm leading-6 text-[var(--text-soft)]">
                      {job.result}
                    </p>
                    <ul className="mt-6 space-y-3 text-base leading-7 text-[var(--text-soft)]">
                      {job.focus.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading number="06" title={t("educationTitle")} />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={`${item.title}-${item.institution}`}
                className={`rounded-[1.5rem] border p-6 ${item.secondary ? "border-dashed border-[var(--line)] bg-[var(--panel)] text-[var(--text-soft)]" : "border-[var(--line)] bg-[var(--card)] text-[var(--text)]"}`}
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {item.period}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.05em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
                  {item.institution}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[var(--bg-alt)]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeading number="07" title={t("positioningTitle")} />
            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 md:p-10">
              <p className="text-3xl font-semibold leading-tight tracking-[-0.08em] text-[var(--text)] md:text-6xl">
                FROM BUILDING SOFTWARE
                <span className="block text-[var(--text-soft)]">
                  TO TESTING IT BETTER.
                </span>
              </p>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-[var(--text-soft)]">
                My background in front-end development gives me a practical
                understanding of how web applications are built — from
                interfaces and APIs to data and deployment workflows.
              </p>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-[var(--text-soft)]">
                Now I apply that perspective to Quality Assurance, focusing on
                finding defects earlier, improving test coverage and building
                reliable automation.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <SectionHeading number="08" title={t("openSourceTitle")} />
          <div className="flex flex-col gap-6 rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                GitHub
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[var(--text)]">
                Fabianooliveirasilva
              </h3>
            </div>
            <a
              href="https://github.com/Fabianooliveirasilva"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
            >
              VIEW PROFILE <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[var(--bg-alt)]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeading number="09" title={t("connectTitle")} />
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl text-xl leading-8 text-[var(--text-soft)] md:text-2xl">
                {t("openTo")}
              </p>
              <a
                href="https://linkedin.com/in/fabiano-silva-oliveira"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
              >
                LINKEDIN <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
        >
          <SectionHeading number="10" title={t("contactTitle")} />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <p className="max-w-2xl text-xl leading-8 text-[var(--text-soft)] md:text-2xl">
              I&apos;m open to international opportunities, remote QA roles,
              test automation projects and collaborations involving web
              development and software quality.
            </p>
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--card)] p-6">
              <div className="space-y-5 text-sm text-[var(--text-soft)]">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Email
                  </p>
                  <a
                    href="mailto:o_fabiano@hotmail.com"
                    className="mt-2 inline-block text-lg text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    o_fabiano@hotmail.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Phone
                  </p>
                  <p className="mt-2 text-lg text-[var(--text)]">
                    +55 11 94222-9494
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:o_fabiano@hotmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#fff8f8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
                >
                  {t("getInTouch")} <span aria-hidden="true">→</span>
                </a>
                <a
                  href="https://wa.me/5511942229494"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  WHATSAPP <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://linkedin.com/in/fabiano-silva-oliveira"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  LINKEDIN <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com/Fabianooliveirasilva"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  GITHUB <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
