import { FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetails } from 'entity/Article';

interface IArticleDetailPageProps {
   className?: string
}

export const ArticleDetailPage: FC<IArticleDetailPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.articleDetailPage, {}, [className])}>
            <ArticleDetails />
        </div>
    );
}
