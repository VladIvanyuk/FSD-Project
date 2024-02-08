import { ArticleListItem } from './ArticleListItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entity/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Primary: Story = {
    args: {}
};
