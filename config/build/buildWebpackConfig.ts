import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { IBuildOptions } from "./types/config";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: IBuildOptions
): webpack.Configuration => {
  const { paths, mode, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths, isDev),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),

    // после сборки, при наличии ошибок в коде, показывает в каком именно файле ошибка (https://webpack.js.org/guides/development/#using-source-maps)
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
};
