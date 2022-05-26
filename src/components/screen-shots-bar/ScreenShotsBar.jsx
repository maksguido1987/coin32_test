// @ts-nocheck
import React, { useState } from 'react';
import Image from 'next/image';
import {
  ScreenShotsArrowStyled,
  ScreenShotsStyled,
} from './screen-shots-bar.styled';

export const ScreenShotsBar = ({ screenshots }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = screenshots?.results.length;

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  const renderImage = (screen, index) => {
    const { id, image } = screen;
    return (
      <Image
        key={id}
        src={image}
        alt='screen'
        objectFit='cover'
        layout='fill'
        className={`${index === currentImage ? 'visible' : 'hidden'}`}
      />
    );
  };

  return (
    <ScreenShotsStyled>
      <ScreenShotsArrowStyled left={'3%'} onClick={prevSlide} />
      {screenshots?.results.map(renderImage)}
      <ScreenShotsArrowStyled rotate={'180'} right={'3%'} onClick={nextSlide} />
    </ScreenShotsStyled>
  );
};
