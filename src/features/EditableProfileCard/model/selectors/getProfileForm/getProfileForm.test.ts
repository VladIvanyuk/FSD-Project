import { IStateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types/types'
import { getProfileForm } from './getProfileForm'
import { Countries } from 'entity/Country'
import { Currencies } from 'entity/Currency'

describe('getProfileForm.test', () => {
    test('Should return profile data', () => {
        const form = {
            firstname: 'Влад',
            secondname: 'Иванюк',
            age: '29',
            city: 'Владивосток',
            country: Countries.Russia,
            currency: Currencies.RUB,
            username: 'admin'
        }

        const state: DeepPartial<IStateSchema> = {
            profile: {
                form
            }
        }
        expect(getProfileForm(state as IStateSchema)).toEqual(form)
    })

    test('Should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getProfileForm(state as IStateSchema)).toEqual(undefined)
    })
})
