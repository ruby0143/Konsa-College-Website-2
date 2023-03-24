import { createContext, useState } from "react";

export const AuthCheck = createContext();

const AuthContext = ({children}) =>{

    const [authValues, setAuthValues] = useState(null);

    return (
        <AuthCheck.Provider value={{authValues, setAuthValues}}>
            {children}
        </AuthCheck.Provider>
    )
}

export default AuthContext