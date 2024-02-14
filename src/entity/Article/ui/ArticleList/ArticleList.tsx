import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleListView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Text } from 'shared/ui/Text/Text';

interface IArticleListProps {
    className?: string
    articles: IArticle[]
    isLoading?: boolean
    view?: ArticleListView
}

export const ArticleList = memo((props: IArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleListView.GRID
    } = props;
    const { t } = useTranslation()
    const renderArticle = (article: IArticle, index: number) => {
        return (
            <ArticleListItem
                isLoading={isLoading}
                article={article}
                view={view}
                key={index}
            />
        )
    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : <Text text={t('No articles')} />
            }
        </div>
    )
})
