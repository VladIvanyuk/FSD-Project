import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { TBuildPaths } from "./types/config";

export const buildPlugins = (paths: TBuildPaths): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            // шаблон страницы для build/index.html
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}