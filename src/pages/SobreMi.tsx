import { Link } from "react-router-dom"
import Nav from './Nav'

export function SobreMi() {
  return (
    <>
      <Nav />
      <section id="about">
        <div className="page-content">
          <p className="section-label">Sobre mí</p>
          <div className="about-grid">
            <div>
              <span className="about-num">01</span>
            </div>
            <div className="about-text">
              <h2>Desarrollador con enfoque en diseño</h2>
              <p>
                Me dedico a crear sitios web y aplicaciones que sean a la vez 
                visualmente atractivas y fáciles de usar. Creo en la simplicidad 
                y en que cada pixel tiene un propósito.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Cuando no estoy codificando, probablemente estoy explorando 
                nuevas tecnologías o disfrutando de un buen café.
              </p>
              <Link to="/contacto" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Hablemos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
