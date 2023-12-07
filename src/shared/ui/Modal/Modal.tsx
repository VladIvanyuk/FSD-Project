import { FC, ReactNode, useEffect, useRef } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'shared/config/themeContext'
import { AppButton } from '../AppButton/AppButton'

interface IModalProps {
  className?: string
  children?: ReactNode
  onClose?: () => void
}

export const Modal: FC<IModalProps> = (props) => {
    const { className, children, onClose } = props;
    const { theme } = useTheme();
    const contentRef = useRef(null);
    const layoutRef = useRef(null);
    const ANIMATION_DELAY = 300;

    useEffect(() => {
        contentRef.current.classList.add(cls['content-full']);
        layoutRef.current.classList.add(cls['layout-full']);
    }, [])

    const onCloseHandler = () => {
        contentRef.current.classList.remove(cls['content-full']);
        layoutRef.current.classList.remove(cls['layout-full']);
        setTimeout(() => {
            onClose();
        }, ANIMATION_DELAY)
    }

    return (
        <Portal element={document.querySelector('.modal')}>
            <div className={classNames(cls.Modal, {}, [className, theme])}>
                <div ref={layoutRef} onClick={onCloseHandler} className={cls.layout}></div>
                <div ref={contentRef} className={classNames(cls.content, {}, [])}>
                    {children}
                    <AppButton className={cls.modalButton} onClick={onCloseHandler}>Х</AppButton>
                </div>
            </div>
        </Portal>
    )
}
