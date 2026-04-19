import { useLang, useTheme } from "../App";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Languages, Heart } from "lucide-react";

export function AboutSection() {
  const { t } = useLang();
  const { isDark } = useTheme();

  const info = [
    { icon: MapPin, label: t.about.location },
    { icon: Mail, label: t.about.email },
    { icon: Phone, label: t.about.phone },
    { icon: Languages, label: t.about.languages },
    { icon: Heart, label: t.about.interests },
  ];

  const c = isDark ? "#64ffda" : "#0d9488";

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.about.title} />

        <div className="grid md:grid-cols-5 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6"
          >
            <p className={isDark ? "text-gray-300" : "text-gray-700"} style={{ fontSize: "0.95rem", lineHeight: 1.9 }}>
              {t.about.p1}
            </p>
            <p className={isDark ? "text-gray-400" : "text-gray-600"} style={{ fontSize: "0.95rem", lineHeight: 1.9 }}>
              {t.about.p2}
            </p>
          </motion.div>

          <div className="md:col-span-2 space-y-3">
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-center gap-3 p-3.5 rounded-xl backdrop-blur-sm transition-all ${
                  isDark
                    ? "bg-white/[0.04] border border-white/5 hover:border-[#64ffda]/20"
                    : "bg-white border border-gray-200 hover:border-[#0d9488]/30 shadow-sm"
                }`}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: isDark ? "rgba(100,255,218,0.1)" : "rgba(13,148,136,0.08)" }}
                >
                  <item.icon size={16} style={{ color: c }} />
                </div>
                <span className={isDark ? "text-gray-300" : "text-gray-700"} style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ title }: { title: string }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-2"
    >
      <h2
        className={`shrink-0 ${isDark ? "text-white" : "text-gray-900"}`}
        style={{ fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      <div
        className="flex-1 h-px"
        style={{
          background: isDark
            ? "linear-gradient(to right, rgba(100,255,218,0.3), transparent)"
            : "linear-gradient(to right, rgba(13,148,136,0.3), transparent)",
        }}
      />
    </motion.div>
  );
}
