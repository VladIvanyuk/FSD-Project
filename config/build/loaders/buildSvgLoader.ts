export const buildSvgLoader = (): any => {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
}
