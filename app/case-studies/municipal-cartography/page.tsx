import type {Metadata} from "next";

export const metadata:Metadata={
  title:"Municipal Cartography Case Study | Yaneth Castillo, GISP",
  description:"A focused cartography case study showing how overlapping municipal boundaries, infrastructure, imagery, and local context became one readable exhibit."
};

const decisions=[
  ["Context without competition","Aerial imagery and surrounding geography stay visible, but muted enough to support the subject instead of becoming the subject."],
  ["Boundaries with hierarchy","County, precinct, city, and ETJ areas use distinct color, weight, transparency, and edge treatment so overlapping jurisdictions remain traceable."],
  ["Selective emphasis","Roads, channels, airports, and place labels are present at the level needed to orient the reader without giving every feature equal visual weight."],
  ["Depth as organization","Masking, vignette, and controlled shadow separate the focus area from its surroundings while preserving the regional relationship."],
];

export default function MunicipalCartographyCaseStudy(){return <main className="webgis-case cartography-case">
  <nav className="library-nav webgis-nav"><a className="mark" href="/">YC<span>°</span></a><div><a href="/">Home</a><a href="/workflows">Work Library</a><a href="/resume">Résumé</a><a href="/#contact">Contact</a></div></nav>

  <section className="webgis-proof webgis-proof-hero cartography-proof cartography-landing">
    <img src="/case-study/municipal-cartography/portfolio-cover.webp" alt="A portfolio adaptation of a municipal exhibit pairing an editorial statement with layered jurisdictional areas, transportation, waterways, and imagery"/>
    <p>Project branding and identifying details have been removed. Geography shown is based on publicly available data.</p>
  </section>

  <section className="webgis-brief">
    <div><p>THE CARTOGRAPHIC QUESTION</p><h2>How much context can one map hold before it stops being clear?</h2></div>
    <div><p>The exhibit needed to show a focal municipal area as part of a much larger system: county and precinct boundaries, cities and ETJs, transportation, drainage, airports, imagery, and neighboring geography. The work was not simply adding layers. It was deciding which relationships needed to be seen first, second, and only after a closer look.</p></div>
  </section>

  <section className="cartography-decisions">
    <p>THE DESIGN SYSTEM</p><h2>Every layer could remain.<br/>Not every layer could speak at once.</h2>
    <div>{decisions.map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </section>

  <section className="cartography-working">
    <div><p>INSIDE THE WORK</p><h2>The polished map was built through many small choices.</h2><p>In ArcGIS Pro, the finished hierarchy came from repeated adjustment: transparency, color relationships, line weights, labels, masking, vignette, and the balance between a regional overview and local detail. The working view shows the layers and symbology behind a result that is meant to feel composed rather than crowded.</p><blockquote>“Beautiful” was not decoration added at the end. It was the discipline of making complexity easier to read.</blockquote></div>
    <div className="webgis-proof cartography-detail"><img src="/case-study/municipal-cartography/sanitized-map.webp" loading="lazy" decoding="async" alt="A closer anonymized view of the municipal map's overlapping boundaries, imagery, transportation, and water features"/></div>
  </section>

  <section className="cartography-focus">
    <figure className="cartography-result-map"><img src="/case-study/municipal-cartography/map-cutout.png" loading="lazy" decoding="async" alt="Isolated municipal geography showing layered jurisdictions, transportation, waterways, and imagery"/></figure>
    <div><p>THE RESULT</p><h2>A map that rewards both the first glance and the closer look.</h2><p>At a glance, the reader can find the focal area and understand its regional position. Closer inspection reveals the jurisdictional, transportation, environmental, and municipal relationships supporting it. The exhibit stays operationally useful while carrying a visual identity of its own.</p></div>
  </section>

  <section className="webgis-outcome cartography-outcome"><p>WHAT THIS SHOWS</p><h2>Cartography is technical judgment made visible.</h2><p>The strongest map is not the one with the most information or the most dramatic styling. It is the one that understands what the reader needs to notice—and gives every other layer a purposeful supporting role.</p></section>

  <nav className="workflow-next"><a href="/workflows">← Work Library</a><a href="/case-studies/custom-web-gis">Next case study →</a></nav>
  <footer className="library-footer"><p>Have a spatial question<br/>worth following?</p><a href="mailto:yxcastillo@gmail.com">Let’s map it out ↗</a><div><span>Yaneth Castillo, GISP</span><span>© 2026</span></div></footer>
</main>}
