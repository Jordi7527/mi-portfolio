import Nav from './Nav'

const projects = [
  {
    title: "Helpdesk para Vending",
    descripcion: "Desarrollé una aplicación web de helpdesk que facilita la comunicación entre una empresa de vending y su proveedor de soporte informático. La app permite registrar y gestionar incidencias técnicas de las máquinas de vending, enviando tickets directamente al equipo de soporte y permitiendo el seguimiento del estado de cada incidencia. Esto optimiza el tiempo de respuesta y mejora la continuidad del servicio."
  },
  {
    title: "App Móvil para Gardens",
    descripcion: "Diseñé una aplicación móvil para la gestión integral de gardens. La app permite realizar ventas, registrar compras de proveedores, y crear artículos de inventario, facilitando el control de todas las operaciones desde un solo lugar. Esta herramienta ayuda a los administradores a mantener actualizado el stock y agiliza las transacciones, mejorando la eficiencia del negocio."
  },
  {
    title: "Alta de Clientes en Gardens",
    descripcion: "Desarrollé una aplicación de escritorio para registrar nuevos clientes en la app móvil de gestión de gardens. Esta herramienta permite a los administradores crear y gestionar perfiles de clientes de forma rápida, sincronizando la información con la app móvil para mantener un registro centralizado y actualizado de los clientes."
  },
  {
    title: "Manual Interactivo de Instalación",
    descripcion: "Es una aplicación para Android desarrollada con Cordova y JavaScript. Sirve como manual de instalación para un programa de facturación destinado a Gardens."
  }
]

export function Trabajos() {
  return (
    <>
      <Nav />
      <section id="projects">
        <div className="page-content">
          <p className="section-label">Proyectos</p>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article key={i} className="project-card">
                <div>
                  <h3>{p.title}</h3>
                </div>
                <div>
                  <p>{p.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
