import type { Meta, StoryObj } from '@storybook/react';

import { AppButton } from './AppButton';

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
    }
};

export const Secondary: Story = {
    args: {
    }
};
