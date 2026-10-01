'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      const isClickable = target.closest('button') || target.closest('a') || target.closest('[role="button"]')
      setIsHovering(!!isClickable)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] flex items-center justify-center text-rose-400 drop-shadow-[0_0_8px_rgba(255,105,180,0.8)]"
      animate={{
        x: mousePosition.x - (isHovering ? 20 : 10),
        y: mousePosition.y - (isHovering ? 20 : 10),
        scale: isHovering ? 1.5 : 1,
        opacity: mousePosition.x === 0 ? 0 : 1
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
    >
      <span className="text-xl">✨</span>
    </motion.div>
  )
}
