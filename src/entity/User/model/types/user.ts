export interface IUser {
    username: string
    password: string
}

export interface IUserSchema {
    authData?: IUser | null
    _inited: boolean
}
