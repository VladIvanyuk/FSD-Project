import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface IArticleImageBlockComponentProps {
   className?: string
}

export const ArticleImageBlockComponent: FC<IArticleImageBlockComponentProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            {t('ArticleImageBlockComponen')}
        </div>
    );
}
