import { IStateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/loginSlice';

export const getLoginError = (state: IStateSchema): string => state?.loginForm?.error || initialState.error;
