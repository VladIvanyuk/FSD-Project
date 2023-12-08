import { IStateSchema } from 'app/providers/StoreProvider';
import { IUser } from '../../types/user';

export const getUserAuthData = (store: IStateSchema): IUser => store.user.authData
