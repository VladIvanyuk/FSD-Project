import type { Meta, StoryObj } from '@storybook/react';

import { AppButton, ThemeButton } from './AppButton';
import { Theme } from 'shared/config/themeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof AppButton> = {
    title: 'shared/AppButton',
    component: AppButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
    args: {
        children: 'Button'
    }
};

export const PrimaryDark: Story = {
    args: {
        children: 'Button'
    }
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR
    }
};

export const ClearDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR
    }
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE
    }
};

export const OutlineDatk: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE
    }
};
OutlineDatk.decorators = [ThemeDecorator(Theme.DARK)]
