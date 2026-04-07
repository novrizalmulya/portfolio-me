import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'education', href: '#education' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export default function NavbarComp() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md border-b border-ink-900/10 shadow-sm'
          : 'bg-transparent'}`}>
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink-900)' }} className="text-xl font-semibold tracking-tight transition-colors hover:opacity-80">
          novr<span style={{ color: 'var(--color-accent)' }}>izal</span>.
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={(e) => { e.preventDefault(); handleNavClick(href) }} className="relative px-4 py-2 text-sm font-medium transition-colors group"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: active === href.replace('#', '')
                    ? 'var(--color-ink-900)'
                    : 'var(--color-ink-500)',}}>
                {label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-transform duration-300"
                  style={{
                    backgroundColor: 'var(--color-accent)', transform: active === href.replace('#', '') ? 'scaleX(1)' : 'scaleX(0)',
                  }}/>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:flex btn-primary text-xs py-2 px-4">
            Contact Me
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg transition-colors" style={{ color: 'var(--color-ink-900)' }}>
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div
          className="border-b px-6 pb-6"
          style={{ backgroundColor: 'var(--color-cream-100)', borderColor: 'rgba(26,26,26,0.08)' }}>
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={(e) => { e.preventDefault(); handleNavClick(href) }} className="block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors" style={{
                    backgroundColor: active === href.replace('#', '') ? 'var(--color-ink-900)' : 'transparent',
                    color: active === href.replace('#', '') ? 'var(--color-cream-50)' : 'var(--color-ink-700)',
                  }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary w-full justify-center mt-4 text-sm">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  )
}