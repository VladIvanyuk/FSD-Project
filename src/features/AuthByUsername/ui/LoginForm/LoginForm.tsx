import { memo, useCallback } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { AppButton } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export const LoginForm = memo((props) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
            <Input placeholder={t('Логин')} onChange={onChangeUsername} value={username}/>
            <Input placeholder={t('Пароль')} onChange={onChangePassword} value={password}/>
            <AppButton disabled={isLoading} onClick={onLoginClick} theme={''}>
                {t('Войти')}
            </AppButton>
        </div>
    )
}
)
