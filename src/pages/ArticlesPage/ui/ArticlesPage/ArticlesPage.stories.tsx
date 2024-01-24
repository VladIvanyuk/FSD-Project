import { ArticlesPage } from './ArticlesPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticlesPage> = {
    title: 'entity/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {
    args: {}
};
