import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { SobreMi } from './pages/SobreMi'
import { Trabajos } from './pages/Trabajos'
import { Habilidades } from './pages/Habilidades'
import { Contacto } from './pages/Contacto'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='/habilidades' element={<Habilidades />}/>
        <Route path='/proyectos' element={<Trabajos />} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
  )
}
export default App
