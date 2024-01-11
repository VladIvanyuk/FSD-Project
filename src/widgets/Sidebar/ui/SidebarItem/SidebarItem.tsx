import { memo } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui'

interface ISidebarItenProps {
  className?: string
  collapsed: boolean
  theme: AppLinkTheme
  Icon: any
  text: string
  path: string
}

export const SidebarItem = memo(({ collapsed, theme, text, Icon, path }: ISidebarItenProps) => {
    const { t } = useTranslation();
    return (
        <div>
            <AppLink theme={theme} to={path} className={cls.sidebarLink}>
                {
                    collapsed
                        ? <Icon className={classNames(cls.icon, {}, [])}/>
                        : <>
                            <Icon className={classNames('', {}, [cls['mr-10']])} />
                            {t(text)}
                        </>
                }
            </AppLink>
        </div>
    )
})
