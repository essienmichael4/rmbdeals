const Features = () => {
  return (
    <div className='mt-20 px-4 lg:px-0'>
        <div className='flex items-start lg:items-center justify-between mb-4 flex-col lg:flex-row'>
            <h3 className='text-3xl lg:text-5xl font-semibold lg:w-2/5'>OUR TAILORED FEATURES JUST FOR YOU</h3>
            <p className='lg:w-2/5'>At the heart of our features lies our commitment to make your financial goals into thriving achievements and reality.</p>
        </div>
        <hr className="block" />
        <div className='h-2 w-96 relative hidden lg:block bg-[#FFDD66] -top-1'></div>
        <div className='flex justify-center flex-wrap mt-12'>
            <div className='w-full lg:w-1/2 py-4 lg:p-4'>
                <div className='h-96 rounded-xl bg-black'></div>
            </div>
            <div className='w-full lg:w-1/2 py-4 lg:p-4'>
                <div className='h-96 rounded-xl bg-black'></div>
            </div>
            <div className='w-full lg:w-1/2 py-4 lg:p-4'>
                <div className='h-96 rounded-xl bg-black'></div>
            </div>
            <div className='w-full lg:w-1/2 py-4 lg:p-4'>
                <div className='h-96 rounded-xl bg-black'></div>
            </div>
        </div>
    </div>
  )
}

export default Features
