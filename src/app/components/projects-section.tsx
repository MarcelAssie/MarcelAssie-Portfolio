import { useLang, useTheme } from "../App";
import { SectionTitle } from "./about-section";
import { motion } from "motion/react";
import { Github } from "lucide-react";
import { Globe } from "lucide-react";
export function ProjectsSection() {
  const { t } = useLang();
  const { isDark } = useTheme();
  const c = isDark ? "#64ffda" : "#0d9488";

  return (
    <section id="projects" className={`py-24 px-6 ${isDark ? "bg-white/[0.01]" : "bg-white/45"}`}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.projects.title} />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.items.map((p, i) => {
            const isKlassivoire = /klassivoire/i.test(p.name) || /klassivoire/i.test(p.url || "");

            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-5 rounded-xl transition-all group flex flex-col ${
                isDark
                  ? "bg-white/[0.03] border border-white/5 hover:border-[#64ffda]/20"
                  : "bg-white/88 border border-slate-200/80 hover:border-[#0d9488]/35 shadow-[0_14px_30px_-22px_rgba(15,23,42,0.5)]"
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h4
                  className={`flex-1 transition-colors ${isDark ? "text-white group-hover:text-[#64ffda]" : "text-slate-900 group-hover:text-[#0d9488]"}`}
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  {p.name}
                </h4>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? "text-gray-600 hover:text-[#64ffda]" : "text-slate-400 hover:text-[#0d9488]"} transition-colors shrink-0 mt-0.5`}
                    title={isKlassivoire ? p.name : `View ${p.name} on GitHub`}
                  >
                    {isKlassivoire ? <Globe size={16} /> : <Github size={16} />}
                  </a>
                )}
              </div>
              <p className={`flex-1 mb-4 ${isDark ? "text-gray-400" : "text-slate-600"}`} style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full"
                    style={{
                      fontSize: "0.7rem",
                      color: c,
                      background: isDark ? "rgba(100,255,218,0.08)" : "rgba(13,148,136,0.06)",
                      border: `1px solid ${isDark ? "rgba(100,255,218,0.15)" : "rgba(13,148,136,0.15)"}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
