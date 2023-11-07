import { FC } from 'react';
import cls from './navbar.module.scss';
import { classNames } from 'helpers/classNames/classNames';

interface INavbarProps {
  classNames?: string
}

export const Navbar: FC<INavbarProps> = () => {
    return (
        <nav className={classNames(cls.navbar)}>
            <div>

            </div>
        </nav>
    );
};
