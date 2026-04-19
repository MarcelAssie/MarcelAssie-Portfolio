import { useLang, useTheme } from "../App";
import { Linkedin, Github, Mail } from "lucide-react";

export function FooterSection() {
  const { t } = useLang();
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 px-6 border-t ${isDark ? "border-white/5" : "border-gray-200"}`}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={isDark ? "text-gray-500" : "text-gray-400"} style={{ fontSize: "0.8rem" }}>
          &copy; 2026 Marcel ASSIE. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:marcelassie2k@gmail.com" className={`${isDark ? "text-gray-500 hover:text-[#64ffda]" : "text-gray-400 hover:text-[#0d9488]"} transition-colors`}>
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/marcel-assie" target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-gray-500 hover:text-[#64ffda]" : "text-gray-400 hover:text-[#0d9488]"} transition-colors`}>
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/marcel-assie" target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-gray-500 hover:text-[#64ffda]" : "text-gray-400 hover:text-[#0d9488]"} transition-colors`}>
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
