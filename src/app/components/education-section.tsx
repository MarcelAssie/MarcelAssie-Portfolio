import { useLang, useTheme } from "../App";
import { SectionTitle } from "./about-section";
import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { EducationItem } from "./translations";

export function EducationSection() {
  const { t } = useLang();
  const { isDark } = useTheme();
  const c = isDark ? "#64ffda" : "#0d9488";

  return (
    <section id="education" className={`py-28 px-6 ${isDark ? "bg-white/[0.01]" : "bg-white/45"}`}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.education.title} />
        <div className="mt-12 space-y-0 relative">
          <div
            className="absolute left-5 top-2 bottom-2 w-px hidden md:block"
            style={{
              background: isDark
                ? "linear-gradient(to bottom, rgba(100,255,218,0.4), rgba(100,255,218,0.2), transparent)"
                : "linear-gradient(to bottom, rgba(13,148,136,0.45), rgba(56,189,248,0.28), transparent)",
            }}
          />

          {(t.education.items as EducationItem[]).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex gap-6 pb-8 last:pb-0"
            >
              <div
                className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-full z-10"
                style={{
                  background: isDark ? "rgba(100,255,218,0.1)" : "rgba(13,148,136,0.08)",
                  border: `1px solid ${isDark ? "rgba(100,255,218,0.3)" : "rgba(13,148,136,0.25)"}`,
                }}
              >
                <GraduationCap size={18} style={{ color: c }} />
              </div>

              <div
                className={`flex-1 p-6 rounded-xl transition-all group ${
                  isDark
                    ? "bg-white/[0.03] border border-white/5 hover:border-[#64ffda]/20"
                    : "bg-white/88 border border-slate-200/80 hover:border-[#0d9488]/35 shadow-[0_14px_35px_-24px_rgba(15,23,42,0.55)]"
                }`}
              >
                <div className="flex items-start gap-4">
                  {item.logo && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="shrink-0 hidden sm:block">
                      <div
                        className={`w-14 h-14 rounded-xl p-2 flex items-center justify-center overflow-hidden transition-all ${
                          isDark ? "bg-white/10 group-hover:bg-white/15" : "bg-slate-100 group-hover:bg-slate-200"
                        }`}
                      >
                        <ImageWithFallback src={item.logo} alt={item.school} className="w-full h-full object-contain" />
                      </div>
                    </a>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={isDark ? "text-white" : "text-slate-900"} style={{ fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4 }}>
                        {item.school}
                      </h3>
                      {item.url && (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-gray-600 hover:text-[#64ffda]" : "text-slate-400 hover:text-[#0d9488]"} transition-colors shrink-0 mt-0.5`}>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <p className="mt-1" style={{ fontSize: "0.9rem", color: c }}>
                      {item.degree}
                    </p>
                    <p className={isDark ? "text-gray-400" : "text-slate-600"} style={{ fontSize: "0.85rem", marginTop: "0.125rem" }}>
                      {item.spec}
                    </p>
                    <div className={`flex flex-wrap gap-4 mt-3 ${isDark ? "text-gray-500" : "text-slate-500"}`} style={{ fontSize: "0.8rem" }}>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} /> {item.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={12} /> {item.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
