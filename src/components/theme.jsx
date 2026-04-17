import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Varsayılan karanlık
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all active:scale-90"
      title={darkMode ? "Aydınlık Mod" : "Karanlık Mod"}
    >
      {darkMode ? (
        <Sun size={18} className="text-yellow-400 animate-in zoom-in duration-300" />
      ) : (
        <Moon size={18} className="text-slate-600 animate-in zoom-in duration-300" />
      )}
    </button>
  );
}