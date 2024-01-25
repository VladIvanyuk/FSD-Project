import { IStateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/loginSlice';

export const getLoginPassword = (state: IStateSchema) => state?.loginForm?.password || initialState.password;
