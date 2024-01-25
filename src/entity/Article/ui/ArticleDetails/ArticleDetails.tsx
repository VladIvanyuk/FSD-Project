import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
   className?: string
}

export const ArticleDetails: FC<IArticleDetailsProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articleDetails, {}, [className])}>
            ARTICLE DATAAAAAAIL
        </div>
    );
}
