import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const MainPage: FC = () => {
    const { t } = useTranslation('main');
    useEffect(() => {
        throw Error('123')
    }, [])

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};
