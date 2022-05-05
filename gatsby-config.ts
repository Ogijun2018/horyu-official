import { resolve } from 'path';
import type { GatsbyConfig } from 'gatsby';

// setting plugin
const config: GatsbyConfig = {
  siteMetadata: {
    title: '保留 Official Site',
    author: 'Jun Ogino',
    description: '同人音楽サークル 保留 のオフィシャルサイト',
    email: 'chocotto.matte@gmail.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
        documentPaths: ['src/**/*.{ts,tsx}', 'gatsby-*.ts']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: resolve(__dirname, 'articles')
      }
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true
      }
    },
    'gatsby-transformer-remark'
  ]
};
export default config;
