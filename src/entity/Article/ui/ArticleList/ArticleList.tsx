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
        view = ArticleListView.GRID
    } = props;
    const { t } = useTranslation()
    const renderArticle = (article: IArticle) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                key={article.id}
            />
        )
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : <Text text={t('No articles')} />
            }
        </div>
    )
})
