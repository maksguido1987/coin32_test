import React from 'react';
import { RatingStyled } from './game-card.styled';

export const GameRating = ({ rating }) => {
  return (
    <RatingStyled>
      Rating:<span>{rating}</span>
    </RatingStyled>
  );
};
