import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const assetsLoaders = {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource'
  }

  const cssCloader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            // чтобы css модули работали только для .modules. файлов
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          }
        },
      },
      "sass-loader",
    ],
  };

  return [assetsLoaders, svgLoader, typescriptLoader, cssCloader];
};
