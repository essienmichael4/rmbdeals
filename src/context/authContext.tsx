import { AuthContextType, AuthType } from "@/lib/types";
import { useState, createContext } from "react";

export const AuthContext = createContext<AuthContextType>({
    auth: {
        user:{
            name:"",
            email: ""
        },
        backendTokens: {
            accessToken: "",
            refreshToken: ""
        }
    },
    setAuth: ()=> {}
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [auth, setAuth] = useState<AuthType>()

    return (
            <AuthContext.Provider value={{ auth, setAuth }}>
                {children}
            </AuthContext.Provider>
        )
}

export default AuthProvider
