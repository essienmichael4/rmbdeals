import { Outlet } from "react-router-dom"
import InAppHeader from "./InAppHeader"

const AdminLayout = () => {
  return (
    <>
        <InAppHeader />
        <div className="container mt-8 mx-auto">
            <Outlet />
        </div>
    </>
  )
}

export default AdminLayout
