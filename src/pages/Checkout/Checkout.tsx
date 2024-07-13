import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../../components/ui/form'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useForm } from 'react-hook-form'

const Checkout = () => {
    const form = useForm({
        // resolver:zodResolver(),
        defaultValues:{
            recipient:"",
            lastname: "",
            currency: "",
            account: "",
            phones: []
        }
    })
  return (
    <>
        <header className='w-full py-4 border-b sticky top-0 z-50 bg-white'>
            <nav className="container px-4 lg:px-0 mx-auto flex justify-between items-center py-2">
                <h1 className='text-3xl font-bold sm:text-black'>BUY RMB</h1>
            </nav>
        </header>
        <div className='mx-auto container mt-4 mb-16 px-4 lg:px-0'>
            <h4 className="text-2xl lg:text-3xl font-bold  lg:mb-2">Checkout Order</h4>
            <p className="text-xs text-gray-400 mb-2">Fill in the details for your billing</p>
            <hr />
            <div className='h-2 w-36 lg:w-96 relative block bg-[#FFDD66] -top-1'></div>
            <Form {...form}>
                <form className='mx-auto mt-4 lg:mt-12 w-full space-y-4 lg:space-y-0 lg:w-3/4 flex flex-wrap'>
                    <div className='w-full lg:w-1/2 lg:px-2'>
                        <div className="w-full border rounded-2xl p-4">
                            <div className='flex justify-between mb-2'>
                                <h5 className='text-xl font-bold'>Billing Details</h5>
                            </div>
                            <hr />
                            <div className='h-1 w-36 relative block bg-[#FFDD66] -top-1'></div>
                            <div className='mt-2 lg:mt-4 flex flex-col items-center lg:gap-4 gap-2 w-full'>
                                <FormField
                                    control={form.control}
                                    name="account"
                                    render={({field}) =>(
                                        <FormItem className='flex-1 flex flex-col w-full'>
                                            <FormLabel className='text-xs'>Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} 
                                />
                                <FormField 
                                    control={form.control}
                                    name="currency"
                                    render={({field}) =>(
                                        <FormItem className='flex flex-col w-full'>
                                            <FormLabel className='text-xs'>WhatsApp Number</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} 
                                />
                                <FormField 
                                    control={form.control}
                                    name="currency"
                                    render={({field}) =>(
                                        <FormItem className='flex flex-col w-full'>
                                            <FormLabel className='text-xs'>Email Address</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} 
                                />
                                <FormField 
                                    control={form.control}
                                    name="lastname"
                                    render={({field}) =>(
                                        <FormItem className='flex-1 flex flex-col w-full'>
                                            <FormLabel className='text-xs'>Momo Number Paying From</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} 
                                />
                                <FormField 
                                control={form.control}
                                name="recipient"
                                render={({field}) =>(
                                    <FormItem className='flex flex-col w-full'>
                                        <FormLabel>Account Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        {/* <FormDescription>Name on passport used for Alipay registration</FormDescription> */}
                                    </FormItem>
                                )}
                            />
                            </div>


                            <div className="mb-2 mt-4">
                                <h5 className='text-xl font-bold'>Additional Notes</h5>
                            </div>
                            <hr />
                            <div className='h-1 w-36 relative hidden lg:block bg-[#FFDD66] -top-1'></div>

                            <FormField 
                                control={form.control}
                                name="recipient"
                                render={({field}) =>(
                                    <FormItem className='flex mt-4 flex-col'>
                                        <FormLabel className='mr-2'>Order Note (Optional)</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>Special notes for delivery.</FormDescription>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 lg:px-2'>
                        <div className="w-full border rounded-2xl p-4">
                            <div className='flex justify-between mb-2'>
                                <h5 className='text-xl font-bold'>Your Order</h5>
                            </div>
                            <hr />
                            <div className='h-1 w-36 relative block bg-[#FFDD66] -top-1'></div>
                            
                            <div>
                                <div className='flex justify-between my-2'>
                                    <h4>PRODUCT</h4>
                                    <p>SUBTOTAL</p>
                                </div>
                                <div className='flex justify-between my-2'>
                                    <p>Name: <span className='font-bold'>RMB</span></p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Rate</p>
                                    <p>0.440</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Amount in Cedis</p>
                                    <p>¢ 50.00</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>RMB Equivalence</p>
                                    <p>¥ 22.00</p>
                                </div>
                                
                                <div className='flex justify-between mb-4'>
                                    <p>Account Type: <span className='font-bold'>Personal</span></p>
                                </div>
                                <hr />
                                <div className='h-1 w-36 relative block bg-[#FFDD66] -top-1'></div>
                                
                                <div className='flex justify-between my-4'>
                                    <p>Subtotal</p>
                                    <p className='font-bold'>¢ 50.00</p>
                                </div>
                                <hr />
                                <div className='h-1 w-36 relative block bg-[#FFDD66] -top-1'></div>
                                <div className='flex justify-between my-4'>
                                    <p>Total</p>
                                    <p className='font-bold'>¢ 50.00</p>
                                </div>
                                <hr />
                                <div className='h-1 w-36 relative block bg-[#FFDD66] -top-1'></div>
                            </div>

                            <div className="mb-2 mt-4">
                                <h5 className='text-xl font-bold mb-2'>Momo Payment</h5>

                                <hr />
                                <div className='h-1 w-36 relative block bg-[#FFDD66] -top-1'></div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className='text-red-500 mr-2 text-3xl'>&#9888;</span>
                                    <div>
                                        <p className='text-xs  text-gray-500'>
                                            Make your payment directly into our momo account. 
                                        </p>
                                        <p className='text-xs  text-gray-500'>Please use your Order ID as the refrence.</p>
                                    </div>
                                </div>
                            </div>

                            <Button className='mt-4'>Place Order</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    </>
  )
}

export default Checkout
