import { loginByUsername } from './loginByUsername';
import { userActions } from 'entity/User';
import { TestAsynkThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' };

        const thunk = new TestAsynkThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const result = await thunk.callThunk({ username: 'admin', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error login', async () => {
        const thunk = new TestAsynkThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk({ username: 'admin', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
