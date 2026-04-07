/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  FiMail,
  FiMessageSquare,
  FiUser,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

const email = "novrizalmulya@gmail.com";
const github = "https://github.com/novrizalmulya";
const linkedin = "https://www.linkedin.com/in/novrizal-mulya-6b3531330/";
const instagram = "https://instagram.com/novrizall._";
export default function ContactComp() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="section-container">
        <div className="mb-16" data-aos="fade-up">
          <span className="section-subtitle">Let's talk</span>
          <h2 className="section-title">
            Contact{" "}
            <span className="italic" style={{ color: "var(--color-accent)" }}>
              Me
            </span>
          </h2>
          <p className="text-sm mt-2" style={{ color: "var(--color-ink-500)" }}>
            want to chat, want to collaborate, or say hi ?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div data-aos="fade-right">
            <div className="space-y-6 mb-10">
              <div
                className="flex items-start gap-4 p-5 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)", borderColor: "rgba(26,26,26,0.08)",
                }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink"
                  style={{ backgroundColor: "var(--color-cream-200)" }}>
                  <FiMail size={18} style={{ color: "var(--color-accent)" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{
                      fontFamily: "var(--font-mono)", color: "var(--color-ink-400)",
                    }}>
                    Email
                  </p>
                  <a href={`mailto:${email}`}
                    className="text-sm font-medium transition-colors"
                    style={{ color: "var(--color-ink-800)" }}>
                    {email}
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-5 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)", borderColor: "rgba(26,26,26,0.08)",
                }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink"
                  style={{ backgroundColor: "var(--color-cream-200)" }}>
                  <FiMessageSquare size={18}
                    style={{ color: "var(--color-accent)" }}/>
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{
                      fontFamily: "var(--font-mono)", color: "var(--color-ink-400)",
                    }}>
                    Response Time
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-ink-800)" }}>
                    Insyaallah Fast Respon
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: github, label: "GitHub" },
                { icon: FiLinkedin, href: linkedin, label: "LinkedIn" },
                { icon: FiInstagram, href: instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 border"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.7)", borderColor: "rgba(26,26,26,0.08)", color: "var(--color-ink-700)",
                  }}>
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="150">
            <form onSubmit={handleSubmit} className="rounded-2xl p-7 space-y-5 border"
              style={{
                backgroundColor: "rgba(255,255,255,0.7)", borderColor: "rgba(26,26,26,0.08)",
              }}>
            
              <div>
                <label className="block text-xs uppercase tracking-wider mb-2"
                  style={{
                    fontFamily: "var(--font-mono)", color: "var(--color-ink-500)",
                  }}>
                  Nama
                </label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2" size={15}
                    style={{ color: "var(--color-ink-300)" }} />
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="nama kamu" required className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all border"
                    style={{
                      backgroundColor: "var(--color-cream-50)", borderColor: "rgba(26,26,26,0.1)", color: "var(--color-ink-800)", fontFamily: "var(--font-body)",
                    }}/>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider mb-2"
                  style={{
                    fontFamily: "var(--font-mono)", color: "var(--color-ink-500)",
                  }}>
                  Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2" size={15}
                    style={{ color: "var(--color-ink-300)" }}/>
                  <input type="email" name="email" value={form.email}onChange={handleChange} placeholder="emailkamu@gmail.com" required className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all border"
                    style={{
                      backgroundColor: "var(--color-cream-50)",borderColor: "rgba(26,26,26,0.1)",color: "var(--color-ink-800)",fontFamily: "var(--font-body)",
                    }}/>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider mb-2"
                  style={{
                    fontFamily: "var(--font-mono)", color: "var(--color-ink-500)",
                  }}>
                  Pesan
                </label>
                <textarea name="message"value={form.message}onChange={handleChange}placeholder="jangan ragu buat ngirim pesan"rows={5}required className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none border"
                  style={{
                    backgroundColor: "var(--color-cream-50)", borderColor: "rgba(26,26,26,0.1)", color: "var(--color-ink-800)", fontFamily: "var(--font-body)",
                  }}/>
              </div>

              <button type="submit" disabled={status === "loading" || status === "success"} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm transition-all duration-300"
                style={{
                  backgroundColor:
                    status === "success" ? "#22c55e" : "var(--color-ink-900)", color: "var(--color-cream-50)", fontFamily: "var(--font-body)",
                }}>
                {status === "loading" && (
                  <span className="w-4 h-4 border-2 rounded-full animate-spin"
                    style={{
                      borderColor: "rgba(255,255,255,0.3)", borderTopColor: "white",
                    }}/>
                )}
                {status === "success" ? (
                  <><FaCheck size={14} /> Pesan Terkirim</>
                ) : status === "loading" ? (
                  "Mengirim..."
                ) : (
                  <><FiSend size={14} /> Mengirim Pesan</>
                )}
              </button>

              {status === "success" && (
                <p
                  className="text-center text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "#16a34a" }}>
                  terimakasihh , novrizal akan segera balas pesannya!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
