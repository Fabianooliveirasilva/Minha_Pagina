"use client";

import { useLanguage, type Language } from "@/components/LanguageProvider";

const options: { value: Language; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "pt", label: "PT-BR" },
  { value: "es", label: "ES" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle" aria-label="Select language">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={language === option.value}
          className={language === option.value ? "is-active" : ""}
          onClick={() => setLanguage(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
