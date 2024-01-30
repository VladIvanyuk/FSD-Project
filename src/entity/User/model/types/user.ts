export interface IUser {
    username: string
    id: string
    avatar?: string
}

export interface IUserSchema {
    authData?: IUser | null
    _inited: boolean
}
