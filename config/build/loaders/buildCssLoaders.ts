import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (__IS_DEV__: boolean): any => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            __IS_DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // чтобы css модули работали только для .modules. файлов
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: __IS_DEV__ ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                        exportLocalsConvention: 'camelCase'
                    }
                }
            },
            'sass-loader'
        ]
    };
}
