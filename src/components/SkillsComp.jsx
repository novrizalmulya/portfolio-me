const hardSkills = [
  "HTML", "JavaScript", "PHP", "Laravel", "React",   
]

const softSkills = [
  "Communication", "Critical Thinking", "Fast Learner",
]

export default function SkillsComp() {
  return (
    <section id="skills" className="py-14 md:py-20"
      style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
      <div className="section-container">
        <div className="mb-10" data-aos="fade-up">
          <span className="section-subtitle">What I can do</span>
          <h2 className="section-title">
            My <span className="italic" style={{ color: 'var(--color-accent)' }}>Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl mb-1"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-ink-900)',
              }}>Hard Skills
            </h3>
            <p className="text-sm mb-8"
              style={{ color: 'var(--color-ink-400)' }}>
              Technologies i learned
            </p>
            <div className="flex flex-wrap gap-2"> {hardSkills.map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full text-sm border transition-all duration-200 cursor-default"
                  style={{
                    fontFamily: 'var(--font-mono)', backgroundColor: 'var(--color-cream-200)', borderColor: 'rgba(26,26,26,0.1)', color: 'var(--color-ink-700)',
                  }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl mb-1"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-ink-900)',
              }}>
              Soft Skills
            </h3>
            <p className="text-sm mb-8"
              style={{ color: 'var(--color-ink-400)' }}>
              Personal competence
            </p>
            <div className="flex flex-wrap gap-2"> {softSkills.map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full text-sm border transition-all duration-200 cursor-default"
                  style={{
                    fontFamily: 'var(--font-body)', backgroundColor: 'var(--color-cream-200)', borderColor: 'rgba(26,26,26,0.08)', color: 'var(--color-ink-700)',
                  }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}