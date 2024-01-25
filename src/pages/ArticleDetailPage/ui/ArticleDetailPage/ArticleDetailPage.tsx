import { FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetails } from 'entity/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IArticleDetailPageProps {
   className?: string
}

export const ArticleDetailPage: FC<IArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams();
    const { t } = useTranslation()

    if (!id) {
        return (
            <div>
                {t('Статья не найдена!!')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.articleDetailPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
}
