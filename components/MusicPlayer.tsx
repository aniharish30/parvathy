'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/music.mp3') // Placeholder path
    audioRef.current.loop = true
    audioRef.current.volume = 0.4
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      // Catch playback errors if file doesn't exist yet
      audioRef.current.play().catch(e => console.log('Add a music.mp3 file to the /public folder!'))
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      onClick={togglePlay}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/40 shadow-lg backdrop-blur-md transition-all hover:bg-white/60 hover:scale-105"
      aria-label="Toggle background music"
    >
      {isPlaying ? (
        <span className="text-2xl drop-shadow-md">🎵</span>
      ) : (
        <span className="text-2xl drop-shadow-md opacity-50">🔇</span>
      )}
    </motion.button>
  )
}
