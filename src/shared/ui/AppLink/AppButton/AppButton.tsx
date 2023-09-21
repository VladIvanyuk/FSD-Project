import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './AppButton.module.scss'

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: string;
}

export enum ThemeButton {
  CLEAR = 'clear',
}

export const AppButton: FC<IAppButtonProps> = (props) => {
const {className, children, theme,  ...otherProps} = props;
  return (
    <button className={classNames(cls.AppButton, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
