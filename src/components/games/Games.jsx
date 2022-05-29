// @ts-nocheck
import React from 'react';
import { Filters } from '../filters';
import { GameCard } from '../game-card';
import { GamesStyled } from './games.styled';

export const Games = React.forwardRef(({ games }, ref) => {
  const renderGame = (
    { id, background_image, name, rating, released }
  ) => {
    return (
      <GameCard
        key={id}
        background_image={background_image}
        name={name}
        rating={rating}
        released={released}
        id={id}
      />
    );
  };

  return (
    <GamesStyled>
      <h1 className='home-page__title'>All Games</h1>
      <p>Based on player counts and release date</p>
      <Filters />
      <div className='games-container'>
        {games && games.map(renderGame)}
      </div>
      <div ref={ref} />
    </GamesStyled>
  );
});

Games.displayName = 'Games';
