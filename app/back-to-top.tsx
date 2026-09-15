"use client";

import {useEffect,useState} from "react";

export default function BackToTop(){
  const [visible,setVisible]=useState(false);
  useEffect(()=>{const update=()=>setVisible(scrollY>700);update();addEventListener("scroll",update,{passive:true});return()=>removeEventListener("scroll",update)},[]);
  return <button className={`back-to-top ${visible?"is-visible":""}`} type="button" onClick={()=>scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top"><span>↑</span><small>Top</small></button>
}
