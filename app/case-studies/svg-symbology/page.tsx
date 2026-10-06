import type {Metadata} from "next";

export const metadata:Metadata={
  title:"Building the Symbols the Map Is Missing | Yaneth Castillo",
  description:"A creative-technology case study in custom SVG symbology, vector geometry, GIS implementation, and cartographic design."
};

const svgMarkup=`<svg viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <g fill="none"
     stroke="currentColor"
     strokeWidth="6"
     strokeLinecap="round"
     strokeLinejoin="round">
    <path d="M43 38h34v19H43z" />
    <path d="M49 38V27h22v11" />
    <path d="M39 57h42v35H39z" />
    <path d="M32 65h7M81 65h7" />
    <path d="M28 61v8M92 61v8" />
    <path d="M48 92v12M72 92v12" />
  </g>
</svg>`;

function HydrantSymbol({className=""}:{className?:string}){
  return <svg className={className} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-label="Simplified custom hydrant SVG example">
    <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M43 38h34v19H43z"/><path d="M49 38V27h22v11"/><path d="M39 57h42v35H39z"/>
      <path d="M32 65h7M81 65h7"/><path d="M28 61v8M92 61v8"/><path d="M48 92v12M72 92v12"/>
    </g>
  </svg>
}

export default function SvgSymbologyCaseStudy(){return <main className="svg-case">
<nav className="library-nav"><a className="mark" href="/">YC<span>°</span></a><div><a href="/">Home</a><a href="/workflows">Work Library</a></div></nav>

<header className="svg-case-hero">
  <div><p>CASE STUDY 08 · CREATIVE TECHNOLOGY</p><h1>Building the symbols<br/>the map is missing.</h1><p>SVG · Vector geometry · ArcGIS · Cartographic design</p></div>
  <div className="svg-hero-symbol" aria-hidden="true"><HydrantSymbol/><span>SVG</span></div>
</header>

<section className="svg-thesis">
  <p>THE PROBLEM</p>
  <div><h2>How do you make a map speak a visual language the software doesn’t provide?</h2>
  <p>GIS platforms provide extensive symbol libraries, but project-specific cartography often calls for something more precise. A symbol may need to resemble an established mapping convention, remain recognizable at multiple scales, match an existing visual language, or communicate something the default library simply cannot.</p>
  <p>Rather than designing the map around that limitation, I build the missing piece.</p></div>
</section>

<section className="svg-why">
  <div className="svg-section-label">WHY SVG?</div>
  <div className="svg-why-copy"><h2>An image you can read<br/>like code.</h2>
  <p>An SVG is not simply a picture exported at a particular resolution. It is an XML-based description of vector geometry: paths, coordinates, fills, strokes, transformations, and other properties that tell a renderer how to construct the graphic.</p>
  <p>That makes SVG especially useful for GIS. The same asset can remain crisp as it scales, stay lightweight, and be edited at the geometry or style level instead of repeatedly recreating a raster image.</p></div>
  <div className="svg-language">
    <div className="svg-render"><span>THE SYMBOL</span><HydrantSymbol/></div>
    <div className="svg-code"><span>THE LANGUAGE BEHIND IT</span><pre><code>{svgMarkup}</code></pre></div>
  </div>
  <div className="svg-code-key">
    <p><code>viewBox</code><span>the coordinate system</span></p><p><code>path</code><span>the vector geometry</span></p><p><code>d</code><span>instructions that construct each path</span></p><p><code>stroke</code><span>the outline appearance</span></p><p><code>strokeWidth</code><span>the visual weight</span></p>
  </div>
  <p className="svg-demo-note">The code shown here drives the rendered symbol beside it. Project-specific production assets can be substituted with sanitized SVG markup where client context permits.</p>
</section>

<section className="svg-pipeline">
  <p>FROM REFERENCE → CODE → MAP</p>
  <h2>The asset is only useful<br/>when it survives the whole journey.</h2>
  <div className="svg-pipeline-grid">
    <article><b>01</b><span>REFERENCE</span><div className="reference-mark"><i/><i/><i/></div><p>Identify the geometry and visual characteristics that make the source recognizable.</p></article>
    <article><b>02</b><span>VECTOR</span><HydrantSymbol/><p>Reduce the reference to scalable geometry that remains legible at map scale.</p></article>
    <article><b>03</b><span>MARKUP</span><pre><code>&lt;path d="…" /&gt;{"\n"}&lt;path d="…" /&gt;{"\n"}&lt;path d="…" /&gt;</code></pre><p>Control the asset through XML-based SVG structure rather than fixed pixels.</p></article>
    <article><b>04</b><span>MAP</span><div className="mini-map"><i/><i/><i/><HydrantSymbol/></div><p>Test size, contrast, anchoring, labels, and surrounding map context.</p></article>
  </div>
</section>

<section className="svg-process">
  <div><p>FROM REFERENCE TO REUSABLE GIS ASSET</p><h2>Designing the symbol<br/>is only half the work.</h2></div>
  <div>{[
    ["Study the reference","Identify the essential geometry, proportions, line weight, orientation, and characteristics that make the symbol recognizable."],
    ["Simplify the geometry","Remove unnecessary detail while preserving visual identity. GIS symbols often need to remain legible far smaller than the source artwork."],
    ["Build the vector asset","Construct the symbol from scalable paths and shapes rather than fixed-resolution imagery."],
    ["Adapt it to GIS","Test dimensions, viewBox behavior, fill and stroke properties, transparency, anchoring, rotation, and scaling inside the mapping environment."],
    ["Test it in context","A symbol that works alone may fail over imagery, parcels, utilities, labels, or other features. Iteration happens on the map—not just in the SVG editor."]
  ].map(([h,p],i)=><article key={h}><span>{String(i+1).padStart(2,"0")}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
</section>

<section className="svg-applications">
  <p>ONE TECHNIQUE · VERY DIFFERENT APPLICATIONS</p>
  <div className="svg-app-grid">
    <article><span>MUNICIPAL ASSET SYMBOLOGY</span><h2>Custom fire hydrant symbol</h2><p>A municipal utility dataset called for a more distinctive hydrant symbol than the stock options provided. The challenge was recognizability at small map scales without excessive detail.</p><blockquote>Build a reusable vector asset tailored to the feature being represented.</blockquote></article>
    <article><span>REFERENCE-DRIVEN CARTOGRAPHY</span><h2>FEMA-style symbology</h2><p>Here the goal is different: not inventing a new visual language, but translating an established cartographic convention into an interactive GIS environment while preserving clarity.</p><blockquote>Make the digital map feel consistent with information users already recognize.</blockquote></article>
  </div>
</section>

<section className="svg-control"><p>THE REAL ADVANTAGE</p><blockquote>It isn’t that SVGs<br/>look nicer.<br/><em>It’s control.</em></blockquote><p>When the map needs a symbol that does not exist, I do not have to design around that limitation. I can build the symbol the map needs.</p></section>

<section className="portfolio-stack"><p>TOOLS + TECHNIQUES</p><div>{["SVG","XML","Vector geometry","ArcGIS Pro","ArcGIS Online","Experience Builder","Cartographic design","Visual hierarchy"].map(x=><span key={x}>{x}</span>)}</div></section>

<section className="svg-demonstrates"><p>WHAT THIS DEMONSTRATES</p><div>{[
["Custom asset development","Creating project-specific resources rather than relying exclusively on software defaults."],
["Technical cartography","Understanding how geometry, scale, contrast, hierarchy, and labeling interact in an operational map."],
["Cross-platform thinking","Designing an asset outside the GIS and adapting it to the constraints of the environment where it will actually be used."],
["Problem solving","Treating software limitations as design constraints rather than the end of the solution."]
].map(([h,p])=><article key={h}><h3>{h}</h3><p>{p}</p></article>)}</div></section>

<section className="svg-outcome"><p>THE LARGER LESSON</p><h2>Good GIS isn’t limited to the tools and symbols that ship with the software.</h2><p>Sometimes the clearest solution is to build the missing piece.</p></section>

<nav className="workflow-next"><a href="/workflows">← Work Library</a><a href="/#work">Selected work ↓</a></nav>
<footer className="library-footer"><p>Have a spatial question<br/>worth following?</p><a href="mailto:hello@yanethcastillo.com">Let’s map it out ↗</a><div><span>Yaneth Castillo, GISP</span><span>© 2026</span></div></footer>
</main>}