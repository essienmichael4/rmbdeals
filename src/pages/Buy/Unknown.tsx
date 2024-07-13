import { Link } from 'react-router-dom'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../../components/ui/form'
import { Input } from '../../components/ui/input'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import CurrencyPicker from '../../components/CurrencyPicker'
import AccountPicker from '../../components/AccountPicker'
import { Button } from '../../components/ui/button'

const Unknown = () => {

    const form = useForm({
        // resolver:zodResolver(),
        defaultValues:{
            recipient:"",
            lastname: "",
            currency: "GHS",
            account: "personal",
            phones: []
        }
    })

    const handleCurrencyChange = useCallback((value:string)=>{
        form.setValue("currency", value)
    }, [form])

    const handleAccountChange = useCallback((value:string)=>{
        form.setValue("account", value)
    }, [form])

  return (
    <>
        <header className='w-full py-4 border-b sticky top-0 z-50 bg-white'>
            <nav className="container px-4 lg:px-0 mx-auto flex justify-between items-center py-2">
                <h1 className='text-3xl font-bold sm:text-black'>BUY RMB</h1>
                <div className='flex gap-4 lg:gap-8'>
                    <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium bg-[#FFDD66]' to={"/login"}>Login</Link>
                </div>
            </nav>
        </header>
        <div className='mx-auto container mt-4 mb-16 px-4'>
            <h4 className="text-3xl font-semibold mb-2">Place Order</h4>
            <p className="text-xs text-gray-400 mb-2">Fill in the details for your order</p>
            <hr />
            <div className='h-2 w-36 lg:w-96 relative block bg-[#FFDD66] -top-1'></div>
            <Form {...form}>
                <form className='mt-4'>
                    <div className="w-full lg:w-1/2 mx-auto border rounded-2xl mt-8 p-4">
                        <div className='flex justify-between mb-2'>
                            <h5 className='text-xl font-bold'>Order Details</h5>

                            <p className="text-xl">Current Rate: </p>
                        </div>
                        <hr />
                        <div className='h-1 w-36 relative block bg-[#FFDD66] -top-1'></div>
                        <div className='mt-4 flex items-center gap-4 w-full'>
                            <FormField
                                control={form.control}
                                name="account"
                                render={() =>(
                                    <FormItem className='flex-1 flex flex-col w-full'>
                                        <FormLabel className='text-xs'>Account Type</FormLabel>
                                        <FormControl>
                                            <AccountPicker onChange={handleAccountChange}/>
                                        </FormControl>
                                    </FormItem>
                                )} 
                            />
                        </div>

                        <div className='flex mt-2 gap-2 w-full'>
                            <FormField 
                                control={form.control}
                                name="currency"
                                render={() =>(
                                    <FormItem className='flex flex-col w-full'>
                                        <FormLabel className='text-xs'>Transaction Currency</FormLabel>
                                        <FormControl>
                                            <CurrencyPicker onChange={handleCurrencyChange}/>
                                        </FormControl>
                                    </FormItem>
                                )} 
                            />
                            <FormField 
                                control={form.control}
                                name="currency"
                                render={() =>(
                                    <FormItem className='flex flex-col w-full'>
                                        <FormLabel className='text-xs'>Transaction Currency</FormLabel>
                                        <FormControl>
                                            <CurrencyPicker onChange={handleCurrencyChange}/>
                                        </FormControl>
                                    </FormItem>
                                )} 
                            />
                        </div>
                        <div className='flex mt-2 gap-2 items-center flex-wrap'>
                            <FormField 
                                control={form.control}
                                name="lastname"
                                render={({field}) =>(
                                    <FormItem className='w-full lg:w-2/3'>
                                        <FormLabel className='text-xs'>Transacted Amount</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )} 
                            />

                            <div className='border flex flex-1 flex-col items-start justify-center p-2 border-gray-300 rounded-lg'>
                                <p className='text-xs font-bold'>RMB Equivalence</p>
                                <p>Y 2000</p>
                            </div>
                        </div>

                        <div className="mb-2 mt-4">
                            <h5 className='text-xl font-bold'>Recipient Details</h5>

                            <p className="text-xs text-gray-400">Fill with recipient Alipay or WeChat details and QR</p>
                        </div>
                        <hr />
                        <div className='h-1 w-36 relative block bg-[#FFDD66] -top-1'></div>

                        <FormField 
                            control={form.control}
                            name="recipient"
                            render={({field}) =>(
                                <FormItem className='flex mt-4 flex-col'>
                                    <FormLabel className='mr-2'>Recipient Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>Name on passport used for Alipay registration</FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="recipient"
                            render={({field}) =>(
                                <FormItem className='flex mt-4 flex-col'>
                                    <FormLabel className='mr-2'>Alipay/WeChat QR code</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>Max file size: 2.86 MB. | Allowed file types: jpeg,png,jpg | Max number of file: 1 | Min number of file: 1</FormDescription>
                                </FormItem>
                            )}
                        />
                        <Button className='mt-4'>Continue to checkout</Button>
                    </div>
                </form>
            </Form>
        </div>
    </>
  )
}

export default Unknown
