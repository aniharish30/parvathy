'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const icons = ['❤️','💗','🌸','✨','⭐','💕']
export default function FloatingHearts() {
  const [items,setItems] = useState<any[]>([])
  useEffect(()=>setItems(Array.from({length:16}).map((_,i)=>({i,e:icons[i%6],x:Math.random()*100,s:12+Math.random()*16,d:12+Math.random()*10,delay:Math.random()*10}))),[])
  return <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {items.map(h=><motion.span key={h.i} className="absolute opacity-40" style={{left:`${h.x}%`,bottom:-40,fontSize:h.s}}
      animate={{y:[0,-1000],x:[0,20,-20,0]}} transition={{duration:h.d,delay:h.delay,repeat:Infinity,ease:'linear'}}>{h.e}</motion.span>)}
  </div>
}
