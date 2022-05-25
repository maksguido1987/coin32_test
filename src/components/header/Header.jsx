import React from 'react';
import { Logo } from '../icons';
import { Search } from '../search';
import { HeaderStyled } from './header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Search />
    </HeaderStyled>
  );
};
