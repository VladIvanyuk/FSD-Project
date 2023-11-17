import { IStateSchema } from 'app/providers/StoreProvider';
import { ICounterSchema } from '../../types/CounterSchema';

export const getCounter = (state: IStateSchema): ICounterSchema => state.counter;
