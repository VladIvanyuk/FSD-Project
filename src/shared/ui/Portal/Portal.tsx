import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactNode
  element: HTMLElement | null
}

export const Portal: FC<IPortalProps> = (props) => {
    const { children, element = document.body } = props;
    return createPortal(children, element ?? document.body)
}
