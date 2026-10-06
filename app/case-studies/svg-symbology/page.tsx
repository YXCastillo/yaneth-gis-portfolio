import type {Metadata} from "next";

export const metadata:Metadata={
  title:"Building Custom SVG Symbology for GIS | Yaneth Castillo",
  description:"A creative-technology case study in custom SVG symbology, vector geometry, GIS implementation, and cartographic design."
};

const svgLines=[
  '<svg xmlns="http://www.w3.org/2000/svg"',
  '  width="300" height="360"',
  '  viewBox="0 0 300 360">',
  '  <path',
  '    fill="#8E2748"',
  '    fill-rule="evenodd"',
  '    d="M139 12 C139 4 145 0 150 0',
  '       C155 0 161 4 161 12 L161 22',
  '       C193 27 217 48 224 80 ..."',
  '  />',
  '</svg>'
];

function HydrantSymbol({className=""}:{className?:string}){
  return <img className={className} src="/case-study/svg-symbology/fire-hydrant-classic.svg" alt="Custom fire hydrant SVG"/>
}

export default function SvgSymbologyCaseStudy(){return <main className="svg-case">
<nav className="library-nav"><a className="mark" href="/">YC<span>°</span></a><div><a href="/">Home</a><a href="/workflows">Work Library</a></div></nav>

<header className="svg-case-hero">
  <div><p>CASE STUDY 08 · CREATIVE TECHNOLOGY</p><h1>Building custom SVG<br/>symbology for GIS.</h1><p>SVG · Vector geometry · ArcGIS · Cartographic design</p></div>
  <div className="svg-hero-symbol" aria-hidden="true"><img src="/case-study/svg-symbology/fire-hydrant-classic.svg" alt=""/><span>SVG</span></div>
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
    <div className="svg-render"><span>THE SYMBOL</span><img src="/case-study/svg-symbology/fire-hydrant-classic.svg" alt="Custom fire hydrant SVG"/></div>
    <div className="svg-code"><span>THE LANGUAGE BEHIND IT</span><div className="svg-typewriter" aria-label="Animated SVG markup"><pre><code>{svgLines.map((line,i)=><span className="svg-typed-line" style={{"--line":i} as React.CSSProperties} key={i}>{line}</span>)}</code></pre><i aria-hidden="true"/></div><small className="svg-motion-caption">XML markup · typed line by line</small></div>
  </div>
  <div className="svg-code-key">
    <p><code>viewBox</code><span>the coordinate system</span></p><p><code>path</code><span>the vector geometry</span></p><p><code>d</code><span>instructions that construct the shape</span></p><p><code>fill</code><span>the symbol color</span></p><p><code>fill-rule</code><span>how overlapping path areas are filled</span></p>
  </div>
  <p className="svg-demo-note">The code shown here drives the rendered symbol beside it. Project-specific production assets can be substituted with sanitized SVG markup where client context permits.</p>
</section>

<section className="svg-pipeline">
  <p>FROM REFERENCE → CODE → MAP</p>
  <h2>The asset is only useful<br/>when it survives the whole journey.</h2>
  <div className="svg-pipeline-grid">
    <article><b>01</b><span>REFERENCE</span><div className="generic-hydrant-reference" aria-label="Basic stock-style hydrant symbol"><svg viewBox="0 0 120 140" aria-hidden="true"><g fill="#777"><rect x="42" y="44" width="36" height="64" rx="3"/><rect x="27" y="54" width="66" height="17" rx="3"/><rect x="21" y="57" width="10" height="11"/><rect x="89" y="57" width="10" height="11"/><rect x="32" y="103" width="56" height="12" rx="3"/><path d="M35 44c2-19 13-29 25-29s23 10 25 29z"/><rect x="56" y="7" width="8" height="12" rx="2"/></g></svg><small>basic stock-style symbol</small></div><p>Start with the available GIS symbology and identify what is not working: silhouette, legibility, visual weight, or suitability for the map.</p></article>
    <article><b>02</b><span>VECTOR</span><HydrantSymbol/><p>Reduce the reference to scalable geometry that remains legible at map scale.</p></article>
    <article><b>03</b><span>MARKUP</span><pre><code>&lt;path fill="#8E2748"{"\n"} fill-rule="evenodd"{"\n"} d="M139 12 C139 4…" /&gt;</code></pre><p>Control the asset through XML-based SVG structure rather than fixed pixels.</p></article>
    <article><b>04</b><span>MAP</span><div className="hydrant-map-example" aria-label="Working example of colored custom hydrant symbols on a municipal basemap"><img src="/case-study/svg-symbology/hydrant-map-example.svg" alt="Red, green, and blue custom hydrant SVG symbols shown on a simplified municipal street map"/></div><p>Test size, contrast, anchoring, labels, and surrounding map context.</p></article>
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
    <article><span>MUNICIPAL ASSET SYMBOLOGY</span><div className="svg-app-stage"><img className="svg-app-art hydrant" src="/case-study/svg-symbology/fire-hydrant-classic.svg" alt="Burgundy custom fire hydrant SVG"/></div><div className="svg-app-copy"><h2>Custom fire hydrant symbol</h2><p>A municipal utility dataset called for a more distinctive hydrant symbol than the stock options provided. The challenge was recognizability at small map scales without excessive detail.</p><blockquote>Build a reusable vector asset tailored to the feature being represented.</blockquote></div></article>
    <article><span>REFERENCE-DRIVEN CARTOGRAPHY</span><div className="svg-app-stage"><img className="svg-app-art fema" src="/case-study/svg-symbology/fema-bfe-wave.svg" alt="Teal FEMA BFE wave marker SVG"/></div><div className="svg-app-copy"><h2>FEMA-style symbology</h2><p>Here the goal is different: not inventing a new visual language, but translating an established cartographic convention into an interactive GIS environment while preserving clarity.</p><blockquote>Make the digital map feel consistent with information users already recognize.</blockquote></div></article>
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