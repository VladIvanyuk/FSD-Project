import { FC, Suspense } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'
import { LoaderPage } from 'widgets/LoaderPage/ui/LoaderPage'

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
                        <Suspense fallback={<LoaderPage />}>
                            <LoginFormLazy />
                        </Suspense>
                    </Modal>
            }
        </>
    )
}
