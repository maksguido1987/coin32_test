import React from 'react';
import { Header } from '../header';
import { LayoutStyled } from './layout.styled';

export const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <main>
        {children}
      </main>
    </LayoutStyled>
  );
};
