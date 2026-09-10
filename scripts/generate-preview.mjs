import { readFile, writeFile } from "node:fs/promises";

const component = await readFile("src/components/PortfolioPage.tsx", "utf8");
const start = component.indexOf('  <a className="skip-link"');
const end = component.lastIndexOf("  </>;");
if (start < 0 || end < 0) throw new Error("Portfolio markup was not found.");

const markup = component.slice(start, end)
  .replaceAll("className=", "class=")
  .replaceAll("<br />", "<br>")
  .replace(/<Image src="\/images\/hero-portrait-v2\.png"[^>]+alt="Portrait of Miguel Blanco García" priority \/>/,
    '<img src="public/images/hero-portrait-v2.png" width="1122" height="1402" alt="Portrait of Miguel Blanco García">')
  .replaceAll('href="/Miguel-Blanco-Garcia-CV.pdf"', 'href="public/Miguel-Blanco-Garcia-CV.pdf"');

const html = `<!doctype html>
<html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Scientist and PhD physicist coordinating technical work across advanced materials, semiconductors, energy materials, industrial R&amp;D and applied AI.">
  <meta name="theme-color" content="#081a2f">
  <title>Miguel Blanco García | Scientific Project Coordination, Materials &amp; Semiconductors</title>
  <link rel="preload" href="public/images/hero-portrait-v2.png" as="image" type="image/png">
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head><body>
${markup}
</body></html>`;

await Promise.all([
  writeFile("index.html", html),
  readFile("src/app/globals.css", "utf8").then((css) => writeFile("styles.css", css)),
]);
console.log("Generated standalone index.html and styles.css");
