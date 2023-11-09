import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'shared/config/themeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
