/* eslint-disable react-hooks/exhaustive-deps */
import { ProfileCard, fetchProfileData, profileReducer } from 'entity/Profile';
import { memo, useEffect } from 'react'
// import cls from './ProfilePage.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';

interface IProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: IProfilePageProps) => {
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
