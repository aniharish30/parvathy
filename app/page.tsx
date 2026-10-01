'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingHearts from '@/components/FloatingHearts'
import Opening from '@/components/Opening'
import Apology from '@/components/Apology'
import Balloons from '@/components/Balloons'
import PhotoGallery from '@/components/PhotoGallery'
import MemoryNotes from '@/components/MemoryNotes'
import Promises from '@/components/Promises'
import FinalMessage from '@/components/FinalMessage'
import BirthdayCard from '@/components/BirthdayCard'

const steps = [Opening, Apology, Balloons, PhotoGallery, MemoryNotes, Promises, FinalMessage, BirthdayCard] as any[]

export default function Page() {
  const [step, setStep] = useState(0)
  
  const CurrentStep = steps[step]

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-50 to-rose-100">
      <FloatingHearts/>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center overflow-y-auto"
        >
          <CurrentStep onNext={() => setStep(s => Math.min(s + 1, steps.length - 1))} />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
