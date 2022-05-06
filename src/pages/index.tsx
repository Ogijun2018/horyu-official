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
  Image,
  Badge,
  Text,
  Stack,
  Container,
  Button,
  HStack,
  Flex
} from '@chakra-ui/react';
import jacketImg from '../img/horyu_jacket.webp';

interface PageProps {
  data: IndexPageQuery;
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout>
    <Stack spacing={3}>
      <Text fontSize="5xl" fontWeight="extrabold">
        News
      </Text>
      <Container>
        <Text fontWeight="semibold">
          2022/04/24{' '}
          <Link to="/CMCD-001" className="twitter-link">
            Exhibited at M3-2022 spring.
          </Link>
        </Text>
      </Container>
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
        {data.allMarkdownRemark.edges.map(edge => {
          if (!edge.node.frontmatter?.slug) {
            return <CommingSoon />;
          }

          const slug = edge.node.frontmatter.slug;

          return (
            <Box
              key={edge.node.frontmatter.slug}
              maxW="250px"
              border="none"
              borderBottom="3px solid black"
              overflow="hidden"
            >
              <Link key={slug} className="article-list-item" to={slug}>
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
            border="3px solid black"
            href="mailto:chocotto.matte@gmail.com"
          >
            Email
          </Button>
          <Button
            as="a"
            leftIcon={<FaTwitter />}
            border="3px solid black"
            href="https://twitter.com/chocotto_matte?s=20&t=EuOSrezuLVXAOaS4SRM80w"
          >
            Twitter
          </Button>
        </HStack>
      </Container>
    </Stack>
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
