import { X } from "lucide-react"

const Order = () => {
  return (
    <>
        <div className="mb-12">
            <div className="flex items-center gap-4">
                <h4 className="text-3xl font-semibold mb-2">Order ID: #10001</h4>
                <span className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs">Completed</span>
            </div>
            <p className="mb-2">21/02/2024 at 6:30 from drafts</p>
            <hr />
            <div className='h-2 w-96 relative hidden lg:block bg-[#FFDD66] -top-1'></div>
            <div className="w-full lg:w-1/2 mx-auto border rounded-2xl mt-8 p-4">
                <h5>Order Item</h5>
                <span className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs">Completed</span>
                <div className="flex items-center justify-between">
                    <div className="mt-4 flex items-center gap-4">
                        <div className="w-16 h-16 bg-black rounded-lg">

                        </div>
                        <div className="flex flex-col">
                            <h6>Product</h6>
                            <p>RMB</p>
                        </div>
                    </div>
                    <p className="flex text-xl">
                        <X  className="w-4"/> 100
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mx-auto border rounded-2xl mt-8 p-4">
                <h5>Order Summary</h5>
                <span className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs">Completed</span>
                <div className="flex items-center justify-between mt-4">
                    <p className="font-bold">Cedi Amount:</p>
                    <p className="">
                         100.00
                    </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="font-bold">RMB Equivalent:</p>
                    <p className="">
                         100.00
                    </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="font-bold">Rate:</p>
                    <p className="">
                         100.00
                    </p>
                </div>
                <div className="flex items-center justify-between my-2">
                    <p className="font-bold">Sub Total:</p>
                    <p className="">
                         100.00
                    </p>
                </div>
                <hr />
                <div className='h-1 w-36 relative hidden lg:block bg-[#FFDD66] -top-1'></div>
                <div className="flex items-center justify-between my-2">
                    <p className="font-bold">Total:</p>
                    <p className="">
                         100.00
                    </p>
                </div>
                <hr />
                <div className='h-1 w-36 relative hidden lg:block bg-[#FFDD66] -top-1'></div>
                <div className="flex items-center justify-between my-2">
                    <p className="font-bold">Recepient Name:</p>
                    <p className="">
                         Adjoa Ofiriwaa
                    </p>
                </div>
                <div className="flex items-center justify-between my-2">
                    <p className="font-bold">Account Type:</p>
                    <p className="">
                        Personal
                    </p>
                </div>
                <div className="flex items-center justify-between my-2">
                    <p className="font-bold">Payment Method:</p>
                    <p className="">
                        Momo Payment
                    </p>
                </div>
                <div className="flex items-center justify-between my-2">
                    <p className="font-bold">Momo Number Paying From:</p>
                    <p className="">
                         +xxx xxx xxxx xxx
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mx-auto border rounded-2xl mt-8 p-4">
                <h5>Billing Address</h5>
                
                <div className="mt-8">
                    <h5 className="text-3xl italic">Sammuel Ayitey</h5>
                    <p className="text-3xl italic">+xxx xxx xxx xxx</p>
                </div>
                <p className="mt-4 italic text-2xl">samuelayitey@gmail.com</p>
            </div>
        </div>
    </>
    
  )
}

export default Order
