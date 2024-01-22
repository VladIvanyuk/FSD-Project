import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (store: IStateSchema) => store?.profile?.data
