import React from 'react';
import type { FC } from 'react';
import { Link } from 'gatsby';

export const Footer: FC = () => (
  <footer>
    <p>&copy; 保留</p>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="mailto:chocotto.matte@gmail.com">Contact</a>
      </li>
    </ul>
  </footer>
);
