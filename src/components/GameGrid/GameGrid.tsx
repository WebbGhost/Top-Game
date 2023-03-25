import useGames from '../../hooks/useGames';

type Props = {};

const GameGrid = (props: Props) => {
    const { games, err } = useGames();
    return (
        <>
            {!!err && <p>{err}</p>}
            <ul>
                {games.map((game) => (
                    <li>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
