/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react'
// import cls from './ProfilePage.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { EditableProfileCard } from 'features/EditableProfileCard/ui/EditableProfileCard';
import { editableProfileCardReducer, fetchProfileData } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';

interface IProfilePageProps {
  className?: string
}

export const ProfilePage = memo((props: IProfilePageProps) => {
    const { addReducer, deleteReducer } = useDynamicReducerLoad();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const isNotStorybook = __PROJECT__ !== 'storybook';

    useEffect(() => {
        if (isNotStorybook) {
            addReducer({
                profile: editableProfileCardReducer
            })

            if (id) {
                dispatch(fetchProfileData(id)).catch(console.log);
            }
        }

        return () => {
            deleteReducer(['profile'])
        }
    }, [])

    return (
        <Page>
            <ProfilePageHeader />
            <EditableProfileCard />
        </Page>
    )
})
