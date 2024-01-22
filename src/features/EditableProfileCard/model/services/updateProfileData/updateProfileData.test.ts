import { Countries } from 'entity/Country';
import { updateProfileData } from './updateProfileData';
import { TestAsynkThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Currencies } from 'entity/Currency';

describe('updateProfileData.test', () => {
    test('success update data', async () => {
        const data = {
            firstname: 'Влад',
            secondname: 'Иванюк',
            age: '29',
            city: 'Владивосток',
            country: Countries.Russia,
            currency: Currencies.RUB,
            username: 'admin'
        }

        const thunk = new TestAsynkThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.payload).toEqual(data)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error update data', async () => {
        const thunk = new TestAsynkThunk(updateProfileData);
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()
        console.log(result.payload)

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
