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
        content = <div>Loading...</div>
    } else if (error) {
        content = <div>Произошла ошибка</div>
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
