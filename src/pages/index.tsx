import React from 'react';
import type { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/layout';
import type { IndexPageQuery } from '../../types/graphql-types';
import { SimpleGrid, Box, Image, Badge, Center } from '@chakra-ui/react';
import jacketImg from '../../articles/horyu_jacket.png';

interface PageProps {
  data: IndexPageQuery;
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout>
    <SimpleGrid minChildWidth="250px" spacing="20px">
      {data.allMarkdownRemark.edges.map(edge => {
        if (!edge.node.frontmatter?.slug) return null;

        const slug = edge.node.frontmatter.slug;

        return (
          // <Box key={edge.node.frontmatter.slug}>
          //   <Link key={slug} className="article-list-item" to={slug}>
          //     {edge.node.frontmatter.date && (
          //       <p className="article-list-item-date">
          //         {edge.node.frontmatter.date}
          //       </p>
          //     )}
          //     <h1>{edge.node.frontmatter.title ?? '(無題)'}</h1>
          //     {edge.node.excerpt && (
          //       <p className="article-list-item-excerpt">{edge.node.excerpt}</p>
          //     )}
          //   </Link>
          // </Box>
          <Link key={slug} className="article-list-item" to={slug}>
            <Box
              key={edge.node.frontmatter.slug}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={jacketImg} alt="jacketImg" />

              <Box p="6">
                <Box display="flex">
                  <Badge borderRadius="full" px="2" colorScheme="pink">
                    New
                  </Badge>
                  {edge.node.frontmatter.date && (
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {edge.node.frontmatter.date}
                    </Box>
                  )}
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {edge.node.frontmatter.title ?? 'no title'}
                </Box>

                <Box>
                  <Box as="span" color="gray.600" fontSize="sm">
                    {edge.node.excerpt && (
                      <p className="article-list-item-excerpt">
                        {edge.node.excerpt}
                      </p>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </SimpleGrid>
  </Layout>
);

export default Page;

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "YYYY/MM/DD", locale: "ja-JP")
            slug
            title
          }
        }
      }
    }
  }
`;
