import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { articleReducer } from 'entity/Article/model/slice/articleSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entity/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/getArticleData/getArticleData';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CalendarIcon, EyeIcon } from 'shared/assets';
import { Icon } from 'shared/ui/Icon/Icon/Icon';
import { ArticleBlockTypes, TArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface IArticleDetailsProps {
   className?: string
   id: string
}

const renderBlock = (articleBlock: TArticleBlock) => {
    switch (articleBlock.type) {
    case ArticleBlockTypes.CODE:
        return <ArticleCodeBlockComponent key={articleBlock.id} block={articleBlock} />
    case ArticleBlockTypes.TEXT:
        return <ArticleTextBlockComponent key={articleBlock.id} block={articleBlock} />
    case ArticleBlockTypes.IMAGE:
        return <ArticleImageBlockComponent key={articleBlock.id} block={articleBlock} />
    default: return null;
    }
}

export const ArticleDetails = memo((props: IArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation()
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const dispatch = useAppDispatch();
    const error = useSelector(getArticleError)
    const isLoading = useSelector(getArticleIsLoading)
    const article = useSelector(getArticleData)

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
        content = (
            <>
                <Avatar size={200} src={article?.img} className={cls.articleAvatar} />
                <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={article?.views} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                <div className={cls.blocks}>
                    {article?.blocks?.map(renderBlock)}
                </div>
            </>
        )
    }

    useEffect(() => {
        addReducer({
            article: articleReducer
        })

        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id)).catch(console.log)
        }

        return () => {
            deleteReducer(['article'])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classNames(cls.articleDetails, {}, [className])}>
            {content}
        </div>
    );
})
