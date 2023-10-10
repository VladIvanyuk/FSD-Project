import { FC } from 'react';
import cls from './navbar.module.scss';
import { classNames } from 'helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface INavbarProps {
  classNames?: string
}

export const Navbar: FC<INavbarProps> = () => {
    const { t } = useTranslation();

    return (
        <nav className={classNames(cls.navbar)}>
            <div>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>{t('О сайте')}</AppLink>
            </div>
        </nav>
    );
};
