import { AuthType } from '@/lib/types'
import useAuth from './useAuth'
import axios from 'axios'

const useRefreshToken = () => {
    const {auth, setAuth} = useAuth()

    const refresh = async ()=>{
        const response = await axios.get(`/auth/refresh-token`, {
            headers: {
                'Authorization': `Bearer ${auth?.backendTokens.refreshToken}`
            }
        })

        setAuth(prev =>{
            const auth:AuthType = {
                user:prev!.user, 
                backendTokens: {
                    accessToken: response.data?.accessToken,
                    refreshToken: prev!.backendTokens.refreshToken
                }
            }
            return auth
        })
        
        return response.data.accessToken
    }

    return refresh
}

export default useRefreshToken
