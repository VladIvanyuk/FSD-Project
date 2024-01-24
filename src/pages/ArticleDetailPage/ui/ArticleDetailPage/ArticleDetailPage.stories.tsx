import { ArticleDetailPage } from './ArticleDetailPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleDetailPage> = {
    title: 'entity/ArticleDetailPage',
    component: ArticleDetailPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleDetailPage>;

export const Primary: Story = {
    args: {}
};
