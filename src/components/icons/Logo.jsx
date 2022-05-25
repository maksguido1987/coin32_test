import React from 'react';
import Image from 'next/image';
import { LogoStyled } from './icons.styled';
// @ts-ignore
import logo from '../../../public/icons/logo.png';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/'>
      <LogoStyled>
        <Image src={logo} alt='logo' objectFit='cover' layout='fill' />
      </LogoStyled>
    </Link>
  );
};
