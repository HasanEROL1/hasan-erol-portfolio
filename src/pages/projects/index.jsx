import { projectsData } from '../../data/projects';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub, } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">

        {/* Sayfa Başlığı */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase italic">
            Proje<span className="text-blue-600 not-italic">Vitrini</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg font-medium">
            TypeScript ve MERN Stack ile geliştirdiğim, modern mimariye sahip dijital çözümler.
          </p>
        </div>

        {/* Proje Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            /* KART BAŞLANGICI */
            <div
              key={project.id}
              className="group relative flex flex-col h-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              {/* Görsel Alanı */}
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-5 right-5">
                  <span className="px-4 py-1.5 text-[10px] font-black bg-blue-600 text-white rounded-full uppercase tracking-widest shadow-lg">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* İçerik Alanı */}
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack - Badge'ler */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-[11px] font-bold px-3 py-1 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Butonlar */}
                <div className="mt-auto flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="grow flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all active:scale-95"
                  >
                    <FaGithub size={16} /> Source Code
                  </a>
                  <button className="p-3.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl border border-slate-200 dark:border-slate-700 hover:text-blue-600 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
            /* KART BİTİŞİ */
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;