import { Dispatch, SetStateAction } from "react"

export type Currency = {
    rate:number,
    label:string,
    description:string,
    currency: string
}

export type AnnouncementType = {
    title?:number,
    subject:string,
    show: string
}

export type AuthType = {
    name: string,
    email: string,
    role?: string,
    backendTokens: {
        accessToken: string,
        refreshToken: string
    }
}

export type AuthContextType = {
    auth: AuthType | undefined,
    setAuth: Dispatch<SetStateAction<AuthType | undefined>>;
}

export type Client = {
    id: number,
    name?: string,
    email: string,
    phone?: string,
    createdAt?: string,
    updatedAt?:string,
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
    momoName:string
    name: string
    notes: string
    whatsapp: string
}


export type PaymentType = {
    number:string,
    name:string
}

export type User = {
    name: string,
    email: string
}

export type Stats = {
    totalOrders:number,
    successfulOrders: number,
    heldOrders: number,
    cancelledOrders?: number,
    projectedExpense: number,
    successfulExpense:number,
    heldExpense: number
}

export type Revenue = {
    completedRevenue:RevenueCurrency[],
    heldRevenue: RevenueCurrency[]
}

export type RevenueCurrency = {
    currency: string,
    totalRevenue: number
}
