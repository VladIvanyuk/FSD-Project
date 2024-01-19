import { memo } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { Currencies } from '../../model/type/currency'

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
    return (
        <Select readonly={readonly} label='Валюта' selectName='currency' value={value} onChange={onChange} options={options} />
    )
})
