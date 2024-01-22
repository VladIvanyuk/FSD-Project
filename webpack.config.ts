import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, TBuildPaths } from './config/build/types/config';
import path from 'path';

export default (env: IBuildEnv): webpack.Configuration => {
    const paths: TBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };
    const mode = env.mode || 'development';
    const __IS_DEV__ = mode === 'development';
    const PORT = env.PORT || 3000;

    const config = buildWebpackConfig({
        mode,
        paths,
        __IS_DEV__,
        PORT,
        project: 'frontend'
    });
    return config;
};
