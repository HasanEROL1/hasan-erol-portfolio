import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Theme from "./components/theme"
import Home from "./pages/home"
import Projects from './pages/projects/index';



const App = () => {

  return (

    <div className="min-h-screen bg-wite dark:bg-bg-dark text-slate-900 dark:text-white transition-colors duration-300  overflow-x-hidden">
      <div className="top-4 right-4 fixed z-50">
        <Theme />
      </div>
      <Header />
      <div className="flex pt-16">
        <Sidebar />

        <main className="flex-1 ml-20 p-8 md:p-16 lg:p-24 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />

          </Routes>
        </main>
      </div>


    </div>


  )
}

export default App
