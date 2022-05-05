import React, { ReactNode } from 'react';
import type { FC } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../styles/index.scss';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </div>
);
