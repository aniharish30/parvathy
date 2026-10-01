'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'
export const fadeUp: Variants = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:.8,ease:'easeOut'}} }
export const stagger: Variants = { hidden:{}, show:{transition:{staggerChildren:.3}} }
export function Section({ children, className='', id }:{ children:ReactNode; className?:string; id?:string }) {
  return <motion.section id={id} initial="hidden" animate="show" variants={stagger}
    className={`relative z-10 flex min-h-full w-full flex-col items-center justify-center px-5 py-10 text-center ${className}`}>{children}</motion.section>
}
export function Btn({ children, onClick, className='' }:{ children:ReactNode; onClick?:()=>void; className?:string }) {
  return <motion.button variants={fadeUp} initial="hidden" animate="show" whileHover={{scale:1.05}} whileTap={{scale:.95}} onClick={onClick}
    className={`min-h-[52px] rounded-full bg-gradient-to-r from-pink-400 to-rose-400 px-8 py-3 text-lg font-medium text-white shadow-lg shadow-pink-300/60 ${className}`}>{children}</motion.button>
}
/** One-shot burst of emoji particles from the centre of the nearest `relative` parent. */
export function Burst({ n=10, items=['❤️','✨','💗','🌸','⭐'], spread=110 }:{ n?:number; items?:string[]; spread?:number }) {
  return <span className="pointer-events-none absolute left-1/2 top-1/2 z-30">
    {Array.from({length:n}).map((_,i)=>{
      const a=(i/n)*Math.PI*2+Math.random(), d=spread*(.5+Math.random()*.6)
      return <motion.span key={i} className="absolute text-lg" initial={{x:0,y:0,opacity:1,scale:.4}}
        animate={{x:Math.cos(a)*d,y:Math.sin(a)*d-30,opacity:0,scale:1.3,rotate:Math.random()*90}}
        transition={{duration:1.2,ease:'easeOut'}}>{items[i%items.length]}</motion.span>})}
  </span>
}
