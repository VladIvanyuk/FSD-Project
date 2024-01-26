import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'shared/config/themeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider>
        <div style={{ width: '97vw' }} className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
