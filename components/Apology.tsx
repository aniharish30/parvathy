'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, Btn, Burst, fadeUp } from '@/lib/ui'

export default function Apology({ onNext }: { onNext: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <Section>
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.div
            key="a"
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center gap-5"
          >
            <motion.p variants={fadeUp} className="font-hand text-3xl">
              Before you go any further...
            </motion.p>

            <motion.div
              variants={fadeUp}
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="glow text-8xl"
            >
              💌
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-serif text-xl italic"
            >
              I have something important to tell you.
            </motion.p>

            <Btn onClick={() => setOpen(true)}>Open it ❤️</Btn>
          </motion.div>
        ) : (
          <motion.div
            key="b"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-xl"
          >
            <Burst n={14} />

            <div className="paper rounded-3xl p-6 text-left shadow-2xl shadow-pink-300/50 sm:p-10">
              <p className="font-serif text-[0.95rem] leading-8 sm:text-lg">
                hey poochi ni hurt agiruganuu thariutthu , a thuku ni recover
                agga evolo time vennalum eduthukoo na wait panuren , en mela
                tha thapuu , but vituu pooovenuu solathaa paru , thaaga
                mudiyalaaaaa , soryyyyyy diiii , eni mela epdii erukathauu
                namaka vendii naama life vendii , un happienesss vendi , namaa
                happieness kaaa vendii ethu kodda panalanaeeee na alm ena dii
                boy , ena namaabi oruye ory chance thanthu paruu , jolly a
                erukalam muuuu , sooryyy muuu , ena love panaaa viduuu muuu ,
                soorryyyy muuuuuu , soooryyy muuu................., ni yentha
                alavu hurt agirunthane epdi alm pesuvenu tharium , elathukum na
                than karam di , tha resolve pana oru vaiupu tha di , un kiitaa
                thara onumaee ilaa soluraa , atleast ena naiyathu tha viduu ,
                evolo nalall share pani pathurupa , epom na thanren reviceing
                pani paruu , eni epdii panaaaaaa ena ena venaa solau panu , but
                antha pesuke edam ila di , enimey enga , na namakegae vendi en
                allukae vedi enagae vendi na epdi panamae una nalaa pathupen ,
                mela soon a oru chila vissyam thapa erunthaa manichuruu soory
                di !!!. ❤️
              </p>

              <p className="mt-6 text-center font-hand text-3xl text-rose-500">
                One chance. Not because I deserve it, but because I want to
                earn it. ❤️
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Btn onClick={onNext}>Continue 💕</Btn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}