import React from 'react';
import { SearchIcon } from '../icons';
import {
  SearchContainerStyled,
  SearchInputStyled,
  SearchlabelStyled,
} from './search.styled';

export const Search = () => {
  return (
    <SearchContainerStyled>
      <SearchlabelStyled>
        <SearchInputStyled placeholder='Search 737, 339 games' />
        <SearchIcon />
      </SearchlabelStyled>
    </SearchContainerStyled>
  );
};
