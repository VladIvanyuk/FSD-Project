import { Page } from './Page';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Page> = {
    title: 'entity/Page',
    component: Page,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {}
};
