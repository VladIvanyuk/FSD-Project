/* eslint-disable i18next/no-literal-string */
import { FC, useState } from 'react';
import cls from './navbar.module.scss';
import { classNames } from 'helpers/classNames/classNames';
import { AppButton, ButtonTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';

interface INavbarProps {
  classNames?: string
}

export const Navbar: FC<INavbarProps> = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { t } = useTranslation();

    return (
        <nav className={classNames(cls.navbar)}>
            <div>
                <AppButton onClick={() => { setIsOpenModal(true); }} theme={ButtonTheme.OUTLINE_INVERTED}>{t('Войти')}</AppButton>
                {isOpenModal && <LoginModal onClose={() => { setIsOpenModal(false); }} />}
            </div>
        </nav>
    );
};
