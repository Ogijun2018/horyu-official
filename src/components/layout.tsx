import React, { ReactNode } from 'react';
import type { FC } from 'react';
import { Header } from '../components/header';
import '../styles/index.scss';
import { Container } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => (
  <div className="wrapper">
    <Header />
    <Container maxW="5xl">{children}</Container>
  </div>
);
