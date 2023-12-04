import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginModal/LoginForm'
import { useTranslation } from 'react-i18next'

interface ILoginModalProps {
  className?: string
  onClose: () => void
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
    const { className, onClose } = props;
    const { t } = useTranslation();
    return (
        <Modal onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
            <p className={cls.loginFormTitle}>{t('Авторизация')}</p>
            <LoginForm />
        </Modal>
    )
}
