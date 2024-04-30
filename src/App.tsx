
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import { GameType } from "./hooks/useGameCollection";
import useGameCollection from './hooks/useGameCollection';


export default function App() {

  const { games, addGame, removeGame } = useGameCollection()

  return (
    <div id="app">
      <h1>Game library</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0 ? games.map((game: GameType) => (
          <Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />
        )) : (
          <h2 style={{margin: "4rem auto"}}>Your list is null. Add some game</h2>
        )
        }
      </div>
    </div>
  )
}