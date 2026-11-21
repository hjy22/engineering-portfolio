"use client";

import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top" className="landing">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Henry Yoon · Electrical Engineering</p>
          <h1 id="hero-title">Incoming</h1>
          <p className="appleLine">
            <span>Hardware Systems</span>
            <strong>Apple</strong>
          </p>
          <p className="term">
            Electrical Engineering Intern
            <br />
            Spring + Summer 2027
          </p>
          <a className="contactLink" href="mailto:henryyoon06@gmail.com">
            Get in touch <span>↗</span>
          </a>
        </section>
      </main>

      <style jsx global>{`
        :root {
          --background: #080808;
          --text: #f4f4f2;
          --secondary: #aaa9a5;
          --muted: #777772;
          --line: rgba(255, 255, 255, 0.12);
        }
        * { box-sizing: border-box; }
        html { background: var(--background); }
        body {
          margin: 0;
          background: radial-gradient(circle at 78% 38%, rgba(255,255,255,.065), transparent 27%), var(--background);
          color: var(--text);
          font-family: Arial, Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: fixed;
          z-index: 20;
          top: 0;
          left: 0;
          right: 0;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4vw;
        }
        .wordmark { font-size: 18px; font-weight: 800; letter-spacing: -.04em; }
        .navEmail {
          color: var(--secondary);
          font-size: 13px;
          border-bottom: 1px solid #555;
          padding-bottom: 3px;
        }
        .landing { min-height: 100svh; }
        .hero {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: min(1120px, calc(100% - 8vw));
          margin: 0 auto;
          padding: 110px 0 70px;
        }
        .eyebrow {
          margin: 0 0 34px;
          color: var(--muted);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .hero h1 {
          margin: 0;
          color: #777772;
          font-size: clamp(68px, 11vw, 148px);
          line-height: .82;
          letter-spacing: -.075em;
          font-weight: 560;
        }
        .appleLine {
          display: flex;
          align-items: baseline;
          gap: 24px;
          margin: 26px 0 0;
        }
        .appleLine span, .appleLine strong {
          color: var(--text);
          font-size: clamp(34px, 5.8vw, 76px);
          line-height: 1;
          letter-spacing: -.055em;
          font-weight: 560;
        }
        .term {
          margin: 38px 0 0;
          color: var(--secondary);
          font-size: clamp(16px, 1.6vw, 21px);
          line-height: 1.55;
        }
        .contactLink {
          width: fit-content;
          margin-top: 34px;
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 14px 18px;
          font-size: 13px;
          transition: 180ms ease;
        }
        .contactLink span { margin-left: 18px; }
        .contactLink:hover { border-color: #777; transform: translateY(-2px); }
        @media (max-width: 650px) {
          .nav { height: 68px; padding: 0 20px; }
          .hero { width: calc(100% - 40px); padding: 90px 0 50px; }
          .eyebrow { margin-bottom: 28px; }
          .hero h1 { font-size: 62px; }
          .appleLine { flex-direction: column; gap: 8px; margin-top: 20px; }
          .appleLine span, .appleLine strong { font-size: 42px; }
          .term { margin-top: 30px; }
        }
      `}</style>
    </>
  );
}
