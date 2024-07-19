import { Link } from 'react-router-dom'
import hero from '../../assets/hero.jpg'
import Footer from '@/components/Footer'

const Register = () => {
  return (
    <>
        <header className='w-full py-4 border-b absolute z-50'>
            <nav className="container px-4 lg:px-0 mx-auto flex justify-between items-center py-2">
                <h1 className='text-3xl font-bold text-white sm:text-black'>BUY RMB</h1>
                <div className='flex gap-4 lg:gap-8'>
                    <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium text-white bg-black' to={"../rmbdeals/buy"}>Buy</Link>
                    <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium bg-[#FFDD66]' to={"../rmbdeals/login"}>Login</Link>
                </div>
            </nav>
        </header>
        <div className='mx-auto container'>
            <div className='h-screen max-h-[800px] flex items-center justify-between sm:flex-col lg:flex-row'>
                <div className='absolute rounded-t-3xl bottom-0 lg:relative w-full lg:w-[40%] pt-4 px-4 bg-white lg:px-0 lg:h-full lg:mt-0 flex flex-col justify-end lg:justify-center gap-4 pb-4 lg:pb-0'>
                    <form className='md:w-full xl:w-[80%]'>
                        <h1 className='text-2xl lg:text-4xl mb-0 2xl:mb-2'>Register</h1>
                        <p className='text-xs mb-3 2xl:mb-6 text-gray-400' >The faster you type, the faster you manage your stuff</p>
                        <div className="form-control flex flex-col gap-1 2xl:gap-2 mb-2 ">
                            <label htmlFor="username" className='text-xs 2xl:text-sm font-bold'>Name</label>
                            <input type="text" 
                                required 
                                minLength={2}
                                className='py-2 px-2 text-xs 2xl:text-sm rounded border border-slate-200 w-full' 
                                placeholder='Please enter your name'
                            />
                        </div>
                        <div className="form-control flex flex-col gap-1 2xl:gap-2 mb-2">
                            <label htmlFor="username" className='text-xs 2xl:text-sm font-bold'>Email</label>
                            <input type="text" 
                                required 
                                minLength={2}
                                className='py-2 px-2 text-xs 2xl:text-sm rounded border border-slate-200 w-full' 
                                placeholder='Please enter your email/username'
                            />
                        </div>
                        <div className="form-control flex flex-col gap-1 2xl:gap-2 mb-1">
                            <label htmlFor="password" className='text-xs 2xl:text-sm font-bold'>Password</label>
                            <input type="password" 
                                minLength={8}
                                required 
                                className='py-2 px-2 text-xs 2xl:text-sm rounded border border-slate-200 w-full' 
                                placeholder="Please enter your password"
                            />
                        </div>
                        <div className='flex justify-between mt-1 mb-1'>
                            <p className='text-xs 2xl:text-sm text-gray-300 mb-0'>Minimum 8 characters</p>
                        </div>
                        <div className="form-control flex flex-col gap-1 2xl:gap-2 mb-2 2xl:mb-3">
                            <label htmlFor="password" className='text-xs 2xl:text-sm font-bold'>Confirm Password</label>
                            <input type="password" 
                                minLength={8}
                                required 
                                className='py-2 px-2 text-xs 2xl:text-sm rounded border border-slate-200 w-full' 
                                placeholder="Please confirm your password"
                            />
                        </div>
                        <button className='rounded-full bg-blue-300 w-full mt-2 text-white py-1 2xl:py-2 hover:bg-blue-500'>Register</button>
                        <div className='flex gap-2 lg:mb-3 mt-2'>
                            <p className='text-gray-400 text-xs 2xl:text-sm'>Already have an account?</p>
                            <Link to={"../rmbdeals/login"} className='text-xs 2xl:text-sm text-blue-300'>Login</Link>
                        </div>
                    </form>
                </div>
                <div className='absolute w-full top-0 left-0 lg:left-20 -z-10 lg:relative lg:rounded-none lg:-right-20 lg:w-[60%] h-full bg-slate-500 flex bg-cover bg-center' style={{backgroundImage:`url(${hero})`}}>
                    <div className="overlay w-full h-full bg-black opacity-30 sm:hidden"></div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Register
