import profil from '../assets/profil1.jpeg'

const name = "Muhammad Novrizal Mulya"
const title = "Student at Wikrama "
const bio = "Hai! Saya adalah Muhammad Novrizal Mulya, Seorang siswa dari SMK WIKRAMA BOGOR yang bersemangat dalam membangun pengalaman web yang indah dan fungsional. Saya gemar belajar teknologi baru dan menciptakan solusi yang berdampak nyata."
const bio2 = "Saat ini saya sedang mendalami ekosistem React dan Flutter, dan terus mengasah kemampuan dalam desain UI/UX serta pengembangan full-stack."
const avatar = profil

export default function AboutComp() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="aspect-square rounded-3xl flex items-center justify-center overflow-hidden border"
                style={{
                  background: 'linear-gradient(135deg, var(--color-cream-200), white)',
                  borderColor: 'rgba(26,26,26,0.08)',
                }}>
                {avatar ? (
                  <img src={avatar} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(26,26,26,0.06)' }}>
                      <span className="text-5xl"
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: 'rgba(26,26,26,0.25)',
                        }}>
                        {name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-ink-300)',
                      }}>
                      your photo here
                    </p>
                  </div>
                )}
              </div>

              <div className="absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 shadow-sm border"
                style={{ backgroundColor: 'white', borderColor: 'rgba(26,26,26,0.08)',
                }}>
                <p className="text-xs"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-ink-400)',
                  }}>
                  currently
                </p>
                <p className="text-sm font-medium"
                  style={{ color: 'var(--color-ink-900)' }}>
                  {title}
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="150">
            <span className="section-subtitle">Get to know me</span>
            <h2 className="section-title mb-6">
              About <span className="italic" style={{ color: 'var(--color-accent)' }}>Me</span>
            </h2>

            <div className="space-y-4 leading-relaxed mb-8"
              style={{ color: 'var(--color-ink-500)' }}>
              <p>{bio}</p>
              <p>{bio2}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}