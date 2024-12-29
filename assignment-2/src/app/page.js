'use client'

import { useState, useEffect } from 'react'
import GameList from './components/GameList'
import SearchBar from './components/SearchBar'
import PlatformFilter from './components/PlatformFilter'

export default function Home() {
  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    try {
      const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json')
      const data = await response.json()
      const gamesData = data.slice(1)
      setGames(gamesData)
      setFilteredGames(gamesData)
      
      // Extract unique platforms
      const uniquePlatforms = ['All', ...new Set(gamesData.map(game => game.platform))]
      setPlatforms(uniquePlatforms)
    } catch (error) {
      console.error('Error fetching games:', error)
    }
  }

  useEffect(() => {
    const filtered = games.filter(game => 
      (selectedPlatform === 'All' || game.platform === selectedPlatform) &&
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredGames(filtered)
  }, [selectedPlatform, searchTerm, games])

  return (
    <div className="min-h-screen bg-gray-800">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-200">Games Browser</h1>
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} games={games} />
          <PlatformFilter 
            platforms={platforms} 
            selectedPlatform={selectedPlatform} 
            setSelectedPlatform={setSelectedPlatform} 
          />
        </div>
        <GameList games={filteredGames} />
      </main>
    </div>
  )
}

