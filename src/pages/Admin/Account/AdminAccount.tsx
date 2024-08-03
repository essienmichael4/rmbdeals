import { Button } from "@/components/ui/button"
import ChangePassword from "./ChangePassword"
import EditAccountDialog from "./EditAccountDialog"
import useAuth from "@/hooks/useAuth"
import AddAdminUser from "./AddAdminUser"
import { PlusCircle } from "lucide-react"

const AdminAccount = () => {
  const {auth} = useAuth()

  return (
    <>
      <div className='mx-auto container mt-4 mb-16 px-4 lg:px-0'>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-3xl font-semibold mb-2">My Account</h4>
            <p className="text-xs text-gray-400 mb-2">Fill in the details for your order</p>
          </div>
          <div className=" flex items-center gap-2 flex-wrap">
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
            <p className="mt-2 text-gray-500">{auth?.user.email}</p>
            <div className='flex flex-wrap gap-8'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminAccount
