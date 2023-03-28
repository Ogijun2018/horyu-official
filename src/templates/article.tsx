import React from 'react';
import type { FC } from 'react';
import { Layout } from '../components/layout';
import { graphql } from 'gatsby';
import type { ArticlePageContext } from '../../gatsby-node';
import type { ArticleTemplateQuery } from '../../types/graphql-types';
import { Text, Container } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'github-markdown-css';

interface PageProps {
  data: ArticleTemplateQuery;
  pageContext: ArticlePageContext;
}

const Page: FC<PageProps> = ({ data }) => (
  <Layout>
    <Text fontSize="4xl" fontWeight="extrabold">
      {data.markdownRemark?.frontmatter?.title ?? '(no title)'}
    </Text>
    <Text>{data.markdownRemark?.frontmatter?.date ?? ''}</Text>

    <br />
    <Container width="100%">
      {data.markdownRemark?.frontmatter?.topImage?.childImageSharp && (
        <GatsbyImage
          image={getImage(
            data.markdownRemark?.frontmatter?.topImage?.childImageSharp
          )}
          alt="hoge"
        />
      )}
      <br />
      <article className="markdown-body">
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html ?? '' }}
        ></div>
      </article>
    </Container>
  </Layout>
);
export default Page;

export const query = graphql`
  query ArticleTemplate($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD", locale: "ja-JP")
        topImage {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              width: 600
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
