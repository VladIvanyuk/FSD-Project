import { memo } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { IArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface IArticleTextBlockComponentProps {
   className?: string
   block: IArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: IArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {block.title && <Text className={cls.title} title={block.title} />}
            <div className={cls.paragraphsBlock}>
                {block.paragraphs.map((par) => (
                    <Text className={cls.paragraph} text={par} key={par} />
                ))}
            </div>
        </div>
    );
})
