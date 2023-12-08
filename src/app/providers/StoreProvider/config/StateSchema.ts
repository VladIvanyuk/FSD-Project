import { IUserSchema } from 'entity/User';
import { ILoginSchema } from 'features/AuthByUsername';

export interface IStateSchema {
    user: IUserSchema
    loginForm: ILoginSchema
}
