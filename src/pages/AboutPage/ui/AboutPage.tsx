import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';
import { Page } from 'shared/ui/Page/Page';

export const AboutPage: FC = memo(() => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('О сайте')}
        </Page>
    );
});
