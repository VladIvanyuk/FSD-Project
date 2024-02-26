import { memo } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleListView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

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

    const getSkeletons = (view: ArticleListView) => new Array(view === ArticleListView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
        ));

    const renderArticle = (article: IArticle, index: number) => {
        return (
            <ArticleListItem
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
                : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    )
})
