import { memo } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface INotFoundPageProps {
  className?: string
}

export const NotFoundPage = memo((props: INotFoundPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
})
