import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './Counter.module.scss'
import { AppButton } from 'shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

interface ICounterProps {
  className?: string
}

export const Counter: FC<ICounterProps> = (props) => {
    const { className } = props;
    const dispatch = useDispatch();
    const { increment, decrement } = counterActions;
    const count = useSelector(getCounterValue)

    const incrementHandler = (): void => {
        dispatch(increment())
    }

    const decrementHandler = (): void => {
        dispatch(decrement())
    }
    return (
        <div className={classNames(cls.Counter, {}, [className])}>
            <h1 data-testid='value-title'>{count}</h1>
            <AppButton data-testid='increment-btn' onClick={incrementHandler} theme={''}>increment</AppButton>
            <AppButton data-testid='decrement-btn' onClick={decrementHandler} theme={''}>decrement</AppButton>
        </div>
    )
}
