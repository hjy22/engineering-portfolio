import Nav from "@/components/Nav";

export default function BMBPage() {
  return (
    <>
      <Nav />

      <main className="simpleProject">
        <a className="back" href="/#projects">
          ← Back to projects
        </a>

        <header className="simpleProjectHeader">
          <p className="projectType">
            PCB Design · Power Electronics · Embedded Systems
          </p>

          <h1>Battery Management Board</h1>

          <p className="projectIntro">
            A custom battery management board developed for Cornell
            Autonomous Underwater Vehicle. The board monitors and protects a
            4S lithium-polymer battery while providing battery telemetry,
            cell balancing, sensing, and high-current power control.
          </p>

          <div className="projectTags">
            <span>BQ40Z50</span>
            <span>4S LiPo</span>
            <span>SMBus</span>
            <span>Altium</span>
            <span>Embedded C</span>
          </div>
        </header>

        <img
          className="projectMainImage"
          src="/projects/bmb/hero.png"
          alt="Battery Management Board"
        />

        <section className="simpleSection">
          <h2>Overview</h2>

          <p>
            The board is responsible for monitoring battery voltage, current,
            temperature, capacity, and protection status while controlling the
            battery&apos;s charge and discharge path.
          </p>

          <p>
            The design is centered around the BQ40Z50 battery management
            controller and includes supporting circuitry for protection,
            passive cell balancing, communication, power switching, and
            onboard diagnostics.
          </p>
        </section>

        <section className="simpleSection">
          <h2>Key Features</h2>

          <div className="simpleGrid">
            <div>
              <strong>Battery Monitoring</strong>
              <p>
                Cell and pack voltage, current, temperature, capacity, and
                state-of-health monitoring.
              </p>
            </div>

            <div>
              <strong>Protection</strong>
              <p>
                Hardware protection for overvoltage, undervoltage,
                overcurrent, short-circuit, and thermal conditions.
              </p>
            </div>

            <div>
              <strong>Power Control</strong>
              <p>
                High-current MOSFET switching for independent charge and
                discharge control.
              </p>
            </div>

            <div>
              <strong>Communication</strong>
              <p>
                SMBus communication provides battery telemetry and fault
                information to the vehicle.
              </p>
            </div>
          </div>
        </section>

        <section className="simpleSection">
          <h2>My Contribution</h2>

          <ul>
            <li>Schematic capture and electrical design</li>
            <li>Component selection and PCB layout in Altium Designer</li>
            <li>BQ40Z50 SMBus integration</li>
            <li>Board bring-up and hardware debugging</li>
            <li>System integration with the AUV electrical architecture</li>
          </ul>
        </section>

        <section className="projectImages">
          <img
            src="/projects/bmb/layout.png"
            alt="Battery Management Board PCB layout"
          />

          <img
            src="/projects/bmb/board.png"
            alt="Assembled Battery Management Board"
          />
        </section>

        <section className="simpleSection">
          <h2>Takeaway</h2>

          <p>
            This project gave me experience combining embedded communication,
            battery sensing, protection circuitry, PCB design, and
            high-current power electronics into a single system intended for
            real-world robotic operation.
          </p>
        </section>

        <div className="projectBottom">
          <a href="/#projects">← All projects</a>
          <a href="/projects/sensor">Sensor Board →</a>
        </div>
      </main>
    </>
  );
}