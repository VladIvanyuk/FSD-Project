import { ArticleDetails } from './ArticleDetails';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleDetails> = {
    title: 'entity/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
    args: {}
};
