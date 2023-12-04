import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { Theme } from 'shared/config/themeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Я инпут'
    }
};

export const PrimaryDark: Story = {
    args: {
        placeholder: 'Я инпут'
    }
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
