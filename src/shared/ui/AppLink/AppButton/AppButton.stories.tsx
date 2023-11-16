import type { Meta, StoryObj } from '@storybook/react';

import { AppButton, ButtonSize, ButtonTheme } from './AppButton';
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
        theme: ButtonTheme.CLEAR
    }
};

export const ClearDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR
    }
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE
    }
};

export const OutlineInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE_INVERTED
    }
};

export const OutlineSizeM: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M
    }
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    }
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    }
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE
    }
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND
    }
};

export const InvertedBackgroundTheme: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
};

export const SquareSizeM: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M
    }
};

export const SquareSizeL: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    }
};

export const SquareSizeXL: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL
    }
};
