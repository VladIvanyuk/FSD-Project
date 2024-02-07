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
    args: {
        comment: {
            id: '1',
            text: 'some comment',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://as2.ftcdn.net/v2/jpg/01/74/35/41/1000_F_174354171_dxcNdq4XMmARKT7E88NOLmdrv6BBSAww.jpg'
            }
        }
    }
};
export const isLoading: Story = {
    args: {
        isLoading: true
    }
};
