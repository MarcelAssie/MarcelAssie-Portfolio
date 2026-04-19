import { useState, useEffect, createContext, useContext } from "react";
import { translations, type Lang } from "./components/translations";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { EducationSection } from "./components/education-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { CVSection } from "./components/cv-section";
import { ContactSection } from "./components/contact-section";
import { FooterSection } from "./components/footer-section";

type Theme = "dark" | "light";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.fr;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
};

export const LangContext = createContext<LangContextType>({
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
});

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
});

export const useLang = () => useContext(LangContext);
export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeSection, setActiveSection] = useState("home");
  const t = translations[lang];
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects", "skills", "cv", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
        <div
          className={`min-h-screen transition-colors duration-500 ${
            isDark ? "bg-[#0a0a0f] text-white" : "bg-[#f3f6fb] text-slate-800"
          }`}
        >
          <Navbar activeSection={activeSection} />
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <CVSection />
          <ContactSection />
          <FooterSection />
        </div>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
}
