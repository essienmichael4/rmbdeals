import { axios_instance } from '@/api/axios'
import useAuth from '@/hooks/useAuth'
import { Stats } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import { ArrowBigDown } from 'lucide-react'
// import React, { useState } from 'react'
interface Props{
    from: Date,
    to:Date
}

const Statistics = ({from, to}:Props) => {
    const {auth} = useAuth()

    const stats = useQuery<Stats>({
        queryKey: ["summary", from, to],
        queryFn: async() => await axios_instance.get(`/statistics?from=${from}&to=${to}`, {
            headers: {
                'Authorization': `Bearer ${auth?.backendTokens.accessToken}`
            }
        }).then(res => {
            console.log(res.data);
            
            return res.data
        })
    })

    return (
        <div className="flex items-center flex-wrap">
            <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <div className="flex flex-col  rounded-2xl bg-gray-500">
                <div className="bg-black text-[#FFDD66] rounded-xl p-4">
                <ArrowBigDown className="w-12 h-12 mb-4"/>
                <h4 className="font-bold">Total Expense</h4>
                <p className="text-3xl">¢ {stats.data?.successfulExpense._sum.amount || 0}</p>
                </div>
                <div className="p-4 text-black">
                <h4 className=" font-bold">Current Rate</h4>
                <p className="text-2xl">¢ 0.456</p>
                </div>
            </div>
            </div>
            <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <div className="flex flex-col p-[2px] rounded-2xl bg-gray-200">
                <div className="bg-white rounded-2xl p-4">
                <ArrowBigDown className="w-8 h-8 mb-4"/>
                <h4 className="font-bold">Total Orders</h4>
                <p className="text-2xl">{stats.data?.totalOrders}</p>
                </div>
                <div className="p-4 mt-4">
                <h4 className=" font-bold">Projected Expense</h4>
                <p className="text-2xl">¢ {stats.data?.projectedExpense._sum.amount || 0}</p>
                </div>
            </div>
            </div>
            <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <div className="flex flex-col p-[2px] rounded-2xl bg-gray-200">
                <div className="bg-white rounded-2xl p-4">
                <ArrowBigDown className="w-8 h-8 mb-4"/>
                <h4 className="font-bold">Successful Orders</h4>
                <p className="text-2xl">{stats.data?.successfulOrders}</p>
                </div>
                <div className="p-4 mt-4">
                <h4 className=" font-bold">Successful Expense</h4>
                <p className="text-2xl">¢ {stats.data?.successfulExpense._sum.amount || 0}</p>
                </div>
            </div>
            </div>
            <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <div className="flex flex-col p-[2px] rounded-2xl bg-gray-200">
                <div className="bg-white rounded-2xl p-4">
                <ArrowBigDown className="w-8 h-8 mb-4"/>
                <h4 className="font-bold">Held Orders</h4>
                <p className="text-2xl">{stats.data?.heldOrders}</p>
                </div>
                <div className="p-4 mt-4">
                <h4 className=" font-bold">Held Expense</h4>
                <p className="text-2xl">¢ {stats.data?.heldExpense._sum.amount || 0}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Statistics