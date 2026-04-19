import { useLang, useTheme } from "../App";
import { SectionTitle } from "./about-section";
import { motion } from "motion/react";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { ExperienceItem } from "./translations";

export function ExperienceSection() {
  const { t } = useLang();
  const { isDark } = useTheme();
  const c = isDark ? "#64ffda" : "#0d9488";

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.experience.title} />
        <div className="mt-12 space-y-6">
          {(t.experience.items as ExperienceItem[]).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group p-6 sm:p-7 rounded-2xl transition-all ${
                isDark
                  ? "bg-white/[0.03] border border-white/5 hover:border-[#64ffda]/15"
                  : "bg-white/88 border border-slate-200/80 hover:border-[#0d9488]/35 shadow-[0_16px_36px_-24px_rgba(15,23,42,0.55)]"
              }`}
            >
              <div className="flex items-start gap-4 mb-5">
                {item.logo ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="shrink-0 hidden sm:block">
                    <div
                      className={`w-14 h-14 rounded-xl p-2 flex items-center justify-center overflow-hidden transition-all ${
                        isDark ? "bg-white/10 group-hover:bg-white/15" : "bg-slate-100 group-hover:bg-slate-200"
                      }`}
                    >
                      <ImageWithFallback src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                    </div>
                  </a>
                ) : (
                  <div
                    className="hidden sm:flex shrink-0 w-14 h-14 rounded-xl items-center justify-center"
                    style={{ background: isDark ? "rgba(100,255,218,0.08)" : "rgba(13,148,136,0.06)" }}
                  >
                    <span style={{ fontSize: "1.2rem", fontWeight: 700, color: c }}>
                      {item.company.charAt(0)}
                    </span>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className={isDark ? "text-white" : "text-slate-900"} style={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.3 }}>
                        {item.company}
                      </h3>
                      <p className="mt-1" style={{ fontSize: "0.9rem", fontWeight: 500, color: c }}>
                        {item.role}
                      </p>
                    </div>
                    {item.url && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-gray-600 hover:text-[#64ffda]" : "text-slate-400 hover:text-[#0d9488]"} transition-colors shrink-0 mt-0.5`}>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <div className={`flex flex-wrap gap-4 mt-2 ${isDark ? "text-gray-500" : "text-slate-500"}`} style={{ fontSize: "0.8rem" }}>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} /> {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} /> {item.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className={isDark ? "text-gray-400" : "text-slate-600"} style={{ fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                {item.description}
              </p>

              <ul className="space-y-2.5 mb-5">
                {item.tasks.map((task, j) => (
                  <li key={j} className={`flex gap-3 ${isDark ? "text-gray-400" : "text-slate-600"}`} style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
                    <span className="shrink-0 mt-[0.45rem] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c }} />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: c,
                      background: isDark ? "rgba(100,255,218,0.06)" : "rgba(13,148,136,0.06)",
                      border: `1px solid ${isDark ? "rgba(100,255,218,0.12)" : "rgba(13,148,136,0.15)"}`,
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
