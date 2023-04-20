import React, { ReactNode } from 'react';
import type { FC } from 'react';
import { Header } from '../components/header';
import '../styles/index.scss';
import { Container } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export const FullLayout: FC<Props> = ({ children }) => (
  <div className="wrapper">
    <Header />
    <Container maxW="100%" height="80vh">
      {children}
    </Container>
  </div>
);
