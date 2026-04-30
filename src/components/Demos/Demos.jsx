import { motion } from 'framer-motion'
import './Demos.css'

const demos = [
  {
    title: 'Soluclicks',
    description: 'Sitio web para una agencia de mantenimiento.',
    url: 'https://soluclicks.netlify.app/',
    icon: '📱',
  },
  {
    title: 'La Brasa Urbana',
    description: 'Página web para un restaurante especializado en carnes.',
    url: 'https://brasaurb.netlify.app/',
    icon: '🍽️',
  },
  {
    title: 'Novashop',
    description: 'Tienda en línea para productos tecnológicos.',
    url: 'https://novashopsite.netlify.app/home.html',
    icon: '🛒',
  },
  {
    title: 'Distrito Barbería',
    description: 'Sitio web para una barbería con servicios de corte y aseo personal.',
    url: 'https://distribarber.netlify.app/',
    icon: '✂️',
  },
  {
    title: 'Flowtask',
    description: 'Plataforma para gestión de tareas y proyectos.',
    url: 'https://flowtaskline.netlify.app/',
    icon: '📋',
  },
  {
    title: 'Vibrafest',
    description: 'Sitio web para un festival de música y entretenimiento.',
    url: 'https://vibrafest.netlify.app/',
    icon: '🎉',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

export default function Demos() {
  return (
    <section className="demos" id="demos">
      <div className="container">
        <div className="demos__header">
          <span className="section-tag">Demos</span>
          <h2 className="section-title">Ejemplos de Sitios Web</h2>
          <p className="demos__intro">
            Aquí puedes ver algunos ejemplos de sitios web que he desarrollado. Estos son demos públicos para mostrar mi trabajo.
            Para proteger la información de mis clientes, algunos detalles pueden estar modificados.
          </p>
        </div>

        <motion.div
          className="demos__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {demos.map((demo, index) => (
            <motion.a
              key={demo.title}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="demo-card__icon">{demo.icon}</div>
              <h3 className="demo-card__title">{demo.title}</h3>
              <p className="demo-card__description">{demo.description}</p>
              <span className="demo-card__link">Ver demo →</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}