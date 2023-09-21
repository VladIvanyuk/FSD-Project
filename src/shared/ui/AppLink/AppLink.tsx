import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const {to, theme, className, children, ...otherProps} = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  )
}
