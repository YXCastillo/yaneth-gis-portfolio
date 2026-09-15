"use client";
import {useState} from "react";
import {workflows} from "./workflow-data";

const caseStudies=[
  {slug:"/case-studies/custom-web-gis",number:"05",lens:"Custom Web GIS",title:"Turning 51 layers into one navigable system",question:"How do you preserve a complex planning dataset while making it usable for a public audience?",tools:["JSON","Sanity","Layer architecture"],tone:"sand"},
  {slug:"/case-studies/municipal-cartography",number:"07",lens:"Municipal Cartography",title:"Making municipal complexity legible",question:"How do you hold overlapping jurisdictions, infrastructure, imagery, and local context in one readable exhibit?",tools:["ArcGIS Pro","Symbology","Visual hierarchy"],tone:"teal"}
];
const creative=[{slug:"/case-studies/portfolio",number:"06",lens:"Creative Technology",title:"Designing a portfolio that behaves like a map",question:"How can a GIS portfolio demonstrate spatial thinking before a visitor reads a single project?",tools:["React","TypeScript","CSS + SVG"],tone:"ink"}];

const previews:Record<string,string>={
  "site-feasibility":"/parcel-civil.webp",
  "corridor-impact":"/parcel-transportation.webp",
  "ordinances-to-gis":"/parcel-municipality.webp",
  "public-facing-web-gis":"/parcel-public.webp",
  "/case-studies/custom-web-gis":"/case-study/dcol/dcol-overview-sanitized.png",
  "/case-studies/portfolio":"/hero-gis-map-artwork-v1.webp",
  "/case-studies/municipal-cartography":"/case-study/municipal-cartography/sanitized-map.webp"
};

export default function LibraryGrid(){
  const [filter,setFilter]=useState("All");
  const items=[...workflows.map(w=>({...w,href:`/workflows/${w.slug}`,category:"Workflows"})),...caseStudies.map(w=>({...w,href:w.slug,category:"Case Studies"})),...creative.map(w=>({...w,href:w.slug,category:"Creative Technology"}))];
  const visible=filter==="All"?items:items.filter(item=>item.category===filter);
  return <>
    <div className="library-filter" aria-label="Filter work library">{["All","Workflows","Case Studies","Creative Technology"].map(label=><button className={filter===label?"is-active":""} onClick={()=>setFilter(label)} key={label}>{label}<span>{label==="All"?items.length:items.filter(x=>x.category===label).length}</span></button>)}</div>
    <section className="library-grid" aria-live="polite">{visible.map(w=><a className={`library-card ${w.tone}`} href={w.href} key={w.href}><img className="library-card-preview" src={previews[w.slug]} alt="" loading="lazy" decoding="async"/><div className="library-card-shade"/><div className="library-card-copy"><span>{w.number} · {w.lens}</span><h2>{w.title}</h2><p>{w.question}</p><div className="library-card-tools">{w.tools.slice(0,3).map(t=><i key={t}>{t}</i>)}</div><b>{w.category==="Workflows"?"Read workflow":"Read case study"} ↗</b></div></a>)}</section>
  </>
}
