import type {Workflow} from "./workflow-data";

export default function WorkflowArticle({workflow}:{workflow:Workflow}){
  return <main className={`workflow-article workflow-tone-${workflow.tone}`}>
    <nav className="library-nav"><a className="mark" href="/">YC<span>°</span></a><div><a href="/">Home</a><a href="/workflows">Work Library</a></div></nav>
    <header className="workflow-hero"><div><p>WORKFLOW {workflow.number} · {workflow.lens.toUpperCase()}</p><h1>{workflow.title}</h1><p className="workflow-question">{workflow.question}</p></div><div className="workflow-abstract" aria-hidden="true"><i/><i/><i/><b/><span/></div></header>
    <section className="workflow-intro"><p className="workflow-label">REPRESENTATIVE WORKFLOW</p><div><p className="workflow-deck">{workflow.intro}</p><p>{workflow.matters}</p></div></section>
    <section className="workflow-evidence"><div><p className="workflow-label">THE INFORMATION THAT MATTERS</p><h2>Layers become useful<br/>in relationship.</h2></div><ol>{workflow.layers.map((layer,i)=><li key={layer}><span>{String(i+1).padStart(2,"0")}</span>{layer}</li>)}</ol></section>
    <section className="workflow-process"><p className="workflow-label">THE WORKFLOW</p><div>{workflow.steps.map((step,i)=><article key={step.title}><span>{String(i+1).padStart(2,"0")}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></section>
    <section className="workflow-result"><div><p className="workflow-label">WHAT THE MAP COMMUNICATES</p><h2>{workflow.communicates}</h2></div><aside><p className="workflow-label">WHERE IT CAN FAIL</p><p>{workflow.failure}</p></aside></section>
    <section className="workflow-related"><div><p className="workflow-label">OTHER APPLICATIONS</p><h2>The same pattern.<br/>Different questions.</h2></div><ul>{workflow.applications.map(x=><li key={x}>{x}<span>↗</span></li>)}</ul></section>
    <section className="workflow-tools"><p className="workflow-label">TOOLS + METHODS</p><div>{workflow.tools.map(tool=><span key={tool}>{tool}</span>)}</div><p className="anonymized-note">This page describes a representative production pattern. Client-specific details and identifying information are intentionally excluded.</p></section>
    <nav className="workflow-next"><a href="/workflows">← Work Library</a><a href="/#work">Selected work ↓</a></nav>
    <footer className="library-footer"><p>Have a spatial question<br/>worth following?</p><a href="mailto:hello@yanethcastillo.com">Let’s map it out ↗</a><div><span>Yaneth Castillo, GISP</span><span>© 2026</span></div></footer>
  </main>
}
