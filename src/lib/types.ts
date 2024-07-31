import { Dispatch, SetStateAction } from "react"

export type Currency = {
    rate:number,
    label:string,
    description:string,
    currency: string
}

export type AuthType = {
    user:{
        name: string,
        email: string,
        role?: string
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
    createdAt?: string,
    qrCode?: string,
    orderBilling?:OrderBilling
}

export type OrderBilling = {
    email: string
    momoNumber:string
    name: string
    notes: string
    whatsapp: string
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
