import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal } from './LoginModal';
import { LoginForm } from '../LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDectorator/StoreDecorator';

const meta: Meta<typeof LoginModal> = {
    title: 'features/LoginModal',
    component: LoginModal,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
    args: {
        children: <LoginForm />
    }
};

Primary.decorators = [StoreDecorator({})]
