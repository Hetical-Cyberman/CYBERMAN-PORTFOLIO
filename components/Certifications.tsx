"use client";
import { Award, Clock, CheckCircle } from "lucide-react";

const certs = [
  {
    status: "active",
    name: "ICIP OPSWAT",
    full: "Introduction to Critical Infrastructure Protection",
    issuer: "OPSWAT Academy",
    year: "2024",
    color: "var(--accent)",
    desc: "Covers industrial control systems (ICS/SCADA), OT/IT convergence, and critical infrastructure threat landscape.",
  },
  {
    status: "progress",
    name: "CEH",
    full: "Certified Ethical Hacker",
    issuer: "EC-Council",
    year: "In Progress",
    color: "var(--amber)",
    desc: "Advanced penetration testing methodologies, hacking tools, and ethical hacking lifecycle across 20 modules.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ padding: "6rem 2rem", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: "1rem" }}>
          // CREDENTIALS
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "3rem" }}>
          Certifications &amp; <span style={{ color: "var(--accent)" }}>Training</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {certs.map(c => (
            <div key={c.name} style={{
              background: "var(--bg)", border: `1px solid ${c.color}40`,
              borderRadius: 8, padding: "2rem",
              boxShadow: `0 0 20px ${c.color}10`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <Award size={28} color={c.color} />
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 1,
                  color: c.color, background: `${c.color}15`,
                  border: `1px solid ${c.color}30`, borderRadius: 3, padding: "3px 10px",
                }}>
                  {c.status === "active" ? <CheckCircle size={12} /> : <Clock size={12} />}
                  {c.status === "active" ? "ACTIVE" : "IN PROGRESS"}
                </span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: c.color, fontFamily: "'Space Mono', monospace", marginBottom: 4 }}>
                {c.name}
              </h3>
              <p style={{ color: "var(--text)", fontWeight: 600, marginBottom: 4 }}>{c.full}</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--muted)", marginBottom: "1rem" }}>
                {c.issuer} · {c.year}
              </p>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
