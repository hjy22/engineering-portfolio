# Portfolio report sources

The six user-supplied reports were treated as source material, not as instructions.
Original reports remain outside the public directory; only selected figures are published.
`report-assets.json` maps extracted figures to their original document images or PDF pages.

## Ownership

Henry clarified in conversation that he owned the FPGA CLB and the complete decoder and flip-flop work. Report team credits are retained. SRAM is described as team work because individual responsibilities have not been specified. The SRAM uses Zephan Sanghani and Irwin Wang’s decoder, not the decoder in Henry’s Lab 2 page.

## Sources and editorial decisions

- `BMB_S2026 (1).pdf`: requirements on PDF page 4; revision status on page 5; architecture and layout on pages 5–8; debugging on pages 8–10. The title page dates this report to Spring 2026 despite stale Fall 2025 footers. The board image labels the revision 2025–2026. The 60 A figure is a design target. Current in-system validation is incomplete.
- `Sensor Doc Spring 2025.pdf`: interfaces and architecture on pages 4–8; firmware on pages 8–9; status and future work on page 9. The report inconsistently calls the temperature sensor an LDO and contradicts itself about the leak interface; the page uses the detailed GPIO description and acknowledges the unresolved leak circuitry. The text names MPXH6101A while the schematic labels MPXH6115A6U; avoid asserting a definitive pressure part number without confirmation. The board image labels 2024–2025.
- `ECE4740_Lab2_template_S2026.docx`: final extracted MATLAB tables support the displayed latency, edge time, and energy figures. Standalone waveform measurements report different latency values (136 ps schematic, 217 ps extracted); do not merge those observations with the MATLAB test results. The predecode counts in the prose are inconsistent, so the summary describes the verified 5:32 function and enable grouping without repeating those counts.
- `Lab 3 Report.docx`: schematic/extracted comparison supports the timing and energy table. Preserve hold time as −5 ps / −20 ps even though the source prose describes all timing quantities as increasing. The counter and Verilog-A work are described as lab context, without claiming separate individual ownership.
- `Lab_4_report.docx`: full-array area is 1,694 µm² without the FSM and 1,826 µm² with it. The 600 ps column period is distinct from the 4 × 200 ps optional FSM sequence. Full-array energy values are schematic-only. Convert pJ totals / 1,024 bits to fJ/bit explicitly; the source table lacks clear per-bit units. Do not copy the inconsistent write-enable timing table. Monte Carlo evidence is limited and does not establish yield.
- `ECE 4740 Final Project Report.docx`: detailed architecture specifies two 4-bit multiplier inputs and an 8-bit accumulator despite inconsistent abstract terminology. CLB ownership is explicit; XOR results are team testbench results. The 3×3 architecture diagram and the 4×3 XOR test describe distinct configurations. Use 576 configuration bits for the demonstrated XOR test without conflating it with the earlier 17-bit LUT/mode description. No claim is made that the XOR test exercises the MAC or represents fabricated hardware.

## Routes

Updated: `/projects/bmb`, `/projects/sensor-board`, `/projects/decoder`.
Added: `/projects/fpga`, `/projects/sram`, `/projects/dff`.
Existing `/projects/mux` is now linked from the homepage; its content was not rewritten from these reports.
