import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string
   children?: ReactNode
}

export const Card = (props: ICardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
}
