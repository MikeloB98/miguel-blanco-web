import Image from "next/image";
import { ClientRuntime } from "@/components/ClientRuntime";

export function PortfolioPage() {
  return <>
  <ClientRuntime />
  <a className="skip-link" href="#main">Skip to content</a>

  <header className="site-header" data-header>
    <div className="shell nav-wrap">
      <a className="wordmark" href="#top" aria-label="Miguel Blanco García, home">
        <span>MBG</span>
        <span className="wordmark-name">Miguel Blanco García</span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle>
        <span className="sr-only">Toggle navigation</span>
        <span></span><span></span>
      </button>
      <nav className="site-nav" id="site-nav" aria-label="Primary navigation" data-nav>
        <a href="#work">Work</a>
        <a href="#research">Research</a>
        <a href="#ai">AI projects</a>
        <a href="#background">Background</a>
        <a href="#contact">Contact</a>
        <a className="nav-cv" href="/Miguel-Blanco-Garcia-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
      </nav>
    </div>
  </header>

  <main id="main">
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span>Energy</span><span>Semiconductors</span><span>Nanotechnology</span></p>
          <h1 id="hero-title">I turn complex science into <em>coordinated technical projects.</em></h1>
          <p className="hero-intro">I’m Miguel, a materials scientist and PhD physicist with a background in renewable energy, hydrogen technologies, semiconductor surfaces and nanoscale materials. I combine experimental work with project coordination and applied AI.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
            <button className="button button-text contact-trigger" type="button" data-contact-open>Contact me <span aria-hidden="true">→</span></button>
          </div>
          <div className="hero-meta">
            <span>Based in Hamburg, Germany</span>
            <span>Open to technical opportunities</span>
          </div>
        </div>

        <figure className="portrait-wrap reveal">
          <Image src="/images/hero-portrait-v2.png" width="1122" height="1402" sizes="(max-width: 760px) 84vw, 520px" alt="Portrait of Miguel Blanco García" priority />
          <figcaption>Materials scientist · PhD physicist · Project coordinator</figcaption>
        </figure>

        <aside className="evidence reveal" aria-label="Selected evidence">
          <p className="panel-label">Selected evidence</p>
          <div className="evidence-grid">
            <div className="evidence-item">
              <strong>SUMMA<br />CUM LAUDE</strong>
              <span>PhD in Physics</span>
            </div>
            <div className="evidence-item evidence-wide">
              <strong>EU work-package leadership</strong>
              <span>CORAERO · experiments at DESY, SOLEIL &amp; ESRF</span>
            </div>
            <a className="evidence-item evidence-paper" href="https://doi.org/10.1021/jacs.6c07370" target="_blank" rel="noopener">
              <strong>JACS · 2026</strong>
              <span>Cysteine adsorption and photooxidation on anatase TiO<sub>2</sub>(101) ↗</span>
            </a>
            <a className="evidence-item evidence-paper" href="https://doi.org/10.1021/jacs.5c07119" target="_blank" rel="noopener">
              <strong>JACS · 2025</strong>
              <span>Cysteine adsorption on rutile TiO<sub>2</sub>(110) ↗</span>
            </a>
          </div>
        </aside>
      </div>
    </section>

    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="shell section-grid">
        <div className="section-marker reveal"><span>01</span><p>Profile</p></div>
        <div className="section-heading reveal">
          <p className="kicker">From scientific questions to practical work</p>
          <h2 id="about-title">Depth in the science.<br />Clarity in the execution.</h2>
        </div>
        <div className="about-copy reveal">
          <p className="lead">I am a materials scientist, PhD physicist and chemist by training. My work connects semiconductors, surfaces, thin films, photocatalysis and light-driven chemical transformations.</p>
          <p>At DESY NanoLab and the University of Hamburg, I led a research work package within the EU-funded CORAERO project. I designed experimental programs, coordinated measurements and collaborators, worked at international synchrotron facilities, and took responsibility for complex surface science instruments.</p>
          <p>I now bring that mix of rigorous analysis, structured problem solving and hands-on delivery to industrial R&amp;D and technical projects, including AI systems that turn complex workflows into usable tools.</p>
        </div>
        <div className="approach reveal">
          <p>I enjoy the point where a scientific question becomes a practical experiment, and where the result has to be turned into a clear next step.</p>
          <span>How I like to work</span>
        </div>
      </div>
    </section>

    <section className="section section-dark" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-top reveal">
          <div className="section-marker"><span>02</span><p>Selected work</p></div>
          <div className="section-heading">
            <p className="kicker">Coordination grounded in technical practice</p>
            <h2 id="work-title">Three ways I move demanding work forward.</h2>
          </div>
        </div>

        <div className="work-list">
          <article className="work-item reveal">
            <span className="work-number">01</span>
            <div><p className="work-verb">Coordinate</p><h3>EU-funded research work package</h3></div>
            <div className="work-detail">
              <p>Led the CORAERO work package on semiconductors and SARS-CoV-2 inactivation, translating project objectives into experimental strategy, coordinated measurements, tasks and timelines.</p>
              <ul className="tag-list" aria-label="Related topics"><li>CORAERO</li><li>Stakeholders</li><li>PM2</li></ul>
            </div>
          </article>
          <article className="work-item reveal">
            <span className="work-number">02</span>
            <div><p className="work-verb">Execute</p><h3>International experimental programmes</h3></div>
            <div className="work-detail">
              <p>Prepared and delivered synchrotron campaigns at DESY, SOLEIL and ESRF, linking experimental design, surface preparation, advanced characterisation, data analysis and multidisciplinary collaboration.</p>
              <ul className="tag-list" aria-label="Related topics"><li>Synchrotrons</li><li>UHV</li><li>Surface science</li></ul>
            </div>
          </article>
          <article className="work-item reveal">
            <span className="work-number">03</span>
            <div><p className="work-verb">Enable</p><h3>Advanced instrument responsibility</h3></div>
            <div className="work-detail">
              <p>Operated, maintained and optimised STM/SPM, XPS and FT-IRRAS systems; created procedures, supported users and resolved technical issues. Achieved STM imaging resolution not previously reached in the laboratory.</p>
              <ul className="tag-list" aria-label="Related topics"><li>STM / SPM</li><li>XPS</li><li>FT-IRRAS</li></ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="section research" id="research" aria-labelledby="research-title">
      <div className="shell">
        <div className="section-top reveal">
          <div className="section-marker"><span>03</span><p>Featured research</p></div>
          <div className="section-heading">
            <p className="kicker">Molecules, surfaces and functional materials</p>
            <h2 id="research-title">Peer-reviewed research built across disciplines.</h2>
            <p className="heading-note">Four verified publications in American Chemical Society journals.</p>
          </div>
        </div>

        <div className="publication-featured">
          <article className="publication publication-primary reveal">
            <div className="publication-meta"><span>First author</span><span>JACS · 2025</span></div>
            <h3><a href="https://doi.org/10.1021/jacs.5c07119" target="_blank" rel="noopener">Unraveling the Role of the Multifunctional Groups in the Adsorption of l-Cysteine on Rutile TiO<sub>2</sub>(110)</a></h3>
            <p>Combined surface-sensitive experiments and theoretical modelling to explain how cysteine binds to rutile TiO<sub>2</sub>(110).</p>
            <footer><cite>Journal of the American Chemical Society</cite><span>147(44), 40158–40170</span><a href="https://doi.org/10.1021/jacs.5c07119" target="_blank" rel="noopener" aria-label="Open DOI for Unraveling the Role of the Multifunctional Groups">DOI ↗</a></footer>
          </article>
          <article className="publication publication-primary reveal">
            <div className="publication-meta"><span>First author</span><span>JACS · 2026</span></div>
            <h3><a href="https://doi.org/10.1021/jacs.6c07370" target="_blank" rel="noopener">Adsorption and Sulfur-Selective Photooxidation of Cysteine on Anatase TiO<sub>2</sub>(101)</a></h3>
            <p>Investigated adsorption and sulfur-selective photooxidation on anatase TiO<sub>2</sub>(101), connecting surface experiments with theoretical modelling.</p>
            <footer><cite>Journal of the American Chemical Society</cite><span>148(25), 26710–26723</span><a href="https://doi.org/10.1021/jacs.6c07370" target="_blank" rel="noopener" aria-label="Open DOI for Adsorption and Sulfur-Selective Photooxidation">DOI ↗</a></footer>
          </article>
        </div>

        <div className="publication-secondary">
          <article className="publication reveal">
            <div className="publication-meta"><span>Second author</span><span>JPCC · 2026</span></div>
            <h3><a href="https://doi.org/10.1021/acs.jpcc.6c00835" target="_blank" rel="noopener">In-Situ Growth and Oxidation of Cu Nanoparticles on Rutile TiO<sub>2</sub>(110)</a></h3>
            <p>Growth, epitaxy and oxidation of copper nanoparticles on rutile TiO<sub>2</sub>(110).</p>
            <footer><cite>The Journal of Physical Chemistry C</cite><span>130(20), 7136–7147</span><a href="https://doi.org/10.1021/acs.jpcc.6c00835" target="_blank" rel="noopener" aria-label="Open DOI for In-Situ Growth and Oxidation">DOI ↗</a></footer>
          </article>
          <article className="publication reveal">
            <div className="publication-meta"><span>Co-author · GISAXS</span><span>ACS AMI · 2024</span></div>
            <h3><a href="https://doi.org/10.1021/acsami.4c07151" target="_blank" rel="noopener">Light-Induced Transformation of Virus-Like Particles on TiO<sub>2</sub></a></h3>
            <p>Contributed GISAXS work to a multidisciplinary study of UV-induced changes in virus-like particles adsorbed on TiO<sub>2</sub>.</p>
            <footer><cite>ACS Applied Materials &amp; Interfaces</cite><span>16(28), 37275–37287</span><a href="https://doi.org/10.1021/acsami.4c07151" target="_blank" rel="noopener" aria-label="Open DOI for Light-Induced Transformation">DOI ↗</a></footer>
          </article>
        </div>
      </div>
    </section>

    <section className="section domains" id="skills" aria-labelledby="domains-title">
      <div className="shell">
        <div className="section-top reveal">
          <div className="section-marker"><span>04</span><p>Scientific domains</p></div>
          <div className="section-heading"><p className="kicker">Technical range</p><h2 id="domains-title">Energy, semiconductors and materials at the nanoscale.</h2></div>
        </div>
        <div className="domain-grid">
          <article className="domain domain-energy reveal"><span>01</span><h3>Renewable energy &amp; hydrogen</h3><p>Training in renewable generation, hydrogen production and storage, electrochemistry, PEM fuel cells and electrolysers, with experimental work on magnesium ultrathin films and photo-assisted hydrogen production.</p></article>
          <article className="domain reveal"><span>02</span><h3>Semiconductors &amp; nanomaterials</h3><p>Surface and interface science, TiO<sub>2</sub>, ZnO, photocatalytic semiconductors, thin films, coatings, metal nanoparticles and nanoscale characterisation.</p></article>
          <article className="domain reveal"><span>03</span><h3>Industrial materials</h3><p>Recycled polymers, polyolefin formulations and rheological, thermal and mechanical testing through Repsol’s RECICLEX project.</p></article>
          <article className="domain reveal"><span>04</span><h3>Methods &amp; instruments</h3><p>STM/SPM, XPS, FT-IRRAS, AFM, SEM, TEM, XRD, LEED, GISAXS, GIXRD, UHV, synchrotron methods and electrochemistry.</p></article>
          <article className="domain reveal"><span>05</span><h3>Projects &amp; communication</h3><p>Experimental strategy, work-package coordination, stakeholder collaboration, PM2, technical reporting, scientific writing and presentations.</p></article>
          <article className="domain reveal"><span>06</span><h3>AI &amp; software</h3><p>Python, TypeScript, Node.js, LLM applications, Google ADK, Model Context Protocol and multi-agent workflow design.</p></article>
        </div>
      </div>
    </section>

    <section className="section ai-section" id="ai" aria-labelledby="ai-title">
      <div className="shell">
        <div className="section-top reveal">
          <div className="section-marker"><span>05</span><p>Applied AI</p></div>
          <div className="section-heading">
            <p className="kicker">The same method, applied to software</p>
            <h2 id="ai-title">Structured evidence. Bounded workflows. Human control.</h2>
            <p className="heading-note">I started building AI applications to solve problems I encountered in my own work. The habit comes from experimental science: use the tools available, make the steps explicit and keep the important decisions with the person using them.</p>
          </div>
        </div>
        <div className="project-list">
          <article className="project project-featured reveal">
            <div className="project-index">01 / Open source</div>
            <div><h3>Career AI</h3><p>A local-first, provider-neutral workflow that turns verified career evidence and explicit goals into job evaluations and tailored application content, with decisions and external actions kept under human control.</p></div>
            <ul className="tag-list"><li>Python</li><li>CLI</li><li>Structured data</li><li>Agent workflows</li></ul>
            <a className="project-link" href="https://github.com/MikeloB98/career-ai" target="_blank" rel="noopener">View repository <span aria-hidden="true">↗</span></a>
          </article>
          <article className="project reveal">
            <div className="project-index">02 / Full stack</div>
            <div><h3>NutriFit AI</h3><p>A full-stack application that turns typed or dictated nutrition and training information into structured sports-nutrition analysis through five specialised agents.</p></div>
            <ul className="tag-list"><li>Python</li><li>TypeScript</li><li>Node.js</li><li>Google ADK</li></ul>
            <a className="project-link" href="https://github.com/MikeloB98/nutrifit-ai" target="_blank" rel="noopener">View repository <span aria-hidden="true">↗</span></a>
          </article>
          <article className="project reveal">
            <div className="project-index">03 / Multi-agent</div>
            <div><h3>MobelFlip</h3><p>A workflow that turns furniture photographs into product identification, market research, pricing, bilingual listing copy, printable PDF sheets and configuration output.</p></div>
            <ul className="tag-list"><li>Python</li><li>Google ADK</li><li>LLMs</li><li>MCP</li></ul>
            <a className="project-link" href="https://github.com/MikeloB98/mobelflip" target="_blank" rel="noopener">View repository <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </div>
    </section>

    <section className="section background" id="background" aria-labelledby="background-title">
      <div className="shell">
        <div className="section-top reveal">
          <div className="section-marker"><span>06</span><p>Background</p></div>
          <div className="section-heading"><p className="kicker">Experience &amp; education</p><h2 id="background-title">A scientific foundation built across research and industry.</h2></div>
        </div>
        <div className="background-columns">
          <div>
            <h3 className="column-label">Experience</h3>
            <article className="timeline-item reveal"><div><time>2022—2026</time><span>Hamburg</span></div><div><h4>PhD Researcher in Physics</h4><p className="org">DESY NanoLab / University of Hamburg</p><p>Photocatalytic semiconductors, surface-driven mechanisms, work-package leadership, synchrotron programmes and advanced instrumentation.</p></div></article>
            <article className="timeline-item reveal"><div><time>2021—2022</time><span>Madrid</span></div><div><h4>R&amp;D Plastics Intern</h4><p className="org">Repsol</p><p>Recycled polymer formulations, material testing, technical investigation and documentation for R&amp;D, quality and industrial teams.</p></div></article>
            <article className="timeline-item reveal"><div><time>2020—2021</time><span>Madrid</span></div><div><h4>Research Trainee</h4><p className="org">Universidad Autónoma de Madrid</p><p>Magnesium ultrathin films for hydrogen storage, photo-assisted hydrogen production and electrochemical analysis.</p></div></article>
          </div>
          <div>
            <h3 className="column-label">Education</h3>
            <article className="timeline-item reveal"><div><time>2026</time><span>Hamburg</span></div><div><h4>PhD in Physics</h4><p className="org">University of Hamburg</p><p><strong>Summa cum laude.</strong> Surface science, semiconductor materials, thin films and synchrotron research.</p></div></article>
            <article className="timeline-item reveal"><div><time>2021</time><span>Madrid</span></div><div><h4>MSc in Renewable Energy Materials</h4><p className="org">Universidad Autónoma de Madrid</p><p><strong>9.00/10.</strong> Hydrogen, electrochemistry, photovoltaics and sustainable energy systems.</p></div></article>
            <article className="timeline-item reveal"><div><time>2020</time><span>Madrid</span></div><div><h4>BSc in Chemistry</h4><p className="org">Universidad Autónoma de Madrid</p><p><strong>8.44/10.</strong> Ranked 10th among 138 graduates that year.</p></div></article>
            <article className="timeline-item reveal"><div><time>2018—2019</time><span>Perugia</span></div><div><h4>Erasmus+ in Chemistry</h4><p className="org">University of Perugia</p><p>One academic year of chemistry courses and laboratory work in an international environment.</p></div></article>
          </div>
        </div>
      </div>
    </section>

    <section className="section beyond" id="beyond" aria-labelledby="beyond-title">
      <div className="shell beyond-grid">
        <div className="beyond-text">
          <div className="section-marker reveal"><span>07</span><p>Beyond the lab</p></div>
          <div className="beyond-copy reveal">
            <p className="kicker">Curiosity outside work</p>
            <h2 id="beyond-title">There is always something new to see, learn or cook.</h2>
            <div className="beyond-body">
              <p>Outside work, I like travelling, spending time outdoors and trying things I have not done before. I am curious by nature, especially about history, geography and the details that explain why places and systems are the way they are.</p>
              <p>That curiosity also shapes how I think about technology. I care about innovation, but also about how technologies are developed and used, and whether they solve real problems responsibly.</p>
              <p>I also enjoy cooking, discovering new food and sharing a good meal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section direction" aria-labelledby="direction-title">
      <div className="shell direction-grid reveal">
        <div className="section-marker"><span>08</span><p>Next</p></div>
        <div><p className="kicker">Where I want to contribute</p><h2 id="direction-title">Energy, semiconductors and nanotechnology.</h2></div>
        <div><p>I want to work in technical environments where materials science helps move a real system forward. I’m especially interested in renewable energy, hydrogen technologies, fuel cells, semiconductors, thin films and nanotechnology.</p><p>I’m also interested in scientific project coordination, technical consulting, technology transfer and applied AI when they stay close to the underlying science.</p></div>
      </div>
    </section>

    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div className="section-marker reveal"><span>09</span><p>Contact</p></div>
        <div className="contact-main reveal">
          <p className="kicker">Let’s start a useful conversation</p>
          <h2 id="contact-title">Technical work needs both <em>depth</em> and <em>coordination.</em></h2>
          <a className="contact-email email-link" href="#contact"><span data-email-display>Email Miguel</span><span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-aside reveal">
          <p>Based in Hamburg, Germany, and open to conversations about materials R&amp;D, semiconductor and thin-film projects, technical project coordination, and applied AI.</p>
          <nav aria-label="Social links">
            <a href="https://www.linkedin.com/in/miguel-blanco-garcia/" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a href="https://github.com/MikeloB98" target="_blank" rel="noopener">GitHub ↗</a>
          </nav>
        </div>
      </div>
    </section>
  </main>

  <dialog className="contact-dialog" data-contact-dialog aria-labelledby="contact-dialog-title">
    <div className="contact-dialog-inner">
      <div className="contact-dialog-head">
        <div>
          <p className="kicker">Get in touch</p>
          <h2 id="contact-dialog-title">Choose a channel</h2>
        </div>
        <button className="dialog-close" type="button" data-contact-close aria-label="Close contact options">×</button>
      </div>
      <div className="contact-options">
        <a href="https://www.linkedin.com/in/miguel-blanco-garcia/" target="_blank" rel="noopener">
          <span className="contact-option-icon" aria-hidden="true">in</span>
          <span><strong>LinkedIn</strong><small>Connect professionally</small></span>
          <span aria-hidden="true">↗</span>
        </a>
        <a className="email-link" href="#contact">
          <span className="contact-option-icon" aria-hidden="true">@</span>
          <span><strong>Email</strong><small data-email-display>Send a message</small></span>
          <span aria-hidden="true">↗</span>
        </a>
        <a className="phone-option" data-phone-link href="#contact" hidden>
          <span className="contact-option-icon" aria-hidden="true">☎</span>
          <span><strong>Call</strong><small data-phone-display></small></span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </dialog>

  <footer className="site-footer">
    <div className="shell"><p>© <span data-year></span> Miguel Blanco García</p><p>Materials · Semiconductors · Energy · Applied AI</p><a href="#top">Back to top ↑</a></div>
  </footer>
  </>;
}
