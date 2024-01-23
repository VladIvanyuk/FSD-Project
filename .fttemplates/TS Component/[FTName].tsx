import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './[FTName].module.scss';

interface I[FTName]Props {
   className?: string;
}

export const [FTName]: FC<I[FTName]Props> = (props) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <div className={classNames(cls.[FTName | camelcase], {}, [className])}>

      </div>
   );
}