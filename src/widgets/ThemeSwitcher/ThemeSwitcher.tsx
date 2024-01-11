import { memo } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTheme, Theme } from 'shared/config/themeContext';
import { AppButton, ButtonTheme } from 'shared/ui';
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets';

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: IThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const { className } = props;

    return (
        <>
            <AppButton
                theme={ButtonTheme.CLEAR}
                onClick={toggleTheme}
                className={classNames('', {}, [className])}
            >
                {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
            </AppButton>
        </>
    );
});
