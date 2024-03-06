import { MutableRefObject, useEffect } from 'react'

export interface IUseInfiniteScroll {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: IUseInfiniteScroll) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '10px',
                threshold: 1
            }

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                console.log(observer)
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.disconnect()
            }
        }
    }, [callback, triggerRef, wrapperRef])
}
