import Nav from "./Nav"
import { motion } from 'framer-motion';

const skills = [
  { tag: "Lenguajes", name: "JavaScript, PHP, TypeScript, HTML, CSS" },
  { tag: "Backend", name: "Node.js" },
  { tag: "Frontend", name: "React" },
  { tag: "Bases de datos", name: "SQL Server, MySQL" },
  { tag: "Escritorio", name: "Electron" },
  { tag: "Móvil", name: "Cordova" },
  { tag: "Control de versiones", name: "Git" },
  { tag: "APIs", name: "REST, integración de servicios" },
  { tag: "Herramientas", name: "Vite, npm" },
]

export function Habilidades() {
  return (
    <>
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}>
        <Nav />
        <section id="skills">
          <div className="page-content">
            <p className="section-label">Habilidades</p>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div key={i} className="skill-cell">
                  <span className="skill-tag">{skill.tag}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
