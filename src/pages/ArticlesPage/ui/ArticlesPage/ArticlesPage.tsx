import { FC, memo, useEffect } from 'react';
import { ArticleList, ArticleListView } from 'entity/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slice/ArticlesPageSlice';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { useSelector } from 'react-redux';
import { getArticlesPageIsLoading } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface IArticlesPageProps {
   className?: string
}

export const ArticlesPage: FC<IArticlesPageProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const isNotStorybook = __PROJECT__ !== 'storybook';
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading)

    useEffect(() => {
        if (isNotStorybook) {
            addReducer({
                articlesPage: articlesPageReducer
            })

            dispatch(fetchArticlesList()).catch(console.log);
        }

        return () => {
            deleteReducer(['articlesPage'])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <ArticleList isLoading={isLoading} view={ArticleListView.GRID} articles={articles} />
        </>
    );
})
