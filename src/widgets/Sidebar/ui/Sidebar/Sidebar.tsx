import { FC, useState } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapse = (): void => {
    setCollapsed((prev) => !prev)
  }

  const { className } = props;
  return (
      <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <button onClick={toggleCollapse}>TOGGLE</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
          </div>
      </div>
  )
}
