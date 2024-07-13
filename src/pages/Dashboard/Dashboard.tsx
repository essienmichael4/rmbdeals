import { ArrowBigDown } from "lucide-react"
import OrdersChart from "../../components/OrdersChart"
import { Link } from "react-router-dom"


const Dashboard = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center flex-wrap">
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
        </div>

        <OrdersChart />

        <div className="my-8 border p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-3xl">Recent orders</h4>
            <Link to={'../orders'} className="bg-[#FFDD66] px-4 py-2 rounded-full">See all</Link>
          </div>
          <div className="w-full">
            <table className="w-full">
              <thead className="py-4 border-b">
                <tr className="py-4">
                  <th className="text-start">Order ID</th>
                  <th className="text-start">Date</th>
                  <th className="text-start">Product</th>
                  <th className="text-start">Price</th>
                  <th className="text-start">Recepient</th>
                  <th className="text-start">Type</th>
                  <th className="text-start">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="py-4">
                  <td className="py-4">#10001</td>
                  <td>01/02/2024</td>
                  <td>RMB</td>
                  <td>¢ 50.00</td>
                  <td>Akosua Sarfoa</td>
                  <td>Supplier</td>
                  <td><span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-600">Completed</span></td>
                </tr>
                <tr>
                  <td className="py-4">#10001</td>
                  <td>01/02/2024</td>
                  <td>RMB</td>
                  <td>¢ 50.00</td>
                  <td>Akosua Sarfoa</td>
                  <td>Supplier</td>
                  <td><span className="px-4 py-2 rounded-full bg-rose-100 text-rose-600">Withdrawn</span></td>
                </tr>
                <tr>
                  <td className="py-4">#10001</td>
                  <td>01/02/2024</td>
                  <td>RMB</td>
                  <td>¢ 50.00</td>
                  <td>Akosua Sarfoa</td>
                  <td>Supplier</td>
                  <td><span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-600">Pending</span></td>
                </tr>
                <tr className="py-4">
                  <td className="py-4">#10001</td>
                  <td>01/02/2024</td>
                  <td>RMB</td>
                  <td>¢ 50.00</td>
                  <td>Akosua Sarfoa</td>
                  <td>Supplier</td>
                  <td><span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600">Held</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
