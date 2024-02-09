import { Card } from './Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
    title: 'entity/Card',
    component: Card,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {}
};
