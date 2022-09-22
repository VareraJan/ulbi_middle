import path from 'path';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const {mode, paths} = options;

  return {
    // mode: 'production',
    // entry: { RANDOM: path.resolve(__dirname, 'src', 'index.js') },
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolves(),
  };
}
