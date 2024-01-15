/* eslint-disable react-hooks/exhaustive-deps */
import { ProfileCard, fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, profileReducer } from 'entity/Profile';
import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux';
// import cls from './ProfilePage.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';

interface IProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: IProfilePageProps) => {
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

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
            <ProfileCard data={data} isLoading={isLoading} error={error} />
        </div>
    )
})
