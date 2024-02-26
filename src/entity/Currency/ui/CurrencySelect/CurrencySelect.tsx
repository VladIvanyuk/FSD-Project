import { memo } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { Currencies } from '../../model/type/currency'
import { useTranslation } from 'react-i18next'

interface ICurrencySelectProps {
  className?: string
  onChange: (name: string, value: string) => void
  value?: Currencies
  readonly: boolean
}

const options = [
    {
        value: Currencies.RUB,
        content: Currencies.RUB
    },
    {
        value: Currencies.USD,
        content: Currencies.USD
    },
    {
        value: Currencies.EUR,
        content: Currencies.EUR
    }

]

export const CurrencySelect = memo(({ onChange, value, readonly }: ICurrencySelectProps) => {
    const { t } = useTranslation('profile')
    return (
        <Select readonly={readonly} label={t('Валюта')} selectName='currency' value={value} onChange={onChange} options={options} />
    )
})
