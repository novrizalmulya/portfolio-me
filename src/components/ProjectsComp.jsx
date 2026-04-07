/* eslint-disable no-unused-vars */
import { useState } from 'react'
import cert1 from '../assets/cert1.png'
import cert2 from '../assets/cert2.png'
import cert3 from '../assets/cert3.png'
import cert4 from '../assets/cert4.png'
import cert5 from '../assets/cert5.png'
import project1 from '../assets/project1.png'

const certificates = [
  {
    id: 1,
    title: "Web Development Fundamental",
    issuer: "IBM SkillsBuild",
    year: "2025",
    image: cert1,
  },
  {
    id: 2,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    year: "2025",
    image: cert2,
  },
  {
    id: 3,
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    year: "2023",
    image: cert5,
  },
]
const projects = [
  {
    id: 1,
    title: "Make Up Catalogue",
    description: "Projek React dengan API makeup ",
    image: project1,
    tags: ["React", "Tailwind", "JavaScript", "HTML","API"],
  },
]

const tabs = ["All", "Certificate", "Project"]

export default function ProjectsComp() {
  const [active, setActive] = useState("All")
  const [preview, setPreview] = useState(null)

  const filtered =
    active === "All"
      ? [...certificates, ...projects]
      : active === "Certificate"
      ? certificates
      : projects 

  return (
    <section id="projects" className="py-14 md:py-20"
      style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
      <div className="section-container">
        <div className="mb-8" data-aos="fade-up">
          <h2 className="section-title">
            My <span className="italic" style={{ color: 'var(--color-accent)' }}>Works</span>
          </h2>
        </div>
        <div className="flex gap-2 mb-10" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)} className="px-5 py-2 rounded-full text-sm transition-all duration-200"
              style={{ fontFamily: 'var(--font-body)',
                backgroundColor: active === tab ? 'var(--color-ink-900)' : 'transparent',
                color: active === tab ? 'var(--color-cream-50)' : 'var(--color-ink-500)',
                border: `1px solid ${active === tab ? 'var(--color-ink-900)' : 'rgba(26,26,26,0.15)'}`,
              }}>
              {tab}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center" data-aos="fade-up" data-aos-delay="150">
            <p className="text-sm"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-ink-300)',}}>
              coming soon...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5" data-aos="fade-up" data-aos-delay="150">
            {filtered.map((item) => (
              <div key={item.id} className="rounded-2xl overflow-hidden border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'rgba(26,26,26,0.08)',
                  boxShadow: '0 2px 8px rgba(26,26,26,0.04)',
                }}
                onClick={() => item.image && setPreview(item)}>
                <div className="w-full h-44 flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: 'var(--color-cream-200)' }}>
                  {item.image ? (
                    <img src={item.image} alt={item.title}
                      className="w-full h-full object-cover"/>
                  ) : (
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-ink-300)',
                      }}>
                      takde foto
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium mb-1 leading-snug"
                    style={{ color: 'var(--color-ink-900)' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs mb-3"
                    style={{ color: 'var(--color-ink-400)' }}>
                    {item.issuer || item.description || ''}
                  </p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: 'var(--color-cream-200)', color: 'var(--color-ink-900)', fontFamily: 'var(--font-mono)', }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.year && (
                    <p className="text-xs mt-2"
                      style={{
                        fontFamily: 'var(--font-mono)', color: 'var(--color-accent)',
                      }}>
                      {item.year}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={() => setPreview(null)}>
          <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: 'white' }}
            onClick={(e) => e.stopPropagation()}>
            <img src={preview.image} alt={preview.title}
              className="w-full object-contain"/>
            <div className="p-5 border-t"
              style={{ borderColor: 'rgba(26,26,26,0.08)' }}>
              <h3 className="text-sm font-medium mb-0.5"
                style={{ color: 'var(--color-ink-900)' }}>
                {preview.title}
              </h3>
              <p className="text-xs"
                style={{ color: 'var(--color-ink-400)' }}>
                {preview.issuer || preview.description || ''} {preview.year ? `· ${preview.year}` : ''}
              </p>
            </div>

            <button onClick={() => setPreview(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
              ✕
            </button>
          </div>
        </div>
      )}

    </section>
  )
}