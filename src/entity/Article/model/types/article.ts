enum ArticleTypes {
    IT = 'IT',
    DESIGN = 'DESIGN',
    SPORT = 'SPORT'
}

export enum ArticleBlockTypes {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

export interface IArticleBlockBase {
    type: ArticleBlockTypes
    id: string
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    code: string
}

export interface IArticleTextBlock extends IArticleBlockBase {
    title: string
    paragraphs: string[]
}

export interface IArticleImageBlock extends IArticleBlockBase {
    src: string
    title: string
}

export interface IArticle {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleTypes[]
    block: TArticleBlock[]
}

export type TArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;
