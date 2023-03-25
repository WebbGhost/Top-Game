import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Game {
    id: number;
    name: string;
    background_image: string;
}
interface FetchGameResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [err, setErr] = useState();
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGameResponse>('/games', { signal: controller.signal })
            .then((response) => {
                setGames(response.data.results);
            })
            .catch((error) => {
                setErr(error.message);
            });
        return () => controller.abort();
    }, []);
    return { games, err };
};
export default useGames;
