import { Dispatch, SetStateAction } from "react"

export type AuthType = {
    user:{
        name: string,
        email: string
    },
    backendTokens: {
        accessToken: string,
        refreshToken: string
    }
}

export type AuthContextType = {
    auth: AuthType | undefined,
    setAuth: Dispatch<SetStateAction<AuthType | undefined>>;
}

export type HistoryResponseType = {
    services: number,
    year: number,
    month: number,
    day?: number
}

export type Order = {
    id:number,
    account:string,
    product:string,
    currency: string,
    rate: number,
    amount: number,
    rmbEquivalence: number,
    recipient: string
}
