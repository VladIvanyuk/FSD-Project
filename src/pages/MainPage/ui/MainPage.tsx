import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const MainPage: FC = memo(() => {
    const { t } = useTranslation('main');
    console.log(__PROJECT__)
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});
