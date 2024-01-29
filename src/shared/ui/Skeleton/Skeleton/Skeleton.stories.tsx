import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'shared/config/themeContext';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200
    }
};

export const Circle: Story = {
    args: {
        height: 100,
        width: 100,
        border: '50%'
    }
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200
    }
};

NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark: Story = {
    args: {
        height: 100,
        width: 100,
        border: '50%'
    }
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
