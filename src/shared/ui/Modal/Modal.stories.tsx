import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/themeContext';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
    args: {
        children: 'Form'
    }
};

export const ModalDark: Story = {
    args: {
        children: 'Form'
    }
};

ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
