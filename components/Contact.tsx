"use client";
import { Mail, MapPin, GitFork, Link2, Send, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: "1rem" }}>
          // CONTACT
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
          Let&apos;s <span style={{ color: "var(--accent)" }}>Connect</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem", maxWidth: 480, lineHeight: 1.7 }}>
          Open to security engagements, AI engineering projects, data science collaborations, and technical consultations.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {/* Info */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 14,
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: 8, padding: "1.25rem",
              }}>
                <MapPin size={20} color="var(--accent)" />
                <div>
                  <p style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>LOCATION</p>
                  <p style={{ color: "var(--text)", fontWeight: 600 }}>Federal University of Technology Owerri, Imo State, Nigeria</p>
                </div>
              </div>

              <a href="mailto:oparauchenna57@gmail.com" style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: 8, padding: "1.25rem", textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <Mail size={20} color="var(--accent2)" />
                <div>
                  <p style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>EMAIL</p>
                  <p style={{ color: "var(--text)", fontWeight: 600 }}>oparauchenna57@gmail.com</p>
                </div>
              </a>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <a href="https://wa.me/2349026815462" target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: 8, padding: "1.25rem", textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <MessageCircle size={20} color="var(--accent)" />
                  <div>
                    <p style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>WHATSAPP</p>
                    <p style={{ color: "var(--text)", fontWeight: 600 }}>09026815462</p>
                  </div>
                </a>

                <a href="tel:+2349073342199" style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: 8, padding: "1.25rem", textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <Phone size={20} color="var(--accent2)" />
                  <div>
                    <p style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>PHONE</p>
                    <p style={{ color: "var(--text)", fontWeight: 600 }}>09073343199</p>
                  </div>
                </a>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                {[
                  { href: "https://github.com/Hetical-Cyberman", icon: <GitFork size={20} />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/opara-bright-70a7533a4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bw3pVoN2hTgWUec4UZ98Pcw%3D%3D", icon: <Link2 size={20} />, label: "LinkedIn" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "var(--surface)", border: "1px solid var(--border)",
                    borderRadius: 8, padding: "1rem", color: "var(--muted)",
                    textDecoration: "none", fontSize: 14, fontFamily: "'Space Mono', monospace",
                    transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--muted)"; }}
                  >
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Message form */}
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: 8, padding: "2rem",
          }}>
            <h3 style={{ fontWeight: 700, marginBottom: "1.5rem" }}>Send a Message</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Name", placeholder: "Your name", type: "text" },
                { label: "Email", placeholder: "your@email.com", type: "email" },
              ].map(f => (
                <div key={f.label}>
                  <label style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, display: "block", marginBottom: 6 }}>
                    {f.label.toUpperCase()}
                  </label>
                  <input type={f.type} placeholder={f.placeholder} style={{
                    width: "100%", background: "var(--bg)", border: "1px solid var(--border)",
                    borderRadius: 4, padding: "10px 14px", color: "var(--text)",
                    fontSize: 14, outline: "none", fontFamily: "'Syne', sans-serif",
                    transition: "border-color 0.2s",
                  }}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono', monospace", letterSpacing: 1, display: "block", marginBottom: 6 }}>
                  MESSAGE
                </label>
                <textarea rows={4} placeholder="What would you like to discuss?" style={{
                  width: "100%", background: "var(--bg)", border: "1px solid var(--border)",
                  borderRadius: 4, padding: "10px 14px", color: "var(--text)",
                  fontSize: 14, outline: "none", resize: "vertical", fontFamily: "'Syne', sans-serif",
                  transition: "border-color 0.2s",
                }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <button style={{
                background: "var(--accent)", color: "#000", border: "none",
                borderRadius: 4, padding: "12px 24px", fontWeight: 700,
                fontSize: 14, cursor: "pointer", fontFamily: "'Space Mono', monospace",
                letterSpacing: 1, display: "flex", alignItems: "center", gap: 8,
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <Send size={14} /> SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
