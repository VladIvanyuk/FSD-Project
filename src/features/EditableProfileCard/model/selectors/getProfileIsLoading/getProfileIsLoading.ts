import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileIsLoading = (store: IStateSchema) => store?.profile?.isLoading
