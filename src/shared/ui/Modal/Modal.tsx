import { FC, ReactNode } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'

interface IModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Modal: FC<IModalProps> = (props) => {
    const { className, children, isOpen, onClose } = props;

    return (
        isOpen &&
        <Portal element={document.querySelector('.modal')}>
            <div className={classNames(cls.Modal, {}, [className])}>
                <div onClick={() => { onClose() }} className={cls.layout}></div>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
