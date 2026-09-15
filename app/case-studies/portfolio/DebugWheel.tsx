"use client";

import {useEffect, useState} from "react";

const captures = [
  ["/case-study/debug-collage/perspective-cards-v1.png", "Early point-of-view section before its card layout was fully resolved"],
  ["/case-study/debug-collage/circles-overflow.png", "Circular process cards overflowing beyond the viewport"],
  ["/case-study/debug-collage/route-path-error.png", "Unfinished animated route paths drawing across the point-of-view section"],
  ["/case-study/debug-collage/skill-ring-blur.png", "Rotating skill labels becoming blurred and difficult to read"],
  ["/case-study/debug-collage/circle-contrast-error.png", "Process circles with poor text contrast and clipped neighboring cards"],
  ["/case-study/debug-collage/ticker-overflow.png", "Skills ticker clipped at both sides of the page"],
  ["/case-study/debug-collage/oval-cards-v1.png", "Early perspective cards rendered as oversized oval crops"],
] as const;

export default function DebugWheel(){
  const [active,setActive]=useState(0);

  useEffect(()=>{
    const timer=window.setInterval(()=>setActive(current=>(current+1)%captures.length),2800);
    return ()=>window.clearInterval(timer);
  },[]);

  const position=(index:number)=>{
    const delta=(index-active+captures.length)%captures.length;
    if(delta===0) return "is-current";
    if(delta===1) return "is-next";
    if(delta===captures.length-1) return "is-previous";
    return "is-hidden";
  };

  return <>
    <div className="debug-monitor-screen debug-step-wheel" aria-live="polite">
      {captures.map(([src,alt],index)=><figure className={position(index)} key={src} aria-hidden={index!==active}>
        <img src={src} alt={index===active?alt:""}/>
      </figure>)}
    </div>
  </>;
}
