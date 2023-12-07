import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface ITextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<ITextProps> = (props) => {
    const { className, title = '', text = '', theme = TextTheme.PRIMARY } = props;
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
}
