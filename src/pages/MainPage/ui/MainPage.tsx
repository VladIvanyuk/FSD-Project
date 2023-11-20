import { Counter } from 'entity/Counter/ui/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <Counter />
        </div>
    );
};
