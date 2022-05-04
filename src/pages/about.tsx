import React from 'react';
import type {FC} from 'react';
import { Link } from 'gatsby';

const Page: FC = () => (
  <div>
    <h1>About</h1>
    <p>Hot Reload?</p>
    <Link to='/'>Home</Link>
  </div>
);

export default Page;
