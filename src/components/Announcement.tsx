import { axios_instance } from '@/api/axios'
import { AnnouncementType } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'
import { Megaphone, X } from 'lucide-react'
import React, { useState } from 'react'

type Props = {
    setHeight : (height:number)=> void
}

const Announcement = ({setHeight}: Props) => {
    const [show, setShow] = useState(false)

    const announcement = useQuery<AnnouncementType>({
        queryKey: ["announcements",],
        queryFn: async() => await axios_instance.get(`/announcements`).then(res => {
            if(res.data){
                if(res.data.status === "TRUE"){
                    setShow(true)
                }
            }
            return res.data
        })
    })

    const handleShow = ()=>{
        setShow(!show)
      }
    
      const handleElementRef: React.RefCallback<HTMLDivElement> = element =>{
        if(!element) return
    
        setHeight(element.offsetHeight)
      }

  return (

    <div className={`${show ? 'flex' : 'hidden'} relative p-4 items-center justify-center bg-orange-500`} ref={handleElementRef}>
        <div className='relative container mx-auto flex items-center justify-center text-white'>
          <div className="flex-col lg:w-1/2 flex gap-2 items-center justify-center">
            <div className='flex items-center justify-center gap-4'>
              <Megaphone className='text-white'/>
              <h5 className='text-2xl font-bold'>{announcement.data?.title}</h5>
            </div>
            <p>{announcement.data?.title}</p>
            <button onClick={handleShow} className='absolute right-0 top-0'>
              <X />
            </button>
          </div>
        </div>
      </div>
  )
}

export default Announcement
