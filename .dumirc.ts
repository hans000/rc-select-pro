import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  base: './',
  publicPath: process.env.NODE_ENV === 'production' ? '/rc-select-pro' : '/',
  runtimePublicPath: {},
  exportStatic: {},
  themeConfig: {
    name: 'Select',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
});
