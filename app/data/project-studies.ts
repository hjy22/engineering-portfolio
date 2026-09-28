import type { Study } from "../components/ProjectStudy";

export const projectStudies = {
  "bmb": {
    "title": "Battery Management Board",
    "context": "2025–2026 · CUAUV · PCB design",
    "summary": "Battery protection, pack telemetry, and local diagnostics for an autonomous underwater vehicle—designed around a tightly constrained battery pod and a high-current power path.",
    "role": "Battery board development and technical documentation for CUAUV.",
    "skills": "Altium · Power electronics · SMBus / I2C · Hardware debugging",
    "hero": {
      "src": "/images/reports/bmb-board.webp",
      "width": 2000,
      "height": 845,
      "alt": "Battery management PCB rendering with power MOSFETs and OLED footprint",
      "caption": "Board rendering from the Spring 2026 technical report."
    },
    "metrics": [
      {
        "value": "4S / 10 Ah",
        "label": "Target LiPo pack"
      },
      {
        "value": "60 A",
        "label": "Short-duration discharge design target"
      },
      {
        "value": "5.1 × 2.125 in",
        "label": "Required board envelope"
      }
    ],
    "sections": [
      {
        "title": "Managing the battery as a system",
        "paragraphs": [
          "The BQ40Z50 manages cell monitoring, balancing, and protection through the charge and discharge MOSFETs. An ATXMEGA32A4U reads battery data over SMBus, interfaces with the humidity sensor and OLED, and reports pack status to the vehicle’s Jetson through RS-232.",
          "The revision adds humidity sensing, reorganizes the power path, and removes the emergency trigger fuse after reliability and serviceability concerns. It builds on the team’s earlier battery management hardware."
        ],
        "figures": [
          {
            "src": "/images/reports/bmb-power-path.webp",
            "width": 1462,
            "height": 804,
            "alt": "BQ40Z50 battery management schematic and charge-discharge power path",
            "caption": "Battery management circuit, including cell connections, sensing, and the switched power path."
          }
        ]
      },
      {
        "title": "Power control without unnecessary drain",
        "paragraphs": [
          "The board must sleep when disconnected and wake when the pod is connected to the vehicle or charger. Either the system-present signal or the external reed switch enables the supporting rails and asserts the BQ40Z50 system-present input.",
          "Display control is separate: the reed-switch path also signals the MCU to activate the OLED. This preserves local access to battery status without making every pod connection a display-on event."
        ],
        "figures": [
          {
            "src": "/images/reports/bmb-wake.webp",
            "width": 776,
            "height": 600,
            "alt": "System-present MOSFET control schematic",
            "caption": "Wake logic combines pod connection detection with reed-switch input."
          }
        ]
      },
      {
        "title": "Layout shaped by current and clearance",
        "paragraphs": [
          "The enclosure’s domed height limit places taller components near the center. Short, wide copper regions carry the high-current path, while sensitive signals sit away from the switching and power circuitry.",
          "The report specifies 2 oz outer copper, balanced routing through parallel MOSFETs, and Kelvin connections at the current-sense resistor. These choices address heating, current sharing, and measurement noise within the mechanical envelope."
        ],
        "figures": [
          {
            "src": "/images/reports/bmb-front.webp",
            "width": 1646,
            "height": 694,
            "alt": "Front copper layout of the battery management board",
            "caption": "Front-layer layout showing the separation between power and signal circuitry."
          }
        ]
      },
      {
        "title": "Bring-up and remaining validation",
        "paragraphs": [
          "The Spring 2026 report documents multiple PCB revisions and ongoing debugging. The updated board had not yet been fully validated in-system; intermittent BQ40Z50 / EV2400 / bqStudio communication remained an issue.",
          "Bring-up focused on distinguishing communication problems, FET-control state, and failures in the actual output power path. The 60 A value is a design requirement, not a reported load-test result."
        ]
      }
    ],
    "credit": "Based on Battery Management Board Technical Report, Spring 2026, by Henry Yoon. Status reflects the report; earlier deployed boards and the current revision are distinct."
  },
  "sensor-board": {
    "title": "Sensor Board",
    "context": "2024–2025 · CUAUV · Embedded hardware",
    "summary": "A sensor interface board that brings temperature, internal pressure, and external depth data into the vehicle’s compute system, with a new digital depth-sensing path.",
    "role": "Sensor board development and technical documentation for CUAUV.",
    "skills": "Altium · I2C / SPI · RS-232 · Sensor integration",
    "hero": {
      "src": "/images/reports/sensor-board.webp",
      "width": 1466,
      "height": 1304,
      "alt": "Sensor board PCB rendering with backplane connector and test points",
      "caption": "Sensor Board v15.0, as documented in the 2025 report."
    },
    "metrics": [
      {
        "value": "I2C",
        "label": "Digital depth and temperature interfaces"
      },
      {
        "value": "SPI",
        "label": "External pressure ADC interface"
      },
      {
        "value": "RS-232",
        "label": "Vehicle telemetry connection"
      }
    ],
    "sections": [
      {
        "title": "From sensor inputs to vehicle telemetry",
        "paragraphs": [
          "An ATXMEGA32A4U collects readings from the MCP9808 temperature sensor, the external depth sensor, and the pressure-sensor ADC chain. An ADM3315E translates the MCU’s UART interface to RS-232 for communication with the main computer.",
          "The PCB also includes isolated leak-signal circuitry. The report identifies this as unresolved hardware rather than a validated sensing feature."
        ],
        "figures": [
          {
            "src": "/images/reports/sensor-mcu.webp",
            "width": 1554,
            "height": 1116,
            "alt": "Sensor board microcontroller schematic with sensor and communication connections",
            "caption": "MCU connections bring the board’s sensor interfaces and serial communication together."
          }
        ]
      },
      {
        "title": "Moving depth sensing to a digital interface",
        "paragraphs": [
          "The updated design replaces the previous analog depth input with a Blue Robotics Bar02 sensor connected over I2C. Initialization resets the sensor and reads calibration constants from its PROM.",
          "The measurement sequence requests pressure and temperature conversions, applies the manufacturer’s compensation formulas, and calculates depth from the compensated pressure. This makes the firmware responsible for both sensor communication and calibrated conversion."
        ]
      },
      {
        "title": "Designing for signal quality and debugging",
        "paragraphs": [
          "The MCU sits near the center to reduce trace length, while test points along the top edge provide access during bring-up. Local decoupling, short crystal connections, and separation of analog and digital routing guide placement.",
          "The pressure path combines an analog sensor, a reference, and a MAX11100 ADC. Assembly notes emphasize the ADC’s fine-pitch soldering and alignment challenges—an important reason to consider a digital pressure sensor in a future revision."
        ],
        "figures": [
          {
            "src": "/images/reports/sensor-front.webp",
            "width": 714,
            "height": 632,
            "alt": "Front copper routing of Sensor Board v15.0",
            "caption": "Front copper layout with the backplane interface and centralized MCU."
          }
        ]
      },
      {
        "title": "What the next revision should simplify",
        "paragraphs": [
          "The report records leak signals stuck high, with all indicator LEDs on, and recommends removing the unused leak circuitry and isolator. It also proposes replacing the analog pressure / external ADC chain with a single I2C pressure sensor.",
          "These are proposed improvements, not changes already implemented in this revision. They target assembly difficulty and unnecessary circuitry while retaining the core telemetry functions."
        ]
      }
    ],
    "credit": "Based on Sensor Board Technical Report, 2025, by Henry Yoon. The documented leak-circuit issue and proposed digital pressure-sensor replacement are preserved as limitations and future work."
  },
  "decoder": {
    "title": "5:32 Decoder",
    "context": "2026 · ECE 4740 · Custom VLSI",
    "summary": "A transistor-level decoder optimized around the enable-to-output path, with custom logic and integrated output drivers carried through physical layout and extracted simulation.",
    "role": "Complete decoder design, schematic, layout, and verification.",
    "skills": "Cadence Virtuoso · Logical effort · Custom cells · Parasitic extraction",
    "hero": {
      "src": "/images/reports/decoder-layout.webp",
      "width": 1142,
      "height": 1372,
      "alt": "Complete physical layout of the 5-to-32 decoder",
      "caption": "Decoder layout with grouped output drivers and distributed enable routing."
    },
    "metrics": [
      {
        "value": "32",
        "label": "Decoded outputs"
      },
      {
        "value": "271 ps",
        "label": "Maximum latency, extracted MATLAB test 1"
      },
      {
        "value": "46 ps",
        "label": "Worst edge time, extracted MATLAB test 2"
      }
    ],
    "sections": [
      {
        "title": "Optimizing the path that mattered",
        "paragraphs": [
          "The initial design used 32 independent six-input AND gates. Subsequent iterations explored hierarchical decoding and higher-fan-in NOR logic, but the key performance constraint was the path from enable to output—not from the address inputs.",
          "I moved enable control to the final output logic and divided its load into groups of eight drivers. This reduced branching on the critical control path and avoided the input-dependent behavior of a large NOR gate."
        ],
        "figures": [
          {
            "src": "/images/reports/decoder-topology.webp",
            "width": 1017,
            "height": 1143,
            "alt": "Hand-drawn decoder topology with enable-controlled output drivers",
            "caption": "The topology places enable control close to the output driver stage."
          }
        ]
      },
      {
        "title": "Combining logic and drive strength",
        "paragraphs": [
          "The output drivers dominated the design, so optimizing the decode logic alone offered limited benefit. I created a compact AND2 cell and integrated the final logic with a ×4 NAND / ×16 inverter driver.",
          "Physical layout followed the signal flow while keeping the enable drivers near the final gates. Inspecting node rise and fall times helped identify insufficient drive strength and guide sizing."
        ],
        "figures": [
          {
            "src": "/images/reports/decoder-driver.webp",
            "width": 1201,
            "height": 681,
            "alt": "Custom AND2 schematic with integrated output driver",
            "caption": "The custom output gate combines logic with the required driver stages."
          }
        ]
      },
      {
        "title": "Verification across switching patterns",
        "paragraphs": [
          "Both reported MATLAB test sequences passed logical correctness checks. The second pattern changes more address bits between decodes, which increases switching energy even though the reported latency range remains similar.",
          "The results below are the report’s extracted-design MATLAB tables. Separate waveform measurements use different timing observations and are not combined with these values."
        ],
        "figures": [
          {
            "src": "/images/reports/decoder-waveform.webp",
            "width": 1063,
            "height": 626,
            "alt": "Decoder simulation waveforms for the second input sequence",
            "caption": "Functional simulation for the second test sequence, which exercises larger input transitions."
          }
        ],
        "table": {
          "caption": "Extracted simulation results reported in Lab 2",
          "headings": [
            "Metric",
            "Test sequence 1",
            "Test sequence 2"
          ],
          "rows": [
            [
              "Logical correctness",
              "Pass",
              "Pass"
            ],
            [
              "Latency range",
              "262–271 ps",
              "261–270 ps"
            ],
            [
              "Worst rise / fall time",
              "45.6 ps",
              "46 ps"
            ],
            [
              "Energy per decode",
              "136 fJ",
              "173 fJ"
            ]
          ]
        }
      }
    ],
    "credit": "ECE 4740 Lab 2 report lists Henry Yoon and Kelvin Resch. Individual design ownership is described according to Henry’s clarification. All performance values are simulated."
  },
  "dff": {
    "title": "Custom D Flip-Flop",
    "context": "2026 · ECE 4740 · Sequential logic",
    "summary": "A positive-edge-triggered flip-flop taken from a transmission-gate schematic to a compact physical layout, with timing characterization that exposes the cost of routing parasitics.",
    "role": "Complete flip-flop design, layout, and characterization.",
    "skills": "Cadence Virtuoso · Sequential timing · Extraction · Verilog-A",
    "hero": {
      "src": "/images/reports/dff-layout.webp",
      "width": 756,
      "height": 630,
      "alt": "Custom master-slave flip-flop physical layout",
      "caption": "Compact flip-flop layout with shared connections between pass gates and inverters."
    },
    "metrics": [
      {
        "value": "235.868 ps",
        "label": "Extracted clock-to-Q delay"
      },
      {
        "value": "10.4 fJ",
        "label": "Extracted energy per cycle"
      },
      {
        "value": "45 ps",
        "label": "Extracted setup time"
      }
    ],
    "sections": [
      {
        "title": "A buffered master–slave structure",
        "paragraphs": [
          "The cell uses transmission gates in a master–slave arrangement, with input and output inverters to control loading and reduce output back-injection. It provides a positive-edge clock and Q output, without set or reset.",
          "Characterization included heavy capacitive loading, output perturbation, and setup / hold violations. Timing violations produced delayed or unpredictable output, making metastability behavior part of the evaluation."
        ],
        "figures": [
          {
            "src": "/images/reports/dff-schematic.webp",
            "width": 1028,
            "height": 580,
            "alt": "Transmission-gate master-slave D flip-flop schematic",
            "caption": "Master–slave storage stages with input and output buffering."
          }
        ]
      },
      {
        "title": "The cost of a compact layout",
        "paragraphs": [
          "Directly connecting pass gates and inverters removed four nets and allowed dense transistor placement. That compactness made routing more difficult and led to substantial polysilicon routing.",
          "Extraction increased clock-to-Q delay from 81.115 ps to 235.868 ps and energy per cycle from 3.66 fJ to 10.4 fJ. The result illustrates why compact geometry alone is not enough: interconnect choices must be evaluated alongside area."
        ],
        "figures": [
          {
            "src": "/images/reports/dff-waveform.webp",
            "width": 1664,
            "height": 492,
            "alt": "Extracted flip-flop simulation showing clock, data, and output",
            "caption": "Post-layout functional simulation used alongside timing characterization."
          }
        ],
        "table": {
          "caption": "Schematic versus extracted simulation, Lab 3",
          "headings": [
            "Metric",
            "Schematic",
            "Extracted"
          ],
          "rows": [
            [
              "Clock-to-Q delay",
              "81.115 ps",
              "235.868 ps"
            ],
            [
              "Energy per cycle",
              "3.66 fJ",
              "10.4 fJ"
            ],
            [
              "Setup time",
              "40 ps",
              "45 ps"
            ],
            [
              "Hold time",
              "−5 ps",
              "−20 ps"
            ]
          ]
        }
      },
      {
        "title": "Using the cell in a larger design",
        "paragraphs": [
          "The lab also exercised the flip-flop in a counter and investigated a delay mismatch in the enable logic. An inverter chain supplied approximately the delay of the flip-flop on the other input path.",
          "A Verilog-A model captured the extracted rise and fall propagation delays for behavioral reuse. This connects detailed cell characterization to simulation of larger circuits."
        ]
      }
    ],
    "credit": "ECE 4740 Lab 3 report lists Henry Yoon and Isabella Frank. Individual flip-flop ownership is described according to Henry’s clarification. Values are simulated, not silicon measurements."
  },
  "sram": {
    "title": "32 × 32-bit SRAM",
    "context": "2026 · ECE 4740 · Memory design",
    "summary": "A 1,024-bit memory built from custom 6T cells, column peripherals, and a row decoder, with attention to read stability, control timing, and physical integration.",
    "role": "Member of the four-person SRAM design team.",
    "skills": "Cadence Virtuoso · SRAM · Sense amplifiers · DRC / LVS",
    "hero": {
      "src": "/images/reports/sram-layout.webp",
      "width": 619,
      "height": 706,
      "alt": "Physical layout of the 32 by 32 SRAM array",
      "caption": "Full memory layout with repeated bitcell columns and peripheral circuitry."
    },
    "metrics": [
      {
        "value": "1,024 bits",
        "label": "Array capacity"
      },
      {
        "value": "1,694 µm²",
        "label": "Reported array area, without FSM"
      },
      {
        "value": "600 ps",
        "label": "Reported column-test cycle period"
      }
    ],
    "sections": [
      {
        "title": "Balancing read stability and writeability",
        "paragraphs": [
          "The team used a conventional six-transistor SRAM cell. Pull-down devices were twice minimum width, while access and pull-up devices remained minimum width to balance read-disturb resistance against writeability.",
          "The bitcell was designed for repeated abutment, with neighboring cells mirrored to accommodate the well geometry. Bitlines on metal 2 and shared power rails supported assembly into the full array."
        ],
        "figures": [
          {
            "src": "/images/reports/sram-bitcell.webp",
            "width": 1232,
            "height": 871,
            "alt": "Six-transistor SRAM bitcell schematic",
            "caption": "Cross-coupled storage inverters and access transistors form the 6T bitcell."
          }
        ]
      },
      {
        "title": "Making the sensing path behave",
        "paragraphs": [
          "Each column includes precharge circuitry, a write driver, and a sense amplifier. A key issue was preventing writes from disturbing the previously read output through the sense amplifier’s bitline connections.",
          "The control logic was changed to connect the sense amplifier to the bitlines only during the intended read interval. Extracted decoder delay also shifted wordline arrival by about 100 ps, requiring control timing that worked across schematic and extracted simulations."
        ],
        "figures": [
          {
            "src": "/images/reports/sram-sense-amplifier.webp",
            "width": 711,
            "height": 554,
            "alt": "Cross-coupled SRAM sense amplifier schematic",
            "caption": "The sense-amplifier topology made bitline isolation during writes an important control requirement."
          }
        ]
      },
      {
        "title": "Array integration and verification",
        "paragraphs": [
          "The assembled array passed DRC and LVS after well-abutment fixes. Power distribution used upper metal layers with repeated via connections into the dense bitcell array. A slow read-control edge was addressed by strengthening its driver.",
          "The report gives a 1,694 µm² array area and 1,826 µm² with the optional control FSM. The FSM uses four 200 ps states at a 5 GHz input clock; its four-state cycle is separate from the 600 ps column-test timing.",
          "Full-array schematic simulation consumed 11.88 pJ across 32 write cycles and 8.18 pJ across 32 read cycles. Dividing by 1,024 stored bits gives approximately 11.60 fJ per written bit and 7.99 fJ per read bit. These are schematic energy results, not extracted full-array measurements."
        ],
        "figures": [
          {
            "src": "/images/reports/sram-waveform.webp",
            "width": 1910,
            "height": 850,
            "alt": "Extracted SRAM column simulation waveforms",
            "caption": "Extracted column verification. The report also includes limited Monte Carlo checks, rather than a statistical yield characterization."
          }
        ]
      }
    ],
    "credit": "Team project with Dennis Bui, Zephan Sanghani, Franky Zheng, and Henry Yoon; Lab 4 report dated April 17, 2026. The integrated decoder was designed by Zephan Sanghani and Irwin Wang. Results are attributed to the team."
  },
  "fpga": {
    "title": "FPGA Fabric with Hardened DSP",
    "context": "2026 · ECE 4740 · Custom VLSI",
    "summary": "A programmable transistor-level fabric combining lookup-table logic, configurable routing, and a multiply-accumulate block. My focus was the configurable logic block at the heart of the fabric.",
    "role": "Configurable logic block (CLB) design within a five-person team.",
    "skills": "Cadence Virtuoso · LUT architecture · SRAM configuration · Custom layout",
    "hero": {
      "src": "/images/reports/fpga-clb-layout.webp",
      "width": 696,
      "height": 675,
      "alt": "Configurable logic block physical layout",
      "caption": "Physical layout of the CLB, my focus within the FPGA project."
    },
    "metrics": [
      {
        "value": "4 inputs",
        "label": "Lookup-table width"
      },
      {
        "value": "722 ps",
        "label": "Team XOR test propagation delay"
      },
      {
        "value": "576 bits",
        "label": "Configuration for the team XOR test"
      }
    ],
    "sections": [
      {
        "title": "A logic block that can change function",
        "paragraphs": [
          "Each CLB uses sixteen stored truth-table values and a 16:1 multiplexer tree to implement a four-input Boolean function. An additional mux selects either the direct LUT output or the output after a flip-flop, enabling combinational and sequential operation.",
          "The LUT tree contains four stages of 2:1 multiplexers. Inverters after stages two and four restore signal edges. Configuration memory controls the logic function and output mode, while an output switch connects the result to the surrounding routing wires."
        ],
        "figures": [
          {
            "src": "/images/reports/fpga-clb.webp",
            "width": 1076,
            "height": 579,
            "alt": "Top-level configurable logic block schematic",
            "caption": "The CLB combines configuration storage, LUT selection, an optional registered output, and routing selection."
          }
        ]
      },
      {
        "title": "Integrating logic, routing, and arithmetic",
        "paragraphs": [
          "The team’s architecture combines configurable logic with switch blocks and a hardened multiply-accumulate unit. The MAC multiplies two four-bit inputs and accumulates into an eight-bit register.",
          "Switch blocks connect cardinal routing directions through configurable transmission gates and buffers. Interface choices mattered during integration: a driven-low wire where a high-impedance state was expected could prevent neighboring blocks from working together."
        ],
        "figures": [
          {
            "src": "/images/reports/fpga-architecture.webp",
            "width": 670,
            "height": 654,
            "alt": "FPGA architecture diagram showing CLBs, switch blocks, and MAC DSP",
            "caption": "System architecture from the team report. My contribution was the CLB; routing and DSP were team subsystems."
          }
        ]
      },
      {
        "title": "Programming and validating the fabric",
        "paragraphs": [
          "For the team’s top-level test, twelve switch blocks and four CLBs routed two four-bit inputs across the fabric, evaluated XOR, and returned the result to the edge. The test required 576 manually prepared configuration bits.",
          "With B held at 1111 and A counting from 0 to 15, the output counted from 15 to 0. The report gives a 722 ps propagation delay and 2.5 pJ for sixteen four-bit XOR evaluations—approximately 39 fJ per output bit. These are results for the integrated testbench, not standalone CLB measurements."
        ],
        "figures": [
          {
            "src": "/images/reports/fpga-routing-test.webp",
            "width": 678,
            "height": 470,
            "alt": "Annotated FPGA routing test with paths for A, B, and Y",
            "caption": "The XOR test routes inputs from the fabric edge to the CLBs and returns the outputs."
          },
          {
            "src": "/images/reports/fpga-waveform.webp",
            "width": 991,
            "height": 635,
            "alt": "Four-bit XOR simulation with A counting upward and Y counting downward",
            "caption": "Top-level functional verification with B = 1111. The report identifies 22,344 transistors in this testbench."
          }
        ]
      }
    ],
    "credit": "Team report by Emily Lan, Isabella Frank, Parishee Bajaj, Kelvin Resch, and Henry Yoon. Henry owned the CLB; system-level results belong to the team. Results are simulations, not fabricated-chip measurements."
  }
} satisfies Record<string, Study>;
