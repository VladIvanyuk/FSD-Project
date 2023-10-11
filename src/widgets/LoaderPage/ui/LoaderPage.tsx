import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './LoaderPage.module.scss'
import { Loader } from 'shared/ui';

interface ILoaderPageProps {
  className?: string
}

export const LoaderPage: FC<ILoaderPageProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.loaderPage, {}, [className])}>
            <Loader />
        </div>
    )
}
