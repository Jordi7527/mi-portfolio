import Nav from "./Nav"
import { ApiPost } from "../apis/ApiPost"

// Definir el tipo de los datos
interface formData {
  name: string;
  email: string;
  message: string;
}
// Función para manejar el submit
const handlesubmit = async (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const data: formData = { 
    name: (form.querySelector('#name') as HTMLInputElement).value,
    email: (form.querySelector('#email') as HTMLInputElement).value,
    message: (form.querySelector('#message') as HTMLTextAreaElement).value,
  }
  try {
    const response = await ApiPost('https://api.example.com/contact', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  } 
}
const form = document.querySelector('.contact-form') as HTMLFormElement;
if (form) {
  form.addEventListener('submit', handlesubmit);
} 



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
