import { Link } from "react-router-dom"
import Nav from './Nav'

export function Home() {
  return (
    <>
      <Nav />
      <section id="hero">
        <p className="hero-label">Desarrollador Fullstack</p>
        <h1>Hola, soy <em>Jordi Díaz</em>.</h1>
        <p className="hero-sub">
          Desarrollador Fullstack. Construyo aplicaciones web de principio a fin, donde cada decisión técnica está al servicio de una experiencia que combina diseño, rendimiento y solidez.
        </p>
        <div className="hero-cta">
          <Link to="/proyectos" className="btn btn-primary">Ver proyectos</Link>
          <Link to="/contacto" className="btn btn-ghost">Contactar</Link>
        </div>
        <div className="hero-scroll">
          <span className="hero-scroll-line"></span>
          <span className="hero-scroll-text">Scroll</span>
        </div>
      </section>
    </>
  )
}
