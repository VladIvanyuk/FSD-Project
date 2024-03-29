import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ui/ThemeContext';

interface useThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export const useTheme = (): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        if (setTheme) setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme
    }
}
