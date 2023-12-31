import { ChangeEvent, InputHTMLAttributes, memo } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: IInputProps) => {
    const { className, placeholder, value, onChange, type = 'text' } = props;
    const onChangHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(event.target.value)
    }
    return (
        <input value={value} placeholder={placeholder} type={type} onChange={onChangHandler} className={classNames(cls.Input, {}, [className])} />
    )
})
