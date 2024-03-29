import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Countries } from 'entity/Country';
import { Currencies } from 'entity/Currency';

const meta: Meta<typeof ProfileCard> = {
    title: 'entity/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
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
};

export const isLoading: Story = {
    args: {
        isLoading: true
    }
};

export const isError: Story = {
    args: {
        error: 'true'
    }
};
