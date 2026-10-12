import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé | Yaneth Castillo, GISP",
  description: "Experience, technical capabilities, education, and credentials for GIS Analyst Yaneth Castillo, GISP.",
};

const roles = [
  {
    dates: "JAN 2024—PRESENT",
    title: "GIS Analyst",
    company: "LJA Engineering · Dallas, Texas",
    points: [
      "Deliver GIS solutions across transportation, utilities, land development, municipal planning, and regulatory projects, translating complex spatial requirements into reliable datasets, interactive applications, and client-facing deliverables.",
      "Reconstruct and validate complex legal boundaries from survey documentation, including a 224.109-acre tract defined by 109 metes-and-bounds courses, identifying a 0.65-acre discrepancy in reference data.",
      "Configure and enhance a public-facing Web GIS platform supporting 133 spatial layers, maintaining separate aerial and street-map configurations with structured layer hierarchies, interactive legends, and visibility controls.",
      "Develop and maintain ArcGIS Online and Experience Builder applications, incorporating hosted feature services, vector tile layers, Arcade expressions, and access controls to support internal and public-facing workflows.",
      "Integrate and troubleshoot municipal infrastructure datasets within enterprise GIS environments, resolving schema incompatibilities, field mapping requirements, coded-value domains, and versioned geodatabase constraints.",
    ],
  },
  {
    dates: "OCT 2022—JAN 2024",
    title: "GIS Analyst",
    company: "Landpoint · Fort Worth, Texas",
    points: [
      "Developed and improved processes for data collection, integration, quality control, and database updates across GIS production workflows.",
      "Worked with GIS users to define needs, assess project requirements, develop conceptual designs, and plan application implementation.",
      "Produced spatial analyses, geospatial data, cartographic deliverables, metadata, workflow documentation, and data-conversion specifications.",
    ],
  },
  {
    dates: "MAR—SEP 2022",
    title: "GIS Analyst Intern",
    company: "Halff · Richardson, Texas",
    points: [
      "Created geospatial data, static maps, and published web maps using spatial analysis, LiDAR, and terrain datasets.",
      "Applied data-mining techniques to support machine-learning model training and assisted with data reporting, review, and technical documentation.",
    ],
  },
  {
    dates: "JAN—APR 2022",
    title: "Geosciences Intern",
    company: "Fort Hays State University · Hays, Kansas",
    points: [
      "Used GPS and ArcGIS methods for landfill volumetric analysis and supported research into salt dissolution, subsidence, and seismic-reflection patterns.",
    ],
  },
];

const capabilities = [
  ["Web GIS & publishing", "ArcGIS Online, Experience Builder, Survey123, Dashboards, StoryMaps, hosted feature layers, vector tiles, Arcade, permissions and sharing"],
  ["Spatial production", "ArcGIS Pro, geodatabases, spatial analysis, cartography, remote sensing, LiDAR and terrain, legal descriptions and metes-and-bounds"],
  ["Configuration & data", "JSON configuration, Sanity, Azure Blob Storage, Python, SQL, FME, AutoCAD, data conversion, metadata and workflow documentation"],
  ["Web development", "React, TypeScript, CSS and SVG; component-level editing, interaction prototyping, troubleshooting, and maintenance with AI-assisted development"],
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <nav className="library-nav resume-nav">
        <a className="mark" href="/">YC<span>°</span></a>
        <div><a href="/">Home</a><a href="/#work">Selected Work</a><a href="/workflows">Library</a></div>
      </nav>

      <header className="resume-hero">
        <p>RÉSUMÉ · YANETH CASTILLO, GISP</p>
        <h1>The chronology<br/>behind the work.</h1>
        <div className="resume-hero-bottom">
          <p>GIS Analyst working across spatial research, cartography, Web GIS, configuration, documentation, and the systems that keep published work dependable.</p>
          <div className="resume-downloads">
            <a href="/resume/Yaneth-Castillo-GISP-Resume.pdf" download>Download PDF <span>↓</span></a>
            <a href="/resume/Yaneth-Castillo-GISP-Resume.docx" download>Download DOCX <span>↓</span></a>
          </div>
        </div>
      </header>

      <section className="resume-summary">
        <p>PROFILE</p>
        <div>
          <h2>I make complicated spatial work understandable &amp; dependable.</h2>
          <p>My work began in geoscience and spatial analysis, then moved through GIS production, legal-description research, cartographic communication, Web GIS publishing, and configuration-driven applications. My focus is on dependable GIS applications, data integrity, and scalable systems that serve technical, client, and public audiences.</p>
        </div>
      </section>

      <section className="resume-experience">
        <div className="resume-section-head"><p>EXPERIENCE</p><h2>Work in layers.</h2></div>
        <div className="resume-role-list">
          {roles.map((role, i) => <article className="resume-role" key={role.dates}>
            <div><span>{String(i + 1).padStart(2, "0")}</span><time>{role.dates}</time></div>
            <div><h3>{role.title}</h3><p className="resume-company">{role.company}</p><ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul></div>
          </article>)}
        </div>
      </section>

      <section className="resume-capabilities">
        <div><p>TECHNICAL CAPABILITIES</p><h2>The tools are part of the story.</h2></div>
        <div className="resume-capability-list">
          {capabilities.map(([title, body], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="resume-education">
        <p>EDUCATION &amp; CREDENTIALS</p>
        <div><h2>Bachelor of Science in Geosciences</h2><p>Minor in Geography · Fort Hays State University</p></div>
        <div><h2>GIS Professional (GISP)</h2><p>GIS Certification Institute · August 2026</p></div>
        <div><h2>Leadership Studies Certificate</h2><p>Fort Hays State University</p></div>
        <aside><b>Languages</b><span>Spanish — fluent/bilingual</span><span>French — proficient</span></aside>
      </section>

      <footer className="library-footer resume-footer">
        <p>Want the concise<br/>version?</p>
        <a href="/resume/Yaneth-Castillo-GISP-Resume.pdf" download>Download the résumé ↗</a>
        <div><span>Yaneth Castillo, GISP</span><a href="mailto:yxcastillo@gmail.com">yxcastillo@gmail.com</a><span>© 2026</span></div>
      </footer>
    </main>
  );
}
