import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { articleReducer } from 'entity/Article/model/slice/articleSlice';

interface IArticleDetailsProps {
   className?: string
}

export const ArticleDetails: FC<IArticleDetailsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()
    const { addReducer, deleteReducer } = useDynamicReducerLoad();

    useEffect(() => {
        addReducer({
            article: articleReducer
        })

        return () => {
            deleteReducer(['article'])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classNames(cls.articleDetails, {}, [className])}>
            ARTICLE DATAAAAAAIL
        </div>
    );
}
