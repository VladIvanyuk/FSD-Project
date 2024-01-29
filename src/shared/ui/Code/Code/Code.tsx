import { memo, useCallback } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './Code.module.scss';
import { AppButton, ButtonTheme } from 'shared/ui/AppButton/AppButton';
import { CopyIcon } from 'shared/assets';

interface ICodeProps {
   className?: string
   text: string
}

export const Code = memo((props: ICodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text).catch(console.log)
    }, [text])

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <AppButton className={cls.copyButton} onClick={onCopy} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
            </AppButton>
            <code >
                {text}
            </code>
        </pre>
    );
})
