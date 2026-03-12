import Nav from "./Nav"

export function Contacto() {
  return (
    <>
      <Nav />
      <section id="contact">
        <div className="page-content">
          <p className="section-label">Contacto</p>
          <div className="contact-grid">
            <div className="contact-info">
              <h2>¿Tienes un proyecto en mente?</h2>
              <p>
                Me encantaría conocer tu idea. Escríbeme y respondo lo antes posible.
              </p>
              <div className="contact-links">
                <a href="mailto:tu@email.com">tu@email.com</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="tu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" placeholder="Cuéntame sobre tu proyecto..." />
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
