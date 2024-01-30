import { CommentCard } from './CommentCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentCard> = {
    title: 'entity/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {}
};
