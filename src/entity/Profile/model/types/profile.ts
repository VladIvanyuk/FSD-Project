import { Countries, Currencies } from 'shared/const/common'

export interface IProfile {
    firstName: string
    lastName: string
    age: number
    currency: Currencies
    country: Countries
    city: string
    username: string
    avatar: string
}

export interface IProfileSchema {
    data?: IProfile
    isLoading: boolean
    error?: string
    readonly?: boolean
}
