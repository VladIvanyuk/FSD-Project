import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
import { TBuildPaths } from './types/config';

export const buildPlugins = (paths: TBuildPaths, isDev: boolean): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            // шаблон страницы для build/index.html
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(isDev)
        }),
        new ReactRefreshWebpackPlugin({
            overlay: false
        })
    ]
}
