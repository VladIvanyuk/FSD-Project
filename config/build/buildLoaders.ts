import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
    const { __IS_DEV__ } = options;
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };
    const svgLoader = buildSvgLoader();

    const assetsLoaders = {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
    }

    const cssLoader = buildCssLoader(__IS_DEV__);

    const babelLoader = {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }

    return [assetsLoaders, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
