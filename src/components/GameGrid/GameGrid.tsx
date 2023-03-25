import useGames from '../../hooks/useGames';
import GameCard from '../GameCard/GameCard';

type Props = {};

const GameGrid = (props: Props) => {
    const { games, err } = useGames();
    return (
        <>
            {!!err && <p>{err}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 p-2 gap-4 ">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </>
    );
};

export default GameGrid;
