export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const expertise = [
  {
    number: "01",
    title: "Software Testing",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Test Cases",
      "Bug Reporting",
      "Test Documentation",
      "SDLC",
      "STLC",
      "Agile / Scrum / Kanban",
    ],
  },
  {
    number: "02",
    title: "Test Automation",
    items: [
      "Cypress",
      "Selenium",
      "Playwright",
      "Python",
      "JavaScript",
      "TypeScript",
      "E2E Testing",
      "UI Automation",
    ],
  },
  {
    number: "03",
    title: "API & Data",
    items: ["Postman", "REST APIs", "API Testing", "JSON", "SQL", "MySQL", "MongoDB"],
  },
  {
    number: "04",
    title: "Front-End",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "Webpack",
    ],
  },
  {
    number: "05",
    title: "Development",
    items: ["Node.js", "Express.js", "Git", "GitHub", "REST APIs", "Linux", "Windows"],
  },
  {
    number: "06",
    title: "Cybersecurity",
    items: [
      "Cybersecurity fundamentals",
      "Web Security",
      "Security awareness",
      "Secure development concepts",
    ],
  },
] as const;

export const projects = [
  {
    number: "01",
    name: "BECO DO CAO",
    category: "Front-End / Web Development",
    description:
      "Responsive landing page project focused on modern UI, responsive design and user experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/Fabianooliveirasilva/landing_page_beco_do_cau",
    demo: "#",
    imageLabel: "Landing page concept",
  },
] as const;

export const qualityCases = [
  { number: "01", title: "API Test Automation", status: "Coming soon" },
  { number: "02", title: "Web E2E Automation", status: "Coming soon" },
  { number: "03", title: "Regression Test Suite", status: "Coming soon" },
  { number: "04", title: "UI Test Automation", status: "Coming soon" },
] as const;

export const experience = [
  {
    period: "2026 — PRESENT",
    role: "QA / SOFTWARE TESTING",
    company: "Freelance / Independent",
    focus: [
      "Manual testing",
      "API testing",
      "Test automation",
      "Test documentation",
      "Bug reporting",
      "QA workflows",
    ],
  },
  {
    period: "2025 — 2026",
    role: "FRONT-END DEVELOPER",
    company: "Freelance / Independent",
    focus: [
      "Responsive interfaces",
      "HTML/CSS/JavaScript",
      "React / Vue",
      "APIs",
      "Git/GitHub",
      "Modern web development",
    ],
  },
] as const;

export const education = [
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Cruzeiro do Sul",
    period: "2018 — 2020",
    secondary: false,
  },
  {
    title: "Pós-graduação / MBA em Informática",
    institution: "Universidade Cruzeiro do Sul",
    period: "Additional postgraduate study",
    secondary: false,
  },
  {
    title: "Pós-graduação em Cybersecurity",
    institution: "Additional study",
    period: "Professional specialization",
    secondary: false,
  },
  {
    title: "Eletricista Instalador",
    institution: "SENAI",
    period: "Comandos Elétricos · Eletricista Montador · Eletricista Força e Controle",
    secondary: true,
  },
] as const;

export const footerLinks = [
  { label: "Portfolio", href: "#top" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "LinkedIn", href: "https://linkedin.com/in/fabiano-silva-oliveira" },
  { label: "GitHub", href: "https://github.com/Fabianooliveirasilva" },
] as const;
