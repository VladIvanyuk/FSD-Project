import { memo } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { AppButton, ButtonTheme } from 'shared/ui';
interface ILangSwitcherProps {
  className?: string
  isShort: boolean
}

export const LangSwitcher = memo((props: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    const { className, isShort } = props;
    return (
        <AppButton
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
        >
            {t(isShort ? 'Короткий язык' : 'Обычный язык')}
        </AppButton>
    );
});
