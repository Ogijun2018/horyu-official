import React from 'react';
import type { FC } from 'react';
import {Link} from 'gatsby';

export const Header: FC = () => (
  <header>
    <h3>
      <Link to='/' className="link">保留</Link>
    </h3>
  </header>
)
