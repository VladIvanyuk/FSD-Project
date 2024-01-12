import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { AppButton, ButtonTheme } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'

interface IProfileCardProps {
  className?: string
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
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
