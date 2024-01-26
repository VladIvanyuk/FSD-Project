import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { articleReducer } from 'entity/Article/model/slice/articleSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entity/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/getArticleData/getArticleData';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton/Skeleton';

interface IArticleDetailsProps {
   className?: string
   id: string
}

export const ArticleDetails = memo((props: IArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation()
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const dispatch = useAppDispatch();
    const error = useSelector(getArticleError)
    const isLoading = useSelector(getArticleIsLoading)
    const data = useSelector(getArticleData)

    let content;

    if (isLoading) {
        content = (
            <div className={cls.skeletonWrapper}>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="80%" height={250} />
                <Skeleton className={cls.skeleton} width="80%" height={250} />
            </div>
        )
    } else if (error) {
        content = <Text align={TextAlign.CENTER} title={t('Произошла ошибка')}/>
    } else {
        content = 'ARTICLE DATAAAAAAIL';
    }

    useEffect(() => {
        addReducer({
            article: articleReducer
        })
        dispatch(fetchArticleById(id)).catch(console.log)

        return () => {
            deleteReducer(['article'])
        }
    }, [])

    return (
        <div className={classNames(cls.articleDetails, {}, [className])}>
            {content}
        </div>
    );
})
