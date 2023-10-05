import { FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppLink/AppButton/AppButton';
interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  const { className } = props;
  return (
      <AppButton
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
          {t('Сменить язык')}
      </AppButton>
  );
};
