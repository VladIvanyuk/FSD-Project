import { Icon } from './Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
    title: 'entity/Icon',
    component: Icon,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {}
};
