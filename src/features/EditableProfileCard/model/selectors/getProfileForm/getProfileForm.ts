import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileForm = (store: IStateSchema) => store?.profile?.form
