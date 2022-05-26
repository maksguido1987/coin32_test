// @ts-nocheck
import React from 'react';
import Image from 'next/image';
import {
  GameCardContainerStyled,
  ImageContainerStyled,
} from './game-card.styled';
import { useRouter } from 'next/router';
import { GameRating } from './GameRating';

export const GameCard = React.memo(
  ({ id, background_image, name, rating, released }) => {
    const router = useRouter();

    return (
      <GameCardContainerStyled onClick={() => router.push(`games/${id}`)}>
        <ImageContainerStyled>
          <Image
            src={background_image}
            alt={name}
            objectFit='cover'
            layout='fill'
          />
        </ImageContainerStyled>
        <div className='game-card__info'>
          <a className='game-card__link'>{name}</a>
          <GameRating rating={rating} />
          <div className='game-card__released'>
            Released: <span>{released}</span>
          </div>
        </div>
      </GameCardContainerStyled>
    );
  }
);

GameCard.displayName = 'GameCard';
