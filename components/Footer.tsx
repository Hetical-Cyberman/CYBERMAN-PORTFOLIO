import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--surface)", borderTop: "1px solid var(--border)",
      padding: "2rem", textAlign: "center",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: "0.75rem" }}>
        <Terminal size={16} color="var(--accent)" />
        <span style={{ fontFamily: "'Space Mono', monospace", color: "var(--accent)", fontSize: 13 }}>
          cyberman@root:~$
        </span>
      </div>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--muted)" }}>
        © {new Date().getFullYear()} Opara Bright · Built with Next.js · Port Harcourt, Nigeria
      </p>
    </footer>
  );
}
