const Rate = () => {
  return (
    <div className='mt-20 px-4 lg:px-0'>
        <div className='flex items-start lg:items-center justify-between mb-4 flex-col lg:flex-row'>
            <h3 className='text-3xl lg:text-5xl font-semibold lg:w-2/5'>Current Rates</h3>
        </div>
        <hr className="block" />
        <div className='h-2 w-36 lg:w-96 relative block bg-[#FFDD66] -top-1'></div>
        <div className="flex flex-wrap">
            <div className="py-8 px-2">
                <div className="flex gap-4 flex-col">
                    <p  className="font-bold">Ghana Cedis Rate</p>
                    <p className="text-4xl">0.445</p>
                </div>
            </div>
            <div className="py-8 px-2">
                <div className="flex gap-4 flex-col">
                    <p className="font-bold">Nigerian Naira Rate</p>
                    <p className="text-4xl">0.00445</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rate
