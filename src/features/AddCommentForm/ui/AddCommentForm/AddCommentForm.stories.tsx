import { AddCommentForm } from './AddCommentForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AddCommentForm> = {
    title: 'entity/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {}
};
