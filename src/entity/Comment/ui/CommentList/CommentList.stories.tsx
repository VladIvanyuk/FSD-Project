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
    args: {
        comments: [
            {
                id: '1',
                text: 'some comment',
                user: {
                    id: '1',
                    username: 'admin',
                    avatar: 'https://as2.ftcdn.net/v2/jpg/01/74/35/41/1000_F_174354171_dxcNdq4XMmARKT7E88NOLmdrv6BBSAww.jpg'
                }
            },
            {
                id: '2',
                text: 'some comment 2',
                user: {
                    id: '1',
                    username: 'admin',
                    avatar: 'https://as2.ftcdn.net/v2/jpg/01/74/35/41/1000_F_174354171_dxcNdq4XMmARKT7E88NOLmdrv6BBSAww.jpg'
                }
            },
            {
                id: '3',
                text: 'some comment 3',
                user: {
                    id: '1',
                    username: 'admin',
                    avatar: 'https://as2.ftcdn.net/v2/jpg/01/74/35/41/1000_F_174354171_dxcNdq4XMmARKT7E88NOLmdrv6BBSAww.jpg'
                }
            },
            {
                id: '4',
                text: 'some comment 3',
                user: {
                    id: '2',
                    username: 'user',
                    avatar: 'https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg'
                }
            },
            {
                text: '123123',
                id: 'C0KesAw',
                user: {
                    id: '2',
                    username: 'user',
                    avatar: 'https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg'
                }
            }
        ]
    }
};
export const isLoading: Story = {
    args: {
        isLoading: true,
        comments: [
            {
                id: '4',
                text: 'some comment 3',
                user: {
                    id: '2',
                    username: 'user',
                    avatar: 'https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg'
                }
            },
            {
                text: '123123',
                id: 'C0KesAw',
                user: {
                    id: '2',
                    username: 'user',
                    avatar: 'https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg'
                }
            },
            {
                text: '123123',
                id: 'C0KesAw',
                user: {
                    id: '2',
                    username: 'user',
                    avatar: 'https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg'
                }
            }
        ]
    }
};
