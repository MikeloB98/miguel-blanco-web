import { writeFile } from "node:fs/promises";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const pdf = await PDFDocument.create();
pdf.setTitle("Miguel Blanco García — Curriculum Vitae");
pdf.setAuthor("Miguel Blanco García");
const regular = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
const navy = rgb(0.031, 0.102, 0.184);
const blue = rgb(0.141, 0.341, 0.961);
const copper = rgb(0.725, 0.408, 0.243);
const grey = rgb(0.294, 0.333, 0.388);
const line = rgb(0.78, 0.81, 0.84);
const PAGE = [595.28, 841.89];

function wrap(text, font, size, width) {
  const lines = []; let current = "";
  for (const word of text.split(/\s+/)) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= width) current = next;
    else { if (current) lines.push(current); current = word; }
  }
  if (current) lines.push(current);
  return lines;
}
function page(number) {
  const p = pdf.addPage(PAGE);
  p.drawRectangle({ x: 0, y: 833, width: PAGE[0], height: 9, color: number === 1 ? blue : copper });
  p.drawText(String(number).padStart(2, "0"), { x: 535, y: 25, size: 8, font: bold, color: grey });
  return p;
}
function section(p, title, y) {
  p.drawText(title.toUpperCase(), { x: 42, y, size: 8, font: bold, color: blue });
  p.drawLine({ start: { x: 42, y: y - 7 }, end: { x: 553, y: y - 7 }, thickness: .6, color: line });
  return y - 25;
}
function text(p, value, x, y, width, size = 8.6, leading = 12, font = regular, color = grey) {
  for (const row of wrap(value, font, size, width)) { p.drawText(row, { x, y, size, font, color }); y -= leading; }
  return y;
}
function entry(p, date, title, org, body, y) {
  p.drawText(date, { x: 42, y, size: 8, font: bold, color: copper });
  p.drawText(title, { x: 138, y, size: 10, font: bold, color: navy });
  p.drawText(org, { x: 138, y: y - 14, size: 8.2, font: bold, color: blue });
  return text(p, body, 138, y - 29, 415) - 12;
}

const p1 = page(1);
p1.drawText("MIGUEL", { x: 42, y: 775, size: 30, font: bold, color: navy });
p1.drawText("BLANCO GARCÍA", { x: 42, y: 742, size: 30, font: bold, color: navy });
p1.drawText("SCIENTIFIC PROJECT COORDINATION · MATERIALS · SEMICONDUCTORS", { x: 42, y: 710, size: 8.5, font: bold, color: copper });
p1.drawText("Hamburg, Germany  ·  miguel.blanco1011@gmail.com  ·  linkedin.com/in/miguel-blanco-garcia", { x: 42, y: 684, size: 8, font: regular, color: grey });
let y = section(p1, "Profile", 648);
y = text(p1, "Materials scientist, PhD physicist and chemist by training, combining scientific depth with project coordination, experimental delivery and applied AI. Experienced in turning complex technical questions into structured programmes across international research facilities, multidisciplinary teams and industrial R&D.", 42, y, 511, 9.6, 14, regular, navy) - 14;
y = section(p1, "Professional experience", y);
y = entry(p1, "2022—2026", "PhD Researcher in Physics", "DESY NanoLab / University of Hamburg", "Led a scientific work package in the EU-funded CORAERO project. Designed experimental programmes for photocatalytic semiconductors, coordinated measurements and collaborators, and delivered synchrotron campaigns at DESY, SOLEIL and ESRF. Operated and supported STM/SPM, XPS and FT-IRRAS systems. Produced four peer-reviewed ACS publications, including two first-author JACS papers.", y);
y = entry(p1, "2021—2022", "R&D Plastics Intern", "Repsol", "Supported the RECICLEX project on recycled polymers and polyolefin formulations. Evaluated rheological, thermal and mechanical properties, investigated anomalies and prepared documentation for R&D, quality and industrial teams.", y);
y = entry(p1, "2020—2021", "Research Trainee", "Universidad Autónoma de Madrid", "Studied magnesium ultrathin films for hydrogen storage and photo-assisted hydrogen production. Prepared electrochemical cells and performed cyclic voltammetry, impedance measurements and data analysis.", y);
y = section(p1, "Education", y);
y = entry(p1, "2026", "PhD in Physics — summa cum laude", "University of Hamburg", "Surface science, semiconductor materials, thin films, synchrotron experiments and light-driven reaction mechanisms.", y);

const p2 = page(2);
p2.drawText("MIGUEL BLANCO GARCÍA", { x: 42, y: 786, size: 18, font: bold, color: navy });
p2.drawText("CURRICULUM VITAE", { x: 438, y: 789, size: 8, font: bold, color: copper });
y = section(p2, "Education continued", 750);
y = entry(p2, "2021", "MSc in Renewable Energy Materials — 9.00/10", "Universidad Autónoma de Madrid", "Hydrogen, electrochemistry, photovoltaics and sustainable energy systems. Master's thesis on magnesium ultrathin films: 9.2/10.", y);
y = entry(p2, "2020", "BSc in Chemistry — 8.44/10", "Universidad Autónoma de Madrid", "Ranked 10th among 138 graduates that year. Broad chemistry and electrochemistry training.", y);
y = entry(p2, "2018—2019", "Erasmus+ in Chemistry", "University of Perugia", "One academic year of chemistry courses and laboratory work in an international environment.", y);
y = section(p2, "Selected publications", y);
const pubs = [
  ["FIRST AUTHOR · JACS · 2026", "Adsorption and Sulfur-Selective Photooxidation of Cysteine on Anatase TiO2(101). 148(25), 26710–26723. DOI: 10.1021/jacs.6c07370"],
  ["FIRST AUTHOR · JACS · 2025", "Unraveling the Role of the Multifunctional Groups in the Adsorption of l-Cysteine on Rutile TiO2(110). 147(44), 40158–40170. DOI: 10.1021/jacs.5c07119"],
  ["SECOND AUTHOR · JPCC · 2026", "In-Situ Growth and Oxidation of Cu Nanoparticles on Rutile TiO2(110). 130(20), 7136–7147. DOI: 10.1021/acs.jpcc.6c00835"],
  ["CO-AUTHOR · GISAXS · ACS AMI · 2024", "Light-Induced Transformation of Virus-Like Particles on TiO2. 16(28), 37275–37287. DOI: 10.1021/acsami.4c07151"],
];
for (const [label, body] of pubs) {
  p2.drawText(label, { x: 42, y, size: 7.5, font: bold, color: copper });
  y = text(p2, body, 42, y - 13, 511, 8.2, 11.3, regular, navy) - 10;
}
y = section(p2, "Capabilities", y);
p2.drawText("MATERIALS & METHODS", { x: 42, y, size: 8, font: bold, color: blue });
text(p2, "Surface and interface science · TiO2 and ZnO · Thin films · Photocatalysis · Energy materials · Recycled polymers · STM/SPM · XPS · FT-IRRAS · AFM · SEM · TEM · XRD · LEED · GISAXS · GIXRD · UHV · Electrochemistry", 42, y - 16, 240);
p2.drawText("PROJECTS & DIGITAL", { x: 312, y, size: 8, font: bold, color: blue });
text(p2, "Work-package coordination · Experimental strategy · Stakeholder collaboration · PM2 · Technical reporting · Scientific writing · Python · TypeScript · Node.js · LLM applications · Google ADK · Model Context Protocol · Multi-agent workflows", 312, y - 16, 241);

await writeFile("public/Miguel-Blanco-Garcia-CV.pdf", await pdf.save());
console.log("Generated public/Miguel-Blanco-Garcia-CV.pdf");
