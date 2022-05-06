import React from 'react';
import type { FC } from 'react';
import { Link } from 'gatsby';
import { Image } from '@chakra-ui/react';
import Logo from '../img/Logo.png';

export const Header: FC = () => (
  <header>
    <Link to="/" className="link">
      <Image src={Logo} alt="logo" height="20px" />
    </Link>
  </header>
);
