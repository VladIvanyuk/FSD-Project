import { useTranslation } from 'react-i18next';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const {t} = useTranslation('main');
  
  return (
    <div>
      {t('Главная страница')}
    </div>
  );
};