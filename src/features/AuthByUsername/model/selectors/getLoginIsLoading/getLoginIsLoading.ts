import { IStateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/loginSlice';

export const getLoginIsLoading = (state: IStateSchema): boolean => state?.loginForm?.isLoading || initialState.isLoading;
