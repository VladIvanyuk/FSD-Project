import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const MainPage: FC = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});
