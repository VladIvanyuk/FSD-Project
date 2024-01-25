import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface IArticleTextBlockComponentProps {
   className?: string
}

export const ArticleTextBlockComponent: FC<IArticleTextBlockComponentProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {t('ArticleTextBlockComponen')}
        </div>
    );
}
