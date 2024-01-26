import { CSSProperties, FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
   className?: string
   height: string | number
   width: string | number
   border?: string
}

export const Skeleton: FC<ISkeletonProps> = ({ className, width, height, border }) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }
    return (
        <div style={styles} className={classNames(cls.skeleton, {}, [className])}>
        </div>
    );
}
