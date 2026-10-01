'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, Btn, fadeUp } from '@/lib/ui'
// 👉 Replace these files in /public/images (or edit paths/captions here)
const P = [
 {src:'/images/photo1.jpg',cap:'That laugh... pure happiness 😍',r:-4},
 {src:'/images/photo2.jpg',cap:'Chilling together, always ❤️',r:3},
 {src:'/images/photo3.jpg',cap:'Under the trees, with you 🌸',r:-2},
 {src:'/images/photo4.jpeg',cap:'Your smile makes everything better 🥹',r:4},
 {src:'/images/photo5.jpg',cap:'Night vibes with my favourite person 🌙',r:-3}]
function Img({ src, className='' }:{ src:string; className?:string }) {
  const [bad,setBad] = useState(false)
  return bad ? <div className={`flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-200 text-4xl ${className}`}>🌸</div>
   : <img src={src} alt="memory" loading="lazy" onError={()=>setBad(true)} className={`object-cover ${className}`}/>
}
export default function PhotoGallery({ onNext }:{ onNext:()=>void }) {
  const [sel,setSel] = useState<number|null>(null)
  return <Section>
    <motion.h2 variants={fadeUp} className="font-hand text-5xl text-rose-500">A few little memories... ❤️</motion.h2>
    <motion.p variants={fadeUp} className="mt-2 max-w-sm italic">Some moments are too special to be explained with words.</motion.p>
    <div className="-mx-5 mt-8 flex w-screen snap-x snap-mandatory gap-6 overflow-x-auto px-[12vw] py-6 md:mx-0 md:w-full md:max-w-5xl md:flex-wrap md:justify-center md:overflow-visible md:px-0">
      {P.map((p,i)=><motion.button key={i} onClick={()=>setSel(i)} initial={{opacity:0,y:40,rotate:0}} whileInView={{opacity:1,y:0,rotate:p.r}} viewport={{once:true}}
        whileHover={{scale:1.06,rotate:0,zIndex:5}} whileTap={{scale:.97}} className="w-[66vw] max-w-[240px] shrink-0 snap-center bg-white p-3 pb-4 shadow-xl shadow-pink-300/50">
        <Img src={p.src} className="aspect-square w-full"/><p className="mt-3 font-hand text-xl leading-6">{p.cap}</p></motion.button>)}
    </div>
    <Btn onClick={onNext} className="mt-4">Continue 💌</Btn>
    <AnimatePresence>{sel!==null && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSel(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-rose-950/70 p-5 backdrop-blur-sm">
      <motion.div initial={{scale:.8,rotate:-6}} animate={{scale:1,rotate:0}} exit={{scale:.8}} className="max-h-[90svh] w-full max-w-md bg-white p-4 pb-5 shadow-2xl">
        <Img src={P[sel].src} className="max-h-[65svh] w-full"/><p className="mt-3 text-center font-hand text-2xl">{P[sel].cap}</p>
        <p className="text-center text-xs text-pink-400">tap anywhere to close</p></motion.div></motion.div>}</AnimatePresence>
  </Section>
}
