import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const InAppHeader = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = ()=>{
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <header className='w-full sticky top-0 border-b bg-white z-50'>
        <nav className="container px-4 py-8 lg:py-0 lg:px-0 mx-auto flex justify-between items-center">
            <h1 className='text-3xl font-bold sm:text-black'>BUY RMB</h1>
            <div className='hidden lg:flex gap-8 h-full items-center'>
                <NavLink to={"dashboard"} className={`inline-block py-10 text-gray-500 border-b-4 border-white hover:text-[#FFDD66]`}>Dashboard</NavLink>
                <NavLink to={"orders"} className='inline-block py-10 text-gray-500 border-b-4 border-white hover:text-[#FFDD66]'>Orders</NavLink>
                <NavLink to={"account"} className='inline-block py-10 text-gray-500 border-b-4 border-white hover:text-[#FFDD66]'>Account</NavLink>
            </div>
            <div className='flex gap-2 md:gap-4 items-center'>
                <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium text-white bg-black' to={"/"}>Buy</Link>
                <Link className='py-2 px-4 lg:px-6 rounded-full text-md font-medium' to={"/"}>Logout</Link>
                <div className="lg:hidden md:flex flex-col items-center justify-end">
                  <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
                </div>
            </div>
        </nav>
        {mobileDrawerOpen && 
          <div className="fixed right-0 z-20 w-full bg-white p-12 flex flex-col justify-center items-center lg:hidden border-y">
            <ul>
              <li className='py-2 text-center'>
                <NavLink to={"dashboard"} className={`text-gray-500 hover:text-[#FFDD66]`}>Dashboard</NavLink>
              </li>
              <li className='py-2 text-center'>
                <NavLink to={"orders"} className='text-gray-500 hover:text-[#FFDD66]'>Orders</NavLink>
              </li>
              <li className='py-2 text-center'>
                <NavLink to={"account"} className='text-gray-500 hover:text-[#FFDD66]'>Account</NavLink>
              </li>
            </ul>
            
          </div>
        }
    </header>
  )
}

export default InAppHeader
