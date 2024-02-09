import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { ArticleListView, IArticle } from 'entity/Article/model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon/Icon'
import { EyeIcon } from 'shared/assets'
import { Card } from 'shared/ui/Card/Card'

interface IArticleListItemProps {
  className?: string
  article: IArticle
  view: ArticleListView
}

export const ArticleListItem: FC<IArticleListItemProps> = (props) => {
    const { className, article, view } = props;
    if (view === ArticleListView.GRID) {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.imgWrapper}>
                        <img className={cls.img} src={article.img} alt={article.title} />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Text text={article.type.join('/')} className={cls.types} />
                        <Text text={article.views} className={cls.views} />
                        <Icon Svg={EyeIcon} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                    <Text className={cls.date} text={article.createdAt} />
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            {article.title}
        </div>
    )
}
