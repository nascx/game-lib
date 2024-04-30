type GameProps = {
    title: string,
    cover: string,
    onRemove: () => void
}

const Game = ({ title, cover, onRemove }: GameProps) => {
    return (
        <div>
            <img src={cover} alt="Game cover" />
            <h2>{title}</h2>
            <button onClick={onRemove}>Remove game</button>
        </div>
    )
}

export default Game