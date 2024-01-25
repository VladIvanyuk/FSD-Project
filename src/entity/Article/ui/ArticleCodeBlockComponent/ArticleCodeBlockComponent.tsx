import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface IArticleCodeBlockComponentProps {
   className?: string
}

export const ArticleCodeBlockComponent: FC<IArticleCodeBlockComponentProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
ArticleCodeBlockComponent
        </div>
    );
}
