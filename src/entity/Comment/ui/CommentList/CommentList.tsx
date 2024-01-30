import { memo } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './CommentList.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface ICommentListProps {
   className?: string
   comments: IComment[]
   isLoading?: false
}

export const CommentList = memo((props: ICommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {
                comments.length
                    ? comments.map((comment) => (
                        <CommentCard isLoading={isLoading} className={cls.comment} key={comment.id} comment={comment} />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
})
