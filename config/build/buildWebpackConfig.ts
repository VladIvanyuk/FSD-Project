import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/config';
import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (
    options: IBuildOptions
): webpack.Configuration => {
    const { paths, mode, IS_DEV } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(paths, IS_DEV),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),

        // после сборки, при наличии ошибок в коде, показывает в каком именно файле ошибка (https://webpack.js.org/guides/development/#using-source-maps)
        devtool: IS_DEV ? 'inline-source-map' : undefined,
        devServer: IS_DEV ? buildDevServer(options) : undefined
    };
};
