import { ButtonHTMLAttributes, memo } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './AppButton.module.scss'

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: string
  square?: boolean
  size?: string
  disabled?: boolean
}

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outlineInverted',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

export const AppButton = memo((props: IAppButtonProps) => {
    const { className, children, theme, square, size, disabled, ...otherProps } = props;
    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }
    return (
        <button disabled={disabled} className={classNames(cls.AppButton, mods, [className, cls[theme], cls[size]])} {...otherProps}>
            {children}
        </button>
    )
})
