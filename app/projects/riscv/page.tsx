import styles from "../legacy-project.module.css";

export default function RiscvPage() {
    const imgStyle: React.CSSProperties = {
      width: "100%",
      borderRadius: "12px",
      border: "1px solid #222",
      backgroundColor: "#111",
    };

    const metricStyle: React.CSSProperties = {
      border: "1px solid #1f1f1f",
      borderRadius: "16px",
      padding: "20px",
      backgroundColor: "#0a0a0a",
    };

    return (
      <main
        className={styles.page}
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 20px 80px",
          color: "#eee",
          fontFamily:
            'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          TinyRV1 Single-Cycle Processor
        </h1>

        <p style={{ color: "#aaa", marginBottom: "40px" }}>
          2025 · SystemVerilog · RTL Design · FPGA Implementation
        </p>

        <section className={styles.section}>
          <div>
            <h2>System Overview</h2>
            <p style={{ color: "#bbb", lineHeight: 1.7 }}>
              Designed a single-cycle TinyRV1 processor capable of executing
              assembly instructions in hardware. The system was implemented on an
              FPGA, used to run custom assembly programs, and later extended with
              SPI and external input interfaces to support a door-monitoring
              embedded system.
            </p>
          </div>

          <img
            src="/images/riscv-overview.png"
            alt="TinyRV1 processor overview"
            style={imgStyle}
          />
        </section>

        <section className={styles.section}>
          <div>
            <h2>RTL and Datapath</h2>
            <p style={{ color: "#bbb", lineHeight: 1.7 }}>
              The processor was built around a single-cycle datapath and control
              unit that decode and execute instructions according to the ISA. The
              design integrates instruction fetch, register file access, ALU
              operations, memory access, and writeback within one cycle per
              instruction.
            </p>
          </div>

          <img
            src="/images/riscv-rtl.png"
            alt="TinyRV1 RTL or datapath"
            style={imgStyle}
          />
        </section>

        <section className={styles.section}>
          <div>
            <h2>Critical Path Analysis</h2>
            <p style={{ color: "#bbb", lineHeight: 1.7 }}>
              Quartus timing analysis identified a long critical path spanning the
              memory bus, physical memory, instruction/data memory interfaces,
              register file, ALU adder, writeback mux, and back into the register
              file. This reflected the cost of general-purpose execution in a
              single-cycle architecture.
            </p>
          </div>

          <img
            src="/images/riscv-critical-path.png"
            alt="TinyRV1 critical path diagram"
            style={imgStyle}
          />
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Overview</h2>
          <p style={{ color: "#bbb", lineHeight: 1.7 }}>
            This project focused on implementing a general-purpose single-cycle
            processor and then analyzing its performance on real hardware. After
            building the processor, I wrote and ran assembly programs including a
            calculator and an accumulate loop, then compared this general
            processor approach against a specialized hardware accelerator.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Key Design Elements</h2>
          <ul style={{ color: "#bbb", lineHeight: 1.8 }}>
            <li>
              <strong>Single-cycle datapath:</strong> Each instruction is fetched,
              decoded, executed, and written back in one clock cycle.
            </li>
            <li>
              <strong>Control unit:</strong> Generates control signals based on
              instruction decoding and processor state.
            </li>
            <li>
              <strong>Assembly execution:</strong> Custom programs were compiled
              and run directly on the implemented hardware.
            </li>
            <li>
              <strong>FPGA deployment:</strong> The full design was synthesized in
              Quartus and programmed onto an FPGA for testing.
            </li>
            <li>
              <strong>System integration:</strong> The project also interfaced
              with memory, SPI, and external inputs in an embedded setting.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Assembly Program</h2>
          <p style={{ color: "#bbb", lineHeight: 1.7 }}>
            To test the processor, I used an accumulate assembly program that
            initialized a base memory address, iterated through an array, loaded
            each value, added it to a running sum, incremented the address, and
            used a branch instruction to loop until completion. This provided a
            clean way to validate instruction execution and measure performance.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Performance</h2>
          <div className={styles.metrics}>
            <div style={metricStyle}>
              <div style={{ color: "#888", fontSize: "0.9rem", marginBottom: "8px" }}>
                Min Cycle Time
              </div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>57.308 ns</div>
            </div>

            <div style={metricStyle}>
              <div style={{ color: "#888", fontSize: "0.9rem", marginBottom: "8px" }}>
                Measured Runtime
              </div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>12.7 µs</div>
            </div>

            <div style={metricStyle}>
              <div style={{ color: "#888", fontSize: "0.9rem", marginBottom: "8px" }}>
                ALM Utilization
              </div>
              <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>36%</div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Area and Resource Use</h2>
          <p style={{ color: "#bbb", lineHeight: 1.7 }}>
            Synthesis showed that the processor occupied a substantial portion of
            the FPGA fabric, using 15,544 combinational ALUTs and 6,001 dedicated
            logic registers. Relative to earlier lab projects, it required
            significantly more area, reflecting the cost of supporting general
            instruction execution in hardware.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Design Tradeoffs</h2>
          <p style={{ color: "#bbb", lineHeight: 1.7 }}>
            A key lesson from this project was the tradeoff between generality and
            efficiency. The processor can execute a broad range of instructions
            and control flow, but that flexibility increases both area and delay.
            In contrast, the specialized accumulate accelerator used far less
            hardware and achieved better timing because it only implemented the
            logic required for one task.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Takeaways</h2>
          <p style={{ color: "#bbb", lineHeight: 1.7 }}>
            This project gave me hands-on experience building a processor from the
            ISA level down to RTL and FPGA implementation. It strengthened my
            understanding of datapath and control design, hardware/software
            interaction, timing analysis, and the practical engineering tradeoffs
            between a flexible processor and specialized hardware acceleration.
          </p>
        </section>

        <a
          href="/"
          style={{
            color: "#aaa",
            textDecoration: "none",
            marginTop: "20px",
            display: "inline-block",
          }}
        >
          ← Back to Home
        </a>
      </main>
    );
  }
