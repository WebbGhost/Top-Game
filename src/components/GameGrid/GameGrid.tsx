import { useEffect, useState } from 'react';
import apiClient from '../../services/api-client';

type Props = {};
interface Game {
    id: number;
    name: string;
}
interface FetchGameResponse {
    count: number;
    results: Game[];
}

const GameGrid = (props: Props) => {
    const [games, setGames] = useState<Game[]>([]);
    const [err, setErr] = useState();
    useEffect(() => {
        apiClient
            .get<FetchGameResponse>('/gamess')
            .then((response) => {
                setGames(response.data.results);
            })
            .catch((error) => {
                console.log(error);
                setErr(error.message);
            });
    });
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
