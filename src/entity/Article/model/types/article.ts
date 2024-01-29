export enum ArticleTypes {
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
    type: ArticleBlockTypes.CODE
    code: string
}

export interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockTypes.TEXT
    title?: string
    paragraphs: string[]
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockTypes.IMAGE
    src: string
    title: string
}

export interface IArticle {
    id: string
    title: string
    subtitle: string
    img: string
    views: string
    createdAt: string
    type: ArticleTypes[]
    blocks: TArticleBlock[]
}

export type TArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;
