import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { AppButton, ButtonTheme } from 'shared/ui'

interface IProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text className={cls.headerText} title={t('Профиль')} />
                <AppButton theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </AppButton>
            </div>
        </div>
    )
}
