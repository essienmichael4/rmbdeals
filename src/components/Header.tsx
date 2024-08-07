import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full py-4 border-b absolute z-50'>
        <nav className="container px-4 lg:px-0 mx-auto flex justify-between items-center py-2">
          <Link to={"../rmbdeals"} className='flex gap-2 items-center'>
          <img src={logo} alt="logo" className='w-8 h-8 rounded-full '/>
          <h1 className='text-2xl lg:text-3xl font-bold text-white sm:text-black'>RMB Deals</h1>
          </Link>
            <div className='flex gap-4'>
                <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium text-white bg-black' to={"buy"}>Buy</Link>
                <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium bg-[#FFDD66]' to={"login"}>Login</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header
