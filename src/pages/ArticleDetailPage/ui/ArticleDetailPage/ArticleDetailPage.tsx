import { FC, Suspense, useCallback, useEffect } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetails } from 'entity/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entity/Comment';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentByArticleId } from 'pages/ArticleDetailPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailPage/model/services/addCommentForArticle/addCommentForArticle';
import { LoaderPage } from 'widgets/LoaderPage/ui/LoaderPage';
import { Page } from 'shared/ui/Page/Page';
import { AppButton, ButtonTheme } from 'shared/ui';

interface IArticleDetailPageProps {
   className?: string
}

export const ArticleDetailPage: FC<IArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams();
    const { t } = useTranslation();
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const isNotStorybook = __PROJECT__ !== 'storybook';

    const onSendComment = useCallback((text) => {
        dispatch(addCommentForArticle(text)).catch(console.log)
    }, [dispatch])

    useEffect(() => {
        if (isNotStorybook) {
            addReducer({
                articleDetailsComments: articleDetailsCommentsReducer
            })

            dispatch(fetchCommentByArticleId(id)).catch(console.log)
        }

        return () => {
            deleteReducer(['articleDetailsComments'])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!id) {
        return (
            <div>
                {t('Статья не найдена!!')}
            </div>
        )
    }

    return (
        <Page className={classNames(cls.articleDetailPage, {}, [className])}>
            <AppButton theme={ButtonTheme.OUTLINE} className={cls.backBtn} onClick={() => { window.history.back(); }}>
                {t('Назад')}
            </AppButton>
            <ArticleDetails id={id} />
            <Text className={cls.commentsTitle} title={t('Комментарии')} />
            <Suspense fallback={<LoaderPage />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList isLoading={isLoading} comments={comments} />
        </Page>
    );
}
