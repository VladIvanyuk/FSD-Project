import { memo } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { IArticleImageBlock } from 'entity/Article/model/types/article';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';

interface IArticleImageBlockComponentProps {
   className?: string
   block: IArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: IArticleImageBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <img className={cls.image} src={block.src} alt="" />
            {block.title && <Text align={TextAlign.CENTER} text={block.title} size={TextSize.M} />}
        </div>
    );
})
