import { Link } from "react-router-dom"

const Orders = () => {
  return (
    <>
        <div>
            <h4 className="text-3xl font-semibold mb-4">Your orders</h4>
            <hr />
            <div className='h-2 w-96 relative hidden lg:block bg-[#FFDD66] -top-1'></div>
            <div>
                <div className="flex w-full justify-between items-center flex-wrap mt-8">
                    <div className="flex gap-4 items-center">
                        <button className="py-2 px-4 rounded-md bg-emerald-500">All</button>
                        <button className="py-2 px-4 rounded-md">Completed</button>
                        <button className="py-2 px-4 rounded-md">Held</button>
                        <button className="py-2 px-4 rounded-md">Pending</button>
                        <button className="py-2 px-4 rounded-md">Cancelled</button>
                    </div>
                    <div>
                        <h5><input type="date" name="" id="" /></h5>
                    </div>
                </div>
                <div className="w-full mt-8">
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
                            <td className="py-4"><Link to={"10001"}>#10001</Link></td>
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

export default Orders