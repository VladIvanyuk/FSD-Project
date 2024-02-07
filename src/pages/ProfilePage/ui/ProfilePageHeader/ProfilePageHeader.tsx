import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { AppButton, ButtonTheme } from 'shared/ui'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getProfileReadonly, editableProfileCardActions, updateProfileData } from 'features/EditableProfileCard'
import { getUserAuthData } from 'entity/User'
import { getProfileData } from 'entity/Profile'

interface IProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const onEditHandler = (name: string) => {
        switch (name) {
        case 'edit':
            dispatch(editableProfileCardActions.setReadonly(false));
            break;

        case 'cancel':
            dispatch(editableProfileCardActions.cancelUpdateProfile());
            break;

        case 'save':
            dispatch(updateProfileData(profileData.id)).catch(console.log);
            break;
        }
    }
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text className={cls.headerText} title={t('Профиль')} />
                {canEdit && (
                    <div>
                        {readonly
                            ? <AppButton onClick={() => { onEditHandler('edit'); }} theme={ButtonTheme.OUTLINE}>
                                {t('Редактировать')}
                            </AppButton>
                            : <div>
                                <AppButton onClick={() => { onEditHandler('save'); }} className={cls.saveButton} theme={ButtonTheme.GREEN}>
                                    {t('Сохранить')}
                                </AppButton>
                                <AppButton onClick={() => { onEditHandler('cancel'); }} theme={ButtonTheme.RED}>
                                    {t('Отмена')}
                                </AppButton>
                            </div>}
                    </div>
                )}
            </div>
        </div>
    )
}
