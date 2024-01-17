/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react'
// import cls from './ProfilePage.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { ProfilePageHeader } from '../../../../pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard';
import { editableProfileCardReducer } from '../slice/editableProfileCardSlice';

interface IProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: IProfilePageProps) => {
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const dispatch = useAppDispatch();

    useEffect(() => {
        addReducer({
            profile: editableProfileCardReducer
        })

        dispatch(fetchProfileData()).catch(console.log);

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
