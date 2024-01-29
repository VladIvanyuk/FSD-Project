import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface ITextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text: FC<ITextProps> = (props) => {
    const {
        className,
        title = '',
        text = '',
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props;

    const mods = {
        [cls[size]]: true
    }

    return (
        <div className={classNames(cls.Text, mods, [cls[theme], className])}>
            {title && <p className={classNames(cls.title, {}, [cls[align]])}>{title}</p>}
            {text && <p className={classNames(cls.text, {}, [cls[align]])}>{text}</p>}
        </div>
    )
}
