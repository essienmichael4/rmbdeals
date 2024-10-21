import { Button } from "@/components/ui/button"
import ChangePassword from "./ChangePassword"
import EditAccountDialog from "./EditAccountDialog"
import useAuth from "@/hooks/useAuth"
import AddAdminUser from "./AddAdminUser"
import { Loader2, PlusCircle } from "lucide-react"
import AddAnnouncement from "./AddAnnouncement"
import EditAnnouncement from "./EditAnnouncement"
import { AnnouncementType, PaymentType } from "@/lib/types"
import { axios_instance } from "@/api/axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import useAxiosToken from "@/hooks/useAxiosToken"
import axios from "axios"
import AddPaymentAccount from "./AddPaymentAccount"
import EditPaymentAccount from "./EditPaymentAccount"

const AdminAccount = () => {
  const {auth} = useAuth()
  const axios_instance_token = useAxiosToken()
  const queryClient = useQueryClient()

  const announcement = useQuery<AnnouncementType>({
    queryKey: ["announcements",],
    queryFn: async() => await axios_instance.get(`/announcements`).then(res => res.data)
  })

  const payment = useQuery<PaymentType>({
    queryKey: ["account"],
    queryFn: async() => await axios_instance.get(`/accounts`).then(res => res.data)
  })

  const upadateAnnouncementStatus = async (data:string)=>{
    const response = await axios_instance_token.put(`/announcements/1/show`, {
        status: data
    },)

    return response.data
}

  const {mutate, isPending} = useMutation({
    mutationFn: upadateAnnouncementStatus,
    onSuccess: ()=>{
        toast.success("Announcement added successfully", {
            id: "update-announcement"
        })

        queryClient.invalidateQueries({queryKey: ["announcements"]})

    },onError: (err:any) => {
        if (axios.isAxiosError(err)){
            toast.error(err?.response?.data?.error, {
                id: "update-announcement"
            })
        }else{
            toast.error(`Something went wrong`, {
                id: "update-announcement"
            })
        }
    }
})

const onUpdate = (data:string)=>{
    toast.loading("Updating announcement status...", {
        id: "update-announcement"
    })
    mutate(data)
}

  return (
    <>
      <div className='mx-auto container mt-4 mb-16 px-4 lg:px-0'>
        <div className="flex w-full items-center justify-between">
          <div>
            <h4 className="text-3xl font-semibold mb-2">My Account</h4>
            <p className="text-xs text-gray-400 mb-2">Manage your account settings.</p>
          </div>
          <div className=" flex items-center justify-end gap-2 flex-wrap">
            <EditAccountDialog trigger={
              <Button className="border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white bg-transparent">Edit Profile</Button>} />
            <ChangePassword trigger={
              <Button className="border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white bg-transparent">Change Password</Button>} />
            <AddAdminUser trigger={
              <Button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white bg-transparent"><PlusCircle  className="w-4 h-4 mr-2"/> Add Admin</Button>} />
          </div>
        </div>
        <hr />
        <div className='h-2 w-36 lg:w-96 relative block bg-[#FFDD66] -top-1'></div>
        <div className='bg-white my-4 border border-gray-300 rounded-lg h-full relative'>
          <div className='w-full h-48 bg-gray-200 rounded-lg relative'>
          </div>
          <div className='px-4 pt-4 pb-8'>
            <div className='absolute w-36 h-36 rounded-full bg-white border-4 border-gray-200 top-16 left-4'></div>
            <h3 className="font-bold text-4xl">{auth?.user.name}</h3>
            <p className="mt-2 text-muted-foreground">{auth?.user.email}</p>
            <div className='flex flex-wrap gap-8'></div>
          </div>
        </div>
        <div className="my-8 border flex flex-wrap gap-8 p-4 rounded-2xl">
          <div className="flex-1">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h4 className="text-lg lg:text-3xl">Announcement</h4>
              <div className="flex gap-2">
                {!announcement.data &&
                  <AddAnnouncement trigger={
                    <Button className="text-xs lg:text-sm border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white bg-transparent"><PlusCircle  className="w-4 h-4 mr-2"/> Add Announcement</Button>
                  } />
                }
                {announcement.data && 
                  <EditAnnouncement trigger={
                    <Button className="text-xs lg:text-sm border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white bg-transparent">Edit Announcement</Button>
                  } />
                }
              </div>
            </div>
            <hr />
            <div className='h-2 w-36 lg:w-96 relative block bg-[#FFDD66] -top-1'></div>
            {announcement.data &&
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2">{announcement.data.title}</h3>
                <p className="mb-4 text-muted-foreground">{announcement.data.subject}</p>
                {announcement.data.show === "TRUE" && 
                  <button onClick={ ()=>onUpdate("FALSE")} disabled={isPending} className="py-2 px-4 bg-gray-600 hover:bg-gray-800 rounded-md flex text-white">
                    {!isPending && "Remove Announcement"}
                    {isPending && <Loader2 className='animate-spin' /> }
                  </button>
                }
                {announcement.data.show === "FALSE" && 
                  <button onClick={ ()=>onUpdate("TRUE")} disabled={isPending} className="py-2 px-4 bg-gray-600 hover:bg-gray-800 rounded-md flex text-white">
                    {!isPending && "Show Announcement"}
                    {isPending && <Loader2 className='animate-spin' /> }
                  </button>
                }
              </div>
            }
          </div>
          <div>
            <div className="flex items-center justify-between gap-8 mb-4">
              <h4 className="text-lg lg:text-3xl">Payment Account</h4>
              <div className="flex gap-2">
                {!payment.data &&
                  <AddPaymentAccount trigger={
                    <Button className="text-xs lg:text-sm border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white bg-transparent"><PlusCircle  className="w-4 h-4 mr-2"/> Add Account</Button>
                  } />
                }
                {payment.data && 
                  <EditPaymentAccount trigger={
                    <Button className="text-xs lg:text-sm border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white bg-transparent">Edit Account</Button>
                  } />
                }
              </div>
            </div>
            <hr />
            {payment.data && 
              <div className="pt-4 flex flex-col gap-4">
                <div className='flex flex-col gap-1'>
                    <h4 className='font-bold tex-sm'>Number</h4>
                    <p className='text-xl'>{payment.data.number}</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='font-bold tex-sm'>Merchant Name</h4>
                    <p className='text-xl'>{payment.data.name}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminAccount
