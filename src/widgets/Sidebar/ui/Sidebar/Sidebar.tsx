import { FC, useState } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher'
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
            <button
                data-testid="sidebar-toggle"
                onClick={toggleCollapse}>{t('Боковое меню')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
