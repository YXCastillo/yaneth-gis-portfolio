import type {Metadata} from "next";

export const metadata:Metadata={
  title:"Custom Web GIS Case Study | Yaneth Castillo, GISP",
  description:"An anonymized case study of a configuration-driven public Web GIS viewer with 51 layers, dual map styles, JSON, and Sanity."
};

const decisions=[
  ["Layer sources","Connected each layer to the right source and source-layer while keeping identifiers consistent across configurations."],
  ["Visibility","Used layout and visibility rules so groups could open, close, and appear in a deliberate default state."],
  ["Symbology","Adapted paint properties and feature-state behavior so complex engineering geometry stayed readable and interactive."],
  ["Public controls","Mapped metadata to the legend, identify behavior, nested groups, and the Aerial / Streets experience."],
];

export default function CustomWebGisCaseStudy(){return <main className="webgis-case">
  <nav className="library-nav webgis-nav"><a className="mark" href="/">YC<span>°</span></a><div><a href="/">Home</a><a href="/workflows">Work Library</a><a href="/#contact">Contact</a></div></nav>

  <header className="webgis-hero">
    <div><p>CASE STUDY 05 · CUSTOM WEB GIS</p><h1>Turning 51 layers into one navigable system.</h1></div>
    <aside><p>A configuration-driven public viewer built with JSON and managed through Sanity.</p><div><span>JSON</span><span>Sanity</span><span>Layer architecture</span><span>Public Web GIS</span></div></aside>
  </header>

  <section className="webgis-proof webgis-proof-hero">
    <img src="/case-study/dcol/dcol-overview-sanitized.png" alt="An anonymized public Web GIS viewer displaying many planning and transportation layers"/>
    <p>Project details and geography have been anonymized for client privacy.</p>
  </section>

  <section className="webgis-brief">
    <div><p>THE PROBLEM</p><h2>The complexity was real.<br/>The interface still had to feel usable.</h2></div>
    <div><p>The viewer brought together 51 planning, transportation, design, community, and environmental layers. The goal was not to hide that complexity. It was to give it a hierarchy: sensible groups, predictable toggles, useful legends, and two coherent map styles.</p></div>
  </section>

  <section className="webgis-inherited">
    <p>HOW I WORKED</p><h2>Reuse was the starting point.<br/>Judgment was the work.</h2>
    <div>
      <article><span>01</span><h3>What I inherited</h3><p>Proven configuration patterns from existing viewers and Martin Palacios’s technical framework for understanding how the JSON, application, and Sanity implementation connected.</p></article>
      <article><span>02</span><h3>What I changed</h3><p>I copied, adapted, and extended those patterns for this project; configured 51 layers; maintained separate aerial and street-map files; and added the project-specific hierarchy and behavior.</p></article>
      <article><span>03</span><h3>What I learned</h3><p>Troubleshooting made the architecture legible: how a layer definition moves through source, metadata, layout, paint, visibility, identify behavior, and the public legend.</p></article>
    </div>
  </section>

  <section className="webgis-flow">
    <div><p>THE IMPLEMENTATION</p><h2>From a proven pattern<br/>to a project-specific viewer.</h2></div>
    <ol><li><span>01</span><b>Start with an established configuration</b><p>Reuse working structure instead of retyping solved boilerplate.</p></li><li><span>02</span><b>Adapt and extend the JSON</b><p>Connect sources, layers, metadata, controls, and project-specific behavior.</p></li><li><span>03</span><b>Maintain two map styles</b><p>Keep separate Aerial and Streets configurations aligned.</p></li><li><span>04</span><b>Configure the project in Sanity</b><p>Attach both map styles and enable the viewer’s application controls.</p></li></ol>
  </section>

  <section className="webgis-evidence">
    <div className="webgis-proof webgis-code"><img src="/case-study/dcol/dcol-code-map-sanitized.png" alt="An anonymized Web GIS viewer alongside its JSON layer configuration in a code editor"/><p>Configuration and rendered map, side by side.</p></div>
    <div><p>THE TECHNICAL EVIDENCE</p><h2>Like most things, I learned how the system worked by making it work.</h2><div className="webgis-decisions">{decisions.map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
  </section>

  <section className="webgis-nesting">
    <div className="webgis-proof"><img src="/case-study/dcol/dcol-legend-sanitized.png" alt="An anonymized layer panel showing nested groups, child layers, visibility toggles, and two map styles"/><p>The hardest part: nested groups, toggles, and legend behavior.</p></div>
    <div><p>THE HARD PART</p><h2>A long layer list is not a hierarchy.</h2><p>The difficult work was making parent groups, child layers, visibility defaults, legends, and nested controls agree. The structure needed to let a visitor move from broad categories into detailed design segments without losing where they were—or turning on an incoherent combination of layers.</p><blockquote>“The goal was not fewer layers. It was a clearer way through them.”</blockquote></div>
  </section>

  <section className="webgis-sanity">
    <div><p>THE CONTENT LAYER</p><h2>The completed configurations became a manageable project.</h2><p>In the project-specific Sanity entry, the Aerial and Streets map styles live alongside application settings such as location search, user location, media, areas of interest, and engineering-report controls. That separation kept map configuration and project management connected without treating them as the same thing.</p></div>
    <div className="webgis-proof"><img src="/case-study/dcol/dcol-sanity-sanitized.png" alt="An anonymized Sanity project configuration with Aerial and Streets map styles and application toggles"/><p>Project configuration in Sanity.</p></div>
  </section>

  <section className="webgis-mentorship"><p>MENTORED WORK · HONEST CREDIT</p><h2>Martin taught me the architecture.<br/>I applied it, adapted it, troubleshot it, and extended it.</h2><p>This was mentored work—not a solo invention. Martin Palacios gave me the technical framework and patient guidance that allowed me to begin understanding configuration-driven Web GIS. I used that framework to implement this 51-layer viewer, maintain its two map styles, and become more independent as I solved new nesting, visibility, legend, and project requirements.</p></section>

  <section className="webgis-outcome"><p>THE OUTCOME</p><h2>One public viewer.<br/>Two map styles.<br/>Fifty-one layers with a way through.</h2><p>The evidence is not that I typed every line from scratch. It is that I could enter an established system, understand enough of its structure to adapt it responsibly, diagnose what did not work, and extend it for a substantially more complex project.</p></section>

  <nav className="workflow-next"><a href="/workflows">← Work Library</a><a href="/case-studies/portfolio">Next case study →</a></nav>
  <footer className="library-footer"><p>Have a spatial question<br/>worth following?</p><a href="mailto:hello@yanethcastillo.com">Let’s map it out ↗</a><div><span>Yaneth Castillo, GISP</span><span>© 2026</span></div></footer>
</main>}
