"use client";
import { Shield, Brain, BarChart3, Code2, Server } from "lucide-react";

const domains = [
  {
    icon: <Shield size={28} />,
    color: "var(--accent3)",
    borderClass: "glow-border-red",
    title: "Cybersecurity",
    subtitle: "Offensive & Defensive",
    skills: ["Ethical Hacking", "Penetration Testing", "Network Security", "Threat Analysis", "Incident Response", "OSINT", "Vulnerability Assessment", "Defensive Security"],
  },
  {
    icon: <Brain size={28} />,
    color: "var(--accent2)",
    borderClass: "glow-border-blue",
    title: "AI Engineering",
    subtitle: "Intelligent Systems",
    skills: ["Machine Learning", "Deep Learning", "LLMs & Prompt Engineering", "Model Fine-tuning", "AI Workflow Automation", "Neural Networks", "NLP", "AI-powered Apps"],
  },
  {
    icon: <BarChart3 size={28} />,
    color: "var(--amber)",
    borderClass: "",
    title: "Statistics & Data",
    subtitle: "From Raw to Insight",
    skills: ["Data Analysis", "Data Science", "Data Modelling", "Data Visualization", "Big Data", "Statistical Inference", "Predictive Modelling", "Python (Pandas, NumPy, Matplotlib)"],
  },
  {
    icon: <Code2 size={28} />,
    color: "var(--accent)",
    borderClass: "glow-border",
    title: "Python Development",
    subtitle: "Backend & Computation",
    skills: ["Backend Systems", "Data Visualization Scripts", "Modelling & Simulation", "API Development", "Automation", "Scientific Computing", "Flask / FastAPI", "Script Engineering"],
  },
  {
    icon: <Server size={28} />,
    color: "var(--accent2)",
    borderClass: "glow-border-blue",
    title: "Software Architecture",
    subtitle: "Systems Design",
    skills: ["System Design", "Microservices", "API Architecture", "Scalable Infrastructure", "Design Patterns", "Software Engineering", "Technical Documentation", "Code Review"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ padding: "6rem 2rem", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", color: "var(--accent)", fontSize: 12, letterSpacing: 3, marginBottom: "1rem" }}>
          // EXPERTISE
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
          Five Domains.<br /><span style={{ color: "var(--accent)" }}>One Operator.</span>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "3rem", maxWidth: 500, lineHeight: 1.7 }}>
          Each domain sharpens the others. Security thinking makes better software. Statistical rigor makes better AI. All of it makes a better engineer.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {domains.map(d => (
            <div key={d.title} className={d.borderClass} style={{
              background: "var(--bg)", border: "1px solid var(--border)",
              borderRadius: 8, padding: "1.75rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "default",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ color: d.color, marginBottom: "1rem" }}>{d.icon}</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 4 }}>{d.title}</h3>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: d.color, letterSpacing: 1, marginBottom: "1.25rem" }}>
                {d.subtitle}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {d.skills.map(s => (
                  <span key={s} style={{
                    background: "var(--surface2)", border: "1px solid var(--border)",
                    borderRadius: 3, padding: "3px 10px", fontSize: 11,
                    fontFamily: "'Space Mono', monospace", color: "var(--muted)",
                  }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
