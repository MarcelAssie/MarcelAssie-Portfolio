import { useLang, useTheme } from "../App";
import { SectionTitle } from "./about-section";
import { motion } from "motion/react";

export function ProjectsSection() {
  const { t } = useLang();
  const { isDark } = useTheme();
  const c = isDark ? "#64ffda" : "#0d9488";

  return (
    <section id="projects" className={`py-24 px-6 ${isDark ? "bg-white/[0.01]" : "bg-gray-50/50"}`}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.projects.title} />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.items.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-5 rounded-xl transition-all group flex flex-col ${
                isDark
                  ? "bg-white/[0.03] border border-white/5 hover:border-[#64ffda]/20"
                  : "bg-white border border-gray-200 hover:border-[#0d9488]/30 shadow-sm"
              }`}
            >
              <h4
                className={`mb-3 transition-colors ${isDark ? "text-white group-hover:text-[#64ffda]" : "text-gray-900 group-hover:text-[#0d9488]"}`}
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                {p.name}
              </h4>
              <p className={`flex-1 mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`} style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
