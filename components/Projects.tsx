"use client";
import { ExternalLink, GitFork, Shield, Brain, BarChart3, Code2 } from "lucide-react";

const projects = [
  {
    tag: "Cybersecurity",
    icon: <Shield size={16} />,
    color: "var(--accent3)",
    title: "Network Vulnerability Scanner",
    description: "A Python-based tool for automated network reconnaissance and vulnerability assessment. Performs port scanning, service fingerprinting, and CVE matching against identified services.",
    stack: ["Python", "Nmap", "Shodan API", "SQLite"],
    links: { github: "#" },
  },
  {
    tag: "AI Engineering",
    icon: <Brain size={16} />,
    color: "var(--accent2)",
    title: "AI Skill Builder (Claude API)",
    description: "An intelligent workflow engine for constructing, evaluating, and optimizing AI skills within Claude.ai projects. Features structured prompting, eval harness, and performance benchmarking.",
    stack: ["Python", "Anthropic API", "Claude", "Markdown DSL"],
    links: { github: "#" },
  },
  {
    tag: "Data Science",
    icon: <BarChart3 size={16} />,
    color: "var(--amber)",
    title: "Predictive Analytics Dashboard",
    description: "End-to-end data pipeline and interactive dashboard for statistical modelling and visualization of large-scale datasets. Includes regression, classification, and cluster analysis modules.",
    stack: ["Python", "Pandas", "Scikit-learn", "Plotly", "Streamlit"],
    links: { github: "#" },
  },
  {
    tag: "Python Dev",
    icon: <Code2 size={16} />,
    color: "var(--accent)",
    title: "Penetration Testing Toolkit",
    description: "Modular offensive security toolkit for authorized penetration testing engagements. Includes payload generation, privilege escalation helpers, and automated report generation.",
    stack: ["Python", "Metasploit API", "Burp Suite", "Linux"],
    links: { github: "#" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: "1rem" }}>
          // PROJECTS
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
          Selected <span style={{ color: "var(--accent)" }}>Work</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem", maxWidth: 500, lineHeight: 1.7 }}>
          A cross-domain selection of builds — from offensive security tools to AI-powered systems and data pipelines.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {projects.map(p => (
            <div key={p.title} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: 8, padding: "1.75rem", display: "flex", flexDirection: "column",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.color; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 5, color: p.color,
                  fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 1,
                  background: `${p.color}18`, border: `1px solid ${p.color}40`,
                  borderRadius: 3, padding: "3px 10px",
                }}>
                  {p.icon} {p.tag.toUpperCase()}
                </span>
              </div>

              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: "1.25rem" }}>{p.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    background: "var(--surface2)", border: "1px solid var(--border)",
                    borderRadius: 3, padding: "2px 8px", fontSize: 11,
                    fontFamily: "'Space Mono', monospace", color: "var(--muted)",
                  }}>{s}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <a href={p.links.github} style={{
                  display: "inline-flex", alignItems: "center", gap: 5, color: "var(--muted)",
                  textDecoration: "none", fontSize: 13, fontFamily: "'Space Mono', monospace",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = p.color)}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >
                  <GitFork size={14} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "2rem", fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--muted)" }}>
          * Some projects are private. Links will be updated as repos go public.
        </p>
      </div>
    </section>
  );
}
