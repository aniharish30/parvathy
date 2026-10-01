'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, Btn, Burst } from '@/lib/ui'
const L = ['pravthy n na vanthu ena nambu entha website nalalaenu solala , ena alow panu en action nalaa speeak panna aloow panu , enaku tharium past alm eni matha mudithunu , anna enanal mathamudium epom la erunthu ena pana mudium nu ,,sooryy di unmaiyAAAA , manichuruu.']
export default function FinalMessage({ onNext }: { onNext: () => void }) {
  const [n, setN] = useState(1), [done, setDone] = useState(false)
  useEffect(() => { if (n < L.length) { const t = setTimeout(() => setN(n + 1), 2300); return () => clearTimeout(t) } }, [n])
  return <Section className="bg-gradient-to-b from-transparent via-purple-950/50 to-rose-950/70 text-rose-50">
    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.8 }} className="glow text-7xl">❤️</motion.div>
    <div className="mt-8 flex min-h-[15rem] max-w-md flex-col gap-4">
      {L.slice(0, n).map((t, i) => <motion.p key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: i === n - 1 ? 1 : .65, y: 0 }} transition={{ duration: 1.2 }}
        className="font-serif text-xl italic leading-8">{t}</motion.p>)}
    </div>
    {n === L.length && !done && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative mt-6">
      <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ repeat: Infinity, duration: 1.6 }}><Btn onClick={() => setDone(true)}>One Chance? ❤️</Btn></motion.div></motion.div>}
    <AnimatePresence>{done && <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative mt-4 max-w-md">
      <Burst n={12} />
      <p className="font-hand text-3xl leading-9">Whatever your answer is, I&apos;ll respect it. Thank you for reading everything. ❤️</p>
      <div className="mt-6"><Btn onClick={onNext}>One last thing 🎂</Btn></div></motion.div>}</AnimatePresence>
  </Section>
}
