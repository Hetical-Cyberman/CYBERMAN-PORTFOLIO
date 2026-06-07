"use client";

export default function About() {
  return (
    <section id="about" className="section" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>

          {/* Left: Terminal bio block */}
          <div>
            <div style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: 8, overflow: "hidden",
            }}>
              {/* Terminal header */}
              <div style={{
                background: "var(--surface2)", padding: "10px 16px",
                display: "flex", alignItems: "center", gap: 8,
                borderBottom: "1px solid var(--border)",
              }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f", display: "inline-block" }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--muted)", marginLeft: 8 }}>
                  whoami.sh
                </span>
              </div>
              <div style={{ padding: "1.5rem", fontFamily: "'Space Mono', monospace", fontSize: 13, lineHeight: 2 }}>
                <p style={{ color: "var(--accent)" }}>$ whoami</p>
                <p style={{ color: "var(--text)" }}>Opara Bright // Cyberman</p>
                <br />
                <p style={{ color: "var(--accent)" }}>$ cat location.txt</p>
                <p style={{ color: "var(--text)" }}>Port Harcourt, Rivers State, Nigeria</p>
                <br />
                <p style={{ color: "var(--accent)" }}>$ cat certifications.txt</p>
                <p style={{ color: "var(--accent2)" }}>✓ ICIP OPSWAT (Active)</p>
                <p style={{ color: "var(--muted)" }}>⟳ CEH — In Progress</p>
                <br />
                <p style={{ color: "var(--accent)" }}>$ cat status.txt</p>
                <p style={{ color: "var(--accent)" }}>AVAILABLE_FOR_HIRE=true</p>
              </div>
            </div>
          </div>

          {/* Right: Bio text */}
          <div>
            <p style={{ fontFamily: "'Space Mono', monospace", color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: "1rem" }}>
              // ABOUT ME
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Where Intelligence<br />Meets <span style={{ color: "var(--accent)" }}>Infrastructure</span>
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "1rem", fontSize: 15 }}>
              Opara Bright is a multi-disciplinary technologist who operates at the cutting edge of five high-impact domains: AI Engineering, Statistics & Data Science, Python Development, Software Architecture, and Cybersecurity.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "1rem", fontSize: 15 }}>
              He designs intelligent systems, extracts actionable insight from complex datasets, and hardens the digital infrastructure that powers them — all under one roof. A certified <span style={{ color: "var(--text)" }}>ICIP OPSWAT</span> professional on the path to becoming a <span style={{ color: "var(--text)" }}>Certified Ethical Hacker (CEH)</span>, he brings both the offensive and defensive mindset to every engagement.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: 15 }}>
              He doesn&apos;t just build for today&apos;s systems — he architects for <span style={{ color: "var(--accent)" }}>tomorrow&apos;s threats</span>.
            </p>

            <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
              {[["5+", "Domains"], ["ICIP", "Certified"], ["CEH", "In Progress"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent)", fontFamily: "'Space Mono', monospace" }}>{val}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
