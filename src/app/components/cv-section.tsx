import { useLang, useTheme } from "../App";
import { SectionTitle } from "./about-section";
import { motion } from "motion/react";
import { FileDown, ExternalLink, Code } from "lucide-react";

export function CVSection() {
  const { lang, t } = useLang();
  const { isDark } = useTheme();
  const c = isDark ? "#64ffda" : "#0d9488";

  const cvs = [
    {
      title: lang === "fr" ? "Curriculum Vitae (Version française)" : "Curriculum Vitae (French version)",
      href: "/src/assets/Marcel_Assie_CV_FR.pdf",
      primary: true,
    },
    {
      title: lang === "fr" ? "Curriculum Vitae (English version)" : "Curriculum Vitae (English version)",
      href: "/src/assets/Marcel_Assie_CV_EN.pdf",
      primary: false,
    },
  ];

  const codeSourceUrl = "https://github.com/marcel-assie/portfolio";

  return (
    <section id="cv" className={`py-28 px-6 ${isDark ? "bg-white/[0.01]" : "bg-gray-50/50"}`}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.cv.title} />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {cvs.map((cv, i) => (
            <motion.a
              key={i}
              href={cv.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border transition-all ${
                cv.primary
                  ? isDark
                    ? "bg-[#64ffda]/5 border-[#64ffda]/20 hover:border-[#64ffda]/40"
                    : "bg-[#0d9488]/5 border-[#0d9488]/20 hover:border-[#0d9488]/40"
                  : isDark
                  ? "bg-white/[0.03] border-white/5 hover:border-[#64ffda]/20"
                  : "bg-white border-gray-200 hover:border-[#0d9488]/30 shadow-sm"
              }`}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{
                  background: cv.primary
                    ? isDark ? "rgba(100,255,218,0.15)" : "rgba(13,148,136,0.12)"
                    : isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                }}
              >
                <FileDown size={24} style={{ color: c }} />
              </div>
              <h3
                className={`text-center ${isDark ? "text-white" : "text-gray-900"}`}
                style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.4 }}
              >
                {cv.title}
              </h3>
              <span
                className="inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ fontSize: "0.8rem", color: c }}
              >
                <ExternalLink size={13} />
                {lang === "fr" ? "Ouvrir" : "Open"}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-8 text-center ${isDark ? "text-gray-500" : "text-gray-500"}`}
          style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
        >
          {lang === "fr"
            ? "Les liens ci-dessus contiennent mon CV. Vous pouvez également consulter le code source de ce CV "
            : "The above links contain my CV. Also, you can check out the code for this CV "}
          <a
            href={codeSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
            style={{ color: c }}
          >
            <Code size={13} />
            {lang === "fr" ? "ici" : "here"}
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
