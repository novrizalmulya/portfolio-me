import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavbarComp from './components/NavbarComp'
import HeroComp from './components/HeroComp'
import AboutComp from './components/AboutComp'
import SkillsComp from './components/SkillsComp'
import EducationComp from './components/EducationComp'
import ProjectsComp from './components/ProjectsComp'
import ContactComp from './components/ContactComp'
import FooterComp from './components/FooterComp'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <div className="relative min-h-screen">
      <NavbarComp />
      <main>
        <HeroComp />
        <AboutComp />
        <SkillsComp />
        <EducationComp />
        <ProjectsComp />
        <ContactComp />
      </main>
      <FooterComp />
    </div>
  )
}

