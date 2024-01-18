import { FC } from 'react'
import cls from './Select.module.scss'
import { classNames } from 'helpers/classNames/classNames'

interface ISelectProps {
  className?: string
  label?: string
}

export const Select: FC<ISelectProps> = ({ label }) => {
    return (
        <div className={classNames(cls.wrapper, {}, [])}>
            {label &&
            <label>{label}</label>
            }
            <select className={cls.select}>
                <option value="1111">1111</option>
                <option value="2222">2222</option>
            </select>
        </div>
    )
}
