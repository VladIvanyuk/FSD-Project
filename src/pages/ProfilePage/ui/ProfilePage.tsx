/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react'
// import cls from './ProfilePage.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard';
import { editableProfileCardReducer, fetchProfileData } from 'features/EditableProfileCard';

interface IProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: IProfilePageProps) => {
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const dispatch = useAppDispatch();
    useEffect(() => {
        console.log(__PROJECT__)
        if (__PROJECT__ !== 'storybook') {
            addReducer({
                profile: editableProfileCardReducer
            })

            dispatch(fetchProfileData()).catch(console.log);
        }

        return () => {
            deleteReducer(['profile'])
        }
    }, [])

    return (
        <div>
            <ProfilePageHeader />
            <EditableProfileCard />
        </div>
    )
})
