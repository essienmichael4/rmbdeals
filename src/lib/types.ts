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
    order: number,
    expense: number
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
    recipient: string,
    status?: string,
    createdAt?: string
}

export type OrderBilling = {

}

export type User = {
    name: string,
    email: string
}

export type Stats = {
    totalOrders:number,
    successfulOrders: number,
    heldOrders: number,
    projectedExpense: {
        _sum: {
            amount: number
        }
    },
    successfulExpense: {
        _sum: {
            amount: number
        }
    },
    heldExpense: {
        _sum: {
            amount: number
        }
    }
}
