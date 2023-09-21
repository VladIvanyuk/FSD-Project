import { FC } from "react";
import cls from './navbar.module.scss';
import { classNames } from "helpers/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface INavbarProps {
  classNames?: string;
}

export const Navbar: FC<INavbarProps> = () => {
  return (
    <div className={classNames(cls.navbar)}>
      <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={cls.mainLink}>Главная</AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>О сайте</AppLink>
    </div>
  );
};
