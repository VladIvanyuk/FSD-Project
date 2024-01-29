import React, { memo } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './Icon.module.scss';

interface IIconProps {
   className?: string
   Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(({ Svg }: IIconProps) => {
    return (
        <Svg className={classNames(cls.icon, {}, [])} />
    );
})
