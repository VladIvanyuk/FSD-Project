import { Countries } from 'entity/Country'
import { Currencies } from 'entity/Currency'

export interface IProfile {
    firstname?: string
    secondname?: string
    age?: string
    currency?: Currencies
    country?: Countries
    city?: string
    username?: string
    avatar?: string
}

export interface IProfileSchema {
    data?: IProfile
    form: IProfile
    isLoading?: boolean
    error?: string
    readonly?: boolean
}
