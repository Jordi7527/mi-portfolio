import { Routes, Route, useLocation} from 'react-router-dom'
import { Home } from './pages/Home'
import { SobreMi } from './pages/SobreMi'
import { Trabajos } from './pages/Trabajos'
import { Habilidades } from './pages/Habilidades'
import { Contacto } from './pages/Contacto'
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='/habilidades' element={<Habilidades />}/>
        <Route path='/proyectos' element={<Trabajos />} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
    </AnimatePresence>  
  )
}
export default App
