import { StoreDecorator } from 'shared/config/storybook/StoreDectorator/StoreDecorator';
import { AddCommentForm } from './AddCommentForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AddCommentForm> = {
    title: 'feature/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {}
};

Primary.decorators = [StoreDecorator({})]
