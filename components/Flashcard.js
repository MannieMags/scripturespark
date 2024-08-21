'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Flashcard({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="w-full h-64 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsFlipped(!isFlipped)
        }
      }}
      tabIndex={0}
      role="button"
      aria-label="Flashcard"
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6 backface-hidden">
          <p className="text-xl font-semibold">{front}</p>
        </div>
        <div 
          className="absolute w-full h-full bg-blue-100 rounded-lg shadow-lg p-6 backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="text-xl">{back}</p>
        </div>
      </motion.div>
    </div>
  )
}
