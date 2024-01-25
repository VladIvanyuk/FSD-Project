import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleTextBlockComponent> = {
    title: 'entity/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Primary: Story = {
    args: {}
};
