import type { GatsbyConfig } from "gatsby";

// setting plugin
const config: GatsbyConfig = {
  siteMetadata: {
    title: '保留 Official Site',
    author: 'Jun Ogino',
    description: '同人音楽サークル 保留 のオフィシャルサイト',
    email: 'chocotto.matte@gmail.com'
  },
  plugins: ['gatsby-plugin-sass']
};
export default config;
