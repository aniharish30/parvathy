'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, Btn, Burst, fadeUp } from '@/lib/ui'
const N = ["puriuthu dii un feelings na atha igonore panalaa , una apdi panathuku soory ",
 "eni mel trust vara vaika kastam tha di en melaa , but na atha earn panuvenu enaku nambika eruku mu",
 "na vanthu past ta maraka solalaa , pasta ta matha aalm athuku tha kekeuren one chnacee tha di.",
 "na enimela apdii alm eruka maten , una kasta padutha matenn di ",
 "na una hurt panuathuku soory ketukuren geniuneaaa ❤️"]
export default function MemoryNotes({ onNext }:{ onNext:()=>void }) {
  const [open,setOpen] = useState<number[]>([])
  return <Section>
    <motion.h2 variants={fadeUp} className="font-hand text-5xl text-rose-500">Things I really want you to know...</motion.h2>
    <div className="mt-8 flex w-full max-w-md flex-col gap-4">
      {N.map((t,i)=>{const o=open.includes(i); return <motion.button key={i} layout onClick={()=>!o&&setOpen(p=>[...p,i])}
        variants={fadeUp} whileTap={{scale:.97}}
        className={`paper relative overflow-hidden rounded-xl p-5 text-left shadow-lg ${o?'shadow-pink-300/70 ring-2 ring-pink-200':'shadow-pink-200/50'}`}>
        <AnimatePresence mode="wait">{o ? <motion.p key="t" initial={{rotateX:-90,opacity:0}} animate={{rotateX:0,opacity:1}} transition={{duration:.6}}
          className="font-hand text-2xl leading-7 text-rose-700">{t}</motion.p>
          : <motion.p key="c" exit={{rotateX:90,opacity:0}} className="text-center font-hand text-2xl text-pink-400">💌 Note {i+1} — tap to unfold</motion.p>}</AnimatePresence>
        {o && <Burst n={7} spread={60} items={['❤️','💗']}/>}
      </motion.button>})}
    </div>
    <Btn onClick={onNext} className="mt-8">Continue 💗</Btn>
  </Section>
}
