import React from 'react';
import type {FC} from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/layout';

const Page: FC = () => (
  <Layout>
    <h1>保留</h1>
    <Link to="/about">About</Link>
  </Layout>
);

export default Page;
