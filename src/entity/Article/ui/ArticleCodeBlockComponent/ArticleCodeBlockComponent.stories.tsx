import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: 'entity/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {
    args: {}
};
