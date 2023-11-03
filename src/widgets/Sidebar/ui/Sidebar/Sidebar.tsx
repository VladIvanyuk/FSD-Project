import { FC, useState } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher'
import { AppButton, ButtonTheme } from 'shared/ui'
import { ButtonSize } from 'shared/ui/AppLink/AppButton/AppButton'
interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);
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
                onClick={toggleCollapse}>{collapsed ? '>' : '<'}
            </AppButton>
            <div className={cls.switchers}>
                <ThemeSwitcher className={classNames('', { [cls.margin]: !collapsed }, [])} />
                <LangSwitcher isShort={collapsed}/>
            </div>
        </div>
    )
}
