import { FC } from 'react'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Loader } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'
import { IProfile } from 'entity/Profile/model/types/profile'
import { classNames } from 'helpers/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { CurrencySelect } from 'entity/Currency'
import { CountrySelect } from 'entity/Country'

interface IProfileCardProps {
  className?: string
  form?: IProfile
  isLoading?: boolean
  readonly: boolean
  error?: string
  onEditHandler: (value: string, name: string) => void
}

export const ProfileCard: FC<IProfileCardProps> = ({ readonly, form, error, isLoading, onEditHandler }) => {
    const { t } = useTranslation('profile');

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
            <div className={cls.avatarWrapper}>
                <Avatar size={70} src={form?.avatar} />
            </div>
            <div className={cls.profileWrapper}>
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='firstname'
                    className={cls.input}
                    value={form?.firstname}
                    placeholder={t('Имя')}
                    label={t('Имя')}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='secondname'
                    className={cls.input}
                    value={form?.secondname}
                    placeholder={t('Фамилия')}
                    label={t('Фамилия')}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='username'
                    className={cls.input}
                    value={form?.username}
                    placeholder={t('Имя пользователя')}
                    label={t('Имя пользователя')}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    type={'number'}
                    inputName='age'
                    className={cls.input}
                    value={form?.age}
                    placeholder={t('Возраст')}
                    label={t('Возраст')}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='city'
                    className={cls.input}
                    value={form?.city}
                    placeholder={t('Город')}
                    label={t('Город')}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='avatar'
                    className={cls.input}
                    value={form?.avatar}
                    placeholder={t('Аватар')}
                    label={t('Аватар')}
                />
                <CountrySelect readonly={readonly} value={form?.country} onChange={onEditHandler} />
                <CurrencySelect readonly={readonly} value={form?.currency} onChange={onEditHandler} />
            </div>
        </div>
    )
}
