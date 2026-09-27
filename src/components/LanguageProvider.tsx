"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "pt" | "es";

type TranslationKey =
  | "work"
  | "skills"
  | "experience"
  | "about"
  | "contact"
  | "available"
  | "qa"
  | "automation"
  | "frontend"
  | "security"
  | "focused"
  | "quality"
  | "heroDescription"
  | "viewWork"
  | "requestCv"
  | "linkedin"
  | "remote"
  | "relocation"
  | "testSuite"
  | "live"
  | "apiTests"
  | "functionalTests"
  | "regressionTests"
  | "e2eAutomation"
  | "uiValidation"
  | "coverage"
  | "aboutTitle"
  | "aboutLead"
  | "aboutText1"
  | "aboutText2"
  | "aboutText3"
  | "skillsTitle"
  | "workTitle"
  | "qualityTitle"
  | "experienceTitle"
  | "educationTitle"
  | "positioningTitle"
  | "openSourceTitle"
  | "connectTitle"
  | "contactTitle"
  | "openTo"
  | "viewGithub"
  | "viewLive"
  | "stack"
  | "github"
  | "viewProfile"
  | "email"
  | "phone"
  | "getInTouch";

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    work: "Work", skills: "Skills", experience: "Experience", about: "About", contact: "Contact", available: "AVAILABLE FOR INTERNATIONAL OPPORTUNITIES", qa: "QA ENGINEER", automation: "TEST AUTOMATION", frontend: "FRONT-END", security: "CYBERSECURITY", focused: "focused on", quality: "software quality.", heroDescription: "I build reliable web experiences, design effective software tests, automate quality workflows and bring a front-end engineering background to software quality.", viewWork: "VIEW MY WORK", requestCv: "REQUEST CV", linkedin: "LINKEDIN", remote: "BRAZIL · OPEN TO REMOTE WORLDWIDE", relocation: "OPEN TO RELOCATION IN SPAIN", testSuite: "TEST SUITE", live: "LIVE", apiTests: "API tests", functionalTests: "Functional tests", regressionTests: "Regression tests", e2eAutomation: "E2E automation", uiValidation: "UI validation", coverage: "TEST COVERAGE", aboutTitle: "About", aboutLead: "Software quality, front-end thinking, secure delivery.", aboutText1: "Fabiano Oliveira Silva is a Brazilian technology professional with a background in web development and a current focus on Quality Assurance and test automation.", aboutText2: "He combines software testing knowledge with hands-on experience in front-end development, APIs, databases and modern web technologies.", aboutText3: "He also has postgraduate studies related to cybersecurity and is focused on building reliable, secure and maintainable digital products.", skillsTitle: "What I Work With", workTitle: "Selected Work", qualityTitle: "Quality Engineering", experienceTitle: "Experience", educationTitle: "Education", positioningTitle: "Professional Positioning", openSourceTitle: "Open Source / GitHub", connectTitle: "Let's Connect", contactTitle: "Let's Build Better Software.", openTo: "Open to international opportunities, remote roles and professional collaborations.", viewGithub: "VIEW GITHUB", viewLive: "VIEW LIVE", stack: "Stack", github: "GitHub", viewProfile: "VIEW PROFILE", email: "Email", phone: "Phone", getInTouch: "GET IN TOUCH",
  },
  pt: {
    work: "Projetos", skills: "Competências", experience: "Experiência", about: "Sobre", contact: "Contato", available: "DISPONÍVEL PARA OPORTUNIDADES INTERNACIONAIS", qa: "ENGENHARIA DE QA", automation: "AUTOMAÇÃO DE TESTES", frontend: "FRONT-END", security: "CIBERSEGURANÇA", focused: "focado em", quality: "qualidade de software.", heroDescription: "Construo experiências web confiáveis, elaboro testes eficientes, automatizo fluxos de qualidade e uso minha experiência em front-end para elevar a qualidade do software.", viewWork: "VER MEUS PROJETOS", requestCv: "SOLICITAR CV", linkedin: "LINKEDIN", remote: "BRASIL · DISPONÍVEL PARA TRABALHO REMOTO", relocation: "DISPONÍVEL PARA MUDANÇA PARA A ESPANHA", testSuite: "SUÍTE DE TESTES", live: "ATIVO", apiTests: "Testes de API", functionalTests: "Testes funcionais", regressionTests: "Testes de regressão", e2eAutomation: "Automação E2E", uiValidation: "Validação de interface", coverage: "COBERTURA DE TESTES", aboutTitle: "Sobre", aboutLead: "Qualidade de software, visão de front-end, entrega segura.", aboutText1: "Fabiano Oliveira Silva é um profissional brasileiro de tecnologia com experiência em desenvolvimento web e foco atual em Quality Assurance e automação de testes.", aboutText2: "Ele combina conhecimento em testes de software com experiência prática em front-end, APIs, bancos de dados e tecnologias web modernas.", aboutText3: "Também possui estudos de pós-graduação relacionados à cibersegurança e trabalha para construir produtos digitais confiáveis, seguros e sustentáveis.", skillsTitle: "Minhas Competências", workTitle: "Projetos Selecionados", qualityTitle: "Engenharia de Qualidade", experienceTitle: "Experiência", educationTitle: "Formação", positioningTitle: "Posicionamento Profissional", openSourceTitle: "Open Source / GitHub", connectTitle: "Vamos Conversar", contactTitle: "Vamos construir software melhor.", openTo: "Aberto a oportunidades internacionais, posições remotas e colaborações profissionais.", viewGithub: "VER NO GITHUB", viewLive: "VER ONLINE", stack: "Tecnologias", github: "GitHub", viewProfile: "VER PERFIL", email: "E-mail", phone: "Telefone", getInTouch: "ENTRAR EM CONTATO",
  },
  es: {
    work: "Proyectos", skills: "Habilidades", experience: "Experiencia", about: "Sobre mí", contact: "Contacto", available: "DISPONIBLE PARA OPORTUNIDADES INTERNACIONALES", qa: "INGENIERÍA DE QA", automation: "AUTOMATIZACIÓN DE PRUEBAS", frontend: "FRONT-END", security: "CIBERSEGURIDAD", focused: "enfocado en", quality: "la calidad del software.", heroDescription: "Creo experiencias web confiables, diseño pruebas eficaces, automatizo flujos de calidad y aporto mi experiencia front-end para mejorar el software.", viewWork: "VER MIS PROYECTOS", requestCv: "SOLICITAR CV", linkedin: "LINKEDIN", remote: "BRASIL · DISPONIBLE PARA TRABAJO REMOTO", relocation: "DISPONIBLE PARA REUBICACIÓN EN ESPAÑA", testSuite: "SUITE DE PRUEBAS", live: "ACTIVO", apiTests: "Pruebas de API", functionalTests: "Pruebas funcionales", regressionTests: "Pruebas de regresión", e2eAutomation: "Automatización E2E", uiValidation: "Validación de interfaz", coverage: "COBERTURA DE PRUEBAS", aboutTitle: "Sobre mí", aboutLead: "Calidad de software, visión front-end, entrega segura.", aboutText1: "Fabiano Oliveira Silva es un profesional brasileño de tecnología con experiencia en desarrollo web y enfoque actual en Quality Assurance y automatización de pruebas.", aboutText2: "Combina conocimientos de testing con experiencia práctica en front-end, APIs, bases de datos y tecnologías web modernas.", aboutText3: "También cuenta con estudios de posgrado relacionados con ciberseguridad y se enfoca en crear productos digitales confiables, seguros y mantenibles.", skillsTitle: "Mis Habilidades", workTitle: "Proyectos Seleccionados", qualityTitle: "Ingeniería de Calidad", experienceTitle: "Experiencia", educationTitle: "Formación", positioningTitle: "Posicionamiento Profesional", openSourceTitle: "Open Source / GitHub", connectTitle: "Conectemos", contactTitle: "Construyamos mejor software.", openTo: "Disponible para oportunidades internacionales, puestos remotos y colaboraciones profesionales.", viewGithub: "VER EN GITHUB", viewLive: "VER ONLINE", stack: "Tecnologías", github: "GitHub", viewProfile: "VER PERFIL", email: "Correo", phone: "Teléfono", getInTouch: "CONTACTAR",
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language") as Language | null;
    if (saved && saved in translations) setLanguage(saved);
  }, []);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : nextLanguage;
  }

  const value = useMemo(() => ({ language, setLanguage: changeLanguage, t: (key: TranslationKey) => translations[language][key] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
