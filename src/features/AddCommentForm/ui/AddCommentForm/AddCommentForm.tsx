import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { AppButton } from 'shared/ui';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '../../model/selectors/AddCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentFormActions, AddCommentFormReducer } from '../../model/slice/AddCommentFormSlice';
import { useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad/useDynamicReducerLoad';

interface IAddCommentFormProps {
   className?: string
   onSendComment: (text: string) => void
}

export const AddCommentForm = memo((props: IAddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();
    const { addReducer, deleteReducer } = useDynamicReducerLoad();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            addReducer({
                addCommentForm: AddCommentFormReducer
            })
        }

        return () => {
            deleteReducer(['addCommentForm'])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onCommentTextChange = useCallback((_, value) => {
        dispatch(AddCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onCommentTextChange('', '');
        onSendComment(text || '')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <div className={classNames(cls.addCommentForm, {}, [className])}>
            <Input onChange={onCommentTextChange} value={text} placeholder='Add Comment' inputName='comment-text' />
            <AppButton onClick={onSendHandler}>{t('Отправить комментарий')}</AppButton>
        </div>
    );
})
