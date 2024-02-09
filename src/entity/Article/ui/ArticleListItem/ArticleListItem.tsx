import { FC, memo } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { ArticleListView, IArticle, IArticleTextBlock } from 'entity/Article/model/types/article'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon/Icon'
import { EyeIcon } from 'shared/assets'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { AppLink, AppLinkTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface IArticleListItemProps {
  className?: string
  article: IArticle
  view: ArticleListView
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation();
    if (view === ArticleListView.GRID) {
        return (
            <AppLink to={article.id} theme={AppLinkTheme.SECONDARY} className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
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
            </AppLink>
        )
    }

    const textBlock = article.blocks.find((block) => block.type === 'TEXT') as IArticleTextBlock;

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.bigCardHeader}>
                        <div className={cls.userAndDate}>
                            <Avatar src={article.user.avatar} size={50} />
                            <Text text={article.user.username} className={cls.user} />
                            <Text text={article.createdAt} className={cls.date} />
                        </div>
                        <Text title={article.title} size={TextSize.L} className={cls.title} />
                    </div>
                    <Text text={article.type.join(' / ')} className={cls.types} />
                    <div className={cls.imageWrapper}>
                        <img src={article.img} alt={article.title} className={cls.img} />
                    </div>
                    <div>
                        {textBlock && <ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />}
                    </div>
                    <div className={cls.bigCardFooter}>
                        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.readMore} to={article.id}>
                            {t('Читать далее...')}
                        </AppLink>
                        <div className={cls.views}>
                            <Text text={article.views} className={cls.views} />
                            <Icon Svg={EyeIcon} />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
})
