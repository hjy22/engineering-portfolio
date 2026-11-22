import Link from "next/link";
import styles from "../legacy-project.module.css";

export default function MuxPage() {
    const imgStyle: React.CSSProperties = {
      width: "100%",
      border: "1px solid var(--site-image-border)",
      backgroundColor: "var(--site-image-bg)",
    };

    return (
      <main className={styles.page}>
        {/* TITLE */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          4:1 Multiplexer (Pass-Gate Architecture)
        </h1>

        <p style={{ color: "var(--site-pencil)", marginBottom: "40px" }}>
          2026 · VLSI · Cadence Virtuoso · CMOS Design
        </p>

        {/* SCHEMATIC */}
        <section className={styles.section}>
          <div>
            <h2>Schematic</h2>
            <p style={{ color: "var(--site-body-copy)", lineHeight: 1.7 }}>
              Designed a 4:1 multiplexer using pass-gate CMOS architecture.
              Transmission gates controlled by complementary select signals allow
              full voltage swing while minimizing transistor count and input
              capacitance.
            </p>
          </div>

          <img
            src="/images/mux.png"
            alt="MUX schematic"
            style={imgStyle}
          />
        </section>

        {/* LAYOUT */}
        <section className={styles.section}>
          <div>
            <h2>Layout</h2>
            <p style={{ color: "var(--site-body-copy)", lineHeight: 1.7 }}>
              Implemented the layout with attention to symmetry and routing
              efficiency. Transistor placement was optimized to reduce parasitic
              capacitance and ensure consistent delay across all input paths.
            </p>
          </div>

          <img
            src="/images/mux-layout.png"
            alt="MUX layout"
            style={imgStyle}
          />
        </section>

        {/* OVERVIEW */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Overview</h2>
          <p style={{ color: "var(--site-body-copy)", lineHeight: 1.7 }}>
            Designed a 4:1 multiplexer at the transistor level in Cadence Virtuoso.
            The design prioritizes low delay, reduced capacitance, and reliable
            signal transmission while maintaining full voltage swing.
          </p>
        </section>

        {/* DESIGN DECISIONS */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Design Decisions</h2>
          <ul style={{ color: "var(--site-body-copy)", lineHeight: 1.8 }}>
            <li>
              <strong>Pass-Gate Architecture:</strong> Reduced transistor count and
              input capacitance compared to static CMOS.
            </li>
            <li>
              <strong>Transmission Gates:</strong> Prevented threshold voltage drop
              and ensured full signal swing.
            </li>
            <li>
              <strong>Sizing:</strong> Balanced resistance and capacitance to
              optimize delay without overloading previous stages.
            </li>
            <li>
              <strong>Select Logic:</strong> Carefully generated complementary
              control signals to avoid contention.
            </li>
          </ul>
        </section>

        {/* RESULTS */}
        <section style={{ marginBottom: "40px" }}>
          <h2>Results</h2>
          <p style={{ color: "var(--site-body-copy)", lineHeight: 1.7 }}>
            The design achieved correct switching behavior with clean signal
            transitions. The pass-gate implementation reduced area and loading
            while maintaining strong signal integrity.
          </p>
        </section>

        {/* BACK LINK */}
        <Link
          href="/"
          style={{
            color: "var(--site-pencil)",
            textDecoration: "none",
            marginTop: "20px",
            display: "inline-block",
          }}
        >
          ← Back to Home
        </Link>
      </main>
    );
  }
