import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDectorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {}
};

Primary.decorators = [StoreDecorator({
    loginForm: { username: 'admin', password: '123' }
})]

export const WithError: Story = {
    args: {}
};

WithError.decorators = [StoreDecorator({
    loginForm: { username: 'admin', password: '123', error: 'Вы ввели неправильный логин или пароль!' }
})]

export const Loading: Story = {
    args: {}
};

Loading.decorators = [StoreDecorator({
    loginForm: { username: 'admin', password: '123', isLoading: true }
})]
