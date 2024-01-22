import { Countries } from 'entity/Country';
import { fetchProfileData } from './fetchProfileData';
import { TestAsynkThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Currencies } from 'entity/Currency';

describe('fetchProfileData.test', () => {
    test('success lfetch data', async () => {
        const data = {
            firstname: 'Влад',
            secondname: 'Иванюк',
            age: '29',
            city: 'Владивосток',
            country: Countries.Russia,
            currency: Currencies.RUB,
            username: 'admin'
        }

        const thunk = new TestAsynkThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(data)
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error fetch', async () => {
        const thunk = new TestAsynkThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
