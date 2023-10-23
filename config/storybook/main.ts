import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

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
    webpackFinal: async (config) => {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
        config.module.rules = [...config.module.rules, buildCssLoader(true)]
        return config;
    }
};
export default config;
