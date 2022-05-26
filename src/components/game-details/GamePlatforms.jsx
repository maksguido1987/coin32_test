import React from 'react';
import { GamePlatformsStyled } from './game-details.styled';

export const GamePlatforms = ({ platforms }) => {
  const renderPlatform = (item, index) => {
    return (
      <div key={index} className='platform'>
        {item.platform.name}
      </div>
    );
  };

  return (
    <GamePlatformsStyled>
      <span className='subtitle'>Platforms:</span> {platforms.map(renderPlatform)}
    </GamePlatformsStyled>
  );
};
