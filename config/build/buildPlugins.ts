import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';
import { TBuildPaths } from './types/config';

export const buildPlugins = (paths: TBuildPaths, IS_DEV: boolean): webpack.WebpackPluginInstance[] => {
    const plugins = [
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
            IS_DEV: JSON.stringify(IS_DEV)
        })];

    if (IS_DEV) {
        plugins.push(
            new ReactRefreshWebpackPlugin({
                overlay: false
            })
        )
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false
            })
        )
    }

    return plugins;
}
