
const Process = () => {
  return (
    <div className='mt-20 px-4'>
        <div className='mb-4'>
            <h3 className='text-3xl lg:text-5xl font-semibold lg:w-2/5'>OUR TRANSACTION JOURNEY</h3>
            <p className="pt-3">How it works</p>
        </div>
        <hr className="block" />
        <div className='h-2 w-96 hidden lg:block relative bg-[#FFDD66] -top-1'></div>

        <div className="mt-12 flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-8">
                <h5 className="font-bold">CHOOSE TRANSACTION</h5>
                <p className="mt-4">Select the transaction type you want to perform (Buy/Sell)</p>
            </div>
            <div className="w-full sm:w-1/2 sm:border-l lg:border-r lg:w-1/3 sm:px-4 py-2 mb-8">
                <h5 className="font-bold">PROVIDE TRANSACTION DETAILS</h5>
                <p className="mt-4">Select the transaction type you want to perform (Buy/Sell)</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 sm:px-4 py-2 mb-8">
                <h5 className="font-bold">SUBMIT ORDER DETAILS</h5>
                <p className="mt-4">Select the transaction type you want to perform (Buy/Sell)</p>
            </div>
            <div className="w-full sm:w-1/2 sm:border-l lg:border-l-0 lg:w-1/3 sm:px-4 py-2 mb-8">
                <h5 className="font-bold">PAYMENT</h5>
                <p className="mt-4">Select the transaction type you want to perform (Buy/Sell)</p>
            </div>
            <div className="w-full sm:w-1/2 lg:border-l lg:border-r lg:w-1/3 sm:px-4 py-2 mb-8">
                <h5 className="font-bold">CONFIRM SUCCESSFUL TRANSACTION</h5>
                <p className="mt-4">Select the transaction type you want to perform (Buy/Sell)</p>
            </div>
            <div className="w-full sm:w-1/2 sm:border-l lg:border-l-0 lg:w-1/3 sm:px-4 py-2 mb-8">
                <h5 className="font-bold">MANAGE ORDERS</h5>
                <p className="mt-4">Select the transaction type you want to perform (Buy/Sell)</p>
            </div>
        </div>
    </div>
  )
}

export default Process
