'use client'

import { useState } from 'react'
import DeckList from '../../components/DeckList'
import CreateDeckModal from '../../components/CreateDeckModal'
import ScriptureAnimation from '../../components/ScriptureAnimation'

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Your Flashcard Decks</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Create New Deck
        </button>
      </div>
      <ScriptureAnimation />
      <DeckList />
      <CreateDeckModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
