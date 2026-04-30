import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Projects from '../components/Projects/Projects'
import Demos from '../components/Demos/Demos'
import Simulator from '../components/Simulator/Simulator'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Services />
      <Projects />
      <Demos />
      <Simulator />
      <About />
      <Contact />
      <footer className="home__footer">
        <p>© {new Date().getFullYear()} Isis · Desarrolladora de Software · </p>
      </footer>
    </main>
  )
}
