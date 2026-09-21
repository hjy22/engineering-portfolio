import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Yoon — Electrical Engineer",
  description: "Electrical and computer engineering portfolio focused on embedded systems, PCB design, digital hardware, and power electronics.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
