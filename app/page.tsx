import styles from "./page.module.css";

type Project = {
  title: string;
  subtitle: string;
  image?: string;
  year: number;
  link?: string;
  type: "case-study" | "project" | "in-progress";
};


export default function Home() {
  const projects: Project[] = [
    {
      title: "Battery Management Board",
      subtitle: "CUAUV · Altium · Power Electronics",
      year: 2026,
      image: "/images/reports/bmb-board.webp",
      link: "/projects/bmb",
      type: "case-study",
    },
    {
      title: "Sensor Board",
      subtitle: "CUAUV · Altium · Microcontrollers",
      year: 2025,
      image: "/images/reports/sensor-board.webp",
      link: "/projects/sensor-board",
      type: "case-study",
    },
    {
      title: "5:32 Decoder",
      subtitle: "ECE4740 · VLSI · Digital Logic",
      year: 2026,
      image: "/images/reports/decoder-layout.webp",
      link: "/projects/decoder",
      type: "case-study",
    },
    {
      title: "RISC-V Single Cycle Processor",
      subtitle: "ECE2300 · Quartus · SystemVerilog",
      year: 2025,
      image: "/images/2300.png",
      link: "/projects/riscv",
      type: "case-study",
    },
    {
      title: "FPGA Fabric with Hardened DSP",
      subtitle: "ECE4740 · CLB Design · Programmable Logic",
      year: 2026,
      image: "/images/reports/fpga-clb-layout.webp",
      link: "/projects/fpga",
      type: "case-study",
    },
    {
      title: "32 × 32-bit SRAM",
      subtitle: "ECE4740 · Memory Design · Custom Layout",
      year: 2026,
      image: "/images/reports/sram-layout.webp",
      link: "/projects/sram",
      type: "case-study",
    },
    {
      title: "Custom D Flip-Flop",
      subtitle: "ECE4740 · Sequential Logic · Timing Characterization",
      year: 2026,
      image: "/images/reports/dff-layout.webp",
      link: "/projects/dff",
      type: "case-study",
    },
    {
      title: "4:1 Multiplexer",
      subtitle: "VLSI",
      year: 2026,
      image: "/images/mux-layout.png",
      link: "/projects/mux",
      type: "case-study",
    },
  ];

  const smallProjects = [
    { title: "Nitrogen Laser", description: "Amplification circuitry." },
    { title: "VR Rowing Simulator", description: "Hand-tracking interface for a virtual rowing experience." },
    { title: "Custom Keyboard", description: "ATmega32U4 firmware and keyboard matrix scanning." },
    { title: "Resistor-Chain DAC", description: "Digital-to-analog conversion using a resistor chain." },
    { title: "Custom Bird Synthesizer", description: "Bird-call sound synthesis." },
    { title: "Diode Characterization & Signal Detection", description: "ECE 3150 · Diode I–V measurements, exponential amplification, and recovery of a modulated audio signal." },
    { title: "MOSFET Characterization", description: "ECE 3150 · NMOS and PMOS transfer curves, transconductance, and output resistance." },
    { title: "CMOS Inverter & Ring Oscillator", description: "ECE 3150 · Inverter delay and power measurements, plus a three-stage ring oscillator." },
    { title: "Differential Amplifier", description: "ECE 3150 · Differential and common-mode response with tail-resistor and current-source biasing." },
    { title: "Common-Source Amplifier", description: "ECE 3150 · Bias, loaded gain, and bandwidth characterization on PCB and breadboard circuits." },
  ];

  const inProgressProjects = [
    { title: "Optimized Double-Buffered Dalton Board", description: "Double buffering and performance optimization." },
    { title: "Pipelined TinyRV2 RISC-V CPU", description: "Pipelined processor design using the TinyRV2 instruction set." },
  ];

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Main navigation">
          <span className={styles.wordmark}>HENRY YOON</span>
          <div className={styles.navLinks}>
            <a href="#projects">Projects</a>
            <a href="#in-progress">In progress</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className={styles.hero} aria-labelledby="intro-title">
          <div>
            <p className={styles.eyebrow}>Electrical & Computer Engineering @ Cornell</p>
            <h1 id="intro-title">Hardware systems, embedded design, and VLSI.</h1>
            <p className={styles.intro}>
              I am a Cornell ECE student focused on embedded systems, custom
              hardware, VLSI, and digital design. I work on PCB development,
              sensor integration, hardware debugging, and systems that connect
              circuit-level thinking to real implementation.
            </p>
          </div>
          <aside className={styles.profile} aria-label="About Henry">
            <div className={styles.portrait} role="img" aria-label="Henry Yoon" />
            <div>
              <p className={styles.profileName}>Henry Yoon</p>
              <p className={styles.profileRole}>CUAUV Electrical Lead<br />Hardware Intern @ HavocAI</p>
            </div>
            <div className={styles.profileLinks}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
              <a href="https://linkedin.com/in/hjy22" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
            <p className={styles.skills}>PCB design · Embedded systems · VLSI</p>
          </aside>
        </section>

        <section id="projects" className={styles.projects} aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <div className={styles.projectGrid}>
            {sortedProjects.map((project) => {
              const content = (
                <>
                  {project.image && (
                    <div className={styles.projectImage} style={{ backgroundImage: `url(${project.image})` }} />
                  )}
                  <div className={styles.cardBody}>
                    <span className={styles.year}>{project.year}</span>
                    <div className={styles.cardHeading}>
                      <h3>{project.title}</h3>
                      {project.link && <span aria-hidden="true">↗</span>}
                    </div>
                    <p>{project.subtitle}</p>
                  </div>
                </>
              );

              return project.link ? (
                <a key={project.title} href={project.link} className={styles.card}>
                  {content}
                </a>
              ) : (
                <article key={project.title} className={styles.card}>
                  {content}
                </article>
              );
            })}
          </div>
        </section>

        <section id="small-projects" className={styles.compactSection} aria-labelledby="small-projects-title">
          <p className={styles.eyebrow}>Completed</p>
          <h2 id="small-projects-title">Small projects & experiments</h2>
          <ul className={styles.compactGrid}>
            {smallProjects.map((project) => (
              <li key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
          <p className={styles.labCredit}>ECE 3150 labs completed with Erica Jiang and Bobby Henkelmann.</p>
        </section>

        <section id="in-progress" className={styles.compactSection} aria-labelledby="in-progress-title">
          <p className={styles.eyebrow}>Currently building</p>
          <h2 id="in-progress-title">In progress</h2>
          <ul className={styles.compactGrid}>
            {inProgressProjects.map((project) => (
              <li key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <p className={styles.eyebrow}>Contact</p>
          <h2 id="contact-title">Let’s connect.</h2>
          <p className={styles.contactDescription}>
            I am interested in opportunities in hardware engineering, embedded
            systems, and VLSI where I can design, build, and contribute to real
            projects and systems.
          </p>
          <a href="mailto:henryyoon06@gmail.com">henryyoon06@gmail.com <span aria-hidden="true">↗</span></a>
        </section>
      </div>
    </main>
  );
}
