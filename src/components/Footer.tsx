const Footer = () => {
  return (
    <div className='py-8 bg-black mt-20 px-4'>
        <div className='container mx-auto text-white'>
            <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center'>
                <div >
                    <div className='flex'>
                        <h2 className='text-2xl md:text-4xl pr-2 md:pr-4 border-r mr-4'>BUY RMB</h2>
                        <p className="text-xs">We Are The <br />
                        Cutting Edge RMB Transaction Agency</p>
                    </div>
                    <p className='mt-3'>Let’s take your business to the next level</p>
                </div>
                <div className="mt-8 md:mt-0">
                    <p>xxxxxxxxx@xxxxx.com</p>
                    <p>+xxx xxx xxx xxx / +xxx xxx xxx xxx</p>
                </div>
            </div>
            <div className='mt-8 flex items-center justify-between border-t pt-4 flex-col sm:flex-row gap-4'>
                <p className="text-xs">© 2024 XXX Group. All rights reserved</p>
                <div className='flex gap-8 '>
                    <p className="text-xs">Terms Of Use</p>
                    <p className="text-xs">Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
