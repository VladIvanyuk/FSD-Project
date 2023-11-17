import { StoryFn } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
export const RouterDecorator = (Story: StoryFn): any => (
    <StoreProvider>
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    </StoreProvider>
);
