import { FC } from 'react'
import { classNames } from 'helpers/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import { AppButton, ButtonTheme } from 'shared/ui'
import { Icon } from 'shared/ui/Icon/Icon/Icon'
import { GridIcon, ListIcon } from 'shared/assets'
import { ArticleListView } from 'entity/Article'

interface IArticleViewSelectorProps {
  className?: string
  onClickHandler: (view: ArticleListView) => void
}

export const ArticleViewSelector: FC<IArticleViewSelectorProps> = (props) => {
    const { className, onClickHandler } = props;
    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            <AppButton theme={ButtonTheme.CLEAR} onClick={() => { onClickHandler(ArticleListView.LIST); }}>
                <Icon Svg={ListIcon} />
            </AppButton>
            <AppButton theme={ButtonTheme.CLEAR} onClick={() => { onClickHandler(ArticleListView.GRID); }}>
                <Icon Svg={GridIcon} />
            </AppButton>
        </div>
    )
}
