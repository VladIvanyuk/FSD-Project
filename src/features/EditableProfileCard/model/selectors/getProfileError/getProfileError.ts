import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileError = (store: IStateSchema) => store?.profile?.error
