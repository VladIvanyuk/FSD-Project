/* eslint-disable react-hooks/exhaustive-deps */
import { profileReducer } from 'entity/Profile';
import { memo, useEffect } from 'react'
// import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';

interface IProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: IProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { addReducer, deleteReducer } = useDynamicReducerLoad();

    useEffect(() => {
        addReducer({
            profile: profileReducer
        })

        return () => {
            deleteReducer(['profile'])
        }
    }, [])

    return (
        <div>
            {t('Профиль')}
        </div>
    )
})
