import { useLang, useTheme } from "../App";
import { SectionTitle } from "./about-section";
import { motion } from "motion/react";
import { Code, Server, BookMarked, Map, Users } from "lucide-react";

const icons = [Code, Server, BookMarked, Map, Users];

export function SkillsSection() {
  const { t } = useLang();
  const { isDark } = useTheme();
  const c = isDark ? "#64ffda" : "#0d9488";

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.skills.title} />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((cat, i) => {
            const Icon = icons[i] || Code;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-5 rounded-xl transition-all ${
                  isDark
                    ? "bg-white/[0.03] border border-white/5 hover:border-[#64ffda]/20"
                    : "bg-white border border-gray-200 hover:border-[#0d9488]/30 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={18} style={{ color: c }} />
                  <h3 className={isDark ? "text-white" : "text-gray-900"} style={{ fontSize: "1rem", fontWeight: 600 }}>
                    {cat.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 rounded-lg cursor-default transition-all ${
                        isDark
                          ? "bg-white/[0.05] text-gray-300 border border-white/5 hover:border-[#64ffda]/20 hover:text-[#64ffda]"
                          : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#0d9488]/30 hover:text-[#0d9488]"
                      }`}
                      style={{ fontSize: "0.82rem" }}
                    >
                      {item}
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
