'use client'
import { motion } from 'framer-motion'
import { Section, Btn, fadeUp } from '@/lib/ui'
const L = ['yethuva erunthalum yoosichu na mudivu panuven react pana munadi.','pesuven theva ilama  assume panathuku munnadi.','Respect panuven un feelings and boundaries.','Show change through actions, not repeated words.','na vanthu patienta eruken trust vara varikum. ']


export default function Promises({ onNext }:{ onNext:()=>void }) {
  return <Section>
    <motion.div variants={fadeUp} animate={{scale:[1,1.15,1]}} transition={{repeat:Infinity,duration:1.6}} className="glow text-7xl">❤️</motion.div>
    <motion.h2 variants={fadeUp} className="mt-3 font-hand text-6xl text-rose-500">My Promise</motion.h2>
    <div className="mt-8 flex w-full max-w-md flex-col gap-3">
      {L.map((t,i)=><motion.div key={i} initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.2}}
        className="glass flex items-center gap-3 rounded-2xl px-4 py-4 text-left">
        <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0"><circle cx="12" cy="12" r="11" fill="#fda4af"/>
          <motion.path d="M6 12.5l4 4 8-9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{delay:i*.2+.4,duration:.5}}/></svg>
        <span className="text-lg">{t}</span></motion.div>)}
    </div>
    <Btn onClick={onNext} className="mt-8">Continue 🌙</Btn>
  </Section>
}
