import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleImageBlockComponent> = {
    title: 'entity/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Primary: Story = {
    args: {}
};
