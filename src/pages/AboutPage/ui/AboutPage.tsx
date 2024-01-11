import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';

export const AboutPage: FC = memo(() => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
});
