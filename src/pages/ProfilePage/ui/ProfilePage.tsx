/* eslint-disable react-hooks/exhaustive-deps */
import { ProfileCard, fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, profileActions, profileReducer } from 'entity/Profile';
import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';
// import cls from './ProfilePage.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface IProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: IProfilePageProps) => {
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm)
    console.log(form)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    const onChangeInfo = useCallback((name: string, value: string) => {
        switch (name) {
        case 'firstname':
            dispatch(profileActions.updateProfile({
                firstname: value
            }))
            break;

        case 'secondname':
            dispatch(profileActions.updateProfile({
                secondname: value
            }))
            break;
        }
    }, [dispatch])

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
            <ProfilePageHeader />
            <ProfileCard onEditHandler={onChangeInfo} data={form} isLoading={isLoading} error={error} />
        </div>
    )
})
