import React from 'react';
import type { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/layout';
import { CommingSoon } from '../components/comming-soon';
import type { IndexPageQuery } from '../../types/graphql-types';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import {
  Box,
  Badge,
  Text,
  Stack,
  Container,
  Button,
  HStack,
  Flex
} from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface PageProps {
  data: IndexPageQuery;
}

type News = {
  date: string;
  link: string;
  season: string;
  isSpecial: boolean;
};

const newsList: News[] = [
  {
    date: '2024/10/27',
    link: '/nostalgenic',
    season: 'autumn',
    isSpecial: true
  },
  {
    date: '2024/04/28',
    link: '/chaosparkle',
    season: 'spring',
    isSpecial: true
  },
  {
    date: '2023/10/29',
    link: '/fragment-of-memory',
    season: 'autumn',
    isSpecial: false
  }
];

function NewsFormat(news: News) {
  return (
    <Text fontWeight="semibold">
      {news.date}{' '}
      <Link to={news.link} className="twitter-link">
        Exhibited at M3-{news.date.substring(0, 4)} {news.season}.{' '}
        {news.isSpecial ? 'Special Site opened!' : ''}
      </Link>
    </Text>
  );
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout>
    <Stack spacing={3}>
      <Text fontSize="5xl" fontWeight="extrabold">
        News
      </Text>
      <Container>{newsList.map((news) => NewsFormat(news))}</Container>
      <Text fontSize="5xl" fontWeight="extrabold">
        Member
      </Text>
      <Container>
        <Text fontSize="2xl" fontWeight="light">
          All music compose:{' '}
          <a
            href="https://twitter.com/shimaemon_o3o?s=20&t=EuOSrezuLVXAOaS4SRM80w"
            className="twitter-link"
          >
            shimaemon
          </a>
        </Text>
        <Text fontSize="2xl" fontWeight="light">
          Illustration:{' '}
          <a
            href="https://twitter.com/cat_earthen_pot?s=20&t=EuOSrezuLVXAOaS4SRM80w"
            className="twitter-link"
          >
            猫土瓶
          </a>
        </Text>
        <Text fontSize="2xl" fontWeight="light">
          Design, Movie, Web:{' '}
          <a
            href="https://twitter.com/ogijun_design?s=20&t=EuOSrezuLVXAOaS4SRM80w"
            className="twitter-link"
          >
            ogijun
          </a>
        </Text>
      </Container>

      <Text fontSize="5xl" fontWeight="extrabold">
        Discography
      </Text>
      <Flex justify="space-around" flexWrap="wrap" gap="30px">
        {data.allMarkdownRemark.edges.map((edge, index) => {
          if (!edge.node.frontmatter?.slug) {
            return (
              <>
                <CommingSoon />
                <div className="item-empty">
                  <CommingSoon />
                </div>
                <div className="item-empty">
                  <CommingSoon />
                </div>
              </>
            );
          }

          const slug = edge.node.frontmatter.slug;

          return (
            <Box
              key={edge.node.frontmatter.slug}
              maxW="250px"
              border="none"
              borderBottom="3px solid gray"
              overflow="hidden"
            >
              <Link
                key={slug}
                className="article-list-item"
                to={linkToLP(slug)}
              >
                <GatsbyImage
                  image={getImage(
                    edge.node.frontmatter.topImage?.childImageSharp
                  )}
                  alt={edge.node.frontmatter.title ?? 'no title'}
                />
                <Box p="6">
                  <Box display="flex">
                    {index == 0 && (
                      <Badge
                        borderRadius="full"
                        px="2"
                        colorScheme="pink"
                        ml="-1"
                        mr="2"
                      >
                        New
                      </Badge>
                    )}
                    {edge.node.frontmatter.date && (
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
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

                  {/* <Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                      {edge.node.excerpt && (
                        <p className="article-list-item-excerpt">
                          {edge.node.excerpt}
                        </p>
                      )}
                    </Box>
                  </Box> */}
                </Box>
              </Link>
            </Box>
          );
        })}
      </Flex>
      <Text fontSize="5xl" fontWeight="extrabold">
        Contact
      </Text>
      <Container>
        <HStack>
          <Button
            as="a"
            leftIcon={<HiOutlineMail />}
            color="#DF5286"
            border="3px solid gray"
            href="mailto:chocotto.matte@gmail.com"
          >
            Email
          </Button>
          <Button
            as="a"
            leftIcon={<FaTwitter />}
            border="3px solid gray"
            color="#1DA1F2"
            href="https://twitter.com/chocotto_matte?s=20&t=EuOSrezuLVXAOaS4SRM80w"
          >
            Twitter
          </Button>
        </HStack>
      </Container>
    </Stack>
  </Layout>
);

function linkToLP(slug: string): string {
  switch (slug) {
    case '/CMCD-003':
      return '/onyourmark';
    case '/CMCD-004':
      return '/chaosparkle';
    case '/CMCD-005':
      return '/nostalgenic';
    default:
      return slug;
  }
}

export default Page;

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "YYYY/MM/DD", locale: "ja-JP")
            slug
            title
            topImage {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  width: 600
                  height: 600
                  transformOptions: { fit: CONTAIN }
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`;
