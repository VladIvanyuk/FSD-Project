import { FC, createContext, useState } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
export interface IThemeContextProps {
  theme: Theme
  setTheme?: (theme: Theme) => void
}
export const ThemeContext = createContext<IThemeContextProps>({
    theme: Theme.DARK
});

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
