import { FC, useCallback } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './EditableProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { IProfile, ProfileCard } from 'entity/Profile'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { editableProfileCardActions } from '../model/slice/editableProfileCardSlice'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'

interface IEditableProfileCardProps {
    className?: string
    data?: IProfile
    isLoading?: boolean
    error?: string
}

export const EditableProfileCard: FC<IEditableProfileCardProps> = () => {
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)

    const onChangeInfo = useCallback((name: string, value: string) => {
        switch (name) {
        case 'firstname':
            dispatch(editableProfileCardActions.updateProfile({
                firstname: value
            }))
            break;

        case 'secondname':
            dispatch(editableProfileCardActions.updateProfile({
                secondname: value
            }))
            break;

        case 'age':
            dispatch(editableProfileCardActions.updateProfile({
                age: value
            }))
            break;
        case 'city':
            dispatch(editableProfileCardActions.updateProfile({
                city: value
            }))
            break;
        case 'avatar':
            dispatch(editableProfileCardActions.updateProfile({
                avatar: value
            }))
            break;
        case 'username':
            dispatch(editableProfileCardActions.updateProfile({
                username: value
            }))
            break;
        }
    }, [dispatch])
    return (
        <div className={classNames(cls.EditableProfileCard, {}, [])}>
            <ProfileCard onEditHandler={onChangeInfo} readonly={readonly} form={form} isLoading={isLoading} error={error} />
        </div>
    )
}
