import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabiano Oliveira Silva | QA Engineer | Test Automation | Front-End",
  description:
    "QA Engineer focused on software testing, test automation, API testing and web development. Open to international remote opportunities and relocation to Spain.",
  keywords: [
    "QA Engineer",
    "Junior QA Engineer",
    "QA Automation",
    "Software Tester",
    "Test Automation",
    "API Testing",
    "Cypress",
    "Playwright",
    "Selenium",
    "Postman",
    "Front-End Developer",
    "React Developer",
    "Cybersecurity",
    "Remote QA Engineer",
    "QA Engineer Spain",
    "QA Engineer Europe",
    "Brazilian QA Engineer",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fafaf7] text-[#111111]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
