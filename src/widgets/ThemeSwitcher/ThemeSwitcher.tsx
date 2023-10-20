import { FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTheme, Theme } from 'shared/config/themeContext';
import { AppButton, ThemeButton } from 'shared/ui';
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets';

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme();

    const { className } = props;

    return (
        <>
            <AppButton
                theme={ThemeButton.CLEAR}
                onClick={toggleTheme}
                className={classNames('', {}, [className])}
            >
                {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
            </AppButton>
        </>
    );
};
