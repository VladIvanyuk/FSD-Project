/* eslint-disable react-hooks/exhaustive-deps */
import { ProfileCard, fetchProfileData, profileReducer } from 'entity/Profile';
import { memo, useEffect } from 'react'
// import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';

interface IProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: IProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const dispatch = useAppDispatch();

    useEffect(() => {
        addReducer({
            profile: profileReducer
        })

        dispatch(fetchProfileData()).catch(console.log);

        return () => {
            deleteReducer(['profile'])
        }
    }, [])

    return (
        <div>
            <ProfileCard />
        </div>
    )
})
