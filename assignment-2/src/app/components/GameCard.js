const GameCard = ({ game }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
          <p className="text-gray-600 mb-2">Platform: {game.platform}</p>
          <p className="text-gray-600 mb-2">Score: {game.score}</p>
          <p className="text-gray-600 mb-2">Genre: {game.genre}</p>
          {game.editors_choice === 'Y' && (
            <p className="text-green-600 font-semibold">Editor's Choice</p>
          )}
        </div>
      </div>
    )
  }
  
  export default GameCard
  
  