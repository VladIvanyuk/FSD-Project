import { FC } from 'react'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Loader } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'
import { IProfile } from 'entity/Profile/model/types/profile'
import { classNames } from 'helpers/classNames/classNames'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from 'entity/Profile/model/selectors/getProfileReadonly/getProfileReadonly'

interface IProfileCardProps {
  className?: string
  data?: IProfile
  isLoading?: boolean
  error?: string
}

export const ProfileCard: FC<IProfileCardProps> = ({ data, error, isLoading }) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly)

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
            <div className={cls.data}>
                <Input readonly={readonly} className={cls.input} value={data?.firstname} placeholder={t('Ваше имя')} />
                <Input readonly={readonly} className={cls.input} value={data?.lastname} placeholder={t('Ваша фамилия')} />
            </div>
        </div>
    )
}
