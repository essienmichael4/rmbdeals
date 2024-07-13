
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full py-4 border-b absolute z-50'>
        <nav className="container px-4 lg:px-0 mx-auto flex justify-between items-center py-2">
            <h1 className='text-3xl font-bold text-white sm:text-black'>BUY RMB</h1>
            <div className='flex gap-4'>
                <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium text-white bg-black' to={"/buy"}>Buy</Link>
                <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium bg-[#FFDD66]' to={"/login"}>Login</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header
