import { ChangeEvent, InputHTMLAttributes, memo } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readoOnly'>

interface IInputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  type?: string
  onChange?: (value: string, name: string) => void
  readonly?: boolean
  inputName: string
  label?: string
}

export const Input = memo((props: IInputProps) => {
    const { className, placeholder, label, value, onChange, type = 'text', readonly, inputName } = props;
    const onChangHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(event.target.name, event.target.value)
    }
    return (
        <div className={cls.inputWrapper}>
            <label htmlFor={inputName}>{label && label}</label>
            <input
                id={inputName}
                disabled={readonly}
                name={inputName}
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={onChangHandler}
                className={classNames(cls.Input, {
                    [cls.disabled]: readonly
                }, [className])} />
        </div>
    )
})
