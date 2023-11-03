import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './AppButton.module.scss'

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: string
  square?: boolean
  size?: string
}

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

export const AppButton: FC<IAppButtonProps> = (props) => {
    const { className, children, theme, square, size, ...otherProps } = props;
    const mods: Record<string, boolean> = {
        [cls.square]: square
    }
    return (
        <button className={classNames(cls.AppButton, mods, [className, cls[theme], cls[size]])} {...otherProps}>
            {children}
        </button>
    )
}
