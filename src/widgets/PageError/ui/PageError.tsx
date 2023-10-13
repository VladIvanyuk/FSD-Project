import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string
}

export const PageError: FC<IPageErrorProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.errorMessage, {}, [className])}>
            Упс, что то пошло не так...
        </div>
    )
}
