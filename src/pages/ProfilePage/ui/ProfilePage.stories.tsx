import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'shared/config/themeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDectorator/StoreDecorator';
import { Countries } from 'entity/Country';
import { Currencies } from 'entity/Currency';
import { ProfilePage } from './ProfilePage';

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
    profile: {
        form: {
            firstname: 'Влад',
            secondname: 'Иванюк',
            age: '29',
            city: 'Владивосток',
            country: Countries.Russia,
            currency: Currencies.RUB,
            username: 'admin',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4OhN9ea9I-WbG-XlXGN21eEzLlr5HbCIzg&usqp=CAU'
        }
    }
})]

export const Light: Story = {
    args: {}
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    profile: {
        form: {
            firstname: 'Влад',
            secondname: 'Иванюк',
            age: '29',
            city: 'Владивосток',
            country: Countries.Russia,
            currency: Currencies.RUB,
            username: 'admin',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4OhN9ea9I-WbG-XlXGN21eEzLlr5HbCIzg&usqp=CAU'
        }
    }
})]
