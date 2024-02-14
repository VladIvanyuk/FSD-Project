import { FC, useState } from 'react'
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
    const [isActiveToggle, setIsActiveToggle] = useState(true);

    const onClickToggler = (view: ArticleListView, flag: boolean) => {
        onClickHandler(ArticleListView[view]);
        setIsActiveToggle(flag)
    }

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            <AppButton className={classNames(cls.listBtn, { [cls.isActive]: isActiveToggle }, [className])} theme={ButtonTheme.CLEAR} onClick={() => { onClickToggler(ArticleListView.LIST, true) }}>
                <Icon Svg={ListIcon} />
            </AppButton>
            <AppButton className={classNames(cls.gridBtn, { [cls.isActive]: !isActiveToggle }, [className])} theme={ButtonTheme.CLEAR} onClick={() => { onClickToggler(ArticleListView.GRID, false) }}>
                <Icon Svg={GridIcon} />
            </AppButton>
        </div>
    )
}
