import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'

interface ILoginModalProps {
  className?: string
  isAuthSuccess?: boolean
  onClose: () => void
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
    const { className, onClose, isAuthSuccess } = props;
    const { t } = useTranslation();
    return (
        <>
            {
                isAuthSuccess
                    ? <Modal onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
                        <Text title="Вы успешно авторизовались!" />
                    </Modal>
                    : <Modal onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
                        <Text title={t('Форма авторизации')} className={cls.loginFormTitle}></Text>
                        <LoginForm />
                    </Modal>
            }
        </>
    )
}
