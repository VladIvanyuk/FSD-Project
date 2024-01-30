import { FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetails } from 'entity/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entity/Comment';

interface IArticleDetailPageProps {
   className?: string
}

const mockComm = [
    {
        id: '1',
        text: 'some comment',
        user: {
            id: '1',
            username: 'user1',
            avatar: 'https://as2.ftcdn.net/v2/jpg/01/74/35/41/1000_F_174354171_dxcNdq4XMmARKT7E88NOLmdrv6BBSAww.jpg'

        }
    },
    {
        id: '2',
        text: 'some comment 2',
        user: {
            id: '2',
            username: 'user2',
            avatar: 'https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg'

        }
    }
]

export const ArticleDetailPage: FC<IArticleDetailPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams();
    const { t } = useTranslation()

    if (!id) {
        return (
            <div>
                {t('Статья не найдена!!')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.articleDetailPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentsTitle} title={t('Комментарии')} />
            <CommentList comments={mockComm} />
        </div>
    );
}
