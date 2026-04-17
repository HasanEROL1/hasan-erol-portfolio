import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";

const Sidebar = () => {
  // Sidebar bileşeninin içinde:
  const [copied, setCopied] = useState(false);

  const copyMail = () => {
    navigator.clipboard.writeText("hasanerol89@gmail.com");
    setCopied(true);


    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <aside className="fixed top-16 left-0 w-16 md:w-20 h-[calc(100vh-64px)] border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-bg-dark flex flex-col items-center py-10 gap-8">
      <a href="https://github.com/HasanEROL1" target="_blank" className="text-slate-400 hover:text-blue-600 transition-all"><FaGithub size={24} /></a>
      <a href="https://linkedin.com/in/hasan-erol-59033ba6" target="_blank" className="text-slate-400 hover:text-blue-600 transition-all "><FaLinkedin size={24} /></a>
      <div className="relative group cursor-pointer" onClick={copyMail}>
        <div className={`transition-all duration-300 ${copied ? 'text-green-500 scale-120' : 'text-slate-400 hover:text-blue-600'}`}>
          {copied ? <FaCheck size={24} /> : <FaEnvelope size={24} />}
          <span className="absolute left-full ml-4 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {copied ? "Kopyalandı!" : "Maili Kopyala"}
          </span>
        </div>
      </div>

    </aside>
  )
}

export default Sidebar
