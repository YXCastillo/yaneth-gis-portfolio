import type {Metadata} from "next";
import DebugWheel from "./DebugWheel";
export const metadata:Metadata={title:"Designing a Portfolio That Behaves Like a Map | Yaneth Castillo",description:"A creative-technology case study in React, TypeScript, CSS, SVG, interaction design, and AI-assisted development."};
export default function PortfolioCaseStudy(){return <main className="portfolio-case">
<nav className="library-nav">
<a className="mark" href="/">YC<span>°</span>
</a>
<div>
<a href="/">Home</a>
<a href="/workflows">Work Library</a>
</div>
</nav>
<header className="portfolio-case-hero">
<div>
<p>CASE STUDY 01 · CREATIVE TECHNOLOGY</p>
<h1>Designing a portfolio<br/>that behaves like a map.</h1>
<p>React · TypeScript · CSS · SVG · Interaction design · AI-assisted development</p>
</div>
<div className="portfolio-case-map" aria-hidden="true">
<i/>
<i/>
<i/>
<i/>
<b/>
<span/>
</div>
</header>
<section className="portfolio-case-thesis">
<p>THE PROBLEM</p>
<div>
<h2>Most portfolios show the output.<br/>I wanted mine to reveal the thinking.</h2>
<p>A GIS portfolio can become a gallery of finished maps without showing how the person approaches ambiguity, relationships, systems, or communication. The goal was to make the experience itself demonstrate spatial thinking before a visitor opened a single project.</p>
</div>
</section>
<section className="portfolio-case-principle">
<p>THE DESIGN PRINCIPLE</p>
<blockquote>The site is part<br/>of the evidence.</blockquote>
<p>Information is layered. Perspective changes meaning. Movement communicates relationships. Each interaction is expected to carry the story—not merely decorate it.</p>
</section>
<section className="portfolio-iterations">
<div>
<p>FROM ITERATION TO SYSTEM</p>
<h2>The direction became clearer<br/>by making it, questioning it,<br/>and making it again.</h2>
<p>The career section began as a decorative transition. Each iteration asked for more evidence, more personal truth, and a stronger relationship between motion and meaning.</p>
</div>
<div className="iteration-gallery">
<figure>
<img src="/case-study/career-section-before.png" alt="Original portfolio section with a large rose circle and downward arrow"/>
<figcaption>
<span>01</span>
<div>
<b>Decorative beginning</b>
<p>A memorable arrow, but too much space devoted to aspiration and too little to evidence.</p>
</div>
</figcaption>
</figure>
<figure>
<img src="/case-study/resume-direction-v1.png" alt="Early resume-oriented mockup with capability rows"/>
<figcaption>
<span>02</span>
<div>
<b>Résumé direction</b>
<p>The section gained substance, but the progression still felt static and impersonal.</p>
</div>
</figcaption>
</figure>
<figure>
<img src="/case-study/career-path-concept.png" alt="Career progression concept connected by a dotted path"/>
<figcaption>
<span>03</span>
<div>
<b>The path emerges</b>
<p>A visual career narrative connected scientific foundations to technical ownership.</p>
</div>
</figcaption>
</figure>
<figure>
<img src="/case-study/career-path-built.png" alt="Implemented career route transitioning into selected work"/>
<figcaption>
<span>04</span>
<div>
<b>Motion gains meaning</b>
<p>The animated route now carries the story and hands the visitor into the work itself.</p>
</div>
</figcaption>
</figure>
</div>
</section>
<section className="portfolio-role">
<div>
<p>MY ROLE</p>
<h2>Creative direction<br/>through implementation.</h2>
</div>
<div>{[["Narrative architecture","Structured the site as a progression from point of view, to professional growth, to evidence."],["Visual system","Directed the typography, palette, spatial motifs, image language, pacing, and responsive balance."],["Interaction design","Defined how the spotlight, rotating skills, perspective cards, career route, and section handoffs should behave."],["Technical development","Built and refined the React, TypeScript, CSS, and SVG implementation through an AI-assisted workflow."],["Diagnosis + QA","Identified broken interactions, traced behavioral conflicts, evaluated code changes, and refined the experience through repeated testing."],["Content strategy","Developed the copy and Work Library architecture to balance memorability with credible technical evidence."]].map(([h,p],i)=>
<article key={h}>
<span>{String(i+1).padStart(2,"0")}</span>
<h3>{h}</h3>
<p>{p}</p>
</article>)}</div>
</section>
<section className="portfolio-debug">
<div className="portfolio-debug-intro">
<p>PROBLEMS WORTH DEBUGGING</p>
<h2>The polished version<br/>is made from corrections.</h2>
<p className="portfolio-debug-note">Not every experiment was a failure. Some were necessary detours that made the final direction easier to recognize.</p>
<div className="debug-monitor" aria-label="Rolling sequence of portfolio bugs and layout corrections">
<DebugWheel/>
</div>
</div>
<div className="portfolio-debug-evidence">
<div className="debug-collage" tabIndex={0} aria-label="A collage of the portfolio hero iterations">
<figure><img src="/case-study/debug-collage/dark-layers-v1.png" alt="Early dark portfolio hero with architectural GIS layers"/></figure>
<figure><img src="/case-study/debug-collage/hero-rings.png" alt="Early cream portfolio hero with concentric line artwork"/></figure>
<figure><img src="/case-study/debug-collage/rose-layers-v1.png" alt="Rose portfolio hero concept with a stacked landscape model"/></figure>
<figure><img src="/case-study/debug-collage/hero-ripple.png" alt="Portfolio hero experiment using a soft ripple image"/></figure>
<figure><img src="/case-study/debug-collage/overflow-error.png" alt="Typography overflow error in an early portfolio hero"/></figure>
<figure><img src="/case-study/debug-collage/spotlight-v1.png" alt="Early interactive spotlight and orbit experiment"/></figure>
<figure><img src="/case-study/debug-collage/crop-error.png" alt="A rectangular map crop that did not blend into its section"/></figure>
<figure><img src="/case-study/debug-collage/rose-layers-v2.png" alt="Alternate rose portfolio hero with geometric spatial layers"/></figure>
<figure><img src="/case-study/debug-collage/dark-layers-v2.png" alt="Alternate dark portfolio hero with flowing spatial layers"/></figure>
</div>
<p className="debug-collage-caption"><span>Hero iteration archive</span></p>
<ul>
<li>
<span>01</span>A spotlight interaction that fought the user’s pointer instead of yielding to it.</li>
<li>
<span>02</span>Artwork whose crop exposed the rectangular asset instead of dissolving into the hero.</li>
<li>
<span>03</span>Perspective cards whose motion, labels, and implied click behavior did not yet agree.</li>
<li>
<span>04</span>A career route that initially showed nodes without visibly carrying the story between them.</li>
<li>
<span>05</span>Independent sections that needed a visual handoff to become one continuous narrative.</li>
</ul>
</div>
</section>
<section className="portfolio-ai">
<p>MY APPROACH TO AI</p>
<div>
<h2>Implementation accelerator.<br/>Not a substitute for understanding.</h2>
<p>I use an AI coding collaborator to prototype complex interactions faster. I understand how the components connect, can read and modify the React and TypeScript, diagnose ordinary errors, and maintain and extend the site. The output remains my responsibility.</p>
<blockquote>AI can produce an answer without producing understanding. The evidence is whether you can explain, evaluate, correct, and apply the work.</blockquote>
</div>
</section>
<section className="portfolio-stack">
<p>TECHNICAL STACK</p>
<div>{["React","TypeScript","CSS","SVG","Responsive design","Scroll-linked motion","Component architecture","Debugging","AI-assisted development","ChatGPT Sites"].map(x=>
<span key={x}>{x}</span>)}</div>
</section>
<section className="portfolio-outcome">
<p>THE OUTCOME</p>
<h2>A portfolio designed to make the right person remember my name—and want the full story.</h2>
<a href="/">Experience the homepage ↗</a>
</section>
<nav className="workflow-next">
<a href="/workflows">← Work Library</a>
<a href="/#work">Selected work ↓</a>
</nav>
<footer className="library-footer">
<p>Have a spatial question<br/>worth following?</p>
<a href="mailto:hello@yanethcastillo.com">Let’s map it out ↗</a>
<div>
<span>Yaneth Castillo, GISP</span>
<span>© 2026</span>
</div>
</footer>
</main>}
