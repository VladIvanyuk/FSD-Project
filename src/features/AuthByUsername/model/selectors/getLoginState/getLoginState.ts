import { IStateSchema } from 'app/providers/StoreProvider';
import { ILoginSchema } from '../../types/loginSchema';

export const getLoginState = (state: IStateSchema): ILoginSchema => state.loginForm
