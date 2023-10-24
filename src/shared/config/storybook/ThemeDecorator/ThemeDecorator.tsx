import { StoryFn } from '@storybook/react';
import { Theme } from 'shared/config/themeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
