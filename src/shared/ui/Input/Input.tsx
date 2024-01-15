import { ChangeEvent, InputHTMLAttributes, memo } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readoOnly'>

interface IInputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Input = memo((props: IInputProps) => {
    const { className, placeholder, value, onChange, type = 'text', readonly } = props;
    const onChangHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(event.target.value)
    }
    return (
        <input
            disabled={readonly}
            value={value}
            placeholder={placeholder}
            type={type}
            onChange={onChangHandler}
            className={classNames(cls.Input, {
                [cls.disabled]: readonly
            }, [className])} />
    )
})
