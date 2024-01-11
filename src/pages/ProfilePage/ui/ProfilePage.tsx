import { memo } from 'react'
// import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'

interface IProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: IProfilePageProps) => {
    const { t } = useTranslation('profile');
    return (
        <div>
            {t('Профиль')}
        </div>
    )
})
