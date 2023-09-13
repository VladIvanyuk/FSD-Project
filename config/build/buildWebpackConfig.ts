import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { IBuildOptions } from "./types/config";
import webpack from "webpack";

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
    const {paths, mode} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(),
          },
          resolve: buildResolvers(),
      }
}