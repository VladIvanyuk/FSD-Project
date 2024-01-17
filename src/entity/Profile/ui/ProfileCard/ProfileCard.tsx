import { FC } from 'react'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Loader } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'
import { IProfile } from 'entity/Profile/model/types/profile'
import { classNames } from 'helpers/classNames/classNames'

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
            <div className={cls.data}>
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='firstname'
                    className={cls.input}
                    value={form?.firstname}
                    placeholder={t('Ваше имя')} />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='secondname'
                    className={cls.input}
                    value={form?.secondname}
                    placeholder={t('Ваша фамилия')} />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    type={'number'}
                    inputName='age'
                    className={cls.input}
                    value={form?.age}
                    placeholder={t('Ваш возраст')} />
                <Input
                    onChange={onEditHandler}
                    readonly={readonly}
                    inputName='city'
                    className={cls.input}
                    value={form?.city}
                    placeholder={t('Ваш город')} />
            </div>
        </div>
    )
}
