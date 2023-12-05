import { memo, useCallback } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { AppButton } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../../model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'

export const LoginForm = memo((props) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            <Input placeholder={t('Логин')} onChange={onChangeUsername} value={username}/>
            <Input placeholder={t('Пароль')} onChange={onChangePassword} value={password}/>
            <AppButton theme={''}>
                {t('Войти')}
            </AppButton>
        </div>
    )
}
)
