import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    },
    webpackFinal: async (config: any) => {
        if (config.resolve) {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
        }

        config.plugins.push((new DefinePlugin({
            IS_DEV: JSON.stringify(true)
        })))

        const rules = config.module.rules;
        const fileLoaderRule = rules.find((rule: any) => rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;
        rules.push(buildSvgLoader(), buildCssLoader(true));
        return config;
    }
};
export default config;
