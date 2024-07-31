import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RequireAuth = ({allowedRole}:{allowedRole:string}) => {
  const {auth} = useAuth()
  const location = useLocation()

  return (
    auth?.user.role === allowedRole ? <Outlet /> :
      auth?.user ? <Navigate to={"../rmbdeals/login"} state={{from: location}} replace /> : 
        <Navigate to='../rmbdeals/login' state={{from: location}} replace/>
  )
}

export default RequireAuth
