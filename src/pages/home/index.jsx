import { ChevronRight, ShieldCheck, Code2, Rocket } from 'lucide-react';
import { useState } from 'react';
import { FaCheck, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate()

  const copyMail = () => {
    navigator.clipboard.writeText("hasanerol89@gmail.com");
    setCopied(true);


    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Üst Karşılama */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
        <ShieldCheck size={14} /> Hasan.Dev — Portfolyoya Hoş Geldiniz
      </div>

      {/* Ana Başlık  */}
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-slate-100 leading-[1.1] mb-8 tracking-tighter ">
        İhtiyacınıza Uygun Dijital Çözümler <br />
        <span className="text-blue-600">Modern Teknolojilerle</span> İnşa Edilir.
      </h1>

      {/* Alt Metin */}
      <p className="text-lg md:text-xl text-slate-700 dark:text-slate-400 max-w-2xl leading-relaxed mb-12 font-medium">
        Ben bir <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4">Frontend Developer</span> olarak,
        kullanıcı deneyimini (UX) ön planda tutan, hızlı, güvenilir ve modern web arayüzleri geliştiriyorum.
        En güncel stack’leri kullanarak işinizi dijital dünyada bir adım öne taşıyorum.
      </p>

      {/* Hizmet Odaklı Özellikler  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <Code2 className="text-blue-600 shrink-0" size={24} />
          <div>
            <h3 className="font-bold dark:text-white text-sm uppercase tracking-wider">Modern Stack</h3>
            <p className="text-xs text-slate-700 dark:text-slate-400  font-medium">React, Tailwind v4 ve TypeScript ile sürdürülebilir kod mimarisi.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <Rocket className="text-blue-600 shrink-0" size={24} />
          <div>
            <h3 className="font-bold dark:text-white text-sm uppercase tracking-wider">Performans Odaklı</h3>
            <p className="text-xs text-slate-700 font-medium  dark:text-slate-400 ">Google Lighthouse standartlarında yüksek hızlı sayfa yüklemeleri.</p>
          </div>
        </div>
      </div>

      {/* Aksiyon Butonları */}
      <div className="flex flex-wrap items-center gap-10">
        <button onClick={() => navigate("/projects")}
          className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 cursor-pointer">
          PROJELERİ İNCELE <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>


        <div className="relative group flex items-center gap-3 px-10 py-4 rounded-xl bg-slate-500 hover:bg-dark:bg-red-500 text-slate-900 dark:text-white  font-bold shadow-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all shadow-slate-200/50 dark:shadow-none cursor-pointer border border-slate-200 dark:border-slate-800" onClick={copyMail}>

          <span className={`text-lg font-bold transition-all duration-300 ${copied ? 'text-green-500 scale-125' : 'text-slate-200 dark:text-slate-300 group-hover:text-blue-600'}`}>
            Hemen iletişime geç
          </span>
          <div className={`flex items-center justify-center transition-all duration-300 ${copied ? 'text-green-500 scale-110' : 'text-slate-400 group-hover:text-blue-600'}`}>
            {copied ? <FaCheck size={18} /> : <FaEnvelope size={18} />}
          </div>

          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-slate-700 shadow-2xl">
            {copied ? "Kopyalandı" : "Tıkla Kopyala"}
          </div>
        </div>
      </div>

    </div >
  );
}