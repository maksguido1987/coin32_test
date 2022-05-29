// @ts-nocheck
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { GameRating } from '../game-card';
import {
  DetailsContainerStyled,
  DetailsImagesStyled,
  DetailsInfoStyled,
  MainImageStyled,
} from './game-details.styled';
import GameGenres from './GameGenres';
import { GamePlatforms } from './GamePlatforms';
import { ScreenShotsBar } from '../screen-shots-bar';

export const GameDetails = ({ game, screenshots, isLoading }) => {
  const {
    name,
    website,
    platforms,
    genres,
    description_raw,
    background_image,
    released,
    rating,
    playtime,
  } = game;

  return (
    <DetailsContainerStyled>
      <DetailsInfoStyled>
        <div className='details-game__wrap'>
          <div className='details-game__released'>{released}</div>
          <GameRating rating={rating} />
          <div className='details-game__playtime'>
            AVERAGE PLAYTIME: {playtime} HOURS
          </div>
        </div>
        <h2 className='details-game__name'>{name}</h2>
        <GamePlatforms platforms={platforms} />
        <GameGenres genres={genres} />
        <Link href={website}>
          <a className='details-game__website'>
            <span className='subtitle'>Website:</span>
            <span className='details-game__website-link'> {website}</span>
          </a>
        </Link>
        <p>
          <span className='subtitle'>About:</span> {description_raw}
        </p>
      </DetailsInfoStyled>
      <DetailsImagesStyled>
        <MainImageStyled>
          <Image
            src={background_image}
            alt={name}
            objectFit='cover'
            layout='fill'
          />
        </MainImageStyled>
        <ScreenShotsBar screenshots={screenshots} isLoading={isLoading} />
      </DetailsImagesStyled>
    </DetailsContainerStyled>
  );
};
