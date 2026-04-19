import { useState } from "react";
import { useLang, useTheme } from "../App";
import { Globe, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar({ activeSection }: { activeSection: string }) {
  const { lang, setLang, t } = useLang();
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === "fr" ? "en" : "fr");
  };

  const langLabel = lang === "fr" ? "FR" : "EN";

  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "education", label: t.nav.education },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "cv", label: t.nav.cv },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const accent = "#64ffda";
  const accentLight = "#0d9488";
  const c = isDark ? accent : accentLight;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${
        isDark
          ? "bg-[#0a0a0f]/80 border-white/5"
          : "bg-white/70 border-slate-200/70 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.45)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("home")}
          className="tracking-widest"
          style={{ fontSize: "1.1rem", fontWeight: 700, color: c }}
        >
          M.A
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeSection === l.id
                  ? isDark
                    ? "text-[#64ffda] bg-[#64ffda]/10"
                    : "text-[#0d9488] bg-[#0d9488]/12"
                  : isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
              style={{ fontSize: "0.85rem" }}
            >
              {l.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-2 p-2 rounded-md transition-all ${
              isDark
                ? "text-gray-400 hover:text-[#64ffda] hover:bg-[#64ffda]/10"
                : "text-slate-500 hover:text-[#0d9488] hover:bg-slate-100/80"
            }`}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={toggleLang}
            className={`ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-all ${
              isDark ? "hover:bg-[#64ffda]/5" : "hover:bg-[#0d9488]/5"
            }`}
            style={{
              fontSize: "0.85rem",
              color: c,
              borderColor: isDark ? "rgba(100,255,218,0.3)" : "rgba(13,148,136,0.25)",
            }}
          >
            <Globe size={14} />
            {langLabel}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded transition-all ${
              isDark ? "text-gray-400" : "text-slate-500 hover:bg-slate-100/80"
            }`}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1 px-2 py-1 rounded border transition-all ${
              isDark ? "" : "hover:bg-[#0d9488]/5"
            }`}
            style={{
              fontSize: "0.8rem",
              color: c,
              borderColor: isDark ? "rgba(100,255,218,0.3)" : "rgba(13,148,136,0.25)",
            }}
          >
            <Globe size={13} />
            {langLabel}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-1 ${isDark ? "text-white" : "text-slate-800"}`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden backdrop-blur-xl border-b overflow-hidden transition-colors ${
              isDark
                ? "bg-[#0a0a0f]/95 border-white/5"
                : "bg-white/90 border-slate-200/70"
            }`}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className={`text-left px-3 py-2 rounded-md transition-all ${
                    activeSection === l.id
                      ? isDark
                        ? "text-[#64ffda] bg-[#64ffda]/10"
                        : "text-[#0d9488] bg-[#0d9488]/12"
                      : isDark
                      ? "text-gray-400 hover:text-white"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                  style={{ fontSize: "0.9rem" }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
