/* eslint-disable no-unused-vars */
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const name = "Muhammad Novrizal Mulya";
const title = "Student";
const tagline = "Percaya Proses, Allah will give success";
const email = "email@kamu.com";
const github = "https://github.com/novrizalmulya";
const linkedin = "https://www.linkedin.com/in/novrizal-mulya-6b3531330/";
const instagram = "https://instagram.com/novrizall._";

export default function HeroComp() {
  return (
    <section id="home" className="h-screen flex items-center" style={{ backgroundColor: "var(--color-cream-100)" }}>
      <div className="section-container w-full">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest mb-4" style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-accent)",
            }}>
            {title}
          </p>
          <h1 className="text-6xl md:text-8xl leading-none mb-6" style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink-900)",
            }}>
            {name}
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-md" style={{ color: "var(--color-ink-500)" }}>
            {tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document .getElementById("projects") ?.scrollIntoView({ behavior: "smooth" }); }}className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Lets Talk!
            </a>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: github, label: "GitHub" },
              { icon: FiLinkedin, href: linkedin, label: "LinkedIn" },
              { icon: FiInstagram, href: instagram, label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(26,26,26,0.15)",
                  color: "var(--color-ink-500)",
                }}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
