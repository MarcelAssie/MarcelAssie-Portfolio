import { useState, useEffect, useCallback } from "react";
import { useLang, useTheme } from "../App";
import { motion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const specialtiesFr = [
  "Geo Data Science",
  "Développement Géospatial",
  "Automatisation de Pipelines de Données",
  "Geo Data Analyst",
];

const specialtiesEn = [
  "Geo Data Science",
  "Geospatial Development",
  "Data Pipeline Automation",
  "Geo Data Analyst",
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      const next = currentWord.substring(0, displayText.length + 1);
      setDisplayText(next);
      if (next === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      const next = currentWord.substring(0, displayText.length - 1);
      setDisplayText(next);
      if (next === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayText, isDeleting, wordIndex, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  useEffect(() => {
    setDisplayText("");
    setWordIndex(0);
    setIsDeleting(false);
  }, [words]);

  return displayText;
}

export function HeroSection() {
  const { lang, t } = useLang();
  const { isDark } = useTheme();
  const specialties = lang === "fr" ? specialtiesFr : specialtiesEn;
  const typedText = useTypewriter(specialties, 70, 35, 2200);

  const c = isDark ? "#64ffda" : "#0d9488";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: isDark
            ? "linear-gradient(to bottom right, #0a0a0f, #0d1117, #0a0a0f)"
            : "radial-gradient(circle at top left, #ffffff 0%, #f3f6fb 45%, #eef3f9 100%)",
        }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: isDark ? "rgba(100,255,218,0.05)" : "rgba(13,148,136,0.08)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ background: isDark ? "rgba(124,58,237,0.05)" : "rgba(37,99,235,0.06)" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          opacity: isDark ? 0.03 : 0.04,
          backgroundImage: isDark
            ? "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)"
            : "linear-gradient(rgba(15,23,42,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left social bar (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-5 z-50"
      >
        <a href="mailto:marcelassie2k@gmail.com" className={`${isDark ? "text-gray-500 hover:text-[#64ffda]" : "text-slate-400 hover:text-[#0d9488]"} hover:-translate-y-1 transition-all`}>
          <Mail size={20} />
        </a>
        <a href="https://linkedin.com/in/marcel-assie" target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-gray-500 hover:text-[#64ffda]" : "text-slate-400 hover:text-[#0d9488]"} hover:-translate-y-1 transition-all`}>
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/MarcelAssie/" target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-gray-500 hover:text-[#64ffda]" : "text-slate-400 hover:text-[#0d9488]"} hover:-translate-y-1 transition-all`}>
          <Github size={20} />
        </a>
        <div className={`w-px h-24 ${isDark ? "bg-gray-600" : "bg-slate-300"}`} />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-5 tracking-[0.25em]"
          style={{ fontSize: "0.9rem", fontWeight: 500, color: c }}
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={isDark ? "text-white" : "text-slate-900"}
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1rem" }}
        >
          {t.hero.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={isDark ? "text-gray-400" : "text-slate-600"}
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 400, lineHeight: 1.4, marginBottom: "1.5rem" }}
        >
          {t.hero.title}
        </motion.h2>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10 h-8 flex items-center justify-center"
        >
          <span className={isDark ? "text-gray-500" : "text-slate-500"} style={{ fontSize: "0.95rem", marginRight: "0.375rem" }}>
            {lang === "fr" ? "Spécialisé en" : "Specialized in"}
          </span>
          <span style={{ fontSize: "0.95rem", fontWeight: 500, color: c }}>
            {typedText}
          </span>
          <span
            className="inline-block w-[2px] h-5 ml-0.5"
            style={{ backgroundColor: c, animation: "blink 1s step-end infinite" }}
          />
          <style>{`@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }`}</style>
        </motion.div>

        {/* Social icons mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex lg:hidden items-center justify-center gap-5 mb-8"
        >
          <a href="mailto:marcelassie2k@gmail.com" className={`${isDark ? "text-gray-500 hover:text-[#64ffda]" : "text-slate-400 hover:text-[#0d9488]"} transition-colors`}>
            <Mail size={20} />
          </a>
          <a href="https://linkedin.com/in/marcel-assie" target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-gray-500 hover:text-[#64ffda]" : "text-slate-400 hover:text-[#0d9488]"} transition-colors`}>
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/MarcelAssie/" target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-gray-500 hover:text-[#64ffda]" : "text-slate-400 hover:text-[#0d9488]"} transition-colors`}>
            <Github size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg flex items-center gap-2 transition-all"
            style={{
              fontSize: "0.9rem",
              color: c,
              background: isDark ? "rgba(100,255,218,0.1)" : "rgba(255,255,255,0.7)",
              border: `1px solid ${isDark ? "rgba(100,255,218,0.3)" : "rgba(13,148,136,0.25)"}`,
              boxShadow: isDark ? "none" : "0 10px 30px -20px rgba(15,23,42,0.5)",
            }}
          >
            {t.hero.cta}
            <ArrowDown size={16} />
          </button>
          <button
            onClick={() => document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg flex items-center gap-2 transition-all"
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: isDark ? "#0a0a0f" : "#ffffff",
              background: c,
              boxShadow: isDark ? "none" : "0 14px 30px -18px rgba(13,148,136,0.55)",
            }}
          >
            <Download size={16} />
            {t.hero.download}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className={`w-5 h-8 rounded-full border-2 flex justify-center pt-1.5 ${isDark ? "border-gray-600" : "border-slate-300"}`}>
          <div className={`w-1 h-2 rounded-full ${isDark ? "bg-gray-500" : "bg-slate-400"}`} />
        </div>
      </motion.div>
    </section>
  );
}
