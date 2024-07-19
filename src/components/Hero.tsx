import { Link } from 'react-router-dom'
import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='h-screen max-h-[800px] flex items-center justify-between sm:flex-col lg:flex-row'>
        <div className='w-full lg:w-[40%] px-4 lg:px-0 h-full sm:h-[50%] sm:mt-36 flex flex-col justify-end lg:justify-center gap-4 pb-12 lg:pb-0'>
            <h2 className=' text-[2.75rem] leading-tight lg:text-left text-[#FFDD66] sm:text-black lg:text-5xl sm:text-center md:text-6xl xl:text-6xl 2xl:text-7xl font-semibold'>RMB Transactions Simplified Here</h2>
            <p className='text-sm lg:text-md sm:text-center lg:text-left text-white sm:text-black'>The fastest and most secure way to fund any alipay, wechat or bank account and a reliable way to pay your Chinese suppliers. Managing all your orders or just transacting  at your own pace.</p>
            <div className='flex gap-4 sm:justify-center lg:justify-start'>
                <Link to={"register"} className='py-1 pl-4 pr-1 rounded-full bg-[#FFDD66] flex items-center gap-4'>Get Started <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white"><span className='text-xl'>&#x27F6;</span></div></Link>
                <Link to={"buy"} className='py-3 px-8 rounded-full bg-black text-white'>Buy</Link>
            </div>
        </div>
        <div className='absolute w-full top-0 left-0 lg:left-20 -z-10 sm:relative sm:rounded-lg lg:rounded-none lg:-right-20 lg:w-[60%] h-full bg-slate-500 flex bg-cover bg-center' style={{backgroundImage:`url(${hero})`}}>
            <div className="overlay w-full h-full bg-black opacity-30 sm:hidden"></div>
        </div>
    </div>
  )
}

export default Hero
