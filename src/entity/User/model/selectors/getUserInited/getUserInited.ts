import { IStateSchema } from 'app/providers/StoreProvider';

export const getUserInited = (store: IStateSchema) => store?.user?._inited
