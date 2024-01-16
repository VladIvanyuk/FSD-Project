import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { AppButton, ButtonTheme } from 'shared/ui'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions } from 'entity/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { updateProfileData } from 'entity/Profile/model/services/updateProfileData/updateProfileData'

interface IProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const onEditHandler = (name: string) => {
        switch (name) {
        case 'edit':
            dispatch(profileActions.setReadonly(false));
            break;

        case 'cancel':
            dispatch(profileActions.cancelUpdateProfile());
            break;

        case 'save':
            dispatch(updateProfileData()).catch(console.log);
            break;
        }
    }
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text className={cls.headerText} title={t('Профиль')} />
                {readonly
                    ? <AppButton onClick={() => { onEditHandler('edit'); }} theme={ButtonTheme.OUTLINE}>
                        {t('Редактировать')}
                    </AppButton>
                    : <div>
                        <AppButton onClick={() => { onEditHandler('save'); }} className={cls.saveButton} theme={ButtonTheme.OUTLINE}>
                            {t('Сохранить')}
                        </AppButton>
                        <AppButton onClick={() => { onEditHandler('cancel'); }} theme={ButtonTheme.OUTLINE}>
                            {t('Отмена')}
                        </AppButton>
                    </div>}
            </div>
        </div>
    )
}
