import React from 'react';
import { Game } from '../../hooks/useGames';
import getCroppedImage from '../../services/image-url';
interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <div className="bg-gray-700 rounded-md overflow-hidden ">
            <img src={getCroppedImage(game.background_image)} alt="" />
            <div>
                <h1>{game.name}</h1>
            </div>
        </div>
    );
};

export default GameCard;
