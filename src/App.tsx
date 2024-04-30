import { useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";

type Game = {
  id: number
  title: string,
  cover: string
}

export default function App() {

  const [games, setGames] = useState<Game[] | []>(() => {
    const storedGames = localStorage.getItem('obc-game-lib')
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })



  const addGame = (title: string, cover: string) => {
    //generate a value between one and one milion
    const id: number = Math.floor(Math.random() * 1000000)
    const game: Game = { id, title, cover }
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    })
  }

  const removeGame = (id: number) => {
    setGames(games => {
      const newState = games.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }



  return (
    <div id="app">
      <h1>Game library</h1>
      <NewGameForm addGame={addGame}/>
      <div className="games">
        {games.map((game) => (
          <Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />
        ))}
      </div>
    </div>
  )
}