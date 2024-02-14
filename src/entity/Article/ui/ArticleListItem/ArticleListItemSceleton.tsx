import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { ArticleListView } from '../../model/types/article'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton/Skeleton'
import { Card } from 'shared/ui/Card/Card'

interface IArticleListItemSceletonProps {
  className?: string
  view?: ArticleListView
}

export const ArticleListItemSceleton: FC<IArticleListItemSceletonProps> = (props) => {
    const { className, view = ArticleListView.LIST } = props;
    if (view === ArticleListView.GRID) {
        return (
            <>
                <Skeleton height={212} width={324} />
            </>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.bigCardHeader}>
                        <div className={cls.userAndDate}>
                            <Skeleton width={50} height={50} marginB={20} border='50%' />
                            <Skeleton width={149} height={16} className={cls.user} />
                            <Skeleton width={109} height={16} className={cls.date} />
                        </div>
                        <Skeleton width={497} height={24} marginB={20} className={cls.title} />
                    </div>
                    <Skeleton width={200} height={24} marginB={20} className={cls.types} />
                    <div className={cls.imageWrapper}>
                        <Skeleton width={'100%'} height={300} marginB={20} className={cls.img} />
                    </div>
                    <Skeleton width={'100%'} height={100} className={cls.textBlockWrapper} />
                </Card>
            </div>
        </div>
    )
}
