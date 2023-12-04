import { FC, useState } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher'
import { AppButton, AppLink, AppLinkTheme, ButtonTheme } from 'shared/ui'
import { ButtonSize } from 'shared/ui/AppButton/AppButton'
import { useTranslation } from 'react-i18next'
import { MainIcon, AboutIcon } from 'shared/assets';

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const toggleCollapse = (): void => {
        setCollapsed((prev) => !prev)
    }

    const { className } = props;
    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <AppButton
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
                data-testid="sidebar-toggle"
                className={cls.sidebarButton}
                onClick={toggleCollapse}>
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={cls.sidebarLink}>
                    {
                        collapsed
                            ? <MainIcon className={classNames(cls.icon, {}, [])}/>
                            : <>
                                <MainIcon className={classNames('', {}, [cls['mr-10']])} />
                                {t('Главная')}
                            </>
                    }
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'} className={cls.sidebarLink}>
                    {
                        collapsed
                            ? <AboutIcon className={classNames(cls.icon, {}, [])}/>
                            : <>
                                <AboutIcon className={classNames('', {}, [cls['mr-10']])} />
                                {t('О нас')}
                            </>
                    }
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher className={classNames('', { [cls.margin]: !collapsed }, [])} />
                <LangSwitcher isShort={collapsed}/>
            </div>
        </div>
    )
}
