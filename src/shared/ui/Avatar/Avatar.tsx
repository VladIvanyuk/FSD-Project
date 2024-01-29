import { CSSProperties, FC } from 'react'
import cls from './Avatar.module.scss'
import { classNames } from 'helpers/classNames/classNames'

interface IAvatarProps {
  className?: string
  size: number
  src?: string
}

export const Avatar: FC<IAvatarProps> = ({ size, src, className }) => {
    const styles: CSSProperties = {
        width: size,
        height: size
    }
    return (
        <div className={cls.avatarWrapper}>
            <img style={styles} className={classNames(cls.avatar, {}, [className])} src={src} alt="Аватар" />
        </div>
    )
}
