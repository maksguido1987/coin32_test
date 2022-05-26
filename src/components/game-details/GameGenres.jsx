import React from 'react';
import { GameGenresStyled } from './game-details.styled';

const GameGenres = ({ genres }) => {
  const renderGenre = (item, index) => {
    return (
      <div key={index} className='genre'>
        {item.name}
      </div>
    );
  };

  return (
    <GameGenresStyled>
      <span className='subtitle'>Genres:</span> {genres.map(renderGenre)}
    </GameGenresStyled>
  );
};

export default GameGenres;
