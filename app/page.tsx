"use client";

import Nav from "@/components/Nav";
import { FormEvent } from "react";

const projects = [
  {
    title: "Battery Management Board",
    category: "PCB Design · Power Electronics",
    description:
      "A custom battery management board developed for an autonomous underwater vehicle, combining battery monitoring, protection, sensing, and power control.",
    tags: ["CUAUV", "BQ40Z50", "4S LiPo", "SMBus", "PCB Design"],
    image: "/projects/bmb/thumbnail.png",
    href: "/projects/bmb",
  },
  {
    title: "Sensor Board",
    category: "Embedded Systems · PCB Design",
    description:
      "A sensing and communications board for an autonomous underwater vehicle, integrating environmental sensing, onboard monitoring, and serial telemetry.",
    tags: ["CUAUV", "ATXMEGA", "I²C", "SPI", "RS-232"],
    image: "/projects/sensor/thumbnail.png",
    href: "/projects/sensor-board",
  },
  {
    title: "Payload Interface Board V1 and V2",
    category: "Embedded Systems · PCB Design",
    description:
      "A compact hardware interface developed to connect embedded compute hardware with external payload systems while simplifying communications and system integration.",
    tags: ["HavocAI", "PCB Design", "USB", "Ethernet", "Integration"],
    image: "/projects/pli/thumbnail.png",
    href: "/projects/payload-v1",
  },
  {
    title: "32 × 32 SRAM Array",
    category: " Digital VLSI",
    description:
      "A custom SRAM array designed and analyzed at the transistor and layout level, exploring memory architecture, timing, physical implementation, and read/write behavior.",
    tags: ["ECE 4740", "Cadence", "SRAM", "CMOS", "Layout"],
    image: "/projects/sram/thumbnail.png",
    href: "/projects/sram",
  },
  {
    title: "4:1 Multiplexer",
    category: "Digital VLSI",
    description:
      "A transistor-level multiplexer designed, simulated, laid out, and characterized to study propagation delay, loading, and physical design tradeoffs.",
    tags: ["ECE 4740", "Cadence", "CMOS", "Timing", "Layout"],
    image: "/projects/mux/thumbnail.png",
    href: "/projects/mux",
  },
  {
    title: "Custom FPGA Fabric",
    category: "ECE 4740 · Digital VLSI",
    description:
      "A custom FPGA-style fabric combining configurable digital logic with dedicated multiply-accumulate hardware to explore programmable architectures and hardware acceleration.",
    tags: ["FPGA Architecture", "MAC", "VLSI", "Acceleration"],
    image: "/projects/fpga/thumbnail.png",
    href: "/projects/fpga-fabric",
  },
  {
    title: "5:32 One-Hot Decoder",
    category: "Digital VLSI",
    description:
      "A custom decoder implemented from transistor-level logic through physical layout and timing analysis as part of a larger digital VLSI design flow.",
    tags: ["ECE 4740","CMOS", "Decoder", "Cadence", "Layout"],
    image: "/projects/decoder/thumbnail.png",
    href: "/projects/decoder",
  },
  {
    title: "TinyRV1 RISC-V Processor",
    category: "Computer Architecture · FPGA",
    description:
      "A single-cycle processor developed from ISA-level architecture through RTL implementation, verification, synthesis, timing analysis, and FPGA deployment.",
    tags: ["ECE 2300","SystemVerilog", "RISC-V", "Quartus", "FPGA"],
    image: "/projects/ssp/thumbnail.png",
    href: "/projects/tinyrv1",
  },
  {
    title: "Custom Digital Synthesizer",
    category: "Embedded Systems",
    description:
      "A real-time digital synthesizer combining waveform generation, user input, audio output, and embedded control on a microcontroller platform.",
    tags: ["ECE 5730", "Embedded C", "DDS", "Audio", "Microcontrollers"],
    // image: "/projects/synth/thumbnail.png",
    href: "/projects/synth",
  },
];

const skills = [
  "Altium Designer",
  "Cadence Virtuoso",
  "SystemVerilog",
  "Embedded C",
  "PCB Design",
  "Board Bring-Up",
  "STM32",
  "FPGA",
  "I²C / SPI / UART",
  "Power Electronics",
];

export default function Home() {
  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:henryyoon06@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Nav />

      <main className="portfolio">
        {/* INTRO */}

        <section className="intro">
          <div className="introText">
            <p className="label">HENRY YOON · ELECTRICAL & COMPUTER ENGINEERING</p>

            <h1>
              Hi! I'm Henry
            </h1>

            <p className="bio">
              I’m a Cornell ECE student interested in PCB design, embedded
              systems, digital hardware, VLSI, and autonomous systems. I enjoy
              working across the hardware development process: from schematic
              and architecture through PCB layout, bring up, debugging, and
              integration.
            </p>

            <div className="introLinks">
              <a href="/resume.pdf">Resume ↗</a>
              <a href="mailto:henryyoon06@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="skills">
            <p className="label">SELECTED SKILLS</p>

            <div className="skillList">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section className="projects">
          <div className="sectionHeading">
            <div>
              <p className="label">SELECTED WORK</p>
              <h2>Projects</h2>
            </div>

            <p>
              Hardware, embedded systems, computer architecture, and VLSI
              projects. Select a project to see additional design details,
              images, implementation notes, and results.
            </p>
          </div>

          <div className="projectGrid">
            {projects.map((project) => (
              <a
                className="projectCard"
                href={project.href}
                key={project.title}
              >
                <div className="projectImage">
                  <img src={project.image} alt={project.title} />

                  <div className="projectArrow">↗</div>
                </div>

                <div className="projectBody">
                  <p className="projectCategory">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="projectDescription">
                    {project.description}
                  </p>

                  <div className="projectTags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <section className="contact">
          <div className="contactIntro">
            <p className="label">CONTACT</p>

            <h2>Want to talk hardware?</h2>

            <p>
              I’m always interested in hardware, embedded systems, robotics,
              and electrical engineering opportunities.
            </p>

            <a href="mailto:henryyoon06@gmail.com">
              henryyoon06@gmail.com
            </a>
          </div>

          <form className="contactForm" onSubmit={handleContact}>
            <div className="formRow">
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                placeholder="Say hello..."
                rows={6}
                required
              />
            </label>

            <button type="submit">
              Send message <span>↗</span>
            </button>
          </form>
        </section>

        <footer>
          <div>
            <strong>Henry Yoon</strong>
            <span>Electrical & Computer Engineering</span>
          </div>

          <div>
            <a href="/resume.pdf">Resume</a>
            <a href="mailto:henryyoon06@gmail.com">Email</a>
            <a href="#">Top ↑</a>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        :root {
          --background: #080808;
          --card: #0e0e0e;
          --card-hover: #121212;
          --border: #222222;
          --border-hover: #3a3a3a;
          --text: #f4f4f2;
          --secondary: #aaa9a5;
          --muted: #72716d;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--background);
          color: var(--text);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .portfolio {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
          padding-bottom: 50px;
        }

        /* INTRO */

        .intro {
          min-height: 500px;
          padding: 120px 0 80px;
          display: grid;
          grid-template-columns: minmax(0, 1.8fr) minmax(240px, 0.7fr);
          gap: 100px;
          align-items: end;
          border-bottom: 1px solid var(--border);
        }

        .label {
          margin: 0 0 18px;
          color: var(--muted);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
        }

        .intro h1 {
          max-width: 760px;
          margin: 0;
          font-size: clamp(44px, 6.2vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 600;
        }

        .bio {
          max-width: 700px;
          margin: 30px 0 0;
          color: var(--secondary);
          font-size: 17px;
          line-height: 1.7;
        }

        .introLinks {
          display: flex;
          gap: 24px;
          margin-top: 28px;
          font-size: 14px;
        }

        .introLinks a {
          border-bottom: 1px solid #444;
          padding-bottom: 3px;
        }

        .skills {
          padding-bottom: 4px;
        }

        .skillList {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .skillList span {
          padding: 7px 10px;
          border: 1px solid var(--border);
          border-radius: 100px;
          color: var(--secondary);
          font-size: 12px;
        }

        /* PROJECTS */

        .projects {
          padding: 90px 0 110px;
        }

        .sectionHeading {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
          margin-bottom: 38px;
        }

        .sectionHeading h2,
        .contact h2 {
          margin: 0;
          font-size: clamp(34px, 4vw, 48px);
          letter-spacing: -0.04em;
          font-weight: 550;
        }

        .sectionHeading > p {
          max-width: 480px;
          margin: 0;
          color: var(--secondary);
          line-height: 1.6;
          font-size: 14px;
        }

        .projectGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .projectCard {
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 13px;
          background: var(--card);
          transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease;
        }

        .projectCard:hover {
          transform: translateY(-3px);
          background: var(--card-hover);
          border-color: var(--border-hover);
        }

        .projectImage {
          height: 180px;
          position: relative;
          overflow: hidden;
          background: #151515;
          border-bottom: 1px solid var(--border);
        }

        .projectImage img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          opacity: 0.88;
          transition:
            transform 300ms ease,
            opacity 300ms ease;
        }

        .projectCard:hover .projectImage img {
          transform: scale(1.025);
          opacity: 1;
        }

        .projectArrow {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          font-size: 13px;
        }

        .projectBody {
          padding: 19px;
        }

        .projectCategory {
          margin: 0 0 9px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .projectCard h3 {
          margin: 0 0 10px;
          font-size: 19px;
          line-height: 1.2;
          letter-spacing: -0.025em;
          font-weight: 550;
        }

        .projectDescription {
          min-height: 82px;
          margin: 0 0 18px;
          color: var(--secondary);
          font-size: 13px;
          line-height: 1.55;
        }

        .projectTags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .projectTags span {
          padding: 5px 8px;
          border: 1px solid var(--border);
          border-radius: 100px;
          color: #92918d;
          font-size: 10px;
        }

        /* CONTACT */

        .contact {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 100px;
          padding: 90px 0;
          border-top: 1px solid var(--border);
        }

        .contactIntro > p:not(.label) {
          max-width: 390px;
          margin: 20px 0;
          color: var(--secondary);
          font-size: 15px;
          line-height: 1.65;
        }

        .contactIntro > a {
          color: var(--secondary);
          font-size: 14px;
          border-bottom: 1px solid #444;
          padding-bottom: 3px;
        }

        .contactForm {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .formRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .contactForm label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--secondary);
          font-size: 12px;
        }

        .contactForm input,
        .contactForm textarea {
          width: 100%;
          border: 1px solid var(--border);
          border-radius: 9px;
          outline: none;
          background: #0e0e0e;
          color: var(--text);
          padding: 13px 14px;
          font: inherit;
          font-size: 14px;
          resize: vertical;
          transition: border-color 140ms ease;
        }

        .contactForm input:focus,
        .contactForm textarea:focus {
          border-color: #555;
        }

        .contactForm input::placeholder,
        .contactForm textarea::placeholder {
          color: #575757;
        }

        .contactForm button {
          width: fit-content;
          border: 1px solid #e6e6e4;
          border-radius: 100px;
          background: #e6e6e4;
          color: #111;
          padding: 11px 17px;
          font-size: 13px;
          cursor: pointer;
        }

        .contactForm button span {
          margin-left: 7px;
        }

        /* FOOTER */

        footer {
          padding: 28px 0;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          color: var(--muted);
          font-size: 12px;
        }

        footer > div:first-child {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        footer strong {
          color: var(--secondary);
          font-weight: 500;
        }

        footer > div:last-child {
          display: flex;
          gap: 22px;
        }

        footer a:hover {
          color: var(--text);
        }

        /* TABLET */

        @media (max-width: 950px) {
          .intro {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .projectGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contact {
            gap: 50px;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {
          .portfolio {
            width: min(100% - 30px, 1120px);
          }

          .intro {
            padding: 90px 0 60px;
          }

          .intro h1 {
            font-size: 47px;
          }

          .bio {
            font-size: 15px;
          }

          .projects {
            padding: 70px 0 80px;
          }

          .sectionHeading {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .projectGrid {
            grid-template-columns: 1fr;
          }

          .projectImage {
            height: 210px;
          }

          .projectDescription {
            min-height: auto;
          }

          .contact {
            grid-template-columns: 1fr;
            gap: 45px;
            padding: 70px 0;
          }

          .formRow {
            grid-template-columns: 1fr;
          }

          footer {
            flex-direction: column;
            gap: 22px;
          }
        }
      `}</style>
    </>
  );
}