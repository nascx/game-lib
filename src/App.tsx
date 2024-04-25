import React, { ChangeEvent, useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

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

  const [title, setTitle] = useState<string>('')
  const [cover, setCover] = useState<string>('')

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addGame(title, cover)
    setTitle('')
    setCover('')
  }

  return (
    <div id="app">
      <h1>Game library</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            className="form-control"
            onChange={(ev: ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="cover">Cover:</label>
          <input
            className="form-control"
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(ev: ChangeEvent<HTMLInputElement>) => setCover(ev.target.value)}
          />
        </div>
        <button
          className="btn btn-dark"
          type="submit">
          Add to library
        </button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="Game cover" />
            <h2>{game.title}</h2>
            <button onClick={() => removeGame(game.id)}>Remove game</button>
          </div>
        ))}
      </div>
    </div>
  )
}