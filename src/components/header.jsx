import { Terminal } from "lucide-react"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className="fixed top-0 w-full h-16 z-40 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-md px-6 flex items-center">
      <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tighter dark:text-white uppercase">

        <Terminal size={22} className="text-blue-600" />
        <span>Hasan EROL<span className="text-blue-600">.dev</span></span></Link>

    </header>
  )
}

export default Header
