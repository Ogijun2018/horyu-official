import { resolve } from 'path';
import type { GatsbyNode } from 'gatsby';
// eslint-disable-next-line import/no-unresolved
import { CreatePagesQuery } from 'graphql-types';

export interface ArticlePageContext {
  slug: string;
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const data = await graphql<CreatePagesQuery>(`
    query CreatePages {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.data?.allMarkdownRemark.nodes.forEach(
    // nodeの型が暗黙的なany型になるため明示的に宣言
    // 配列の要素の型を得るときは[0]で取り出す
    (node: CreatePagesQuery['allMarkdownRemark']['nodes'][0]) => {
      const slug = node.frontmatter?.slug;
      if (slug) {
        actions.createPage({
          // 生成するページに割り当てられるpath ex./hoge
          path: slug,
          // src/templates/article.tsxをcomponentに指定
          component: resolve(__dirname, 'src', 'templates', 'article.tsx'),
          // template page componentに渡る引数を指定
          context: { slug }
        });
      }
    }
  );
};
