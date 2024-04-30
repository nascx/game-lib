import { useState } from 'react'

export type GameType = {
    id: number
    title: string,
    cover: string
  }

const useGameCollection = () => {

    const [games, setGames] = useState<GameType[] | []>(() => {
        const storedGames = localStorage.getItem('obc-game-lib')
        if (!storedGames) return []
        return JSON.parse(storedGames)
    })



    const addGame = (title: string, cover: string) => {
        //generate a value between one and one milion
        const id: number = Math.floor(Math.random() * 1000000)
        const game: GameType = { id, title, cover }
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

    return { games, addGame, removeGame }

}

export default useGameCollection