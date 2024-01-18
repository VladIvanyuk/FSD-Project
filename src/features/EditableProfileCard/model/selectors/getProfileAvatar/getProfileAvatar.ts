import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileAvatar = (store: IStateSchema) => store?.profile?.data?.avatar
