import { useState } from "react";
import { useLang, useTheme } from "../App";
import { SectionTitle } from "./about-section";
import { motion } from "motion/react";
import { Send, CheckCircle, Linkedin, Github, Mail } from "lucide-react";

export function ContactSection() {
  const { t } = useLang();
  const { isDark } = useTheme();
  const [sent, setSent] = useState(false);
  const c = isDark ? "#64ffda" : "#0d9488";
  const submitText = sent ? t.contact.sent || "Message envoyé !" : t.contact.send;
  const SubmitIcon = sent ? CheckCircle : Send;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojywpek", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSent(true); // Affiche le bouton de succès
        form.reset(); // Vide les champs du formulaire
        setTimeout(() => setSent(false), 3000); // Remet le bouton normal après 3s
      } else {
        alert("Oups ! Une erreur est survenue lors de l'envoi de votre message.");
      }
    } catch (error) {
      alert("Erreur de connexion. Veuillez réessayer plus tard.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.contact.title} />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className={isDark ? "text-gray-400" : "text-slate-600"} style={{ fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              {t.contact.subtitle}
            </p>

            <div className="space-y-4">
              <a
                href="mailto:marcelassie2k@gmail.com"
                className={`flex items-center gap-3 transition-colors ${isDark ? "text-gray-300 hover:text-[#64ffda]" : "text-slate-700 hover:text-[#0d9488]"}`}
                style={{ fontSize: "0.9rem" }}
              >
                <Mail size={18} style={{ color: c }} />
                marcelassie2k@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/marcel-assie"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition-colors ${isDark ? "text-gray-300 hover:text-[#64ffda]" : "text-slate-700 hover:text-[#0d9488]"}`}
                style={{ fontSize: "0.9rem" }}
              >
                <Linkedin size={18} style={{ color: c }} />
                LinkedIn
              </a>
              <a
                href="https://github.com/MarcelAssie/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition-colors ${isDark ? "text-gray-300 hover:text-[#64ffda]" : "text-slate-700 hover:text-[#0d9488]"}`}
                style={{ fontSize: "0.9rem" }}
              >
                <Github size={18} style={{ color: c }} />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className={`block mb-1.5 ${isDark ? "text-gray-400" : "text-slate-600"}`} style={{ fontSize: "0.85rem" }}>
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                name="name" // Ajout de l'attribut name
                required
                className={`w-full px-4 py-3 rounded-lg transition-all focus:outline-none ${
                  isDark
                    ? "bg-white/[0.05] border border-white/10 text-white placeholder-gray-600 focus:border-[#64ffda]/40"
                    : "bg-white/85 border border-slate-200/80 text-slate-900 placeholder-slate-400 focus:border-[#0d9488]/45"
                }`}
                style={{ fontSize: "0.9rem", boxShadow: isDark ? "none" : "0 10px 30px -22px rgba(15,23,42,0.45)" }}
              />
            </div>
            <div>
              <label className={`block mb-1.5 ${isDark ? "text-gray-400" : "text-slate-600"}`} style={{ fontSize: "0.85rem" }}>
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                name="email" // Ajout de l'attribut name
                required
                className={`w-full px-4 py-3 rounded-lg transition-all focus:outline-none ${
                  isDark
                    ? "bg-white/[0.05] border border-white/10 text-white placeholder-gray-600 focus:border-[#64ffda]/40"
                    : "bg-white/85 border border-slate-200/80 text-slate-900 placeholder-slate-400 focus:border-[#0d9488]/45"
                }`}
                style={{ fontSize: "0.9rem", boxShadow: isDark ? "none" : "0 10px 30px -22px rgba(15,23,42,0.45)" }}
              />
            </div>
            <div>
              <label className={`block mb-1.5 ${isDark ? "text-gray-400" : "text-slate-600"}`} style={{ fontSize: "0.85rem" }}>
                {t.contact.messageLabel}
              </label>
              <textarea
                name="message" // Ajout de l'attribut name
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg resize-none transition-all focus:outline-none ${
                  isDark
                    ? "bg-white/[0.05] border border-white/10 text-white placeholder-gray-600 focus:border-[#64ffda]/40"
                    : "bg-white/85 border border-slate-200/80 text-slate-900 placeholder-slate-400 focus:border-[#0d9488]/45"
                }`}
                style={{ fontSize: "0.9rem", boxShadow: isDark ? "none" : "0 10px 30px -22px rgba(15,23,42,0.45)" }}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all"
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: isDark ? "#0a0a0f" : "#ffffff",
                background: c,
                boxShadow: isDark ? "none" : "0 14px 30px -18px rgba(13,148,136,0.55)",
              }}
            >
              <SubmitIcon size={18} />
              <span key={sent ? "sent" : "send"}>{submitText}</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}