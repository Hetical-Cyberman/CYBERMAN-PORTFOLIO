"use client";

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l7 3v6c0 4.5-2.9 8.7-7 10-4.1-1.3-7-5.5-7-10V6l7-3z" />
    <path d="M9.5 12.5l1.5 1.5 3.5-4" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 8L4 12l4 4" />
    <path d="M16 8l4 4-4 4" />
    <path d="M14 4l-4 16" />
  </svg>
);

const GitForkIcon = () => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx={6} cy={5} r={2.5} />
    <circle cx={18} cy={5} r={2.5} />
    <circle cx={12} cy={19} r={2.5} />
    <path d="M8.5 6.5v5.5c0 1.5 1.5 3 3.5 3s3.5-1.5 3.5-3V6.5" />
  </svg>
);

const projects = [
  {
    tag: "Full-stack · PHP",
    icon: <ShieldIcon />,
    color: "var(--accent3)",
    title: "QR Event Check-in System",
    description: "Parents self-register and receive a personal QR code on screen and as a PDF. Staff scan it at the gate to verify and log attendance. Built for Redeemers International Group of Schools.",
    stack: ["PHP", "MySQL 8.4", "PDO", "Aiven", "Pixl"],
    links: { github: "https://github.com/Hetical-Cyberman/SCHOOL-EVENT-ACCESS-USING-A-QR-CODE" },
  },
  {
    tag: "Python · React",
    icon: <CodeIcon />,
    color: "var(--accent2)",
    title: "ATM Prototype with Secure Web UI",
    description: "Extended a Python ATM prototype with a React terminal-style interface, then closed security gaps with admin access control, account lockout, and daily withdrawal limit logic.",
    stack: ["Python", "React", "JSX"],
    links: { github: "" },
  },
  {
    tag: "Coming soon",
    icon: <ShieldIcon />,
    color: "var(--amber)",
    title: "More work coming soon",
    description: "This project slot is reserved for the next project you share.",
    stack: [],
    links: { github: "" },
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
          Real projects spanning event check-in and secure financial interfaces.
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
                {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 5, color: "var(--muted)",
                  textDecoration: "none", fontSize: 13, fontFamily: "'Space Mono', monospace",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = p.color)}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >
                  <GitForkIcon /> GitHub
                </a>}
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "2rem", fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--muted)" }}>
          * The third project slot is reserved for the next project.
        </p>
      </div>
    </section>
  );
}
