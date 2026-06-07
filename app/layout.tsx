import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opara Bright | Cyberman — AI Engineer & Security Specialist",
  description: "Multi-disciplinary technologist: AI Engineer, Statistician, Python Developer, Software Architect & Ethical Hacker based in Port Harcourt, Nigeria.",
  keywords: ["AI Engineer", "Ethical Hacker", "Data Scientist", "Penetration Testing", "Python", "Port Harcourt"],
  authors: [{ name: "Opara Bright" }],
  openGraph: {
    title: "Opara Bright | Cyberman",
    description: "Building systems that think. Securing the ones that matter.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
