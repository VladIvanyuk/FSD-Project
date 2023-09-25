import { useTranslation } from 'react-i18next';
import styles from './AboutPage.module.scss';

export const AboutPage = () => {
  const {t} = useTranslation('about');

  return (
    <div>
      {t('О сайте')}
    </div>
  );
};