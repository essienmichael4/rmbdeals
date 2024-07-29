import { useState } from "react"
// import { ArrowBigDown } from "lucide-react"
import OrdersChart from "../../components/OrdersChart"
// import { Link } from "react-router-dom"
import { startOfMonth, subMonths } from "date-fns"
import RecentOrders from "@/components/RecentOrders"
import Statistics from "@/components/Statistics"


const Dashboard = () => {
  const [dateRange, ] = useState<{from: Date, to: Date}>({
    from: startOfMonth(subMonths(new Date(), 2)),
    to: new Date()
  })

  return (
    <>
      <div className="w-full">
        {/* <div className="flex items-center flex-wrap">
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <div className="flex flex-col  rounded-2xl bg-gray-500">
              <div className="bg-black text-[#FFDD66] rounded-xl p-4">
                <ArrowBigDown className="w-12 h-12 mb-4"/>
                <h4 className="font-bold">Total Expense</h4>
                <p className="text-3xl">¢ 222.00</p>
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
                <p className="text-2xl">142</p>
              </div>
              <div className="p-4 mt-4">
                <h4 className=" font-bold">Projected Expense</h4>
                <p className="text-2xl">¢ 0.456</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <div className="flex flex-col p-[2px] rounded-2xl bg-gray-200">
              <div className="bg-white rounded-2xl p-4">
                <ArrowBigDown className="w-8 h-8 mb-4"/>
                <h4 className="font-bold">Successful Orders</h4>
                <p className="text-2xl">122</p>
              </div>
              <div className="p-4 mt-4">
                <h4 className=" font-bold">Successful Expense</h4>
                <p className="text-2xl">¢ 0.456</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <div className="flex flex-col p-[2px] rounded-2xl bg-gray-200">
              <div className="bg-white rounded-2xl p-4">
                <ArrowBigDown className="w-8 h-8 mb-4"/>
                <h4 className="font-bold">Held Orders</h4>
                <p className="text-2xl">20</p>
              </div>
              <div className="p-4 mt-4">
                <h4 className=" font-bold">Held Expense</h4>
                <p className="text-2xl">¢ 0.456</p>
              </div>
            </div>
          </div>
        </div> */}
        <Statistics from={dateRange.from} to={dateRange.to} />
        <OrdersChart />
        <RecentOrders />
      </div>
    </>
  )
}

export default Dashboard
