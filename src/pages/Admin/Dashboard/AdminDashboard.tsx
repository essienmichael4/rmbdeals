import { useState } from "react"
import { startOfMonth, subMonths } from "date-fns"
import AdminStatistics from "@/components/AdminStatistics"
import AdminRecentOrders from "@/components/AdminRecentOrders"
import AdminOrdersChart from "@/components/AdminOrdersChart"


const AdminDashboard = () => {
  const [dateRange, ] = useState<{from: Date, to: Date}>({
    from: startOfMonth(subMonths(new Date(), 2)),
    to: new Date()
  })

  return (
    <>
      <div className="w-full px-4">
        <AdminStatistics from={dateRange.from} to={dateRange.to} />
        <AdminOrdersChart />
        <AdminRecentOrders />
      </div>
    </>
  )
}

export default AdminDashboard
