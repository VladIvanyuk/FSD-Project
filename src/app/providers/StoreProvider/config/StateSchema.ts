import { ICounterSchema } from 'entity/Counter';
import { IUserSchema } from 'entity/User';

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema
}
