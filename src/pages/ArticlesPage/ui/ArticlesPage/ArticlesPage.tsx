import { FC, memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticleListView } from 'entity/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slice/ArticlesPageSlice';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { useSelector } from 'react-redux';
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum, getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { ArticleViewSelector } from 'features/ArticleViewSelector/ui/ArticleViewSelector';
import { Page } from 'shared/ui/Page/Page';

interface IArticlesPageProps {
   className?: string
}

export const ArticlesPage: FC<IArticlesPageProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const isNotStorybook = __PROJECT__ !== 'storybook';
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore)

    const onClickHandler = (view: ArticleListView) => {
        dispatch(articlesPageActions.setView(view))
    }

    const onLoadNextPart = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1))
            dispatch(fetchArticlesList({
                page: page + 1
            })).catch(console.log);
        }
    }, [dispatch, hasMore, isLoading, page])

    useEffect(() => {
        if (isNotStorybook) {
            addReducer({
                articlesPage: articlesPageReducer
            })
            dispatch(articlesPageActions.initState())
            dispatch(fetchArticlesList({
                page: 1
            })).catch(console.log);
        }

        return () => {
            deleteReducer(['articlesPage'])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Page onScrollEnd={onLoadNextPart}>
            <ArticleViewSelector onClickHandler={onClickHandler} />
            <ArticleList isLoading={isLoading} view={view} articles={articles} />
        </Page>
    );
})
