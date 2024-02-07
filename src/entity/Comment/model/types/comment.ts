import { IUser } from 'entity/User'

export interface IComment {
    id: string
    text: string
    user: IUser
}
