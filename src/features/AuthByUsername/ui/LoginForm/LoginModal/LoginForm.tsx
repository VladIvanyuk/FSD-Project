import { FC, useState } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { AppButton } from 'shared/ui'
import { Input } from 'shared/ui/Input/Input'

interface ILoginFormProps {
  className?: string
}

export const LoginForm: FC<ILoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [loginState, setLoginState] = useState({
        login: '',
        password: ''
    });

    const onChange = (value: string, name: string): void => {
        setLoginState({
            ...loginState,
            [name]: value
        })
    }

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input name='login' placeholder={t('Логин')} value={loginState.login} onChange={onChange} />
            <Input name='password' placeholder={t('Пароль')} value={loginState.password} onChange={onChange} />
            <AppButton theme={''}>
                {t('Войти')}
            </AppButton>
        </div>
    )
}
