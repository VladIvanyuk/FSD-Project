import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'shared/config/themeContext';
import { AppButton, ThemeButton } from 'shared/ui/AppLink/AppButton/AppButton';
import { DarkThemeIcon, LightThemeIcon} from 'shared/assets';
import { Theme } from 'shared/config/themeContext/ui/ThemeContext';


interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
  const {theme, toggleTheme} = useTheme();

const {className} = props;
  return (
    <AppButton theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.themeSwitcher, {}, [className])}>
        {theme === Theme.DARK ? <DarkThemeIcon  /> : <LightThemeIcon />}
    </AppButton>
  )
}
