import logo from '@/assets/logo.jpg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../../components/ui/form'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,  DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from '../../components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import CurrencyPicker from '../../components/CurrencyPicker'
import AccountPicker from '../../components/AccountPicker'
import Footer from '@/components/Footer'
import Dropzone from '@/components/Dropzone'
import { Button } from '../../components/ui/button'
import { OrderSchema, OrderSchemaType } from '@/schema/order'
import { toast } from 'sonner'
import { axios_instance } from '@/api/axios'
import useAuth from '@/hooks/useAuth'
import axios from 'axios'
import { Loader2, LogOut, Menu, User, X } from 'lucide-react'

const Buy = () => {
    const {auth, setAuth} = useAuth()
    const navigate = useNavigate()
    const [qrcode, setQrcode] = useState<File | undefined>()
    const [isPending, setIsPending] = useState(false)
    const [rate, setRate] = useState<number>(0)
    const [amount, setAmount] = useState<number>(0)
    const [rmb, setRMB] = useState<number>(0)
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const form = useForm<OrderSchemaType>({
        resolver:zodResolver(OrderSchema),
        defaultValues:{
            recipient: "",
            currency: "",
            account: "personal"
        }
    })

    const toggleNavbar = ()=>{
      setMobileDrawerOpen(!mobileDrawerOpen)
    }

    const handleCurrencyChange = useCallback((value:string, rate:number)=>{
        form.setValue("currency", value)
        setRate(rate)
        const rmbEquivalence = Number(amount) * rate
        setRMB(rmbEquivalence)
    }, [form])

    const handleAccountChange = useCallback((value:"personal" | "supplier")=>{
        form.setValue("account", value)
    }, [form])

    const handleInputChange = (value:number)=>{
        const rmbEquivalence = value * rate
        setAmount(value)
        setRMB(rmbEquivalence)
    }
    
    const handleFileChange = useCallback((value:File | undefined)=>{
        setQrcode(value)
    }, [])

    const onSubmit = async (data:OrderSchemaType) =>{
        try{
            setIsPending(true)
            toast.loading("Placing order...", {
                id: "create-order"
            })

            if(!qrcode){
                setIsPending(false)
                toast.error("An Alipay QR Code is needed for this transaction to be placed successfully.", {
                    id: "create-order"
                })
                return
            }

            const formData = new FormData()
            formData.append("qrcode", qrcode)
            formData.append("order", JSON.stringify(data))

            if(auth){
                const response = await axios_instance.post("/orders", formData, {
                    headers: {
                      "content-type": "multipart/form-data",
                      Authorization: `Bearer ${auth?.backendTokens.accessToken}`
                    }
                })
                form.reset()
                const orderId:number = response.data.order.id
                console.log(response.data)
                setIsPending(false)
                toast.success(response.data.message, {
                    id: "create-order"
                })
                navigate(`../rmbdeals/checkout/${orderId}`)
            }else{
                const response = await axios_instance.post("/orders/nonuser", formData, {
                    headers: {
                      "content-type": "multipart/form-data",
                    }
                })
                
                const orderId:number = response.data.order.id
                form.reset()
                setIsPending(false)
                toast.success(response.data.message, {
                    id: "create-order"
                })
                navigate(`../rmbdeals/checkout/${orderId}`)
            }
        }catch(err:any){
            console.log(err);
            setIsPending(false)
            if (axios.isAxiosError(err)){
                toast.error(err?.response?.data?.error, {
                    id: "create-order"
                })
            }
        }
    }

    return (
        <>
            <header className={`${!auth && 'py-4'} w-full border-b sticky top-0 z-50 bg-white`}>
                <nav className={`${!auth && 'py-2'} container px-4 lg:px-0 mx-auto flex justify-between items-center`}>
                    {auth ? 
                        <Link to={"../rmbdeals/dashboard"} className='flex gap-2 items-center'>
                            <img src={logo} alt="logo" className='w-8 h-8'/>
                            <h1 className='text-3xl font-bold text-black'>RMB Deals</h1>
                        </Link>
                        :
                        <Link to={"../rmbdeals"} className='flex gap-2 items-center'>
                            <img src={logo} alt="logo" className='w-8 h-8'/>
                            <h1 className='text-3xl font-bold text-black'>RMB Deals</h1>
                        </Link>
                    }
                    {auth && 
                        <div className='hidden lg:flex gap-8 h-full items-center'>
                            <NavLink to={"../rmbdeals/dashboard"} className={`inline-block py-10 text-gray-500 border-b-4 border-white hover:text-[#FFDD66]`}>Dashboard</NavLink>
                            <NavLink to={"../rmbdeals/orders"} className='inline-block py-10 text-gray-500 border-b-4 border-white hover:text-[#FFDD66]'>Orders</NavLink>
                            <NavLink to={"../rmbdeals/account"} className='inline-block py-10 text-gray-500 border-b-4 border-white hover:text-[#FFDD66]'>Account</NavLink>
                        </div>
                    }

                    {auth &&
                        <div className='flex gap-2 md:gap-4 items-center'>
                            <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium text-white bg-black' to={"rmbdeals/buy"}>Buy</Link>
                            <div className="flex items-center">
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className='w-12 h-12 rounded-full bg-white'><User className="h-8 w-8" /></Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={()=>{
                                            setAuth(undefined)
                                        }}>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="lg:hidden md:flex flex-col items-center justify-end">
                                <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
                            </div>
                        </div>
                    }
                    {!auth &&
                        <div className='flex gap-4 lg:gap-8'>
                            <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium bg-[#FFDD66]' to={"../rmbdeals/login"}>Login</Link>
                        </div>
                    }
                </nav>
                {auth && mobileDrawerOpen && 
                    <div className="fixed right-0 z-20 w-full bg-white p-12 flex flex-col justify-center items-center lg:hidden border-y">
                    <ul>
                        <li className='py-2 text-center'>
                        <NavLink to={"rmbdeals/dashboard"} className={`text-gray-500 hover:text-[#FFDD66]`}>Dashboard</NavLink>
                        </li>
                        <li className='py-2 text-center'>
                        <NavLink to={"rmbdeals/orders"} className='text-gray-500 hover:text-[#FFDD66]'>Orders</NavLink>
                        </li>
                        <li className='py-2 text-center'>
                        <NavLink to={"rmbdeals/account"} className='text-gray-500 hover:text-[#FFDD66]'>Account</NavLink>
                        </li>
                    </ul>
                    
                    </div>
                }
            </header>
            <div className='mx-auto container mt-4 mb-16 px-4'>
                <h4 className="text-3xl font-semibold mb-2">Place Order</h4>
                <p className="text-xs text-gray-400 mb-2">Fill in the details for your order</p>
                <hr />
                <div className='h-2 w-36 lg:w-96 relative block bg-[#FFDD66] -top-1'></div>
                <Form {...form}>
                    <form className='mt-4' onSubmit={form.handleSubmit(onSubmit)} >
                        <div className="w-full lg:w-1/2 mx-auto border rounded-2xl mt-8 p-4">
                            <div className='flex justify-between mb-2'>
                                <h5 className='text-xl font-bold'>Order Details</h5>

                                <p className="text-xl">Current Rate: {rate}</p>
                            </div>
                            <hr />
                            <div className='h-1 w-36 relative block bg-[#FFDD66] -top-1'></div>
                            <div className='mt-4 flex items-center gap-4 w-full'>
                                <FormField
                                    control={form.control}
                                    name="account"
                                    render={() =>(
                                        <FormItem className='flex-1 flex flex-col w-full'>
                                            <FormLabel className='text-xs 2xl:text-sm font-bold'>Account Type</FormLabel>
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
                                            <FormLabel className='text-xs 2xl:text-sm font-bold'>Transaction Currency</FormLabel>
                                            <FormControl>
                                                <CurrencyPicker onChange={handleCurrencyChange} />
                                            </FormControl>
                                        </FormItem>
                                    )} 
                                />
                            </div>
                            <div className='flex mt-2 gap-2 items-center flex-wrap'>
                                <FormField 
                                    control={form.control}
                                    name="amount"
                                    render={({field}) =>(
                                        <FormItem className='w-full lg:w-2/3'>
                                            <FormLabel className='text-xs 2xl:text-sm font-bold'>Transacted Amount</FormLabel>
                                            <FormControl>
                                                <Input {...field}  type='number' min={0} placeholder='0' onChange={(e)=>handleInputChange(Number(e.target.value))}/>
                                            </FormControl>
                                        </FormItem>
                                    )} 
                                />

                                <div className='border flex flex-1 gap-2 flex-col items-start justify-center p-2 border-gray-300 rounded-lg'>
                                    <p className='text-xs 2xl:text-sm font-bold'>RMB Equivalence</p>
                                    <p className='text-xl'>¥ {rmb}</p>
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
                                        <FormLabel className='mr-2 text-xs 2xl:text-sm font-bold'>Recipient Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>Name on passport used for Alipay registration</FormDescription>
                                    </FormItem>
                                )}
                            />
                            <Dropzone handleFileChange={handleFileChange} />                                
                            <Button className='mt-4' disabled={isPending}>
                                {!isPending && "Continue to checkout"}
                                {isPending && <Loader2 className='animate-spin' /> }
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
            <Footer />
        </>
    )
}

export default Buy
