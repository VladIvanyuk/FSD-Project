import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

export const MainPage: FC = memo(() => {
    const { t } = useTranslation('main');
    console.log(__PROJECT__)
    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
});
