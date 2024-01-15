import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileReadonly = (store: IStateSchema) => store?.profile?.readonly
