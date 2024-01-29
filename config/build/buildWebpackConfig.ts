import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/config';
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (
    options: IBuildOptions
): webpack.Configuration => {
    const { paths, mode, __IS_DEV__, project } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(paths, __IS_DEV__, project),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),

        // после сборки, при наличии ошибок в коде, показывает в каком именно файле ошибка (https://webpack.js.org/guides/development/#using-source-maps)
        devtool: __IS_DEV__ ? 'inline-source-map' : undefined,
        devServer: __IS_DEV__ ? buildDevServer(options) : undefined
    };
};
