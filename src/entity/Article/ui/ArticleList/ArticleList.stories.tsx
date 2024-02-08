import { ArticleList } from './ArticleList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleList> = {
    title: 'entity/ArticleList',
    component: ArticleList,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Primary: Story = {
    args: {}
};
