'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, Btn, Burst, fadeUp } from '@/lib/ui'
const B = [
 ['❤️','#ff8fa3',"I'm soory for that every movemnet oana na hurt panathuku."],
 ['🌸','#ffb3c6',"I know di sorry sonaa alm maranthida mudiyathunu ."],
 ['✨','#c8b6ff',"enaku vanthu ena action katuna nlaa erukum thonuthu allow me ."],
 ['🫶','#ffc9a3',"un kood vazhnthu shagavum orye oryu vaipu thaa yennn amuuu."],
 ['🥺','#ffd6e0',"oanku time venna time eduthukooo amuuun na tharen."],
 ['💗','#e0aaff',"If you give me one chance, na ena profee panuren di . ❤️"]]
export default function Balloons({ onNext }:{ onNext:()=>void }) {
  const [shake,setShake] = useState<number|null>(null)
  const [popped,setPopped] = useState<number[]>([])
  const tap = (i:number)=>{ if(popped.includes(i)||shake!==null)return; setShake(i)
    setTimeout(()=>{setPopped(p=>[...p,i]);setShake(null)},450) }
  return <Section>
    <motion.p variants={fadeUp} className="font-hand text-3xl">There are a few things I couldn&apos;t say properly...</motion.p>
    <motion.p variants={fadeUp} className="mt-2 text-pink-700/80">Touch the balloons one by one 💕</motion.p>
    <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-x-4 gap-y-8">
      {B.map(([e,c],i)=><div key={i} className="relative flex h-28 items-center justify-center">
        <AnimatePresence>{!popped.includes(i) && <motion.button aria-label="balloon" exit={{scale:1.6,opacity:0}}
          onClick={()=>tap(i)} animate={shake===i?{rotate:[0,-12,12,-12,0]}:{y:[0,-10,0]}}
          transition={shake===i?{duration:.45}:{repeat:Infinity,duration:2.5+i*.3}}
          className="relative h-24 w-20 rounded-[50%_50%_48%_48%] text-3xl shadow-lg" style={{background:`radial-gradient(circle at 30% 25%,#fff8,${c})`}}>
          {e}<span className="absolute -bottom-4 left-1/2 h-4 w-px bg-pink-300"/></motion.button>}</AnimatePresence>
        {popped.includes(i) && <Burst n={12} spread={70}/>}
      </div>)}
    </div>
    <div className="mt-6 flex w-full max-w-md flex-col gap-3">
      <AnimatePresence>{popped.map(i=><motion.p key={i} initial={{opacity:0,scale:.9,y:10}} animate={{opacity:1,scale:1,y:0}}
        className="glass rounded-2xl px-4 py-3 font-hand text-2xl text-rose-600">{B[i][2]}</motion.p>)}</AnimatePresence>
    </div>
    <div className="mt-8"><Btn onClick={onNext}>Continue 🌸</Btn></div>
  </Section>
}
