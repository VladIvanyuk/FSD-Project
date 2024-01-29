import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface IArticlesPageProps {
   className?: string
}

export const ArticlesPage: FC<IArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            {t('ARTICLES PAGE')}
        </div>
    );
}
