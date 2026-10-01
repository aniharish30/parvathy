'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Btn, Burst, fadeUp } from '@/lib/ui'
export default function Opening({ onNext }:{ onNext:()=>void }) {
  const [rev,setRev] = useState(false)
  useEffect(()=>{const t=setTimeout(()=>setRev(true),2800);return()=>clearTimeout(t)},[])
  return <Section>
    <motion.div variants={fadeUp} className="glass relative w-full max-w-md rounded-[2rem] px-6 py-10">
      {rev && <Burst n={26} spread={160}/>}
      <motion.div animate={{y:[0,-8,0]}} transition={{repeat:Infinity,duration:2.4}} className="glow text-5xl">🎂</motion.div>
      <h1 className="mt-4 font-hand text-6xl text-rose-500">Parvathy <motion.span animate={{scale:[1,1.25,1]}} transition={{repeat:Infinity,duration:1.4}} className="inline-block">❤️</motion.span></h1>
      <p className="mt-3 text-lg text-pink-700/80">A little surprise for you...</p>
      <motion.p initial={{opacity:0,y:12}} animate={rev?{opacity:1,y:0}:{}} transition={{duration:1}} className="mt-6 min-h-[4rem] font-serif text-2xl italic text-rose-600">
        Advance Happy Birthday, Parvathy 🎂❤️</motion.p>
    </motion.div>
    {rev && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="mt-8"><Btn onClick={onNext}>Open My Little Surprise 💌</Btn></motion.div>}
  </Section>
}
