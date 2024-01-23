import { memo } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { Countries } from '../../model/type/country'
import { useTranslation } from 'react-i18next'

interface ICountrySelectProps {
  className?: string
  onChange: (name: string, value: string) => void
  value?: Countries
  readonly: boolean
}

const options = [
    {
        value: Countries.Russia,
        content: Countries.Russia
    },
    {
        value: Countries.Ukraine,
        content: Countries.Ukraine
    },
    {
        value: Countries.Kazakhstan,
        content: Countries.Kazakhstan
    },
    {
        value: Countries.Belarus,
        content: Countries.Belarus
    },
    {
        value: Countries.Armenia,
        content: Countries.Armenia
    }

]

export const CountrySelect = memo(({ onChange, value, readonly }: ICountrySelectProps) => {
    const { t } = useTranslation()
    return (
        <Select label={t('Страна')} readonly={readonly} selectName='country' value={value} onChange={onChange} options={options} />
    )
})
