import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config/themeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LoaderPage } from './LoaderPage';

const meta: Meta<typeof LoaderPage> = {
    title: 'widgets/LoaderPage',
    component: LoaderPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LoaderPage>;

export const Dark: Story = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Light: Story = {
    args: {}
};
