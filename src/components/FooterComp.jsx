/* eslint-disable no-unused-vars */
import { FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi'

const name = "Novrizal"
const title = "Frontend Developer"
const github = "https://github.com/novrizalmulya";
const linkedin = "https://www.linkedin.com/in/novrizal-mulya-6b3531330/";
const instagram = "https://instagram.com/novrizall._";

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FiGithub, href: github, label: 'GitHub' },
  { icon: FiLinkedin, href: linkedin, label: 'LinkedIn' },
  { icon: FiInstagram, href: instagram, label: 'Instagram' },
]

export default function FooterComp() {
  return (
    <footer style={{ backgroundColor: 'var(--color-ink-900)', color: 'var(--color-cream-100)' }}>
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-2xl mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream-100)' }}>
              {name}
              <span style={{ color: 'var(--color-accent)' }}>.</span>
            </p>
            <p className="text-sm"
              style={{ color: 'var(--color-ink-300)' }}>
              {title}
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 flex items-center justify-center rounded-full border transition-all"
                style={{
                  borderColor: 'rgba(250,247,240,0.15)', color: 'var(--color-ink-300)',}}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}