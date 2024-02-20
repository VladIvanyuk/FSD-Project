import { ReactNode, memo } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './Page.module.scss';

interface IPageProps {
   className?: string
   children: ReactNode
}

export const Page = memo((props: IPageProps) => {
    const { className, children } = props;

    return (
        <section className={classNames(cls.page, {}, [className])}>
            {children}
        </section>
    );
})
