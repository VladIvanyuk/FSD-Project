import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config/themeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from 'shared/config/storybook/StoreDectorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

const user = {
    user: {
        authData: {
            username: 'admin',
            password: '123'
        }
    }
}

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Dark: Story = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(user)]

export const Light: Story = {
    args: {}
};
Light.decorators = [StoreDecorator(user)]

export const WithoutAuth: Story = {
    args: {}
};
WithoutAuth.decorators = [StoreDecorator({
    user: {
        authData: null
    }
})]
