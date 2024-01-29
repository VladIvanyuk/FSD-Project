import { IStateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/loginSlice';

export const getLoginUsername = (state: IStateSchema) => state?.loginForm?.username || initialState.username;
