import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleDetailPage.module.scss';

interface IArticleDetailPageProps {
   className?: string
}

export const ArticleDetailPage: FC<IArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articleDetailPage, {}, [className])}>
            {t('ARTICLE DETAIL')}
        </div>
    );
}
