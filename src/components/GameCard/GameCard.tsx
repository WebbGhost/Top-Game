import React from 'react';
import { Game } from '../../hooks/useGames';
import getCroppedImage from '../../services/image-url';
import PlatformList from '../PlatformList/PlatformList';
interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <div className="bg-gray-700 rounded-md overflow-hidden ">
            <img src={getCroppedImage(game.background_image)} alt="" />
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1>{game.name}</h1>
                <PlatformList
                    platforms={game.parent_platforms.map((p) => p.platform)}
                />
            </div>
        </div>
    );
};

export default GameCard;
