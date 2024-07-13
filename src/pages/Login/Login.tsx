import { Link } from 'react-router-dom'
import hero from '../../assets/hero.jpg'
const Login = () => {
  return (
    <>
        <header className='w-full py-4 border-b absolute z-50'>
            <nav className="container px-4 lg:px-0 mx-auto flex justify-between items-center py-2">
                <h1 className='text-3xl font-bold text-white sm:text-black'>BUY RMB</h1>
                <div className='flex gap-4 lg:gap-8'>
                    <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium text-white bg-black' to={"/buy"}>Buy</Link>
                    <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium bg-[#FFDD66]' to={"/register"}>Register</Link>
                </div>
            </nav>
        </header>
        <div className='mx-auto container'>
            <div className='h-screen max-h-[800px] flex items-center justify-between sm:flex-col lg:flex-row'>
                <div className='absolute rounded-t-3xl bottom-0 lg:relative w-full lg:w-[40%] pt-4 px-4 bg-white lg:px-0 lg:h-full  lg:mt-0 flex flex-col justify-end lg:justify-center gap-4 pb-4 lg:pb-0'>
                    <form className='md:w-full xl:w-[80%]'>
                        <h1 className='text-3xl lg:text-5xl mb-1 lg:mb-4'>Login</h1>
                        <p className='text-xs mb-3 md:mb-8 text-gray-400' >The faster you type, the faster you manage your stuff</p>
                        <div className="form-control flex flex-col gap-2 mb-4">
                            <label htmlFor="email" className='text-xs lg:text-sm font-bold'>Email</label>
                            <input type="text" 
                                required 
                                minLength={2}
                                className='py-2 px-2 text-sm rounded border border-slate-200 w-full' 
                                placeholder='Please enter your email'
                            />
                        </div>
                        <div className="form-control flex flex-col gap-2 mb-3">
                            <label htmlFor="password" className='text-xs lg:text-sm font-bold'>Password</label>
                            <input type="password" 
                                minLength={8}
                                required 
                                className='py-2 px-2 text-sm rounded border border-slate-200 w-full' 
                                placeholder="Please enter your password"
                            />
                        </div>
                        <div className='flex justify-between mt-1 mb-4'>
                            <p className='text-xs md:text-sm text-gray-300 mb-0'>Minimum 8 characters</p>
                            <a className='text-blue-400 text-xs md:text-sm'>forgot password</a>
                        </div>
                        <button className='rounded-full bg-blue-300 w-full text-white py-2 hover:bg-blue-500'>Login</button>
                        <div className='flex gap-2 mb-3 mt-2'>
                            <p className='text-gray-400 text-sm'>Don't have an account?</p>
                            <Link to={"../register"} className='text-sm text-blue-300'>Register</Link>
                            <Link to={'/dashboard'}>Go to Dashboard</Link>
                        </div>
                    </form>
                </div>
                <div className='absolute w-full left-0 lg:left-20 -z-10 lg:relative lg:rounded-none lg:-right-20 lg:w-[60%] h-full bg-slate-500 flex bg-cover bg-center' style={{backgroundImage:`url(${hero})`}}>
                    <div className="overlay w-full h-full bg-black opacity-30 sm:hidden"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
