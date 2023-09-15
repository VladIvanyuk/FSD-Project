import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildEnv, TBuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: IBuildEnv) => {
  const paths: TBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };
  
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.PORT || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    PORT,
  });
  return config;
};
