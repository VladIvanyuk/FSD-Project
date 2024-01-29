import { memo } from 'react';
import cls from './ArticleCodeBlockComponent.module.scss';
import { IArticleCodeBlock } from 'entity/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code/Code';

interface IArticleCodeBlockComponentProps {
   className?: string
   block: IArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: IArticleCodeBlockComponentProps) => {
    const { block } = props;

    return (
        <Code className={cls.code} text={block.code} />
    );
})
