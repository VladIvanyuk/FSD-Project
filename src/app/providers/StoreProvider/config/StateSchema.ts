import { ICounterSchema } from 'entity/Counter';
import { IUserSchema } from 'entity/User';
import { ILoginSchema } from 'features/AuthByUsername';

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema
    loginForm: ILoginSchema
}
