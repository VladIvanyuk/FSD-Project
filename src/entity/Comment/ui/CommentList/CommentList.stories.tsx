import { CommentList } from './CommentList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentList> = {
    title: 'entity/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {}
};
