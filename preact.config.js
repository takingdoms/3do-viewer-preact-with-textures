import pkgInfo from './package.json';

export default (config) => {
  if (pkgInfo.homepage)
    config.output.publicPath = pkgInfo.homepage;
};
