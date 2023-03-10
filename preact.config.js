import pkgInfo from './package.json';

export default (config) => {
  config.output.publicPath = pkgInfo.homepage;
};
