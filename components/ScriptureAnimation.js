'use client'

import { motion } from 'framer-motion'

const scriptureVerses = [
  "For God so loved the world...",
  "The Lord is my shepherd...",
  "In the beginning, God created...",
]

export default function ScriptureAnimation() {
  return (
    <div className="h-40 overflow-hidden">
      {scriptureVerses.map((verse, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.5 }}
          className="text-center text-xl text-gray-700 my-2"
        >
          {verse}
        </motion.div>
      ))}
    </div>
  )
}
