import { memo } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './CommentCard.module.scss';
import { IComment } from 'entity/Comment/model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton/Skeleton';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { RoutePath } from 'shared/config/route/routeConfig';

interface ICommentCardProps {
   className?: string
   comment: IComment
   isLoading?: boolean
}

export const CommentCard = memo((props: ICommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton border={'50%'} height={30} width={30} />
                    <Skeleton height={30} width={100} />
                </div>
                <Skeleton height={100} width={'100%'} />
            </div>
        )
    }
    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <AppLink to={RoutePath.profile + comment.user.id} className={cls.header} theme={AppLinkTheme.PRIMARY}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text text={comment.user.username} />
            </AppLink>
            <p>{comment.text}</p>
        </div>
    );
})
