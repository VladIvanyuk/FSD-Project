import { memo, useCallback, useEffect } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { AppButton } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad'

export interface ILoginFormProps {
    className?: string
}

export const LoginForm = memo((props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { addReducer, deleteReducer } = useDynamicReducerLoad();

    const username = useSelector(getLoginUsername);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const password = useSelector(getLoginPassword);

    // добавляем/удаляем редьюсер логина при открытии/закрытии модалки
    useEffect(() => {
        addReducer('loginForm', loginReducer)
        return () => {
            deleteReducer('loginForm')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
