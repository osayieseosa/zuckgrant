import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})
    useEffect(() => {
        if (localStorage.getItem('token')){
            setAuth(JSON.parse(localStorage.getItem('token')))
        }else{
            localStorage.setItem('token',JSON.stringify({}))
        }
    },[])
    return(
        <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>
    )
}

export default AuthContext