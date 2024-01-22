import { CSSProperties, FC } from 'react'
import cls from './Avatar.module.scss'

interface IAvatarProps {
  className?: string
  size: number
  src?: string
}

export const Avatar: FC<IAvatarProps> = ({ size, src }) => {
    const styles: CSSProperties = {
        width: size,
        height: size
    }
    return (
        <div className={cls.avatarWrapper}>
            <img style={styles} className={cls.avatar} src={src} alt="Аватар" />
        </div>
    )
}
