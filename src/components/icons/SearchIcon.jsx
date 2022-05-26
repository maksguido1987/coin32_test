import React from 'react';
import Image from 'next/image';
import { SearchIconStyled } from './icons.styled';
// @ts-ignore
import search from '../../../public/icons/search.png';

export const SearchIcon = () => {
  return (
    <SearchIconStyled>
      <Image src={search} alt='search-logo' width={15} height={15} className='search-icon' />
    </SearchIconStyled>
  );
};
