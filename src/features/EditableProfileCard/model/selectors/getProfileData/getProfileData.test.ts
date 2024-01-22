import { IStateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types/types'
import { getProfileData } from './getProfileData'
import { Countries } from 'entity/Country'
import { Currencies } from 'entity/Currency'

describe('getProfileData.test', () => {
    test('Should return profile data', () => {
        const data = {
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
                data
            }
        }
        expect(getProfileData(state as IStateSchema)).toEqual(data)
    })

    test('Should return undefined', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getProfileData(state as IStateSchema)).toEqual(undefined)
    })
})
