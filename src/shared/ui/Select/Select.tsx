import { ChangeEvent, memo } from 'react'
import cls from './Select.module.scss'
import { classNames } from 'helpers/classNames/classNames'
import { Countries } from 'entity/Country'
import { Currencies } from 'entity/Currency'

interface ISelect {
    value: string
    content: string
}

interface ISelectProps {
  className?: string
  label?: string
  options: ISelect[]
  selectName: string
  value?: Countries | Currencies
  readonly: boolean
  onChange: (name: string, value: string) => void
}

export const Select = memo(({ label, options, onChange, selectName, value, readonly }: ISelectProps) => {
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.name, event.target.value)
    }
    const optionsList = options.map((opt) => (
        <option
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    ))
    return (
        <div className={classNames(cls.wrapper, {}, [])}>
            {label &&
            <label>
                {label}
            </label>
            }
            <select disabled={readonly} name={selectName} value={value} onChange={onChangeHandler} className={cls.select}>
                {optionsList}
            </select>
        </div>
    )
})
