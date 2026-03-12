import { NavLink } from "react-router-dom"
import '../css/nav.css'

function Nav() {
  return (
    <nav>
      <NavLink to="/" end className="nav-logo">dev.portfolio</NavLink>
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