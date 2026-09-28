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
    {
      title: "VR Rowing Simulator",
      subtitle: "Hand-Tracking UI",
      year: 2025,
      type: "project",
    },
    {
      title: "Nitrogen Laser",
      subtitle: "Amplification Circuitry",
      year: 2025,
      type: "project",
    },
    {
      title: "Custom Keyboard",
      subtitle: "ATmega32U4 Firmware · Matrix Scanning",
      year: 2024,
      type: "project",
    },

  ];

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Main navigation">
          <span className={styles.wordmark}>HENRY YOON</span>
          <div className={styles.navLinks}>
            <a href="#projects">Projects</a>
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
