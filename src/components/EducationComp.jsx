const education = [
  {
    id: 1,
    school: "SMK Wikrama Bogor",
    class: "PPLG Student",
    year: "July 2024 – Present",
  },
  {
    id: 2,
    school: "SMP Negeri 2 Ciawi",
    class: "Student",
    year: "2021 – 2024",
  },
  {
    id: 3,
    school: "SD Negeri Harjasari 1",
    class: "Student",
    year: "2015 – 2021",
  },
]

export default function EducationComp() {
  return (
    <section id="education" className="py-6 md:py-10">
      <div className="section-container">
        <div className="mb-6" data-aos="fade-up">
          <span className="section-subtitle">My background</span>
          <h2 className="section-title">
            Education <span className="italic" style={{ color: 'var(--color-accent)' }}>History</span>
          </h2>
        </div>

        <div className="max-w-xl" data-aos="fade-up" data-aos-delay="100">
          {education.map((edu, i) => (
            <div key={edu.id} className="flex gap-6 group">

              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full mt-1.5 shrink"
                  style={{ backgroundColor: 'var(--color-accent)' }}/>
                {i < education.length - 1 && (
                  <div className="w-px flex-1 my-1"
                    style={{ backgroundColor: 'rgba(26,26,26,0.1)' }}/>)}
              </div>

              <div className="pb-20">
                <p className="text-xs uppercase tracking-widest mb-1"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-ink-400)', }}>
                  {edu.year}
                </p>
                <h3 className="text-lg font-medium mb-0.5"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink-900)',}}>
                  {edu.school}
                </h3>
                <p className="text-sm"
                  style={{ color: 'var(--color-ink-500)' }}>
                  {edu.class}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}