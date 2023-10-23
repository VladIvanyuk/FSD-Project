import type { Meta, StoryObj } from '@storybook/react';

import { AppButton, ThemeButton } from './AppButton';

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

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR
    }
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
        className: 'light'
    }
};
