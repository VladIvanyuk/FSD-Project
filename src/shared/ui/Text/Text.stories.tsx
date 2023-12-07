import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/themeContext';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum'
    }
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum'
    }
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const error: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum',
        theme: TextTheme.ERROR
    }
};
