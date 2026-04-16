import { NavLink } from "react-router-dom"
import { useState } from "react";
import '../css/nav.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className={isOpen ? 'open' : ''}>
      <NavLink to="/" end className="nav-logo">dev.portfolio</NavLink>
        <button className="nav-toggle" aria-label="Abrir menú" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
        </button>
      <ul className="nav-links">
        <li><NavLink to="/sobremi">Sobre mí</NavLink></li>
        <li><NavLink to="/habilidades">Habilidades</NavLink></li>
        <li><NavLink to="/proyectos">Proyectos</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
    </nav>
  )
}
export default Nav