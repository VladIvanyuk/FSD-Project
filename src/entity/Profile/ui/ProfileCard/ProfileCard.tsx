import { FC } from 'react'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { AppButton, ButtonTheme, Loader } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'
import { IProfile } from 'entity/Profile/model/types/profile'
import { classNames } from 'helpers/classNames/classNames'

interface IProfileCardProps {
  className?: string
  data?: IProfile
  isLoading?: boolean
  error?: string
}

export const ProfileCard: FC<IProfileCardProps> = ({ data, error, isLoading }) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.isLoading])}>
                <Loader className={cls.center} />
            </div>
        )
    }

    if (error) {
        return (
            <div className={cls.ProfileCard}>
                <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title='Произошла ошибка при загрузке профиля' text='Попробуйте перезагрузить страницу' />
            </div>
        )
    }
    return (
        <div className={cls.ProfileCard}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <AppButton theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </AppButton>
            </div>
            <div className={cls.data}>
                <Input className={cls.input} value={data?.firstname} placeholder={t('Ваше имя')} />
                <Input className={cls.input} value={data?.lastname} placeholder={t('Ваша фамилия')} />
            </div>
        </div>
    )
}
