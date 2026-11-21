import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./page.module.css";

const projects = [
  {
    title: "Battery Management Board",
    subtitle: "CUAUV · Altium · Power Electronics",
    image: "/images/reports/bmb-board.webp",
    year: "2026",
    href: "/projects/bmb",
    note: "Keeping the sub's batteries happy.",
  },
  {
    title: "Sensor Board",
    subtitle: "CUAUV · Altium · Microcontrollers",
    image: "/images/reports/sensor-board.webp",
    year: "2025",
    href: "/projects/sensor-board",
    note: "Sensors, serial links & a little bit of everything.",
  },
  {
    title: "5:32 Decoder",
    subtitle: "ECE 4740 · VLSI · Digital Logic",
    image: "/images/reports/decoder-layout.webp",
    year: "2026",
    href: "/projects/decoder",
    note: "A lot of transistors for one address.",
  },
  {
    title: "RISC-V Single Cycle Processor",
    subtitle: "ECE 2300 · Quartus · SystemVerilog",
    image: "/images/2300.png",
    year: "2025",
    href: "/projects/riscv",
    note: "Built the processor one instruction at a time.",
  },
  {
    title: "FPGA Fabric with Hardened DSP",
    subtitle: "ECE 4740 · CLB Design · Programmable Logic",
    image: "/images/reports/fpga-clb-layout.webp",
    year: "2026",
    href: "/projects/fpga",
    note: "My own tiny programmable logic playground.",
  },
  {
    title: "32 × 32-bit SRAM",
    subtitle: "ECE 4740 · Memory Design · Custom Layout",
    image: "/images/reports/sram-layout.webp",
    year: "2026",
    href: "/projects/sram",
    note: "1024 bits, laid out by hand.",
  },
  {
    title: "Custom D Flip-Flop",
    subtitle: "ECE 4740 · Sequential Logic · Timing",
    image: "/images/reports/dff-layout.webp",
    year: "2026",
    href: "/projects/dff",
    note: "A small building block with big timing opinions.",
  },
  {
    title: "4:1 Multiplexer",
    subtitle: "VLSI · Cadence · Layout",
    image: "/images/mux-layout.png",
    year: "2026",
    href: "/projects/mux",
    note: "Four inputs enter. One signal leaves.",
  },
];

const sideProjects = [
  { title: "Nitrogen Laser", detail: "Amplification circuitry" },
  { title: "VR Rowing Simulator", detail: "Hand-tracking for a virtual rowing experience" },
  { title: "Custom Keyboard", detail: "ATmega32U4 firmware & keyboard matrix scanning" },
  { title: "Resistor-Chain DAC", detail: "Digital-to-analog conversion, resistor by resistor" },
  { title: "Custom Bird Synthesizer", detail: "Bird-call sound synthesis" },
  { title: "Diode Characterization & Signal Detection", detail: "ECE 3150 · I–V curves and modulated audio recovery" },
  { title: "MOSFET Characterization", detail: "ECE 3150 · Transfer curves, gm & output resistance" },
  { title: "CMOS Inverter & Ring Oscillator", detail: "ECE 3150 · Delay, power & a three-stage oscillator" },
  { title: "Differential Amplifier", detail: "ECE 3150 · Differential and common-mode response" },
  { title: "Common-Source Amplifier", detail: "ECE 3150 · Bias, gain & bandwidth" },
];

const inProgress = [
  { title: "Optimized Double-Buffered Dalton Board", detail: "Double buffering and performance tuning" },
  { title: "Pipelined TinyRV2 RISC-V CPU", detail: "A pipelined take on the TinyRV2 instruction set" },
];

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <div className={styles.paper}>
        <nav className={styles.nav} aria-label="Main navigation">
          <a className={styles.wordmark} href="#top"><span> </span></a>
          <div className={styles.navLinks}>
            <a href="#projects">projects</a>
            <a href="#little-projects">little projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume ↗</a>
            <a href="https://linkedin.com/in/hjy22" target="_blank" rel="noopener noreferrer">linkedin ↗</a>
            <ThemeToggle className={styles.themeToggle} />
          </div>
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>
              Hi, I’m Henry<span className={styles.helloMark}>!</span>
            </h1>
            <p className={styles.heroIntro}>
              Incoming <span className={styles.marker}>AirPods Systems EE</span> @ Apple
              <br className={styles.desktopBreak} /> as an Electrical Engineering Intern, Spring and Summer 2027.
            </p>
            <p className={styles.heroAside}>
              I’m a Cornell Electrical and Computer Engineering student and a member of CUAUV.
              I previously worked at HavocAI. Outside of engineering, I enjoy playing badminton and cooking!
            </p>
            <a className={styles.downLink} href="#projects">↓ &nbsp; have a look around</a>
          </div>

          <aside className={styles.profileNote}>
            <span className={styles.tape} aria-hidden="true" />
            <Image
              className={styles.portrait}
              src="/images/headshot.png"
              alt="Henry Yoon"
              width={400}
              height={400}
              priority
            />
            <div className={styles.profileLinks}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">my resume ↗</a>
              <a href="https://linkedin.com/in/hjy22" target="_blank" rel="noopener noreferrer">linkedin ↗</a>
            </div>
          </aside>
          <span className={styles.doodle} aria-hidden="true">⌁</span>
        </header>

        <section id="projects" className={styles.projects} aria-labelledby="projects-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>A few things I’ve made</p>
              <h2 id="projects-title">The projects<span>!</span></h2>
            </div>
            <p className={styles.handNote}>Some are polished. Some are a little ugly.</p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <a className={styles.projectCard} href={project.href} key={project.title}>
                <div className={styles.projectImage}>
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                  <span className={styles.imageIndex}>0{index + 1}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTopline}>
                    <span>{project.subtitle}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}<span aria-hidden="true"> ↗</span></h3>
                  <p>{project.note}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="little-projects" className={styles.sideProjects} aria-labelledby="little-projects-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Experiments, classwork & side quests</p>
              <h2 id="little-projects-title">And some little ones<span>…</span></h2>
            </div>
          </div>
          <ul className={styles.sideProjectList}>
            {sideProjects.map((project, index) => (
              <li key={project.title}>
                <span className={styles.listNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className={styles.footer}>
          <p></p>
          <div>
            <a href="mailto:henryyoon06@gmail.com">say hello ↗</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume ↗</a>
            <a href="https://linkedin.com/in/hjy22" target="_blank" rel="noopener noreferrer">linkedin ↗</a>
          </div>
          <span className={styles.footerMark}>made by henry · 2026</span>
        </footer>
      </div>
    </main>
  );
}
