'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Section, fadeUp, Burst } from '@/lib/ui'
export default function BirthdayCard() {
  const [k,setK] = useState(0)
  useEffect(()=>{const t=setInterval(()=>setK(x=>x+1),1800);return()=>clearInterval(t)},[])
  return <Section>
    <motion.div variants={fadeUp} className="glass relative w-full max-w-md rounded-[2rem] px-6 py-12">
      {[0,1,2].map(j=><span key={j} className="absolute" style={{left:`${20+j*30}%`,top:`${10+(j%2)*20}%`}}>
        <Burst key={k+j*7} n={14} spread={90} items={['✨','⭐','🎉','💖','🎊']}/></span>)}
      <p className="font-hand text-3xl">And finally...</p>
      <motion.div animate={{scale:[1,1.1,1]}} transition={{repeat:Infinity,duration:2}} className="glow my-4 text-7xl">🎂</motion.div>
      <h2 className="font-serif text-3xl italic text-rose-500">Advance Happy Birthday, Parvathy! 🎂❤️</h2>
      <p className="mt-5 leading-7">I hope your birthday is filled with the happiness, peace and beautiful moments you deserve.</p>
      <p className="mt-8 font-hand text-2xl text-rose-600">From someone who is truly sorry and still hoping to make things right. ❤️</p>
    </motion.div>
  </Section>
}
