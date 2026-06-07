"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Shield, Brain, Code2, BarChart3 } from "lucide-react";

const roles = [
  "AI Engineer",
  "Ethical Hacker",
  "Data Scientist",
  "Python Developer",
  "Software Architect",
  "Penetration Tester",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    let i = 0;
    if (typing) {
      const t = setInterval(() => {
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i === role.length) { clearInterval(t); setTimeout(() => setTyping(false), 1800); }
      }, 70);
      return () => clearInterval(t);
    } else {
      let j = role.length;
      const t = setInterval(() => {
        setDisplayed(role.slice(0, j - 1));
        j--;
        if (j === 0) { clearInterval(t); setRoleIdx(p => (p + 1) % roles.length); setTyping(true); }
      }, 40);
      return () => clearInterval(t);
    }
  }, [roleIdx, typing]);

  return (
    <section className="grid-bg" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "6rem 2rem 4rem", textAlign: "center", position: "relative",
    }}>
      {/* Radial glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(48,209,88,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
        {/* Status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(48,209,88,0.08)", border: "1px solid rgba(48,209,88,0.3)",
          borderRadius: 999, padding: "6px 16px", marginBottom: "2rem",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--accent)", letterSpacing: 2 }}>
            AVAILABLE FOR WORK
          </span>
        </div>

        <p style={{ fontFamily: "'Space Mono', monospace", color: "var(--muted)", fontSize: 13, letterSpacing: 3, marginBottom: "1rem" }}>
          &gt; OPARA BRIGHT aka
        </p>

        <h1 style={{ fontSize: "clamp(3rem, 9vw, 7rem)", fontWeight: 800, lineHeight: 1, marginBottom: "1.5rem", letterSpacing: -2 }}>
          CYBER<span className="glow-text" style={{ color: "var(--accent)" }}>MAN</span>
        </h1>

        <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "var(--accent2)" }}>
            {displayed}<span style={{ animation: "blink 1s infinite", color: "var(--accent)" }}>█</span>
          </span>
        </div>

        <p style={{ color: "var(--muted)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: 1.8, maxWidth: 620, margin: "0 auto 3rem", fontWeight: 400 }}>
          I sit at the intersection of <span style={{ color: "var(--text)" }}>intelligence and infrastructure</span> — building systems that think, securing the ones that matter. Port Harcourt, Nigeria.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
          <a href="#contact" style={{
            background: "var(--accent)", color: "#000", padding: "12px 28px",
            borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: "none",
            fontFamily: "'Space Mono', monospace", letterSpacing: 1,
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            HIRE ME
          </a>
          <a href="#projects" style={{
            border: "1px solid var(--border-glow)", color: "var(--accent)", padding: "12px 28px",
            borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: "none",
            fontFamily: "'Space Mono', monospace", letterSpacing: 1,
            transition: "all 0.2s", background: "transparent",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(48,209,88,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            VIEW WORK
          </a>
        </div>

        {/* Domain pills */}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { icon: <Shield size={14} />, label: "Cybersecurity", color: "var(--accent3)" },
            { icon: <Brain size={14} />, label: "AI / ML", color: "var(--accent2)" },
            { icon: <BarChart3 size={14} />, label: "Data Science", color: "var(--amber)" },
            { icon: <Code2 size={14} />, label: "Engineering", color: "var(--accent)" },
          ].map(d => (
            <span key={d.label} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: 4, padding: "6px 14px", fontSize: 12,
              fontFamily: "'Space Mono', monospace", color: d.color,
            }}>
              {d.icon} {d.label}
            </span>
          ))}
        </div>
      </div>

      <a href="#about" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", color: "var(--muted)", animation: "bounce 2s infinite" }}>
        <ChevronDown size={24} />
      </a>

      <style>{`
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes bounce { 0%,100% { transform:translateX(-50%) translateY(0); } 50% { transform:translateX(-50%) translateY(8px); } }
      `}</style>
    </section>
  );
}
