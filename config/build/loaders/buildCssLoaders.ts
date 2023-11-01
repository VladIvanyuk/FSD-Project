import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (IS_DEV: boolean): any => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // чтобы css модули работали только для .modules. файлов
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: IS_DEV ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                        exportLocalsConvention: 'camelCase'
                    }
                }
            },
            'sass-loader'
        ]
    };
}
