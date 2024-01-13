import { IStateSchema } from 'app/providers/StoreProvider';

export const getUserAuthData = (store: IStateSchema) => store?.user?.authData
