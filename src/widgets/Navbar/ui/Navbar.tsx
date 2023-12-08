/* eslint-disable i18next/no-literal-string */
import { FC, useState } from 'react';
import cls from './navbar.module.scss';
import { classNames } from 'helpers/classNames/classNames';
import { AppButton, ButtonTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entity/User';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

interface INavbarProps {
  classNames?: string
}

export const Navbar: FC<INavbarProps> = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAuth = useSelector(getUserAuthData);

    const logout = () => {
        dispatch(userActions.logout())
        dispatch(loginActions.setPassword(''))
        dispatch(loginActions.setUsername(''))
        localStorage.removeItem(LOCALSTORAGE_USER_KEY);
    }

    return (
        <nav className={classNames(cls.navbar)}>
            { isAuth
                ? <div>
                    <AppButton onClick={logout} theme={ButtonTheme.OUTLINE_INVERTED}>{t('Выйти')}</AppButton>
                    {isOpenModal && <LoginModal isAuthSuccess={true} onClose={() => { setIsOpenModal(false); }} />}
                </div>
                : <div>
                    <AppButton onClick={() => { setIsOpenModal(true); }} theme={ButtonTheme.OUTLINE_INVERTED}>{t('Войти')}</AppButton>
                    {isOpenModal && <LoginModal onClose={() => { setIsOpenModal(false); }} />}
                </div>
            }
        </nav>
    );
};
