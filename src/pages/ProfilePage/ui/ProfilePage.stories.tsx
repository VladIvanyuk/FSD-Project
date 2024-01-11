import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config/themeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ProfilePage } from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDectorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Dark: Story = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: { data: null, error: null, readonly: true, isLoading: false }
})]

export const Light: Story = {
    args: {}
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    profile: { data: null, error: null, readonly: true, isLoading: false }
})]
