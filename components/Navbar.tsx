"use client";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(3,7,18,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(48,209,88,0.15)" : "none",
      transition: "all 0.3s ease",
      padding: "1rem 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <Terminal size={20} color="var(--accent)" />
          <span style={{ fontFamily: "'Space Mono', monospace", color: "var(--accent)", fontSize: 15, fontWeight: 700 }}>
            cyberman@root:~$
          </span>
        </a>

        <div style={{ display: "flex", gap: "2rem" }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: "var(--muted)", textDecoration: "none", fontSize: 14,
              fontFamily: "'Space Mono', monospace", letterSpacing: 1,
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", display: "none" }} className="show-mobile">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{
          background: "var(--surface)", borderTop: "1px solid var(--border)",
          padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "1rem",
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              color: "var(--text)", textDecoration: "none", fontFamily: "'Space Mono', monospace", fontSize: 14,
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
