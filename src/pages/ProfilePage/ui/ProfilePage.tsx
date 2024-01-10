import { FC } from 'react'
// import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'

interface IProfilePageProps {
  className?: string
}

export const ProfilePage: FC<IProfilePageProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div>
            {t('PROFILE PAGE')}
        </div>
    )
}
