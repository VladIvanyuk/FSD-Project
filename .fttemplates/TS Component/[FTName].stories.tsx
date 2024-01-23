import { [FTName] } from './[FTName]';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof [FTName]> = {
    title: 'entity/[FTName]',
    component: [FTName],
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof [FTName]>;

export const Primary: Story = {
    args: {}
};
