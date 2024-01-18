import { FC } from 'react'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Loader } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'
import { IProfile } from 'entity/Profile/model/types/profile'
import { classNames } from 'helpers/classNames/classNames'
import { Avatar } from 'shared/ui/Avatart/Avatar'

interface IProfileCardProps {
  className?: string
  form?: IProfile
  isLoading?: boolean
  readonly?: boolean
  error?: string
  onEditHandler: (value: string, name: string) => void
}

export const ProfileCard: FC<IProfileCardProps> = ({ readonly, form, error, isLoading, onEditHandler }) => {
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
                    isShowPlaceholder={true}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='secondname'
                    className={cls.input}
                    value={form?.secondname}
                    placeholder={t('Фамилия')}
                    isShowPlaceholder={true}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='username'
                    className={cls.input}
                    value={form?.username}
                    placeholder={t('Имя пользователя')}
                    isShowPlaceholder={true}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    type={'number'}
                    inputName='age'
                    className={cls.input}
                    value={form?.age}
                    placeholder={t('Возраст')}
                    isShowPlaceholder={true}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='city'
                    className={cls.input}
                    value={form?.city}
                    placeholder={t('Город')}
                    isShowPlaceholder={true}
                />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='avatar'
                    className={cls.input}
                    value={form?.avatar}
                    placeholder={t('Аватар')}
                    isShowPlaceholder={true}
                />
            </div>
        </div>
    )
}
