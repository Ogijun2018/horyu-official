import React from 'react';
import type { FC } from 'react';
import { Link, graphql } from 'gatsby';
import type { AboutPageQuery } from '../../types/graphql-types';
import { Layout } from '../components/layout';
import { Button, ButtonGroup, Text } from '@chakra-ui/react';

interface PageProps {
  data: AboutPageQuery;
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout>
    <Text fontSize="6xl">
      About {data.site?.siteMetadata?.title ?? '(無題)'}
    </Text>
    <Text fontSize="4xl">Made by GatsbyJS!</Text>
    <Button colorScheme="blue">
      <Link to="/">Home</Link>
    </Button>
  </Layout>
);

export default Page;

export const query = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
