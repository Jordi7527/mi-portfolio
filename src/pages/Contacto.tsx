import Nav from "./Nav"
import { ApiPost } from "../apis/ApiPost"
import { motion } from 'framer-motion';
import type { FormEvent } from "react";

  // Definir el tipo de los datos
interface formData {
  name: string;
  email: string;
  message: string;
}



export function Contacto() {

// Función para manejar el submit
  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: formData = { 
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      message: (form.querySelector('#message') as HTMLTextAreaElement).value,
    }

    console.log(data);
    try {
  
      const URL = "https://server-portfolio-7y53.onrender.com/email";
      console.log('URL',URL)
      const response = await ApiPost(URL, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    } 
  }

  return (
    <>
    <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    >
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
            <form className="contact-form" onSubmit={handlesubmit}>
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
    </motion.div>  
    </>
  )
}
